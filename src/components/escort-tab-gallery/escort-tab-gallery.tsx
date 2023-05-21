import { $, component$, useSignal, useStyles$, useTask$ } from '@builder.io/qwik';
import { qwikify$ } from '@builder.io/qwik-react';
// import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
import { FileIsValidVideo, GetUrlPreview } from '~/utils';
// import { Capitalize, GetScheduleDescription, GetWorkdaysDescription } from '~/utils';
import styles from './escort-tab-gallery.scss?inline';
import ReactImageVideoLightbox from 'react-image-video-viewer';

const QwikReactImageVideoLightbox = qwikify$(ReactImageVideoLightbox as any) as any;

interface EscortTabInfoProps {
    workeruser: WorkerUser;
}

export interface IViewerMediaItem {
    video?: string;
    image?: string;
}

export default component$((props: EscortTabInfoProps) => {
    useStyles$(styles);
    const { workeruser } = props;
    const media = useSignal<IViewerMediaItem[]>([]);
    const notShowImage = useSignal(false);
    const selectedMediaItem = useSignal<IViewerMediaItem>();


    useTask$(() => {
        if (workeruser.media?.length) {
            for (const m of workeruser.media) {
                if (!FileIsValidVideo(m) && !media.value.includes({ image: m })) {
                    media.value.push({ image: GetUrlPreview(m) });
                } else if (!media.value.includes({ video: m })) {
                    media.value.push({ video: m });
                }
            }
        }
    })

    const onMediaContentSelected = $((content: IViewerMediaItem): void => {
        let miliseconds = 500;
        for (const m of media.value.filter(m => m.image)) {
            setTimeout(() => {
                const lazyLoad = new Image();
                lazyLoad.src = GetUrlPreview(m.image as string);
            }, miliseconds);
            miliseconds += 500;
        }
        console.log(content)
        selectedMediaItem.value = content;
    })

    return <> <div class="tab_gallery" style={{ display: media?.value?.length ? 'grid' : 'flex' }}>
        {
            media?.value?.map((m, i) => {
                return <div key={i} class="image" onClick$={() => onMediaContentSelected(m)}
                    style={{ background: notShowImage.value ? undefined : (m.image ? "url('" + GetUrlPreview(m.image) + "')" : 'initial') }}>
                    {
                        m.video && !notShowImage.value &&
                        <>
                            <img alt="Play" class='video-play' src="/assets/images/play.png" />
                            <video class="video" preload="metadata" poster={GetUrlPreview(m.video)}>
                                <source src="media.video + '#t=0.1'" type="video/webm" />
                                <source src="media.video + '#t=0.1'" type="video/ogg" />
                                <source src="media.video + '#t=0.1'" type="video/mp4" />
                                <source src="media.video + '#t=0.1'" type="video/3gp" />
                            </video>
                        </>
                    }
                </div>
            })
        }
        {
            !workeruser.media?.length &&
            <div class="empty_gallery">
                <p class="label" >Profile.Gallery.Empty</p>
            </div>
        }

    </div >
        {
            !!selectedMediaItem.value &&
            <QwikReactImageVideoLightbox
                data={media.value.map(m => (
                    {
                        url: m.image ?? m.video,
                        type: m.image ? 'photo' : 'video',
                        poster: GetUrlPreview(m.video as string)
                    }
                ))}
                startIndex={media.value.findIndex(m => m === selectedMediaItem.value)}
                showResourceCount={true}
                onCloseCallback={$(() => selectedMediaItem.value = undefined)}
            />
        }

    </>
});

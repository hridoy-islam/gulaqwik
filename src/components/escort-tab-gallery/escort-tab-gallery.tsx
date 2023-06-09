import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik';
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
    const media: IViewerMediaItem[] = [];
    const notShowImage = useSignal(false);
    const selectedMediaItem = useSignal<IViewerMediaItem>();

    if (workeruser.media?.length) {
        for (const m of workeruser.media) {
            if (!FileIsValidVideo(m) && !media.includes({ image: m })) {
                media.push({ image: GetUrlPreview(m) });
            } else if (!media.includes({ video: m })) {
                media.push({ video: m });
            }
        }
    }

    const onMediaContentSelected = $((content: IViewerMediaItem): void => {
        let miliseconds = 500;
        for (const m of media.filter(m => m.image)) {
            setTimeout(() => {
                const lazyLoad = new Image();
                lazyLoad.src = GetUrlPreview(m.image as string);
            }, miliseconds);
            miliseconds += 500;
        }
        selectedMediaItem.value = content;
    })

    return <> <div class="tab_gallery" style={{ display: media?.length ? 'grid' : 'flex' }}>
        {
            media?.map((m, i) => {
                return <div key={i} class="image" onClick$={() => onMediaContentSelected(m)}
                    style={{ background: notShowImage.value ? undefined : (m.image ? "url('" + GetUrlPreview(m.image) + "')" : 'initial') }}>
                    {
                        m.video && !notShowImage.value &&
                        <>
                            <img alt="Play" class='video-play' src="/assets/images/play.png" />
                            <video class="video" preload="metadata" poster={GetUrlPreview(m.video)}>
                                <source src={m.video + "#t=0.1"} type="video/webm" />
                                <source src={m.video + "#t=0.1"} type="video/ogg" />
                                <source src={m.video + "#t=0.1"} type="video/mp4" />
                                <source src={m.video + "#t=0.1"} type="video/3gp" />
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
                data={media.map(m => (
                    {
                        url: m.image ?? m.video,
                        type: m.image ? 'photo' : 'video',
                        poster: GetUrlPreview(m.video as string),
                    }
                ))}
                startIndex={media.findIndex(m => selectedMediaItem.value?.image && m.image === selectedMediaItem.value?.image || 
                    selectedMediaItem.value?.video && m.video === selectedMediaItem.value?.video)}
                showResourceCount={true}
                onCloseCallback={$(() => selectedMediaItem.value = undefined)}
            />
        }

    </>
});

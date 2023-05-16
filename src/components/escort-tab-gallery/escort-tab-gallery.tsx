import { $, component$, useSignal, useStyles$, useTask$, useVisibleTask$ } from '@builder.io/qwik';
// import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
import { FileIsValidVideo, GetUrlPreview } from '~/utils';
// import { Capitalize, GetScheduleDescription, GetWorkdaysDescription } from '~/utils';
import styles from './escort-tab-gallery.scss?inline';

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

        //   this._viewerService.closeViewer();
        //   this._viewerService.registerMediaItems(media);
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
        // this._viewerService.openViewer(content);
        // this.showViewer = true;
    })

    return <div class="tab_gallery" style={{ display: media?.value?.length ? 'grid' : 'flex' }}>
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

    // <app * ngIf="showViewer" ></app - viewer >
});

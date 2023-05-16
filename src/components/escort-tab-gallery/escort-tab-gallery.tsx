import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
import { Capitalize, GetScheduleDescription, GetWorkdaysDescription } from '~/utils';
import styles from './escort-tab-gallery.scss?inline';

interface EscortTabInfoProps {
    workeruser?: WorkerUser;
}

export default component$((props: EscortTabInfoProps) => {
    useStyles$(styles);
    const { workeruser } = props;

    return <div class="tab_gallery" style="display: grid;">
        <div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-ed556e98-c747-452e-992e-5f47ce6f9cdb785870-preview.png&quot;);">


        </div><div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-1e5ea5a5-f173-4520-bb48-dc53af1ee143254891-preview.png&quot;);">


        </div><div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-b9f54283-8354-47cb-bc3d-04d68e1c4a86412441-preview.png&quot;);">


        </div><div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-f053573e-f8f3-46fc-9558-dd4fc0b9290f693370-preview.png&quot;);">


        </div><div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-9cc31783-b1ba-46f0-834a-95b089bee5f0631571-preview.png&quot;);">


        </div><div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-59629b2d-1e0b-4c93-9cf1-e84f52aed6b8202023-preview.png&quot;);">


        </div><div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-08e601b7-b781-45eb-bfff-6738deff8749797892-preview.png&quot;);">


        </div><div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-fcc2be59-e7ff-41f7-a45d-754624a881df680753-preview.png&quot;);">


        </div><div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-c53c907f-c0eb-4bc7-b251-dae7fd79deca650841-preview.png&quot;);">


        </div><div class="image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-04846909-3709-4c83-b01b-669b9949669a433625-preview.png&quot;);">


        </div>

    </div>
});

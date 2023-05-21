import { component$, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { WorkerUser } from '~/api/workeruser';
import { Capitalize, GetScheduleDescription, GetUrlPreview, GetWorkdaysDescription } from '~/utils';
import styles from './catalogue-card.scss?inline';

interface CatalogueCardProps {
  workeruser: WorkerUser;
}

export default component$((props: CatalogueCardProps) => {
  useStyles$(styles);
  const { workeruser } = props;
  const imgSrc = useSignal('/assets/images/default_user_profile.png');
  const cardType = (String(workeruser.billingType)?.toLocaleLowerCase() ?? 'elite') + '_card';
  const outputRef = useSignal<Element>();

  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      () => {
        const img = new Image()
        img.src = workeruser.profileImg;
        img.onload = () => imgSrc.value = workeruser.profileImg;
        observer?.disconnect();
      });
    observer.observe(outputRef?.value as Element);
    return () => observer?.disconnect();
  });

  const description = (workeruser.currentNeighborhood ? workeruser.currentNeighborhood : workeruser.currentProvince) +
    (GetWorkdaysDescription(workeruser) ? ' - ' + GetWorkdaysDescription(workeruser) : '') +
    (GetScheduleDescription(workeruser) ? (' - ' + GetScheduleDescription(workeruser)) : '') +
    (workeruser.shortDescription && workeruser.billingType !== 'Premium' ? ' - ' + Capitalize(workeruser.shortDescription) : '');

  return <div ref={outputRef} class={"card catalogue_card " + cardType} title={workeruser.name} style={"background: url(\"" + GetUrlPreview(imgSrc.value) + "\");"} >
    <Link class="card_clickable" href={"/escort/" + workeruser.slug} target="_self" aria-label={"Escort " + workeruser.name}>Escort {workeruser.name}</Link>
    <Link class="right_clickable" href={"/escort/" + workeruser.slug} target="_self" aria-label={"Escort " + workeruser.name}>Escort {workeruser.name}</Link>
    <div class="card_bottom">
      <p class="name_label">{workeruser.name}</p>
      <p class="description">{description}</p>
    </div>
  </div >
});

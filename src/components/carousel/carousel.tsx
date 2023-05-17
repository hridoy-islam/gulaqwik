import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { GetUrlPreview } from '~/utils';
import styles from './carousel.scss?inline';

export interface ICarouselCard {
  id: string;
  slug: string;
  image: string;
  name: string;
  description: string;
  type: string;
  route: string;
}

interface CarouselProps {
  cards: ICarouselCard[];
}

export default component$((props: CarouselProps) => {
  useStyles$(styles);
  const { cards } = props;
  const notShowImage = false;

  return <div class="card_output">
    {
      cards?.map((c, i) => (
        <Link
          key={i}
          class={"featured_card " + (notShowImage || !c.image ? "no_image_background" : "")}
          style={{ background: notShowImage ? undefined : "url('" + GetUrlPreview(c.image) + "')" }}
          href={c.route}
        >
          <div class="type_container">
            <p class="type_label">{c.type}</p>
          </div>
          <p class="card_name" >{c.name}</p>
          <p class="card_description"></p>
        </Link >
      ))

    }
  </div >
});

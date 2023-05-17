import { component$, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { gethWorkerUserByIdOrSlug, searchWorkerUsers } from '~/api/workeruser';
import type { ICarouselCard } from '~/components/carousel/carousel';
import Carousel from '~/components/carousel/carousel';
import EscortMainProfile from '~/components/escort-main-profile/escort-main-profile';
import EscortTabGallery from '~/components/escort-tab-gallery/escort-tab-gallery';
import EscortTabInfo from '~/components/escort-tab-info/escort-tab-info';
import { GetUrlPreview } from '~/utils';
import styles from './escort.scss?inline';

export const useWorkerUser = routeLoader$(async (requestEvent) => {
  const idOrSlug = requestEvent.params.slug;
  const workerUser = await gethWorkerUserByIdOrSlug(idOrSlug);
  const search = {
    billingType: "Elite",
    sex: workerUser.sex,
    skip: 0,
    limit: 6
  }
  return {
    workerUser,
    relatedWorkerUsers: (await searchWorkerUsers(search).catch()).results?.filter(w => w.id !== workerUser.id)
  };
});

export const head: DocumentHead = ({ resolveValue }) => {
  const serverData = resolveValue(useWorkerUser);
  const title = serverData.workerUser ? 'Escort ' + serverData.workerUser.name + ' ' + serverData.workerUser.phone + ' ' +
    serverData.workerUser.currentProvince + ' ' + serverData.workerUser.currentNeighborhood : 'Escort no encontrado';
  const description = serverData.workerUser ? serverData.workerUser.description.substring(0, 300) : '';
  return {
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
    ],
  };
};

export default component$(() => {
  useStyles$(styles);
  const serverData = useWorkerUser();
  const workerUser = serverData.value.workerUser;
  const defaultBackgroundImg = '/assets/images/profile_default.png';
  const backgroundImg = useSignal(GetUrlPreview(workerUser?.coverPageMobile) ?? defaultBackgroundImg);
  const relatedWorkerUsers: ICarouselCard[] = serverData.value.relatedWorkerUsers.map((w) => ({
    id: w.id,
    name: w.name,
    image: w.profileImg,
    slug: w.slug,
    description: w.description,
    type: w.billingType,
    route: '/escort/' + w.slug
  }));

  useVisibleTask$(() => {
    backgroundImg.value = (workerUser?.coverPageMobile && window?.innerHeight > window?.innerWidth) ? GetUrlPreview(workerUser?.coverPageMobile) : workerUser?.coverPagePC ?? defaultBackgroundImg;
    const onResize = () => {
      backgroundImg.value = (workerUser?.coverPageMobile && window?.innerHeight > window?.innerWidth) ? GetUrlPreview(workerUser?.coverPageMobile) : workerUser?.coverPagePC ?? defaultBackgroundImg;
    }
    window.addEventListener('resize', onResize, true);
    return () => {
      window.removeEventListener('resize', onResize, true);
    }
  });

  return (
    <><section class="profile_section">
      <div class="background_image" style={{ background: "url('" + backgroundImg.value + "')" }}></div>
      <div class="profile_content">
        <EscortMainProfile workeruser={workerUser} />


        <div id="tab_container" class="tab_container" style="padding-bottom: 65px;">
          <div class="escort_tab_output">
            <gula-escort-tab> <div class="tab active">
              <img alt="TabIcon" class="icon" src="/assets/icons/gallery_w.svg" />
            </div>
            </gula-escort-tab><gula-escort-tab  ><div class="tab">
              <img alt="TabIcon" class="icon" src="/assets/icons/wall_w2.svg" />
            </div>
            </gula-escort-tab><gula-escort-tab  ><div class="tab">
              <img alt="TabIcon" class="icon" src="/assets/icons/reviews_w.svg" />
            </div>
            </gula-escort-tab>
            <span class="underline" style="width: calc(33.3333%); transform: translateX(calc(0%));">
            </span>
          </div>
          <div class="tab_content">
            <EscortTabInfo workeruser={workerUser} />
            <EscortTabGallery workeruser={workerUser} />
            <gula-tab-reviews style="display: none;"><div class="reviews_container">
              <div class="aligner">
                <div class="form_container">
                  <textarea maxLength={500} class="textarea ng-untouched ng-pristine ng-valid" placeholder="Escribe aquí..."></textarea>
                  <button class="button"><img alt="Right" src="/assets/icons/right_arrow_w.svg" class="icon" /></button>
                </div>

                <div class="stars_container">
                  <p class="stars_label">Puntaje:</p>
                  <gula-rating-stars  ><div class="stars_container">
                    <div class="star_button">
                      <span >☆</span>
                      <span >☆</span>
                      <span >☆</span>
                      <span >☆</span>
                      <span >☆</span>
                    </div>
                  </div>
                  </gula-rating-stars>
                </div>

                <div class="reviews_output">
                  <gula-review id="641b7626f6ad8119418d89fa"><div class="review_container">

                    <div class="score_container">
                      <img alt="Bookmark" src="/assets/icons/bookmark_fill_w2.svg" class="icon" />
                      <p class="score">5.0</p>
                    </div>

                    <div class="data_container">
                      <img alt="ProfileImage" class="profile_img" src="/assets/images/default_user_profile.png" />
                      <div class="text_container">
                        <div class="username_container">
                          <p class="username">Timonero128</p>
                          <p class="date">2 meses</p>
                        </div>
                        <p class="description">Tamara es una escort uruguaya que te cautivará al instante con su belleza y su dulce sonrisa. Con su delicadeza y sensualidad, te llevará a un mundo de placer absoluto. Su habilidad para hacerte sentir cómodo y relajado es impresionante, dejándote sin preocupaciones. No te arrepentirás de su servicio completo y su disposición a cumplir todas tus fantasías más íntimas. Definitivamente la recomiendo.</p>

                      </div>
                    </div>

                    <div class="actions">



                    </div>
                  </div>

                  </gula-review><gula-review id="63d4d6caba9e4b1dee72682a"><div class="review_container alternate">

                    <div class="score_container">
                      <img alt="Bookmark" src="/assets/icons/bookmark_fill_w2.svg" class="icon" />
                      <p class="score">5.0</p>
                    </div>

                    <div class="data_container">
                      <img alt="ProfileImage" class="profile_img" src="/assets/images/default_user_profile.png" />
                      <div class="text_container">
                        <div class="username_container">
                          <p class="username">Cerati siempre</p>
                          <p class="date">4 meses</p>
                        </div>
                        <p class="description">Muy todo, súper en todo lo que sabe hacer, increíble hasta tragos te hace,me,gusta destacar cuando se nota que sabe lo que hace y no escatima en qué quedes siempre de conforme para arriba. Confirmo</p>

                      </div>
                    </div>

                    <div class="actions">



                    </div>
                  </div>

                  </gula-review>
                </div>

              </div>
            </div>
            </gula-tab-reviews>
          </div>
        </div>
      </div>
    </section>
      <h3 class="related_profiles">
        Escorts relacionados
      </h3>
      <Carousel cards={relatedWorkerUsers} />
      <div class="bottom_section">
        <h3 >Encuentra escorts en Uruguay cerca de ti</h3>
        <div class="links_container">
          <a class="button" href="/mujeres/montevideo">Montevideo</a>
          <a class="button" href="/mujeres/punta-del-este">Punta del Este</a>
          <a class="button" href="/mujeres/maldonado">Maldonado</a>
          <a class="button" href="/mujeres/canelones">Canelones</a>
        </div>
        <h3 >Prostitutas en Uruguay</h3>
        <p  >Somos la primera Red Social Erótica de Chicas Escort Uruguay, Gula es un espacio de publicidad donde mujeres, mujeres trans y hombres, ofrecen sus diferentes servicios ( prostitutas, acompañantes, masajistas, gigolo etc).</p>
        <p  >En GULA podrás encontrar todo lo que buscas en un espacio seguro, discreto y gratuito, queremos ayudarte en tu recorrido para que esta experiencia sea lo más sencilla y ante cualquier duda o problema que tengas no dudes en contactarnos, siempre encontrarás una respuesta rápida de nuestro equipo de asesores. GULA escort Uruguay es una comunidad, anímate a vivir una experiencia maravillosa donde las chicas mas hot están esperando para cumplir todas tus fantasías.</p>
      </div>
    </>
  );
});

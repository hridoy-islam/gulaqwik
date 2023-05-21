import { component$, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { IWallState } from '~/api/states';
import { gethWorkerUserByIdOrSlug, searchWorkerUsers } from '~/api/workeruser';
import type { ICarouselCard } from '~/components/carousel/carousel';
import Carousel from '~/components/carousel/carousel';
import EscortMainProfile from '~/components/escort-main-profile/escort-main-profile';
import EscortTabGallery from '~/components/escort-tab-gallery/escort-tab-gallery';
import EscortTabInfo from '~/components/escort-tab-info/escort-tab-info';
import EscortTabReviews from '~/components/escort-tab-reviews/escort-tab-reviews';
import Wall from '~/components/wall/wall';
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
  const selectedTab = useSignal(1);
  const relatedWorkerUsers: ICarouselCard[] = serverData.value.relatedWorkerUsers.map((w) => ({
    id: w.id,
    name: w.name,
    image: w.profileImg,
    slug: w.slug,
    description: w.description,
    type: w.billingType,
    route: '/escort/' + w.slug
  }));
  const cataloguePath = workerUser?.sex === 'male' ? '/hombres/' : workerUser?.sex === 'trans' ? '/trans-travestis/' : '/mujeres/';
  const states = workerUser?.states.map((s) => {
    return {
      id: s.id,
      userId: workerUser.id,
      userType: workerUser.type,
      userSlug: workerUser.slug,
      userSex: workerUser.sex,
      profileImg: workerUser.profileImg,
      username: workerUser.name,
      description: s.text,
      createdAt: s.createdAt,
      media: s.media,
      likes: s.likeIt,
      commentsData: {
        idState: s.id,
        cretedById: s.id,
        customerLogged: false,
        comments: s.comments.map((c: any) => {
          return {
            id: c.id,
            userId: c.userId,
            message: c.text,
            username: c.username,
            profileImg: c.profileImg,
            createdAt: c.createdAt,
            responses: c.responses,
          };
        }),
      },
    } as IWallState;
  });

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
            <div class={"tab " + (selectedTab.value === 1 ? "active" : "")}>
              <img height={16} width={45} alt="TabIcon" class="icon" src="/assets/icons/gallery_w.svg" onClick$={() => selectedTab.value = 1} />
            </div>
            <div class={"tab " + (selectedTab.value === 2 ? "active" : "")}>
              <img height={16} width={45} alt="TabIcon" class="icon" src="/assets/icons/wall_w2.svg" onClick$={() => selectedTab.value = 2} />
            </div>
            <div class={"tab " + (selectedTab.value === 3 ? "active" : "")}>
              <img height={16} width={45} alt="TabIcon" class="icon" src="/assets/icons/reviews_w.svg" onClick$={() => selectedTab.value = 3} />
            </div>
            <span class="underline" style={{ width: "calc(33.3333%)", transform: "translateX(calc(" + (selectedTab.value === 1 ? 0 : selectedTab.value === 2 ? 100 : 200) + "%))" }}>
            </span>
          </div>
          <div class="tab_content">
            {
              selectedTab.value === 1 &&
              <>
                <EscortTabInfo workeruser={workerUser} />
                <EscortTabGallery workeruser={workerUser} />
              </>
            }
            {
              selectedTab.value === 2 &&
              <Wall states={states} sex={workerUser?.sex} showSeeMoreStatesBtn={true} />
            }
            {
              selectedTab.value === 3 &&
              <EscortTabReviews workeruser={workerUser} />
            }
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
          <Link class="button" href={cataloguePath + "montevideo"}>Montevideo</Link>
          <a class="button" href={cataloguePath + "punta-del-este"}>Punta del Este</a>
          <a class="button" href={cataloguePath + "maldonado"}>Maldonado</a>
          <a class="button" href={cataloguePath + "canelones"}>Canelones</a>
        </div>
        <h3 >Prostitutas en Uruguay</h3>
        <p  >Somos la primera Red Social Erótica de Chicas Escort Uruguay, Gula es un espacio de publicidad donde mujeres, mujeres trans y hombres, ofrecen sus diferentes servicios ( prostitutas, acompañantes, masajistas, gigolo etc).</p>
        <p  >En GULA podrás encontrar todo lo que buscas en un espacio seguro, discreto y gratuito, queremos ayudarte en tu recorrido para que esta experiencia sea lo más sencilla y ante cualquier duda o problema que tengas no dudes en contactarnos, siempre encontrarás una respuesta rápida de nuestro equipo de asesores. GULA escort Uruguay es una comunidad, anímate a vivir una experiencia maravillosa donde las chicas mas hot están esperando para cumplir todas tus fantasías.</p>
      </div>
    </>
  );
});

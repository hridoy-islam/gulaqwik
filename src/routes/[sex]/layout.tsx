import { component$, useStyles$, Resource, useVisibleTask$, useSignal } from '@builder.io/qwik';
// import { useLocation } from '@builder.io/qwik-city';
import { searchWorkerUsers } from '~/api/workeruser';
import CatalogueCard from '~/components/catalogue-card/catalogue-card';
import type { DocumentHead} from '@builder.io/qwik-city';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import country from '~/uruguay';
// import Search from '~/components/search/search';
import { provinces_female } from '~/env/provinces_female';
import { provinces_male } from '~/env/provinces_male';
import { provinces_trans } from '~/env/provinces_trans';

import styles from './sex.scss?inline';
import { Capitalize, RecursiveMerge } from '~/utils';
const limit = 500;

const getWorkerUsers = async (billingType: string | undefined, sex: string, province: string, skip = 0, limit = 50) => {
  const pDelEste = "punta-del-este";
  const search = {
    billingType: billingType,
    // eslint-disable-next-line no-prototype-builtins
    province: !country.provinces?.hasOwnProperty(Capitalize(province)) || province === pDelEste ? undefined : Capitalize(province),
    neighborhood: province === pDelEste ? "Punta del Este" : undefined,
    sex,
    skip,
    limit
  }
  const workerusers = await searchWorkerUsers(search);
  workerusers.results = workerusers.results.sort((a, b) => a.billingType === b.billingType ? a.priorization - b.priorization : a.billingType === 'Elite' ? -1 : b.billingType === 'Elite' ? 1 : a.billingType === 'Vip' ? -1 : 0)
  return { sex, province, skip, ...workerusers  };
}

export const useWorkerUsers = routeLoader$(async (requestEvent) => {
  let sex = requestEvent.params.sex;
  const province = requestEvent.params.province;
  sex = sex === 'hombres' ? 'male' : sex === 'trans-travestis' ? 'trans' : 'female';
  return getWorkerUsers('Elite', sex, province);
});

export const head: DocumentHead = ({params}) => {
  const seo = params.sex === 'hombres' ? provinces_male : params.sex === 'trans-travestis' ? provinces_trans : provinces_female;
  const province = params.province;
  return {
    title: province ? (seo.provinces[Capitalize(province) as keyof {}] as any)?.seoData.title ?? seo.seoData.title : seo.seoData.title,
    meta: [
      {
        name: 'description',
        content: province ? (seo.provinces[Capitalize(province) as keyof {}] as any)?.seoData.metaDescription ?? seo.seoData.metametaDescription : seo.seoData.metametaDescription,
      },
    ],
  };
};

export default component$(() => {
  useStyles$(styles);
  const loc = useLocation();
  const workerUsersLoader = useWorkerUsers();
  const workerUsers = useSignal(workerUsersLoader.value);
  const loading = useSignal(false);
  const firstScrollLoading = useSignal(true);
  let keyword = 'Escorts';
  if (workerUsers.value.sex === 'trans') {
    keyword = 'Travestis';
  } else if (workerUsers.value.sex === 'female') {
    keyword = 'Chicas Escort';
  }

  const mergeProvinces = (obj1: any, obj2: any, obj3: any) => {
    let result = RecursiveMerge(obj1, obj2);
    result = RecursiveMerge(result, obj3);
    return result;
  }

  const provinces = mergeProvinces(provinces_male, provinces_female, provinces_trans);
  const seoData: { [key: string]: any } = provinces.seoData;

  useVisibleTask$(() => {
    const onScroll = async () => {
      const search = (window.scrollY * 5) >= document.getElementsByTagName('main')?.[0]?.clientHeight;
      if (search && !loading.value) {
        loading.value = true;
        const skip = firstScrollLoading.value ? 0 : workerUsers.value.skip + limit;
        const newData = await getWorkerUsers(undefined, workerUsers.value.sex, workerUsers.value.province, skip, limit).catch().finally(() => loading.value = false);
        if (newData.results?.length) {
          workerUsers.value = {
            ...newData,
            results: firstScrollLoading.value ? newData.results : workerUsers.value.results.concat(newData.results)
          }
        } else {
          document.removeEventListener('scroll', onScroll);
        }
        firstScrollLoading.value = false;
      }
    }
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  });

  const catalogueSexPath = '/' + loc?.url?.pathname?.split('/')?.filter(u => u)?.[0];

  return <div class="catalogue_section">
    {/* <Search /> */}
    <div></div>
    <div class="catalogue_output">
      <div>
        <h1>{seoData?.h1}</h1>
      </div>

      <div class="card_output">
        <section class="card_output">
          <Resource value={workerUsers} onResolved={(response): any => {
            return response?.results?.map((workeruser, i: number) => {
              return <CatalogueCard key={i} workeruser={workeruser} />;
            });
          }} />

        </section>
        <div class="subtitles_container">
          {!!seoData?.h2a && <h2>{seoData.h2a}</h2>}
          {(!!seoData?.pa || !!seoData?.metaTags?.[0]?.content) && <p>{seoData.pa ? seoData.pa : seoData?.metaTags?.[0]?.content}</p>}
          {!!seoData?.h2b && <h2>{seoData.h2b}</h2>}
          {!!seoData?.pb && <p>{seoData.pb}</p>}
          {!!seoData?.h2c && <h2>{seoData.h2c}</h2>}
          {!!seoData?.pc && <p>{seoData.pc}</p>}

          <h2>Escorts en Uruguay cerca de ti</h2>
          <div class="links_container">
            <a class="button" href={catalogueSexPath + "/montevideo"}>{keyword} Montevideo</a>
            <a class="button" href={catalogueSexPath + "/punta-del-este"}>{keyword} Punta del Este</a>
            <a class="button" href={catalogueSexPath + "/maldonado"} > {keyword} Maldonado</a >
            <a class="button" href={catalogueSexPath + "/canelones"} > {keyword} Canelones</a  >
          </div >
          <br />
          <details>
            <summary>¿Cuál es el nivel de discreción que ofrecen las escorts en Uruguay?</summary>
            <p>Las escort de Uruguay ofrecen un alto nivel de discreción a sus clientes. Se aseguran de que nuestras citas
              sean completamente discretas.</p>
          </details>
          <details>
            <summary>¿Hay escort independientes?</summary>
            <p>Todas nuestras escort son independientes de la plataforma, no intervenimos entre usted y la escort en
              ningún momento, tan solo ofrecemos nuestra plataforma como punto de encuentro online, por lo que todo lo que
              pase entre usted y las mujeres escort queda entre ustedes. Nosotros no intermediamos.</p>
          </details>
          <details>
            <summary>¿Es posible contratar servicios específicos o personalizados a la experiencia que desee el usuario?
            </summary>
            <p>Sí, es posible contratar servicios específicos y personalizados a la experiencia que desee el usuario. En
              Gula podrá encontrar una gran variedad de chicas de Uruguay que ofrecen diferentes tipos de servicios.</p>
          </details>
          <details>
            <summary>¿En Gula puedo contratar servicios de acompañamiento para eventos sociales o viajes de negocios?
            </summary>
            <p>Sí, además de los servicios sexuales, también ofrecemos servicios de acompañamiento para eventos sociales o
              viajes de negocios. Las escorts de Uruguay que se anuncian en Gula son elegantes, sofisticadas y maduras y
              saben cómo comportarse en cualquier situación social, lo que las convierte en la compañía perfecta para
              cualquier evento o situación de negocios.</p>
          </details>
        </div>
      </div >
    </div >
  </div >;
});

import { component$, useStyles$, useResource$, Resource } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { searchWorkerUsers } from '~/api/workeruser';
import CatalogueCard from '~/components/catalogue-card/catalogue-card';
import Search from '~/components/search/search';

import styles from './sex.scss?inline';


export default component$(() => {
  useStyles$(styles);
  const search = {
    billingType: "Elite",
    sex: "female",
    skip: 0,
    limit: 40
  }
  const workerUsers = useResource$(() => searchWorkerUsers(search));

  const loc = useLocation();
  return <div class="catalogue_section">
    {/* <Search /> */}
    <div>Search</div>
    {/* <div>Catalogo {loc.params.sex}!</div> */}
    <div class="catalogue_output">
      <div>
        <h1>Escort Uruguay: Chicas escorts, prostitutas y putas</h1>
      </div>

      <div class="card_output">
        <section class="card_output">
          <Resource value={workerUsers} onResolved={(response): any => {
            return response.results?.map((workeruser, i: number) => {
              return <CatalogueCard key={i} workeruser={workeruser} />;
            });
          }}
          onPending={() => {
            return <span>Loading</span>
          }} />

        </section>
        <div class="subtitles_container">
          <h2 >Encuentre las mejores Chicas Escort de Uruguay</h2>
          <p >¿Estás buscando una experiencia única y excitante con chicas en Uruguay? ¿Quieres disfrutar de la compañía de una hermosa mujer que satisfaga todas tus fantasías sexuales? ¡Tenemos la solución perfecta para ti! En nuestra agencia de chicas escort, encontrarás las mejores mujeres para ti. Nuestras chicas ofrecen servicios sexuales de alta calidad y te brindarán una experiencia inolvidable. Desde las más dulces y tiernas hasta las más ardientes y atrevidas, nuestras escorts están dispuestas a cumplir todas tus fantasías. No te arrepentirás de elegir a nuestras chicas escort como tus compañeras de placer en Uruguay. ¡Ven y experimenta lo mejor de lo mejor!</p>
          <h2 >Servicios sexuales exclusivos con Prostitutas en Uruguay hermosa</h2>
          <p >En Gula encontrarás una gran variedad de hermosas chicas escort en Uruguay dispuestas a hacer realidad tus fantasías más atrevidas y satisfacer todos tus deseos sexuales. Los servicios sexuales exclusivos que estas mujeres ofrecen te llevarán a un mundo de placer inimaginable. Desde excitantes masajes eróticos hasta apasionados encuentros sexuales llenos de pasión, estas chicas te ofrecen una gama de opciones para que elijas la que mejor se adapte a tus necesidades: sexo oral con corrida facial, sexo en pareja, masajes y más. Con su habilidad y experiencia, complacerán todas tus fantasías, en especial aquellos que has querido experimentar, pero no has tenido la oportunidad.</p>
          <h2 >¡Cumple tu fantasía hoy mismo! Putas en uruguay discretas y con ganas de sexo</h2>
          <p >Estas prostitutas en Uruguay son expertas en el arte de la seducción, así que prepárate para una experiencia intensa e inolvidable. Sus curvas magníficas y su piel de seda te cautivarán desde el primer momento. Si te interesa un ambiente más íntimo, podrás disfrutar del trato exclusivo de una acompañante que sabrá cómo hacerte disfrutar. Con estas hermosas prostitutas en Uruguay podrás disfrutar de una experiencia inolvidable y satisfactoria mientras experimentas nuevas sensaciones que te excitaran durante todo el encuentro. No dudes en contactarlas para ser testigo de una experiencia sin igual.</p>
          <h2 >Escorts en Uruguay cerca de ti</h2>
          <div class="links_container">
            <a class="button" href="escorts/mujeres/montevideo">Chicas Escort Montevideo</a>
            <a class="button" href="escorts/mujeres/punta-del-este">Chicas Escort Punta del Este</a>
            <a class="button" href="escorts/mujeres/maldonado">Chicas Escort Maldonado</a>
            <a class="button" href="escorts/mujeres/canelones">Chicas Escort Canelones</a>
          </div>
          <br />
          <details >
            <summary >¿Cuál es el nivel de discreción que ofrecen las escorts en Uruguay?</summary>
            <p >Las escort de Uruguay ofrecen un alto nivel de discreción a sus clientes. Se aseguran de que nuestras citas
              sean completamente discretas.</p>
          </details>
          <details >
            <summary >¿Hay escort independientes?</summary>
            <p >Todas nuestras escort son independientes de la plataforma, no intervenimos entre usted y la escort en
              ningún momento, tan solo ofrecemos nuestra plataforma como punto de encuentro online, por lo que todo lo que
              pase entre usted y las mujeres escort queda entre ustedes. Nosotros no intermediamos.</p>
          </details>
          <details >
            <summary >¿Es posible contratar servicios específicos o personalizados a la experiencia que desee el usuario?
            </summary>
            <p >Sí, es posible contratar servicios específicos y personalizados a la experiencia que desee el usuario. En
              Gula podrá encontrar una gran variedad de chicas de Uruguay que ofrecen diferentes tipos de servicios.</p>
          </details>
          <details >
            <summary >¿En Gula puedo contratar servicios de acompañamiento para eventos sociales o viajes de negocios?
            </summary>
            <p >Sí, además de los servicios sexuales, también ofrecemos servicios de acompañamiento para eventos sociales o
              viajes de negocios. Las escorts de Uruguay que se anuncian en Gula son elegantes, sofisticadas y maduras y
              saben cómo comportarse en cualquier situación social, lo que las convierte en la compañía perfecta para
              cualquier evento o situación de negocios.</p>
          </details>
        </div>
      </div>
    </div>
  </div>;
});
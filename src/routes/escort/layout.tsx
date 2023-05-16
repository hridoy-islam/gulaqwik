import { component$, useStyles$ } from '@builder.io/qwik';
import EscortMainProfile from '~/components/escort-main-profile/escort-main-profile';
import EscortTabGallery from '~/components/escort-tab-gallery/escort-tab-gallery';
import EscortTabInfo from '~/components/escort-tab-info/escort-tab-info';
import styles from './escort.scss?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <><section class="profile_section">
      <div class="background_image" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-89682c09-605f-452f-af8e-a3c4106442a0663981-preview.png&quot;);"></div>
      <div class="profile_content">
        <EscortMainProfile />


        <div id="tab_container" class="tab_container" style="padding-bottom: 65px;">
          <div class="escort_tab_output">
            <gula-escort-tab  ><div class="tab active">
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
            <EscortTabInfo />
            <EscortTabGallery />

            

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
                      <img alt="ProfileImage" class="profile_img" src="./assets/images/default_user_profile.png" />
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
                      <img alt="ProfileImage" class="profile_img" src="./assets/images/default_user_profile.png" />
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
      <div class="card_output">
        <app-featured-card ><div class="featured_card" style="background: url(&quot;https://produy.gula-media.com/60c037dc872a8140f0f036c1-bf73d698-ced7-4e23-9a53-b84351f7b743926499-preview.png&quot;);">
          <div class="type_container">
            <p class="type_label">Elite</p>
          </div>
          <a class="card_name" href="/escort/britneyfit092817235">Britney Fit </a>
          <p class="card_description"></p>

        </div>
        </app-featured-card><app-featured-card ><div class="featured_card" style="background: url(&quot;https://produy.gula-media.com/632a2d3ef9cb2a79d9dada2a-19290e33-89d3-47fa-bcf2-812b195d2de2113592-preview.png&quot;);">
          <div class="type_container">
            <p class="type_label">Elite</p>
          </div>
          <a class="card_name" href="/escort/tamara094180596">Tamara</a>
          <p class="card_description"></p>

        </div>
        </app-featured-card><app-featured-card ><div class="featured_card" style="background: url(&quot;https://produy.gula-media.com/608692b616cfc1139e790e66-ada304f3f72d77afdf07226a27246758936544-preview.png&quot;);">
          <div class="type_container">
            <p class="type_label">Elite</p>
          </div>
          <a class="card_name" href="/escort/vanessa093592458">Vanessa</a>
          <p class="card_description"></p>

        </div>
        </app-featured-card><app-featured-card ><div class="featured_card" style="background: url(&quot;https://produy.gula-media.com/62ae154ea2fd62562bea3adb-ad6ede14-5505-4c27-96f0-c6415eeb4dc8875225-preview.png&quot;);">
          <div class="type_container">
            <p class="type_label">Elite</p>
          </div>
          <a class="card_name" href="/escort/mahia096828430">Mahia</a>
          <p class="card_description"></p>

        </div>
        </app-featured-card><app-featured-card ><div class="featured_card" style="background: url(&quot;https://produy.gula-media.com/638e3a16fbacc6228600d079-fa48105e-c09f-47d6-86d2-2fe96e6ab090915275-preview.png&quot;);">
          <div class="type_container">
            <p class="type_label">Elite</p>
          </div>
          <a class="card_name" href="/escort/Olivia092349287">Olivia</a>
          <p class="card_description"></p>

        </div>
        </app-featured-card><app-featured-card ><div class="featured_card" style="background: url(&quot;https://produy.gula-media.com/6186503d8f62bf138e2817dc-8448b0fa7371c7f080cfc424d141a471232965-preview.png&quot;);">
          <div class="type_container">
            <p class="type_label">Elite</p>
          </div>
          <a class="card_name" href="/escort/mia092565879">Mía</a>
          <p class="card_description"></p>

        </div>
        </app-featured-card>
      </div>
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

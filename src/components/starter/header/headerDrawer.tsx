import { component$, useContext, useStyles$ } from "@builder.io/qwik";
import { GulaContext } from "~/root";
import styles from './header.scss?inline';

export default component$(() => {
  useStyles$(styles);
  const gulaContext = useContext(GulaContext);
  const firefoxBackground = false;
  return <div class={"side_menu_overlay " + (!gulaContext.openMenu ? 'display_none' : '')}>
    <div class={"side_menu " + (gulaContext.openMenu ? 'toggle_menu ' : '') + (firefoxBackground ? 'firefox_background ' : '')}>
      <div class="navigation">
        <a href="/" class="nav_item" >Inicio</a>
        <a href="/mujeres" class="nav_item" >Mujeres</a>
        <a href="/trans-travestis" class="nav_item" >Trans</a>
        <a href="/hombres" class="nav_item" >Hombres</a>
        <a href="/red-social-erotica/mujeres" class="nav_item"  > Estados</a >
        <a href="/blog" class="nav_item" > Blog</a >
        <a href="/auth/login" rel="nofollow" class="nav_item"  > Login</a >
        <a href="/auth/signin" rel="nofollow" class="nav_item"  >
          Registro
        </a >
        {/* <a href="['/escort/' + user.slug]" * ngIf="user?.type === 'workeruser'" class="nav_item"  > Main_menu.My_profile_button</a > */}
        {/* <button * ngIf="user" class="nav_item"(click) = "routeToSettings()"  > Main_menu.Settings_button</button > */}
        <a href="/contact" rel="nofollow" class="nav_item"  > Contacto</a >
        {/* <button * ngIf="user" class="nav_item"(click) = "closeSession()"  > Main_menu.Close_session</button > */}
      </div >

      {/* <div class="download_app" >
        <p class="comming_soon_title">Descarga nuestra app</p>
        <img class="image" src="/assets/images/download-app.png" />
      </div> */}

      <div class="download_buttons">
        <p class="label" >¡Próximamente descargá la app!</p>

        <div class="buttons">
          <button class="icon_button">
            <img class="icon" src="/assets/icons/ios-w.svg" alt="GulaIOS" />
          </button>
          <button class="icon_button">
            <img class="icon" src="/assets/icons/android-w.svg" alt="GulaAndroid" />
          </button>
        </div>
      </div>

      <div class="bottom_container">
        <a class="terms_button" href="/terms" rel="nofollow" >Términos y condiciones</a>
        <div class="social_media_output">
          <div class="social-button">
            <a rel="noreferrer" target="_blank" href="https://twitter.com/gulaescortuy"><img height={25} width={25} alt="SocialMedia" class="icon" src="/assets/icons/twitter-w.svg" /></a>
          </div>
        </div>
      </div >
    </div >
    <div class={"handle_side_menu " + (gulaContext.openMenu ? "toggle_overlay" : "")} onClick$={() => gulaContext.openMenu = false}></div >
  </div >
});
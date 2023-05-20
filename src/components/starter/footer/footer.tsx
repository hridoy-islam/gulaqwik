import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {
  // const state = useContext(GulaContext)

  //const serverTime = useServerTimeLoader();
  return (
    <footer class={styles.main_footer}>
      <div class="w-28">
        <a href="/">
        <img class="w-28" src="/assets/logos/gula-logo-w.svg" alt="gula-logo" />
        </a>
      </div>
      <p class={styles.copyright_label }>© 2023 Gula Escorts Uruguay. Todos los derechos reservados. V1.0.21-dev</p>
      <div class={styles.navigation}>
        <a class={styles.anchor} href="/escorts">Mujeres</a>
        <a class={styles.anchor} href="/escorts/trans-travestis">Trans</a>
        <a class={styles.anchor} href="/escorts/hombres">Hombres</a>
        <a rel="nofollow" class={styles.anchor} href="/contact">Contacto</a>
        <a rel="nofollow" class={styles.anchor} href="/terms">Términos de uso</a>
      </div>
      <div class="social_networks_container transition ease-in-out delay-150 opacity-50 hover:opacity-100 w-8 mx-auto mt-6">
        <button class="w-6"> 
          <a href="https://twitter.com/gulaescortuy" target="_blank">
          <img class="w-6" src="/assets/icons/twitter-w.svg" alt="twitter"/>
          </a>
        </button>
      </div>
      {/* {
        state?.menu && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolor facere, reprehenderit provident dolorem officia sunt consectetur magni harum dolorum ipsa atque alias tempora commodi cupiditate omnis obcaecati animi quas!</p>
      } */}
    </footer>
  );
});

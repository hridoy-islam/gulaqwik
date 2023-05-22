import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {
  return (
    <footer class={styles.main_footer}>
      <div class="w-28">
        <a href="/">
          <img class="w-28" src="/assets/logos/gula-logo-w.svg" alt="gula-logo" />
        </a>
      </div>
      <p class={styles.copyright_label}>© 2023 Gula Escorts Uruguay. Todos los derechos reservados. V1.0.21-dev</p>
      <div class={styles.navigation}>
        <a class={styles.anchor} href="/mujeres">Mujeres</a>
        <a class={styles.anchor} href="/trans-travestis">Trans</a>
        <a class={styles.anchor} href="/hombres">Hombres</a>
        <a rel="nofollow" class={styles.anchor} href="/contact">Contacto</a>
        <a rel="nofollow" class={styles.anchor} href="/terms">Términos de uso</a>
      </div>
      <div class="social_networks_container transition ease-in-out delay-150 opacity-50 hover:opacity-100 w-8 mx-auto mt-6">

        <a href="https://twitter.com/gulaescortuy" target="_blank">
          <img class="w-6" src="/assets/icons/twitter-w.svg" alt="twitter" />
        </a>

      </div>
    </footer>
  );
});

import { component$ } from '@builder.io/qwik';

export default component$(() => {
  //const serverTime = useServerTimeLoader();

  return (
    <footer class="main_footer w-full py-14 m-auto text-center">
      <div class="logo_container">
        <img class="d-block m-auto" src="/assets/logos/gula-logo-w.svg" alt="Gula" />
      </div>
      <p class="my-5">© 2023 Gula Escorts Uruguay. Todos los derechos reservados. V1.0.21-dev</p>
      <div class="navigation">
        <a class="anchor" href="/escorts">Mujeres</a>
        <a class="anchor" href="/escorts/trans-travestis">Trans</a>
        <a class="anchor" href="/escorts/hombres">Hombres</a>
        <a rel="nofollow" class="anchor" href="/contact">Contacto</a>
        <a rel="nofollow" class="anchor" href="/terms">Términos de uso</a>
      </div>
      <div class="social_networks_container">

      </div>
    </footer>
  );
});

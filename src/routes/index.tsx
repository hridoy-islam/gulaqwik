import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="slider_section">
        <h2 class="title mb-6 text-center">GULA, el mejor sitio de Escorts en Uruguay</h2>
        <div class="mt-12 slider_button">
          <a href="/escorts/mujeres" class="px-8 py-4 mx-3 font-sm font-bold border rounded uppercase " >Mujeres</a>
          <a href="/escorts/trans-travestis" class="px-8 py-4 mx-3 font-sm font-bold border rounded uppercase " >Mujeres trans</a>
          <a href="/escorts/hombres" class="px-8 py-4 mx-3 font-sm font-bold border rounded uppercase " >Hombres</a>
        </div>
      </div>
      <div class="about_section mt-20">
        <div class="container text-center py-20">
          <h2 class="text-md font-bold pb-2">Prostitutas en Uruguay</h2>
          <p class="text-xl font-light">Somos la primera Red Social Erótica de Chicas Escort Uruguay, Gula es un espacio de publicidad donde mujeres, mujeres trans y hombres, ofrecen sus diferentes servicios ( prostitutas, acompañantes, masajistas, gigolo etc).</p>
          <p class="text-xl font-light">En GULA podrás encontrar todo lo que buscas en un espacio seguro, discreto y gratuito, queremos ayudarte en tu recorrido para que esta experiencia sea lo más sencilla y ante cualquier duda o problema que tengas no dudes en contactarnos, siempre encontrarás una respuesta rápida de nuestro equipo de asesores. GULA escort Uruguay es una comunidad, anímate a vivir una experiencia maravillosa donde las chicas mas hot están esperando para cumplir todas tus fantasías.</p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Gula - El sitio de Chicas Escorts, Putas, Hombres y Trans en Uruguay',
  meta: [
    {
      name: 'description',
      content: 'Somos la primera Red Social Erótica de Chicas Escorts. Gula un espacio de publicidad donde putas, mujeres trans y hombres, ofrecen sus diferentes servicios',
    },
  ],
};

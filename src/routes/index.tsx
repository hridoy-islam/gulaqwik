import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>Hello World</h1>

      <div class="about_section">
        <div class="content">
          <h2>Prostitutas en Uruguay</h2>
          <p class="description">Somos la primera Red Social Erótica de Chicas Escort Uruguay, Gula es un espacio de publicidad donde mujeres, mujeres trans y hombres, ofrecen sus diferentes servicios ( prostitutas, acompañantes, masajistas, gigolo etc).</p>
          <p class="description">En GULA podrás encontrar todo lo que buscas en un espacio seguro, discreto y gratuito, queremos ayudarte en tu recorrido para que esta experiencia sea lo más sencilla y ante cualquier duda o problema que tengas no dudes en contactarnos, siempre encontrarás una respuesta rápida de nuestro equipo de asesores. GULA escort Uruguay es una comunidad, anímate a vivir una experiencia maravillosa donde las chicas mas hot están esperando para cumplir todas tus fantasías.</p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

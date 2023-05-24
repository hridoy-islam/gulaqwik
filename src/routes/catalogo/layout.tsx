import { component$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async (requestEvent) => {
  console.log('requestEvent.url.href', requestEvent.url.href)
  throw requestEvent.redirect(302, requestEvent.url.href.replace('catalogo', 'escorts'));
};

export default component$(() => {
  return (
    <>
    </>
  );
});

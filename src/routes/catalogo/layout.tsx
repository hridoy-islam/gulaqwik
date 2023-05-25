import { component$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async (requestEvent) => {
  throw requestEvent.redirect(302, requestEvent.url.href.replace('catalogo', 'escorts'));
};

export default component$(() => {
  return (
    <>
    </>
  );
});

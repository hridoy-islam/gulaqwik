import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async (requestEvent) => {
    if (requestEvent.url.href.startsWith('https://gula.com.uy')) {
        throw requestEvent.redirect(302, 'https://auth.gula.com.uy' + requestEvent.url.pathname + requestEvent.url.search);
    }
};

export default component$(() => {
    return <Slot/>;
});

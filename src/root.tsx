import { component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export const GulaContext = createContextId<IGulaContext>(
  'gula-context'
);

export interface IGulaContext {
  openMenu: boolean; openNotificationsModal: boolean; isMobile: boolean;
}

export default component$(() => {
  const gula = useStore<IGulaContext>({ openMenu: false, openNotificationsModal: false, isMobile: true });
  useContextProvider(GulaContext, gula);
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});

import { component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { QwikPartytown } from './components/partytown/partytown';
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
        <meta property="og:title" content="Gula" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gula.com.uy" />
        <meta property="og:image" content="/assets/logos/gula-perfil.jpg" />
        <meta property="og:description"
          content="Somos la primera Red Social Erótica de Chicas Escorts. Gula un espacio de publicidad donde putas, mujeres trans y hombres, ofrecen sus diferentes servicios." />
        <meta property="og:site_name" content="https://gula.com.uy" />
        <meta name="rating" content="adult"></meta>
        <QwikPartytown forward={['dataLayer.push']} />
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=UA-103777622-2"
        />
        <RouterHead />
      </head>
      <body lang="es">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});

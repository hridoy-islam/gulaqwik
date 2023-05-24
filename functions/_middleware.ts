// @ts-ignore

export async function onRequest(context) {
    try {

        const response = await context.next();
        response.headers.set('cache-control', 'public,max-age=31536000,immutable');
        response.headers.set('strict-transport-security', 'max-age=31536000; includeSubdomains; preload');
        response.headers.set('content-security-policy', "default-src 'self' *.gula.com.uy https://*.google.com https://stats.g.doubleclick.net https://*.google-analytics.com https://api.mercadopago.com https://*.mercadolibre.com https://*.ondigitalocean.app https://testing.gula-ui-qwik.pages.dev https://*.amazonaws.com https://www.google-analytics.com https://fonts.gstatic.com https://*.sentry.io https://*.gula-media.com data:; img-src * 'self' 'unsafe-inline' data: blob: https: gula.com.uy *.gula-media.com https://*.google-analytics.com; script-src 'self' 'unsafe-inline' https://*.google.com https://*.gstatic.com https://unpkg.com https://www.googletagmanager.com https://www.google-analytics.com https://secure.mlstatic.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; object-src 'none'");
        response.headers.set('x-content-type-options', 'nosniff');
        response.headers.set('x-frame-options', 'DENY');
        response.headers.set('x-xss-protection', '1; mode=block');
        response.headers.set('referrer-policy', 'strict-origin-when-cross-origin');
        response.headers.set('permissions-policy', "accelerometer=(), autoplay=(), camera=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(self), picture-in-picture=(), sync-xhr=(), usb=()");
        
        return response;
    } catch (err) {
        return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    }
}

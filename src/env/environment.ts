// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from '../.env';

export const environment = {
  production: true,
  hmr: false,
  appUrl: 'https://gula.com.uy/',
  version: env.npm_package_version + '-uy',
  serverUrl: 'https://gula-api-yg7yn.ondigitalocean.app/',
  defaultLanguage: 'es-ES',
  supportedLanguages: ['es-ES'],
  mercadoPagoPublicKey: 'APP_USR-ba1280fc-9fb0-4217-ab05-467db5e27887',
  lambdaUrl: 'https://fv012yi1g8.execute-api.sa-east-1.amazonaws.com/prod/',
  useLambda: false,
};

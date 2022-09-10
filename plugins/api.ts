import { Plugin } from '@nuxt/types';
import { Api } from '~/api/Api';
import customFetch from '~/core/http/customFetch';
// import customFetch from '~/core/http/customFetch';
type TApiConfig = {
  baseUrl: string;
  customFetch?: typeof fetch;
  baseApiParams: any;
};
const apiPlugin: Plugin = ({ $config, $auth }, inject) => {
  let accessToken = '';
  const token = $auth.getAccessToken();
  if (token) {
    accessToken = token.access_token;
  }
  // if (!token) {
  //   await $auth.checkTokens();
  //   token = $auth.getAccessToken();
  // }

  const swaggerResultConfig: TApiConfig = {
    baseUrl: $config.baseUrl,
    customFetch: customFetch(),
    baseApiParams: { headers: { Authorization: `Bearer ${accessToken || ''}` } }
  };

  const swagger = new Api(swaggerResultConfig);

  inject('api', {
    swagger
  });
};

export default apiPlugin;

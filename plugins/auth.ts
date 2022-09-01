import { Context, Plugin } from '@nuxt/types';
import Auth from '~/core/auth/Auth';

const auth: Plugin = ({ $config }: Context, inject: any) => {
  const auth = new Auth($config.baseUrl);

  inject('auth', auth);
};

export default auth;

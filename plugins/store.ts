import { Context } from '@nuxt/types';

import { LOGIN_STORE_NS, LoginStoreModule } from '~/business/login/store/index';

export default ({ store }: Context) => {
  // @ts-ignore
  store.registerModule(LOGIN_STORE_NS, LoginStoreModule);
};

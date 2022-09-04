import { Context } from '@nuxt/types';

import { AUTHORIZATION_STORE_NS, AuthorizationStoreModule } from '~/business/authorization/store/index';

export default ({ store }: Context) => {
  // @ts-ignore
  store.registerModule(AUTHORIZATION_STORE_NS, AuthorizationStoreModule);
};

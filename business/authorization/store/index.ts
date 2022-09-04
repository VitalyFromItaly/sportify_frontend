import { namespace } from 'vuex-class';
export const AUTHORIZATION_STORE_NS = 'Login';
export const authorizationStoreModule = namespace(AUTHORIZATION_STORE_NS);

export { default as AuthorizationStoreModule } from './AuthorizationStoreModule';

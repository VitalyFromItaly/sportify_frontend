import { namespace } from 'vuex-class';

export const LOGIN_STORE_NS = 'Login';
export const loginStoreModule = namespace(LOGIN_STORE_NS);

export { default as LoginStoreModule } from './LoginStoreModule';

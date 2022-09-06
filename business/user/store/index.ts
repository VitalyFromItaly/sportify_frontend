import { namespace } from 'vuex-class';

export const USER_STORE_NS = 'User';
export const userStoreModule = namespace(USER_STORE_NS);

export { default as UserStoreModule } from './UserStoreModule';

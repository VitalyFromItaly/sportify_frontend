import { Module } from 'vuex-module-decorators';
import { initUserState, TState } from '../Domain';
import { BaseVuexModule } from '~/business/core/store/BaseVuexModule';

@Module({
  namespaced: true,
  stateFactory: true
})
export default class UserStoreModule extends BaseVuexModule<TState> {
  internalState: TState = initUserState();
}

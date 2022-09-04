import { Module } from 'vuex-module-decorators';
import { initLoginState, TState } from '../Domain';
import { BaseVuexModule } from '~/business/core/store/BaseVuexModule';

@Module({
  namespaced: true,
  stateFactory: true
})
export default class LoginStoreModule extends BaseVuexModule<TState> {
  internalState: TState = initLoginState();
}

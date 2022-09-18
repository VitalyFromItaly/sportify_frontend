import { Module } from 'vuex-module-decorators';
import { initContextState, TState } from '../Domain';
import { BaseVuexModule } from '~/business/core/store/BaseVuexModule';

@Module({
  namespaced: true,
  stateFactory: true
})
export default class ContextStoreModule extends BaseVuexModule<TState> {
  internalState: TState = initContextState();
}

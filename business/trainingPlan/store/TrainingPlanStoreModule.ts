import { Module } from 'vuex-module-decorators';
import { initTrainingPlanState, TState } from '../Domain';
import { BaseVuexModule } from '~/business/core/store/BaseVuexModule';

@Module({
  namespaced: true,
  stateFactory: true
})
export default class TrainingPlanStoreModule extends BaseVuexModule<TState> {
  internalState: TState = initTrainingPlanState();

  public get isLoading(): boolean {
    return this.internalState.isLoading;
  }

  public get isError(): boolean {
    return this.internalState.isError;
  }
}

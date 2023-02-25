import { Module } from 'vuex-module-decorators';
import { MutationAction } from 'nuxt-property-decorator';
import { initTrainingPlanActivityState, TState } from '../Domain';
import { BaseVuexModule } from '~/business/core/store/BaseVuexModule';
import webSocket from '~/core/ws/WebSocket';
import { ActivityEntity } from '~/Api/Api';

@Module({
  namespaced: true,
  stateFactory: true
})
export default class TrainingPlanActivityStoreModule extends BaseVuexModule<TState> {
  internalState: TState = initTrainingPlanActivityState();
  activities: ActivityEntity[];

  public get isLoading(): boolean {
    return this.internalState.isLoading;
  }

  public get isError(): boolean {
    return this.internalState.isError;
  }

  @MutationAction
  async loadActivities() {
    const activities = await webSocket.emit<ActivityEntity[]>('activity:readAll');

    return {
      activities
    };
  }
}

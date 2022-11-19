import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import type { TNotification } from '~/@types/domain';

@Module({
  stateFactory: true,
  namespaced: true
})
export default class Core extends VuexModule {
  isLoading = false;
  isDarkTheme = false;
  notifications: TNotification[] = [];
  currentFormStep: number = 0;

  @Mutation
  setCurrentFormStep(step: number): void {
    this.currentFormStep = step === -1 ? 0 : step;
  }

  @Mutation
  addNotification(payload: TNotification): void {
    this.notifications.push(payload);
  }

  @Mutation
  removeNotification(payload: TNotification): void {
    const index = this.notifications.indexOf(payload);
    this.notifications.splice(index, 1);
  }

  @Mutation
  setTheme(value: boolean): void {
    this.isDarkTheme = value;
  }

  @Mutation
  setIsLoading(): void {
    this.isLoading = true;
  }

  @Mutation
  removeIsLoading(): void {
    this.isLoading = false;
  }
}

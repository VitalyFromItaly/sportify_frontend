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
    console.log('isLoading');
    this.isLoading = true;
  }

  @Mutation
  removeIsLoading(): void {
    console.log('removeLoading');
    this.isLoading = false;
  }
}

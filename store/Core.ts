import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  stateFactory: true,
  namespaced: true
})
export default class Core extends VuexModule {
  isLoading = false;
  isDarkTheme = false;

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

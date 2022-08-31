import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  stateFactory: true,
  namespaced: true
})
export default class Core extends VuexModule {
  currentPageName: string = 'Поиск';
  isLoading = true;

  @Mutation
  setIsLoading(): void {
    this.isLoading = true;
  }

  @Mutation
  setCurrentPageName(name: string): void {
    this.currentPageName = name;
  }

  @Mutation
  removeIsLoading(): void {
    this.isLoading = false;
  }
}

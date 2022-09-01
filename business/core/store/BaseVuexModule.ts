import has from 'lodash/has';
import { Mutation } from 'vuex-module-decorators';
import { IStoreModule } from './Domain';
import { context } from '~/core/context';
export class BaseVuexModule<T> implements IStoreModule<T> {
  public internalState: T;

  public get isLoading(): boolean {
    return context.store.state.Core.isLoading;
  }

  @Mutation
  public onSetState(newState: Partial<T>): void {
    for (const key in newState) {
      if (has(this.internalState, key)) {
        this.internalState[key] = newState[key];
      } else {
        console.error(`Значение ${key} отсутствует в стейте`);
      }
    }
  }
}

/* eslint-disable no-dupe-class-members */
import { Store } from 'vuex';
import { IVuexStateHolder } from './Domain';

export default class BaseVuexStateHolder<T> implements IVuexStateHolder<T> {
  constructor(
    protected store: Store<T>,
    protected initialState: T,
    protected namespace?: string,
    protected stateHolderName: string = 'internalState'
  ) {}

  get state(): T {
    if (this.namespace) {
      if (this.stateHolderName) {
        return (this.store.state as any)[this.namespace][this.stateHolderName];
      }
      return (this.store.state as any)[this.namespace];
    }
    return this.store.state;
  }

  onChangeState(mutationState: T): void;
  onChangeState(mutationState: T, mutation: string = 'onSetState'): void {
    this.store.commit(`${this.namespace}/${mutation}`, mutationState);
  }

  onResetState(): void {
    this.onChangeState({ ...this.initialState });
  }

  // fix https://github.com/vuex-orm/vuex-orm/issues/255#issuecomment-876378684
  toJSON() {
    return { ...this };
  }
}

import { IVuexStateHolder } from './Domain';
export default class BaseVuexStateHolderAdapter<T> {
  constructor(private stateMutator: IVuexStateHolder<T>) {}

  get state(): T {
    return this.stateMutator.state;
  }

  changeState(state: T) {
    this.stateMutator.onChangeState(state);
  }

  resetState() {
    this.stateMutator.onResetState();
  }

  toJSON() {
    return { ...this };
  }
}

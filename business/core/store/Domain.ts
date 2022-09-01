export interface IVuexObservable<T> {
  onChangeState(state: T): void;
  onChangeState(state: T, mutation: string): void;
  onResetState(): void;
  toJSON(): void;
  state: T;
  // get state(): T;
}

export interface IStoreModule<T> {
  onSetState(newState: T): void;
}

export type StateSubscription<T> = (state: T) => void;

export type TFetchState = {
  isLoading: boolean;
  isError: boolean;
};

export interface IStateHolder<T> {
  // get state(): T;
  onChangeState<S>(state: Partial<S | T>, mutation?: string): void;
  onResetState(): void;
}
export interface IVuexStateHolder<T> extends IStateHolder<T> {
  state: T;
}

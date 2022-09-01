export interface IObservable<T> {
  state: T;
  subscriberList: ((state: T) => void)[];

  subscribe(subscriber: (state: T) => void): void;
  unsubscribe(subscriber: (state: T) => void): void;
  onChangeState(state: T): void;
}

export type TFetchState = {
  isLoading: boolean;
  isError: boolean;
};

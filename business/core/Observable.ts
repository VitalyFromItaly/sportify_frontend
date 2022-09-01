import has from 'lodash/has';
import { IObservable } from '~/business/core/Domain';

export default class Observable<T> implements IObservable<T> {
  state: T;
  private initialState: T;
  subscriberList: ((state: T) => void)[] = [];

  constructor(state: T) {
    this.state = state;
    this.initialState = state;
  }

  subscribe(subscriber: (state: T) => void) {
    this.subscriberList.push(subscriber);
  }

  unsubscribe(subscriber: (state: T) => void) {
    const index = this.subscriberList.indexOf(subscriber);
    if (index > -1) {
      this.subscriberList.splice(index, 1);
    }

    // this.onResetState();
  }

  onChangeState(newState: Partial<T>): void {
    for (const key in newState) {
      if (has(this.state, key)) {
        this.state[key] = newState[key];
      } else {
        console.error(`Значение ${key} отсутствует в стейте`);
      }
    }

    for (const subscriber of this.subscriberList) {
      subscriber(this.state);
    }
  }

  private onResetState(): void {
    this.state = this.initialState;
  }
}

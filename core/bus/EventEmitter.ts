import { IEventBus, EEventBusName } from './Domain';

export default class EventEmitter implements IEventBus {
  private event: Record<string, any[]> = {};

  emit<T>(eventName: EEventBusName | string, payload?: T): void {
    const event = this.event[eventName];
    if (event) {
      event.forEach((clb: (payload: T) => void) => {
        // eslint-disable-next-line no-useless-call
        clb.call(null, payload || null);
      });
    }
  }

  on<T>(eventName: string, clb: (payload: T) => void): () => void {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }

    this.event[eventName].push(clb);
    return () => {
      this.event[eventName] = this.event[eventName].filter(
        (eventFn: (payload: T) => void) => clb !== eventFn
      );
    };
  }
}

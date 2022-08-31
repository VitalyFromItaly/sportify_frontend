/* eslint-disable no-unused-vars */
export interface IEventBus {
  on(eventName: string, clb: (payload: any) => void): () => void
  emit<T>(eventName: string, payload?: T): void
}

export enum EEventBusName {
  NOTIFICATION = 'notification',
  ROUTER = 'route'
}

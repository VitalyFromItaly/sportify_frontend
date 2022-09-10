import { TLocation } from '~/@types/framework';

/* eslint-disable no-unused-vars */
export interface IEventBus {
  on(eventName: string, clb: (payload: any) => void): () => void
  emit<T>(eventName: string, payload?: T): void
}

export enum EEventBusName {
  NOTIFICATION = 'notification_default',
  AUTH_NOTIFICATION = 'notification_auth',
  ROUTER = 'router',
  AUTH_ROUTER = 'router_auth'
}

export type TRouterEvent = TLocation;

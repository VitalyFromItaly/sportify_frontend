/* eslint-disable no-unused-vars */

export enum ESystemDefaultLanguage {
  RU = 'ru-RU',
  EN = 'en-EN'
}

export enum EAppLanguages {
  RU = 'ru',
  EN = 'en'
}

export enum EVuexNamespaces {
  CORE = 'Core'
}

export type TNotificationType = 'warn' | 'success' | 'error';

export type TRouteEventPayload = {
  name: string;
  params?: { [x: string]: string }
};

export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light'
}

export enum ELayout {
  DEFAULT = 'default',
  AUTH = 'auth'
}

export enum ENotificationType {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error'
}

export type TNotification = {
  title: string;
  content: string;
  type: ENotificationType;
  id: string;
  alive?: number;
 };

export type TNotificationParams = {
  alive?: number;
};

export type TNotificationPayload = Omit<TNotification, 'id'> & { params?: TNotificationParams };

export interface IRawNotifications {
  success: (title: string, content: string, params: TNotificationParams) => void;
  error: (title: string, content: string, params: TNotificationParams) => void;
  info: (title: string, content: string, params: TNotificationParams) => void;
  _prepare: (title: string, content: string, type: ENotificationType, params: TNotificationParams) => void;
  _add: (notification: TNotification) => void;
 }

export interface INotifications {
  success: (title: string, content: string, params?: TNotificationParams) => void;
  error: (title: string, content: string, params?: TNotificationParams) => void;
  info: (title: string, content: string, params?: TNotificationParams) => void;
 }

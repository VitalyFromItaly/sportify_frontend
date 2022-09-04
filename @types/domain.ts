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
  name: 'string';
  params?: { [x: string]: string }
};

export type TNotificationPayload = {
  // (optional)
  // Name of the notification holder
  group?: string,
  // (optional)
  // Class that will be assigned to the notification
  type?: TNotificationType,

  // (optional)
  // Title (will be wrapped in div.notification-title)
  title?: string,

  // Content (will be wrapped in div.notification-content)
  text: string,

  // (optional)
  // Overrides default/provided duration
  duration?: number,

  // (optional)
  // Overrides default/provided animation speed
  speed?: number

  // (optional)
  // Data object that can be used in your template
  data?: any
};

export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light'
}

export enum ELayout {
  DEFAULT = 'default',
  AUTH = 'auth'
}

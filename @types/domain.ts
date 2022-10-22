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

export type TNotificationType = 'success' | 'info' | 'error';

export type TNotification = {
  title: string | null;
  content: string;
  type: TNotificationType;
  id: string;
  alive?: number;
 };

export type TNotificationParams = {
  alive?: number;
};

export type TNotificationEvent = Omit<TNotification, 'id'> & { params?: TNotificationParams };

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

export enum EGender {
  MALE = 1,
  FEMALE,
  OTHER
}

export enum EUserStatus {
  NEW = 0,
  KNOWN
}

export enum EGoal {
  WEIGHT_REDUCTION,
  MUSCLE_GAIN,
  WEIGHT_MAINTENANCE,
  COMPETITION_PREPARATION
}

export type TUserComment = {
  comment: string;
  date: Date;
};

export enum ELanguages {
  En = 'en',
  Ru = 'ru'
}

export enum EActivityType {
  ANAEROBIC = 1, // swimming, running
  AEROBIC, // like gym, pullups, pushups
}

export type TResponseStatus = 'error' | 'success';

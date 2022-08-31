/* eslint-disable no-unused-vars */
export enum ENavTabs {
  SEARCH = 'search',
  REQUESTS = 'requests',
  // SETTINGS = 'settings',
  // STATE = 'state',
  JOURNAL = 'journal',
}

export enum Pages {
  SEARCH = 'search',
  REQUESTS = 'requests',
  SETTINGS = 'settings',
  STATE = 'state',
  JOURNAL = 'journal',
  RESULTS = 'results'
}

export enum EPageNames {
  search = 'Поиск',
  requests = 'Запросы',
  settings = 'Настройки',
  state = 'Состояние',
  journal = 'Журнал',
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

export enum EQueryExistence {
  NO,
  YES
}

export enum EQueryResultState {
  NEVER,
  PENDING,
  DONE,
  ERROR
}

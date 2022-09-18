/* eslint-disable no-unused-vars */
export type TButtonType = 'primary' | 'secondary' | 'transparent';

export enum EButtonAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TRANSPARENT = 'transparent'
}

export type TButtonClass = { [x: string]: string };

export type TInputType = 'text' | 'number' | 'password' | 'email';

export type TInputSize = 'sm' | 'm';

export enum EInputSize {
  SM = 'sm',
  M = 'm'
}

export enum EInputTypes {
  TEXT = 'text',
  NUMBER = 'number',
  PASSWORD = 'password',
  EMAIL = 'email'
}

export type TInputTypeValue = string | number;
export type TSelectOption = { value: TInputTypeValue; text: string; };

export enum EContainer {
  STANDARD = 'standard',
  EXPANDABLE = 'expandable'
}

export enum ENotificationType {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error'
}

export enum ENotificationLevel {
  PAGE = 'page',
  INLINE = 'inline'
}

export type TTypeId = string | number;

export enum EComponentTags {
  TABS = 'tabs'
}

export enum EComponentKeys {
  ACTIVE_TAB = 'activeTabId'
}

export type TRadioButtonOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
  checked?: boolean;
};

export type TCheckboxValue = string | number | boolean | [] | object | any;

export enum ETooltipDirection {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
}

export enum ETooltipAlign {
  CENTER = 'center',
  START = 'start',
  END = 'end',
}

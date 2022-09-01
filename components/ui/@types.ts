/* eslint-disable no-unused-vars */
export type TButtonType = 'primary' | 'secondary' | 'transparent';

export enum EButtonAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TRANSPARENT = 'transparent'
}

export type TButtonClass = { [x: string]: string };

export type TInputTypeValue = string | number;
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

export type TSelectOption = { value: string; text: string; };

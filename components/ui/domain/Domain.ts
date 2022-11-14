import { EButtonAppearance } from './@types';
import type { TButtonClass } from './@types';

/**
  ******************************* BUTTON *******************************
*/
export const buttonClasses: TButtonClass = {
  [EButtonAppearance.PRIMARY]: 'py-1 bg-gradient-to-r from-lightTeal to-middleTeal text-cyan-50 focus:bg-gradient-to-r focus:to-cyan-900 focus:from-middleTeal hover:bg-gradient-to-r hover:to-cyan-900 hover:from-middleTeal',
  [EButtonAppearance.SECONDARY]: 'py-0.5 border-2 border-lightTeal bg-clip-text text-transparent bg-gradient-to-r from-lightTeal to-middleTeal hover:to-cyan-900 hover:from-middleTeal focus:to-cyan-900 focus:from-middleTeal focus:border-middleTeal hover:border-middleTeal',
  [EButtonAppearance.TRANSPARENT]: 'py-1 bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-lightTeal to-middleTeal hover:to-cyan-900 hover:from-middleTeal focus:to-cyan-900 focus:from-middleTeal'
};

export const disabledButtonClasses: TButtonClass = {
  [EButtonAppearance.PRIMARY]: 'bg-disabled text-mainGray',
  [EButtonAppearance.SECONDARY]: 'border-2 border-disabled bg-transparent text-disabled',
  [EButtonAppearance.TRANSPARENT]: 'bg-transparent text-disabled'
};

/**
 ******************************** INPUT *******************************
 */

export const inputNumberSizes = {
  sm: 'w-40',
  m: 'w-48'
};

export const inputTextSizes = {
  sm: 'max-w-xs',
  m: 'max-w-s'
};

export const inputClasses = {
  disabled: 'bg-disabled cursor-not-allowed ',
  default: 'hover:border-middleTeal active:border-middleTeal focus:border-middleTeal border-disabled',
  isError: 'border-rose-600'
};

export const noticeComponentClasses = {
  success: 'border-lightTeal',
  error: 'border-rose-600',
  info: 'border-darkGray'
};

export const noticeIconClasses = {
  success: 'text-lightTeal',
  error: 'text-rose-600',
  info: 'text-darkGray'
};

export const NOTICE_PAGE_TYPE_ALIVE = 6000; // 6 seconds

export const tabClasses = {
  default: 'border-darkGray',
  active: 'border-lightTeal',
  disabled: 'border-darkGray dark:border-middleDark dark:text-middleDark cursor-not-allowed text-darkGray'
};

export const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34
});

export const DATE_PICKER_COLOR = 'teal';

export const POSSIBLE_LOCALES = {
  en: 'en-US',
  ru: 'ru-RU'
};

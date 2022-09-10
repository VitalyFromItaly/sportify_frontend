import { EButtonAppearance } from './@types';
import type { TButtonClass } from './@types';

/**
  ******************************* BUTTON *******************************
*/
export const buttonClasses: TButtonClass = {
  [EButtonAppearance.PRIMARY]: 'bg-gradient-to-r from-lightTeal to-middleTeal text-cyan-50 focus:bg-gradient-to-r focus:to-cyan-900 focus:from-middleTeal hover:bg-gradient-to-r hover:to-cyan-900 hover:from-middleTeal',
  [EButtonAppearance.SECONDARY]: 'border-2 border-lightTeal bg-clip-text text-transparent bg-gradient-to-r from-lightTeal to-middleTeal hover:to-cyan-900 hover:from-middleTeal focus:to-cyan-900 focus:from-middleTeal focus:border-middleTeal hover:border-middleTeal',
  [EButtonAppearance.TRANSPARENT]: 'bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-lightTeal to-middleTeal hover:to-cyan-900 hover:from-middleTeal focus:to-cyan-900 focus:from-middleTeal'
};

export const disabledButtonClasses: TButtonClass = {
  [EButtonAppearance.PRIMARY]: 'bg-disabled text-disabledTextPrimary',
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
  sm: 'w-80',
  m: 'w-96'
};

export const inputClasses = {
  isDisabled: 'bg-disabled cursor-not-allowed',
  default: 'hover:border-middleTeal active:border-middleTeal focus:border-middleTeal border-disabled dark:bg-dark dark:text-gray-300',
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
  disabled: 'border-darkGray dark:border-disabledDark dark:text-disabledDark cursor-not-allowed text-darkGray'
};

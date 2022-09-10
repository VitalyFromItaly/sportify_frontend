/* eslint-disable no-unused-vars */
import { User } from '~/Api/Api';
import { TFetchState } from '~/business/core/Domain';
import { IVuexObservable } from '~/business/core/store/Domain';

export enum EAccountTabs {
  PERSONAL = 'personal',
  SYSTEM = 'system'
}

export enum EGoal {
  WEIGHT_REDUCTION,
  MUSCLE_GAIN,
  WEIGHT_MAINTENANCE,
  COMPETITION_PREPARATION
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

export type TAccountTabConfig = {
  component: any;
  name: string;
  targetId: EAccountTabs;
};

export type TUser = User;

export type TUserInfo = Partial<TUser>;

export type TState = TFetchState & {
  user: TUser;
};

export interface IService {
  read(): Promise<TUser>;
}

export interface IPresenter extends IVuexObservable<TState> {
  onMounted(): Promise<void>;
}

export const initUserState = (): TState => ({
  isLoading: false,
  isError: false,
  user: null
});

export const genderDictionary: { [EGender: number]: string } = {
  [EGender.MALE]: 'male',
  [EGender.FEMALE]: 'female',
  [EGender.OTHER]: 'other'
};

export const goalDictionary: { [EGoal: number]: string } = {
  [EGoal.COMPETITION_PREPARATION]: 'competitionPreparation',
  [EGoal.MUSCLE_GAIN]: 'muscleGain',
  [EGoal.WEIGHT_MAINTENANCE]: 'weightMaintenance',
  [EGoal.WEIGHT_REDUCTION]: 'weightReduction'
};

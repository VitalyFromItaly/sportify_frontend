/* eslint-disable no-unused-vars */
import { CommentDto, CreateResponse, EHttpStatus, ELanguages, UpdateUserProfileDto, User } from '~/Api/Api';
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
export type TComment = CommentDto;
export type TUpdateUser = UpdateUserProfileDto;
export type TRawUpdateUser = Omit<TUpdateUser, 'id'>;
export type TCreateResponse = CreateResponse;

export type TUserInfo = Partial<TUser>;

export type TState = TFetchState & {
  user: TUser;
  currentStep: number;
};

export interface IService {
  read(): Promise<TUser>;
  update(payload: TUpdateUser): Promise<User>;
  postComment(payload: TComment): Promise<TCreateResponse['status']>;
}

export interface IPresenter extends IVuexObservable<TState> {
  onLoad(): Promise<void>;
  onUpdate(payload: TRawUpdateUser): Promise<void>;
  onSetLocale(locale: ELanguages): void;
  onCreateComment(comment: string): Promise<EHttpStatus>;
  onSetCurrentStep(step: number): void;
}

export const initUserState = (): TState => ({
  isLoading: false,
  isError: false,
  user: null,
  currentStep: 1
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

/* eslint-disable no-unused-vars */
import { User } from '~/Api/Api';
import { TFetchState } from '~/business/core/Domain';
import { IVuexObservable } from '~/business/core/store/Domain';

export type TUserInfo = User;

export enum EUserStatus {
  NEW = 0,
  KNOWN
}

export type TState = TFetchState & {
  user: TUserInfo;
};

export interface IService {
  read(): Promise<TUserInfo>;
}

export interface IPresenter extends IVuexObservable<TState> {
  onMounted(): Promise<void>;
}

export const initUserState = (): TState => ({
  isLoading: false,
  isError: false,
  user: null
});

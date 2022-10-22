import type { CreateUserDto, UserCredsDto } from '~/Api/Api';
import { EHttpStatus } from '~/Api/Api';
import { TFetchState } from '~/business/core/Domain';
import { IVuexObservable } from '~/business/core/store/Domain';
import { TTokensInfo } from '~/core/auth/IAuth';

export type TState = TFetchState & {
  tokens: TTokensInfo;
};

export type TLoginForm = UserCredsDto;
export type TRegisterForm = CreateUserDto;

export interface IService {
  login(payload: TLoginForm): Promise<TTokensInfo>;
  register(payload: TRegisterForm): Promise<EHttpStatus>;
  logout(): any;
}

export interface IPresenter extends IVuexObservable<TState> {
  onLogin(payload: TLoginForm): Promise<void>;
  onRegister(payload: TRegisterForm): Promise<void>;
  onLogout(): void;
}

export const initAuthorizationState = (): TState => ({
  isLoading: false,
  isError: false,
  tokens: null
});

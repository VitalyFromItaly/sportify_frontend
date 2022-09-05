import { CreateUserDto, UserCredsDto } from '~/Api/Api';
import { TFetchState } from '~/business/core/Domain';
import { IVuexObservable } from '~/business/core/store/Domain';
import { TTokensInfo } from '~/core/auth/IAuth';

export type TState = TFetchState & {
  id: number;
  data: any;
};

export type TLoginForm = UserCredsDto;
export type TRegisterForm = CreateUserDto;

export interface IService {
  login(payload: TLoginForm): Promise<TTokensInfo>;
  register(payload: TRegisterForm): Promise<any>;
  logout(): Promise<any>;
}

export interface IPresenter extends IVuexObservable<TState> {
  onLogin(payload: TLoginForm): Promise<void>;
  onLogout(): Promise<void>;
}

export const initAuthorizationState = (): TState => ({
  isLoading: true,
  isError: false,
  data: null,
  id: null
});

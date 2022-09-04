import { UserCredsDto } from '~/Api/Api';
import { TFetchState } from '~/business/core/Domain';
import { IVuexObservable } from '~/business/core/store/Domain';

export type TState = TFetchState & {
  id: number;
  data: any;
};

export type TLoginForm = UserCredsDto;

export interface IService {
  read(id: number): Promise<any>;
}

export interface IPresenter extends IVuexObservable<TState> {
  onMounted(): Promise<void>;
}

export const initLoginState = (): TState => ({
  isLoading: true,
  isError: false,
  data: null,
  id: null
});

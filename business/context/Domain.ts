import { DictionaryDto } from '~/Api/Api';
import { TFetchState } from '~/business/core/Domain';
import { IVuexObservable } from '~/business/core/store/Domain';

export type TDictionary = DictionaryDto;

export type TState = TFetchState & {
  dictionary: TDictionary;
};

export interface IService {
  read(): Promise<TDictionary>;
}

export interface IPresenter extends IVuexObservable<TState> {
  onLoad(): Promise<void>;
}

export const initContextState = (): TState => ({
  isLoading: true,
  isError: false,
  dictionary: {} as TDictionary
});

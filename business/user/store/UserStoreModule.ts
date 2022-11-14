import { Module } from 'vuex-module-decorators';
import { EUserStatus, initUserState, TState, TUserInfo } from '../Domain';
import { BaseVuexModule } from '~/business/core/store/BaseVuexModule';
import { ELanguages } from '~/Api/Api';

@Module({
  namespaced: true,
  stateFactory: true
})
export default class UserStoreModule extends BaseVuexModule<TState> {
  public readonly internalState: TState = initUserState();

  public get status(): EUserStatus {
    return this.internalState.user?.status;
  }

  public get isLoading(): boolean {
    return this.internalState.isLoading;
  }

  public get user(): TUserInfo {
    return this.internalState.user;
  }

  public get id(): number {
    return this.internalState.user?.id;
  }

  public get hasUser(): boolean {
    return !!this.internalState?.user;
  }

  public get language(): ELanguages {
    return this.internalState.user?.language;
  }

  public get isError(): boolean {
    return this.internalState.isError;
  }
}

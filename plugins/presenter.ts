import { Context } from '@nuxt/types';
import BaseVuexStateHolder from '~/business/core/store/BaseVuexStateHolder';

import { IPresenter as ILoginPresenter, initAuthorizationState } from '~/business/authorization/Domain';
import LoginPresenter from '~/business/authorization/Presenter';
import { AUTHORIZATION_STORE_NS } from '~/business/authorization/store/index';

export interface IPresenterPlugin {
  loginInstance: ILoginPresenter;
}

const presenter = (context: Context, inject: any) => {
  const { store } = context;

  let presenterLogin: ILoginPresenter;

  inject('presenter', {
    get loginInstance(): ILoginPresenter {
      if (presenterLogin) {
        return presenterLogin;
      }

      const loginAdapter = new BaseVuexStateHolder(store, initAuthorizationState(), AUTHORIZATION_STORE_NS);
      presenterLogin = new LoginPresenter(loginAdapter);
      return presenterLogin;
    }
  });
};

export default presenter;

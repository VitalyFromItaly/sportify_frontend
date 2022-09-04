import { Context } from '@nuxt/types';
import BaseVuexStateHolder from '~/business/core/store/BaseVuexStateHolder';

import { IPresenter as ILoginPresenter, initLoginState } from '~/business/login/Domain';
import LoginPresenter from '~/business/login/Presenter';
import { LOGIN_STORE_NS } from '~/business/login/store/index';

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

      const loginAdapter = new BaseVuexStateHolder(store, initLoginState(), LOGIN_STORE_NS);
      presenterLogin = new LoginPresenter(loginAdapter);
      return presenterLogin;
    }
  });
};

export default presenter;

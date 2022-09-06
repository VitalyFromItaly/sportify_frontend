import { Context } from '@nuxt/types';
import BaseVuexStateHolder from '~/business/core/store/BaseVuexStateHolder';

import { IPresenter as ILoginPresenter, initAuthorizationState } from '~/business/authorization/Domain';
import LoginPresenter from '~/business/authorization/Presenter';
import { AUTHORIZATION_STORE_NS } from '~/business/authorization/store/index';

import { IPresenter as IUserPresenter, initUserState } from '~/business/user/Domain';
import UserPresenter from '~/business/user/Presenter';
import { USER_STORE_NS } from '~/business/user/store/index';

export interface IPresenterPlugin {
  loginInstance: ILoginPresenter;
  userInstance: IUserPresenter;
}

const presenter = (context: Context, inject: any) => {
  const { store } = context;

  let presenterLogin: ILoginPresenter;
  let presenterUser: IUserPresenter;

  inject('presenter', {
    get loginInstance(): ILoginPresenter {
      if (presenterLogin) {
        return presenterLogin;
      }

      const loginAdapter = new BaseVuexStateHolder(store, initAuthorizationState(), AUTHORIZATION_STORE_NS);
      presenterLogin = new LoginPresenter(loginAdapter);
      return presenterLogin;
    },

    get userInstance(): IUserPresenter {
      if (presenterUser) {
        return presenterUser;
      }

      const userAdapter = new BaseVuexStateHolder(store, initUserState(), USER_STORE_NS);
      presenterUser = new UserPresenter(userAdapter);
      return presenterUser;
    }
  });
};

export default presenter;

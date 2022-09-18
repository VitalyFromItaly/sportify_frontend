import { Context } from '@nuxt/types';
import BaseVuexStateHolder from '~/business/core/store/BaseVuexStateHolder';

import { IPresenter as IAuthPresenter, initAuthorizationState } from '~/business/authorization/Domain';
import AuthPresenter from '~/business/authorization/Presenter';
import { AUTHORIZATION_STORE_NS } from '~/business/authorization/store/index';

import { IPresenter as IUserPresenter, initUserState } from '~/business/user/Domain';
import UserPresenter from '~/business/user/Presenter';
import { USER_STORE_NS } from '~/business/user/store/index';

import { IPresenter as IContextPresenter, initContextState } from '~/business/context/Domain';
import ContextPresenter from '~/business/context/Presenter';
import { CONTEXT_STORE_NS } from '~/business/context/store/index';

export interface IPresenterPlugin {
  authInstance: IAuthPresenter;
  userInstance: IUserPresenter;
  contextInstance: IContextPresenter;
}

const presenter = (context: Context, inject: any) => {
  const { store } = context;

  let presenterAuth: IAuthPresenter;
  let presenterUser: IUserPresenter;
  let presenterContext: IContextPresenter;

  inject('presenter', {
    get contextInstance(): IContextPresenter {
      if (presenterContext) {
        return presenterContext;
      }

      const contextAdapter = new BaseVuexStateHolder(store, initContextState(), CONTEXT_STORE_NS);
      presenterContext = new ContextPresenter(contextAdapter);
      return presenterContext;
    },

    get authInstance(): IAuthPresenter {
      if (presenterAuth) {
        return presenterAuth;
      }

      const loginAdapter = new BaseVuexStateHolder(store, initAuthorizationState(), AUTHORIZATION_STORE_NS);
      presenterAuth = new AuthPresenter(loginAdapter);
      return presenterAuth;
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

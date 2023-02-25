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

import { IPresenter as IPlanPresenter, initTrainingPlanState } from '~/business/trainingPlan/Domain';
import PlanPresenter from '~/business/trainingPlan/Presenter';
import { TRAINING_PLAN_STORE_NS } from '~/business/trainingPlan/store/index';

import { IPresenter as IPlanActivityPresenter, initTrainingPlanActivityState } from '~/business/trainingPlanActivity/Domain';
import PlanActivityPresenter from '~/business/trainingPlanActivity/Presenter';
import { TRAINING_PLAN_ACTIVITY_STORE_NS } from '~/business/trainingPlanActivity/store/index';

export interface IPresenterPlugin {
  authInstance: IAuthPresenter;
  userInstance: IUserPresenter;
  contextInstance: IContextPresenter;
  trainingPlanInstance: IPlanPresenter;
  trainingPlanActivityInstance: IPlanActivityPresenter;
}

const presenter = (context: Context, inject: any) => {
  const { store } = context;

  let presenterAuth: IAuthPresenter;
  let presenterUser: IUserPresenter;
  let presenterContext: IContextPresenter;
  let presenterPlan: IPlanPresenter;
  let presenterPlanActivity: IPlanActivityPresenter;

  inject('presenter', {
    get trainingPlanInstance(): IPlanPresenter {
      if (presenterPlan) {
        return presenterPlan;
      }

      const planAdapter = new BaseVuexStateHolder(store, initTrainingPlanState(), TRAINING_PLAN_STORE_NS);
      presenterPlan = new PlanPresenter(planAdapter);
      return presenterPlan;
    },

    get trainingPlanActivityInstance(): IPlanActivityPresenter {
      if (presenterPlanActivity) {
        return presenterPlanActivity;
      }

      const planActivityAdapter = new BaseVuexStateHolder(store, initTrainingPlanActivityState(), TRAINING_PLAN_ACTIVITY_STORE_NS);
      presenterPlanActivity = new PlanActivityPresenter(planActivityAdapter);
      return presenterPlanActivity;
    },

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

import { Context } from '@nuxt/types';

import { AUTHORIZATION_STORE_NS, AuthorizationStoreModule } from '~/business/authorization/store/index';
import { USER_STORE_NS, UserStoreModule } from '~/business/user/store/index';
import { CONTEXT_STORE_NS, ContextStoreModule } from '~/business/context/store/index';
import { TRAINING_PLAN_STORE_NS, TrainingPlanStoreModule } from '~/business/trainingPlan/store/index';
import { TRAINING_PLAN_ACTIVITY_STORE_NS, TrainingPlanActivityStoreModule } from '~/business/trainingPlanActivity/store/index';

export default ({ store }: Context) => {
  // @ts-ignore
  store.registerModule(TRAINING_PLAN_STORE_NS, TrainingPlanStoreModule);
  // @ts-ignore
  store.registerModule(TRAINING_PLAN_ACTIVITY_STORE_NS, TrainingPlanActivityStoreModule);
  // @ts-ignore
  store.registerModule(CONTEXT_STORE_NS, ContextStoreModule);
  // @ts-ignore
  store.registerModule(USER_STORE_NS, UserStoreModule);
  // @ts-ignore
  store.registerModule(AUTHORIZATION_STORE_NS, AuthorizationStoreModule);
};

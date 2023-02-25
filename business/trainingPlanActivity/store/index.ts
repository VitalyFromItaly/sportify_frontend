import { namespace } from 'vuex-class';

export const TRAINING_PLAN_ACTIVITY_STORE_NS = 'Training-Plan-Activity';
export const trainingPlanActivityStoreModule = namespace(TRAINING_PLAN_ACTIVITY_STORE_NS);

export { default as TrainingPlanActivityStoreModule } from './TrainingPlanActivityStoreModule';

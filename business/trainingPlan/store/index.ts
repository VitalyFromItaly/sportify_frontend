import { namespace } from 'vuex-class';

export const TRAINING_PLAN_STORE_NS = 'Training-Plan';
export const trainingPlanStoreModule = namespace(TRAINING_PLAN_STORE_NS);

export { default as TrainingPlanStoreModule } from './TrainingPlanStoreModule';

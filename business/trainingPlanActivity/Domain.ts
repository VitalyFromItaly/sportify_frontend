import { TResponseResult } from '~/@types/domain';
import {
  CreateTrainingPlanActivityDto,
  ReadTrainingPlanActivityDto
} from '~/Api/Api';
import { TFetchState } from '~/business/core/Domain';
import { IVuexObservable } from '~/business/core/store/Domain';
import { TTrainingPlan } from '~/business/trainingPlan/Domain';

export type TState = TFetchState & {
  activities: ReadTrainingPlanActivityDto[],
  activity: ReadTrainingPlanActivityDto,
  trainingPlan: TTrainingPlan;
  trainingPlanId: number;
};

export interface IService {
  create(payload: CreateTrainingPlanActivityDto): Promise<TResponseResult>;
  read(id: number): Promise<ReadTrainingPlanActivityDto>;
  readAll(): Promise<ReadTrainingPlanActivityDto[]>;
  update(id: number, payload: Partial<CreateTrainingPlanActivityDto>): Promise<TResponseResult>;
  delete(id: number): Promise<TResponseResult>;
}

export interface IPresenter extends IVuexObservable<TState> {
  onCreate(payload: CreateTrainingPlanActivityDto): Promise<TResponseResult>;
  onGetOne(id: number): Promise<void>;
  onGetAll(): Promise<void>;
  onUpdate(payload: CreateTrainingPlanActivityDto): Promise<TResponseResult>;
  onDelete(id: number): Promise<TResponseResult>;
}

export const initTrainingPlanActivityState = (): TState => ({
  isLoading: false,
  isError: false,
  activities: [],
  activity: null,
  trainingPlan: null,
  trainingPlanId: null
});

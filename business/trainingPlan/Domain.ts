import { TResponseResult } from '~/@types/domain';
import { CreateTrainingPlanDto, ReadTrainingPlanDto, UpdateTrainingPlanDto } from '~/Api/Api';
import { TFetchState } from '~/business/core/Domain';
import { IVuexObservable } from '~/business/core/store/Domain';

export type TCreatePayload = CreateTrainingPlanDto;
export type TTrainingPlan = ReadTrainingPlanDto;
export type TUpdatePlanPayload = UpdateTrainingPlanDto;

export type TState = TFetchState & {
  trainingPlan: TTrainingPlan;
  trainingPlans: TTrainingPlan[];
};

export type TMountPayload = {

};

export interface IService {
  create(payload: TCreatePayload): Promise<TResponseResult>;
  readOne(id: number): Promise<TTrainingPlan>;
  readAll(): Promise<TTrainingPlan[]>;
  update(id: number, payload: any): Promise<TResponseResult>;
  delete(id: number): Promise<TResponseResult>;
}

export interface IPresenter extends IVuexObservable<TState> {
  onCreatePlan(payload: TCreatePayload): Promise<TResponseResult>;
  onGetOnePlan(id: number): Promise<void>;
  onGetAllPlans(): Promise<void>;
  onUpdatePlan(payload: TUpdatePlanPayload): Promise<TResponseResult>;
  onDeleteOne(id: number): Promise<TResponseResult>;
}

export const initTrainingPlanState = (): TState => ({
  isLoading: false,
  isError: false,
  trainingPlan: null,
  trainingPlans: []
});

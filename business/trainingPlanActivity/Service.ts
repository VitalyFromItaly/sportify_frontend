import type { IService } from './Domain';
import { CreateTrainingPlanActivityDto, ReadTrainingPlanActivityDto } from '~/Api/Api';
import { TResponseResult } from '~/@types/domain';
import webSocket from '~/core/ws/WebSocket';

export default class Service implements IService {
  create(payload: CreateTrainingPlanActivityDto): Promise<TResponseResult> {
    return webSocket.emit<TResponseResult>('training-plan-activity:create', payload);
  }

  delete(id: number): Promise<TResponseResult> {
    console.log('delete', id);
    return Promise.resolve(undefined);
  }

  readAll(): Promise<ReadTrainingPlanActivityDto[]> {
    return Promise.resolve([]);
  }

  read(id: number): Promise<ReadTrainingPlanActivityDto> {
    return webSocket.emit<ReadTrainingPlanActivityDto>('training-plan-activity:read', id);
  }

  update(id: number, payload: Partial<CreateTrainingPlanActivityDto>): Promise<TResponseResult> {
    console.log('update', id, payload);
    return Promise.resolve(undefined);
  }
}

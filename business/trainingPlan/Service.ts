import type { IService, TCreatePayload, TUpdatePlanPayload } from './Domain';
import type { IBrowserStorage } from '~/core/cache/Domain';
import { ReadTrainingPlanDto } from '~/Api/Api';
import cache from '~/core/cache/cache';
import { EHttpCodes } from '~/@types/http';
import { IApi, ISwagger } from '~/@types/plugins';
import { TResponseResult } from '~/@types/domain';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  private readonly swagger: ISwagger['trainingPlan'];
  constructor(swagger: IApi) {
    this.cache = cache;
    this.swagger = swagger.swagger.trainingPlan;
  }

  public async create(payload: TCreatePayload): Promise<TResponseResult> {
    const { data, status } = await this.swagger.create(payload);
    if (status !== EHttpCodes.CREATED) {
      return null;
    }

    return data;
  }

  public async readOne(id: number): Promise<ReadTrainingPlanDto> {
    const { data, status } = await this.swagger.readOne(id);
    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }

    return data;
  }

  public async readAll(): Promise<ReadTrainingPlanDto[]> {
    const { data, status } = await this.swagger.readAll();
    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }

    return data;
  }

  public async update(id: number, payload: TUpdatePlanPayload): Promise<TResponseResult> {
    const { data, status } = await this.swagger.update(id, payload);
    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }

    return data;
  }

  public async delete(id: number): Promise<TResponseResult> {
    const { data, status } = await this.swagger.delete(id);
    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }

    return data;
  }
}

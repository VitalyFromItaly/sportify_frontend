import { IService, TUser } from './Domain';
import { EHttpCodes } from '~/@types/http';
import cache from '~/core/cache/cache';
import { IBrowserStorage } from '~/core/cache/Domain';

import { Api } from '~/Api/Api';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  private readonly swagger: Api<unknown>;
  constructor(swagger: Api<unknown>) {
    this.cache = cache;
    this.swagger = swagger;
  }

  public async read(): Promise<TUser> {
    const response = await this.swagger.user.get();
    if (response.status !== EHttpCodes.SUCCESS) {
      return null;
    }

    const user = await response.json();

    return user;
  }
}
---
to: business/<%= section %>/<%= name %>/Service.ts
---
import { IService } from './Domain';
import { IBrowserStorage } from '~/core/cache/Domain';
import { Api } from '~/Api/Api';
import cache from '~/core/cache/cache';
import { EHttpCodes } from '~/@types/http';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  private readonly swagger: Api<unknown>;
  constructor(swagger: Api<unknown>) {
    this.cache = cache;
    this.swagger = swagger;
  }

  public async read(payload: TPayload): Promise<any> {
    const { data, status } = await this.swagger.auth.login(payload);
    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }

    this.cache.set<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH, data, ONE_DAY);
    return data;
  }
}

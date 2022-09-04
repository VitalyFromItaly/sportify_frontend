---
to: business/<%= section %>/<%= name %>/Service.ts
---
import { IService, EUrls } from './Domain';
import { IBrowserStorage } from '~/core/cache/Domain';
import { EHttpCodes } from '~/@types/http';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  private readonly swagger: Api<unknown>;
  constructor(swagger: Api<unknown>) {
    const { $cache, $axios } = context;
    this.cache = $cache;
    this.swagger = swagger;
  }

  async read(id: number): Promise<any> {
    const { data, status } = await this.axios.get<any>(EUrls.COUNTRIES_DICTIONARY + `/${id}`);

    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }
    return data;
  }
}

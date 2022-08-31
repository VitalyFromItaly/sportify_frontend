---
to: business/<%= section %>/<%= name %>/Service.ts
---
import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { IService, EUrls } from './Domain';
import { IBrowserStorage } from '~/core/cache/Domain';
import { EHttpCodes } from '~/@types/http';
import { context } from '~/core/context';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  private readonly axios: NuxtAxiosInstance;
  constructor() {
    const { $cache, $axios } = context;
    this.cache = $cache;
    this.axios = $axios;
  }

  async read(id: number): Promise<any> {
    const { data, status } = await this.axios.get<any>(EUrls.COUNTRIES_DICTIONARY + `/${id}`);

    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }
    return data;
  }
}

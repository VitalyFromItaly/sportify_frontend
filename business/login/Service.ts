import { IService } from './Domain';
import { IBrowserStorage } from '~/core/cache/Domain';
// import { EHttpCodes } from '~/@types/http';
import { Api } from '~/Api/Api';
import { context } from '~/core/context';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  private readonly swagger: Api<unknown>;
  constructor(swagger: Api<unknown>) {
    const { $cache } = context;
    this.cache = $cache;
    this.swagger = swagger;
  }

  async read(): Promise<any> {
    // const { data, status } = await this.axios.get<any>(EUrls.COUNTRIES_DICTIONARY + `/${id}`);

    // if (status !== EHttpCodes.SUCCESS) {
    //   return null;
    // }
    // return data;
  }
}

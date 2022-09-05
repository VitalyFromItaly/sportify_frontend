import { IService, TLoginForm } from './Domain';
import { IBrowserStorage } from '~/core/cache/Domain';
// import { EHttpCodes } from '~/@types/http';
import { Api, CreateUserDto } from '~/Api/Api';
import { context } from '~/core/context';
import { EHttpCodes } from '~/@types/http';
import { TTokensInfo } from '~/core/auth/IAuth';
import { EAuthKeys, EAuthTags } from '~/@types/cache';
import { ONE_DAY } from '~/constants/time';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  private readonly swagger: Api<unknown>;
  constructor(swagger: Api<unknown>) {
    const { $cache } = context;
    this.cache = $cache;
    this.swagger = swagger;
  }

  public async login(payload: TLoginForm): Promise<any> {
    const { data, status } = await this.swagger.auth.login(payload);
    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }

    this.cache.set<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH, data, ONE_DAY);
    return data;
  }

  register(payload: CreateUserDto): Promise<any> {
    throw new Error('Method not implemented.');
  }

  logout(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

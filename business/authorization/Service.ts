import { IService, TLoginForm, TRegisterForm } from './Domain';
import { Api } from '~/Api/Api';
import { EHttpCodes } from '~/@types/http';
import { TTokensInfo } from '~/core/auth/IAuth';
import { EAuthKeys, EAuthTags } from '~/@types/cache';
import { ONE_DAY } from '~/constants/time';
import { IBrowserStorage } from '~/core/cache/Domain';
import cache from '~/core/cache/cache';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  private readonly swagger: Api<unknown>;
  constructor(swagger: Api<unknown>) {
    this.cache = cache;
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

  public async register(payload: TRegisterForm): Promise<any> {
    const { data: { status } } = await this.swagger.user.create(payload);
    return status;
  }

  public logout(): void {
    this.cache.remove(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
  }
}

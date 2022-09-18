import { IService, TComment, TCreateResponse, TUpdateUser, TUser } from './Domain';
import { EHttpCodes } from '~/@types/http';
import cache from '~/core/cache/cache';
import { IBrowserStorage } from '~/core/cache/Domain';
import { ISwagger } from '~/@types/plugins';

export default class Service implements IService {
  private readonly cache: IBrowserStorage = cache;
  constructor(private swagger: ISwagger) {
    this.swagger = swagger;
  }

  public async read(): Promise<TUser> {
    const response = await this.swagger.user.get();
    if (response.status !== EHttpCodes.SUCCESS) {
      return null;
    }

    return await response.json();
  }

  public async update(payload: TUpdateUser): Promise<TUser> {
    const response = await this.swagger.user.update(payload);
    if (response.status !== EHttpCodes.SUCCESS) {
      return null;
    }

    return await response.json();
  }

  public async postComment(payload: TComment): Promise<TCreateResponse> {
    const response = await this.swagger.user.leaveComment(payload);
    return await response.json();
  }
}

import { IService, TComment, TCreateResponse, TUpdateUser, TUser } from './Domain';
import { EHttpCodes } from '~/@types/http';
import cache from '~/core/cache/cache';
import { IBrowserStorage } from '~/core/cache/Domain';
import { ISwagger } from '~/@types/plugins';
import webSocket from '~/core/ws/WebSocket';

export default class Service implements IService {
  private readonly cache: IBrowserStorage = cache;
  constructor(private swagger: ISwagger) {
    this.swagger = swagger;
  }

  public async read(): Promise<TUser> {
    try {
      return await webSocket.emit<TUser>('user:getUser');
    } catch (e) {
      console.log('error load user', e);
      return null;
    }
  }

  public async update(payload: TUpdateUser): Promise<TUser> {
    const { data, status } = await this.swagger.user.update(payload);
    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }

    return data;
  }

  public async postComment(payload: TComment): Promise<TCreateResponse['status']> {
    const { status, data } = await this.swagger.user.leaveComment(payload);
    if (status !== EHttpCodes.CREATED) {
      return null;
    }

    return data.status;
  }
}

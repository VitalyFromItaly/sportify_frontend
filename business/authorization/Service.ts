import { IService, TLoginForm } from './Domain';
import { IBrowserStorage } from '~/core/cache/Domain';
// import { EHttpCodes } from '~/@types/http';
import { Api, CreateUserDto } from '~/Api/Api';
import { context } from '~/core/context';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  private readonly swagger: Api<unknown>;
  constructor(swagger: Api<unknown>) {
    const { $cache } = context;
    this.cache = $cache;
    this.swagger = swagger;
  }

  public async login(payload: TLoginForm): Promise<any> {
    const response = await this.swagger.auth.login(payload);
    console.log({ response });
  }

  register(payload: CreateUserDto): Promise<any> {
    throw new Error('Method not implemented.');
  }

  logout(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

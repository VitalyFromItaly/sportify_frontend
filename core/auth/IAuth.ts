/* eslint-disable no-unused-vars */
import { CreateUserDto, User, ResponseCreateUser, UserCredsDto, TokenDto } from '~/Api/Api';
export type TResponseUserCreate = ResponseCreateUser;
export type TRegisterPayload = CreateUserDto;
export type TTokensInfo = TokenDto;
export type TLogin = UserCredsDto;
export type TUser = User;
export type TTokenType = 'refresh_token' | 'access_token';

export enum ETokens {
  REFRESH = 'refresh_token',
  ACCESS = 'access_token'
}
export default interface IAuth {
  // register(payload: TRegisterPayload): Promise<TResponseUserCreate>;
  // login(payload: TLogin): Promise<TTokensInfo>;
  getAccessToken(): TTokensInfo['access_token'];
  updateAccessToken(): Promise<void>;
  checkTokens(): Promise<void>;
  updateTokens(): Promise<void>;
  getRefreshToken(): TTokensInfo['refresh_token'];
}

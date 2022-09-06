/* eslint-disable no-unused-vars */
import { CreateUserDto, User, ResponseCreateUser, UserCredsDto, TokenDto } from '~/Api/Api';
export type TResponseUserCreate = ResponseCreateUser;
export type TRegisterPayload = CreateUserDto;
export type TTokensInfo = TokenDto;
export type TLogin = UserCredsDto;
export type TUser = User;
export type TTokenType = 'refresh_token' | 'access_token';

export type TAccessToken = Omit<TTokensInfo, 'refresh_token'| 'refresh_token_expires_in'>;
export type TRefreshToken = Omit<TTokensInfo, 'access_token'| 'access_token_expires_in'>;

export enum ETokens {
  REFRESH = 'refresh_token',
  ACCESS = 'access_token'
}
export default interface IAuth {
  getAccessToken(): TAccessToken;
  updateAccessToken(): Promise<void>;
  checkTokens(): Promise<void>;
  updateTokens(): Promise<void>;
  getRefreshToken(): TRefreshToken;
  getTokens(): TTokensInfo;
  isAuth(): boolean;
}

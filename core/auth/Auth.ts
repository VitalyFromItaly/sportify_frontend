// import PermissionDenied from '../errors/PermissionDenied';
import has from 'lodash/has';
import IAuth, { ETokens, TAccessToken, TRefreshToken, TTokensInfo, TTokenType } from './IAuth';
import cache from '~/core/cache/cache';
import { EAuthKeys, EAuthTags } from '~/@types/cache';
import { RefreshTokenDto, TokenDto } from '~/Api/Api';
import { context } from '../context';
import { TRouteEventPayload } from '~/@types/domain';
import { EEventBusName } from '../bus/Domain';

export default class Auth implements IAuth {
  private tokensInfo = {} as TTokensInfo;
  private CACHE_TTL = 60 * 60 * 24; // one day
  private CHECK_MINUTES_LEFT = 5; // 5 mins
  constructor(private baseUrl: string) {}

  public isAuth(): boolean {
    const { access_token } = this.getAccessToken() || {};
    return !!access_token;
  }

  public async checkTokens(): Promise<void> {
    if (!this.hasTokens()) {
      this.redirectToAuthPage();
      return;
    }

    const isRefreshTokenExpired = this.isTokenExpired(ETokens.REFRESH);
    if (isRefreshTokenExpired) {
      await this.updateTokens();
    }

    const isAccessTokenExpired = this.isTokenExpired(ETokens.ACCESS);
    if (isAccessTokenExpired) {
      await this.updateAccessToken();
    }
  }

  private isTokenExpired(tokenType: TTokenType): boolean {
    let token, expiresIn;

    if (tokenType === ETokens.REFRESH) {
      const { refresh_token, refresh_token_expires_in } = this.getTokens();
      console.log({ refresh_token, refresh_token_expires_in });
      token = refresh_token;
      expiresIn = refresh_token_expires_in;
    }

    if (tokenType === ETokens.ACCESS) {
      const { access_token, access_token_expires_in } = this.getTokens();
      token = access_token;
      expiresIn = access_token_expires_in;
    }

    if (!token || !expiresIn) {
      return true;
    }

    let diff = (expiresIn - Date.now()) / 1000;
    let minutesLeft = 0;
    if (diff > 0) {
      diff /= 180; // 3 mins
      minutesLeft = Math.abs(Math.round(diff));
    }

    return minutesLeft < this.CHECK_MINUTES_LEFT;
  }

  public getTokens(): TTokensInfo {
    if (this.hasTokens()) {
      return this.tokensInfo;
    }

    const tokenInfo = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    if (!tokenInfo) {
      return null;
    }

    this.setTokenInfo(tokenInfo);
    return tokenInfo;
  }

  private redirectToAuthPage(): void {
    alert('redirect');
    context.$bus.emit<TRouteEventPayload>(EEventBusName.ROUTER, {
      name: 'sign-in'
    });
  }

  public async updateAccessToken(): Promise<void> {
    const { refresh_token } = this.getRefreshToken();
    const { access_token, access_token_expires_in } = await this.refreshAccessToken({ refresh_token });
    this.tokensInfo.access_token = access_token;
    this.tokensInfo.access_token_expires_in = access_token_expires_in;
    this.setTokenInfo(this.tokensInfo);
  }

  private async refreshAccessToken(data: RefreshTokenDto): Promise<TokenDto> {
    const response = await fetch(this.baseUrl + '/auth/refresh-access-token', {
      method: 'GET',
      headers: {
        Authorization: `Token ${data.refresh_token}`
      }
      // body: JSON.stringify(data)
      // credentials: 'include',

    });

    if (response.status !== 200) {
      throw new Error('Ошибка при обновлении токена');
    }

    return await response.json();
  }

  public async updateTokens(): Promise<void> {
    const { refresh_token } = this.getRefreshToken();
    const data = await this.refreshTokens({ refresh_token });
    this.setTokenInfo(data);
  }

  private async refreshTokens(data: RefreshTokenDto): Promise<TokenDto> {
    const response = await fetch(this.baseUrl + '/auth/refresh-tokens', {
      method: 'GET',
      headers: { Authorization: `Token ${data.refresh_token}` }
    });

    if (response.status !== 200) {
      throw new Error('Ошибка при обновлении токена');
    }

    return await response.json();
  }

  private setTokenInfo(tokenInfo: TTokensInfo): void {
    cache.set(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH, tokenInfo, this.CACHE_TTL);
    this.tokensInfo = tokenInfo;
  }

  public getRefreshToken(): TRefreshToken {
    if (this.tokensInfo) {
      const { refresh_token, refresh_token_expires_in } = this.tokensInfo;
      return { refresh_token, refresh_token_expires_in };
    }

    const { refresh_token, refresh_token_expires_in } = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    if (!refresh_token) {
      return null;
    }

    this.tokensInfo.refresh_token = refresh_token;
    this.tokensInfo.refresh_token_expires_in = refresh_token_expires_in;
    return { refresh_token, refresh_token_expires_in };
  }

  private hasTokens(): boolean {
    const hasLocalTokens = has(this.tokensInfo, ETokens.ACCESS) && has(this.tokensInfo, ETokens.REFRESH);
    if (hasLocalTokens) {
      return true;
    }

    const cacheTokens = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    if (cacheTokens) {
      this.setTokenInfo(cacheTokens);
    }

    return !!cacheTokens;
  }

  public getAccessToken(): TAccessToken {
    if (this.hasTokens()) {
      const { access_token, access_token_expires_in } = this.tokensInfo;
      return { access_token, access_token_expires_in };
    }

    const { access_token, access_token_expires_in } = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH) || {};

    if (!access_token) {
      return null;
    }

    this.tokensInfo.access_token = access_token;
    this.tokensInfo.access_token_expires_in = access_token_expires_in;
    return { access_token, access_token_expires_in };
  }
}

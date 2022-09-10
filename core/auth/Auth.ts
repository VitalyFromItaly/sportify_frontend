// import PermissionDenied from '../errors/PermissionDenied';
import { EEventBusName } from '../bus/Domain';
import { context } from '../context';
import IAuth, { ETokens, TAccessToken, TRefreshToken, TTokensInfo, TTokenType } from './IAuth';
import cache from '~/core/cache/cache';
import { EAuthKeys, EAuthTags } from '~/@types/cache';
import { TokenDto } from '~/Api/Api';
import { TRouteEventPayload } from '~/@types/domain';

export default class Auth implements IAuth {
  private CACHE_TTL = 60 * 60 * 24; // one day
  private CHECK_MINUTES_LEFT = 5; // 5 mins
  constructor(private baseUrl: string) {}

  public isAuth(): boolean {
    const { access_token } = this.getAccessToken() || {};
    return !!access_token;
  }

  public async checkTokens(): Promise<void> {
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
      const { refresh_token, refresh_token_expires_in } = this.getTokens() || {};
      token = refresh_token;
      expiresIn = refresh_token_expires_in;
    }

    if (tokenType === ETokens.ACCESS) {
      const { access_token, access_token_expires_in } = this.getTokens() || {};
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
    const tokenInfo = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    if (!tokenInfo) {
      return null;
    }

    this.setTokenInfo(tokenInfo);
    return tokenInfo;
  }

  private redirectToAuthPage(): void {
    context.$bus.emit<TRouteEventPayload>(EEventBusName.ROUTER, {
      name: 'sign-in'
    });
  }

  public async updateAccessToken(): Promise<void> {
    const { refresh_token } = this.getRefreshToken() || {};
    if (!refresh_token) {
      this.redirectToAuthPage();
    }

    const tokens = await this.refreshAccessToken(refresh_token);
    if (!tokens) {
      return;
    }
    this.setTokenInfo(tokens);
  }

  private async refreshAccessToken(refreshToken: string): Promise<TokenDto> {
    if (!refreshToken) {
      return null;
    }
    const response = await context.$api.swagger.auth.refreshAccessToken({ refresh_token: refreshToken });
    // const response = await fetch(this.baseUrl + '/auth/refresh-access-token', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Token ${this.getAccessToken().access_token}`,
    //     credentials: 'include',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ refresh_token: refreshToken })
    // });

    if (response.status !== 200) {
      throw new Error('Ошибка при обновлении токена');
    }

    return await response.json();
  }

  private async updateTokens(): Promise<void> {
    const { refresh_token } = this.getRefreshToken() || {};
    if (!refresh_token) {
      this.redirectToAuthPage();
    }
    const data = await this.refreshTokens(refresh_token);
    this.setTokenInfo(data);
  }

  private async refreshTokens(refresh_token: string): Promise<TokenDto> {
    if (!refresh_token) {
      return;
    }

    const response = await context.$api.swagger.auth.refreshTokens({ refresh_token });

    if (response.status !== 200) {
      throw new Error('Ошибка при обновлении токена');
    }

    return await response.json();
  }

  private setTokenInfo(tokenInfo: TTokensInfo): void {
    const tokens = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    for (const item in tokenInfo) {
      // @ts-ignore
      tokens[item] = tokenInfo[item];
    }
    cache.set(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH, tokens, this.CACHE_TTL);
  }

  public getRefreshToken(): TRefreshToken {
    const tokens = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    if (!tokens) {
      return null;
    }
    const { refresh_token, refresh_token_expires_in } = tokens || {};
    if (!refresh_token) {
      return null;
    }

    return { refresh_token, refresh_token_expires_in };
  }

  private hasTokens(): boolean {
    const cacheTokens = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    if (cacheTokens) {
      this.setTokenInfo(cacheTokens);
      return true;
    }

    return false;
  }

  public getAccessToken(): TAccessToken {
    const { access_token, access_token_expires_in } = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH) || {};

    if (!access_token) {
      return null;
    }

    return { access_token, access_token_expires_in };
  }
}

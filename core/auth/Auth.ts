// import PermissionDenied from '../errors/PermissionDenied';
import IAuth, { ETokens, TTokensInfo, TTokenType } from './IAuth';
import cache from '~/core/cache/cache';
import { EAuthKeys, EAuthTags } from '~/@types/cache';
import { RefreshTokenDto, TokenDto } from '~/Api/Api';

export default class Auth implements IAuth {
  private tokensInfo: TTokensInfo;
  private CACHE_TTL = 60 * 60 * 24; // one day
  private CHECK_MINUTES_LEFT = 5; // 5 mins
  constructor(private baseUrl: string) {}

  public async checkTokens(): Promise<void> {
    const tokens = this.getTokensFromCache();
    if (!tokens) {
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

  isTokenExpired(tokenType: TTokenType): boolean {
    let token, expiresIn;

    if (tokenType === ETokens.REFRESH) {
      const { refresh_token, refresh_token_expires_in } = this.getTokensFromCache();
      token = refresh_token;
      expiresIn = refresh_token_expires_in;
    }

    if (tokenType === ETokens.ACCESS) {
      const { access_token, access_token_expires_in } = this.getTokensFromCache();
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

  private redirectToAuthPage(): void {
    window.location.replace('/');
  }

  public async updateAccessToken(): Promise<void> {
    const { access_token, access_token_expires_in } = await this.refreshAccessToken({ refresh_token: this.getRefreshToken() });
    this.tokensInfo.access_token = access_token;
    this.tokensInfo.access_token_expires_in = access_token_expires_in;
    this.setTokenInfo(this.tokensInfo);
  }

  private async refreshAccessToken(data: RefreshTokenDto): Promise<TokenDto> {
    const response = await fetch(this.baseUrl + '/auth/refresh-access-token', {
      method: 'GET',
      body: JSON.stringify(data)
      // credentials: 'include',

    });

    if (response.status !== 200) {
      throw new Error('Ошибка при обновлении токена');
    }

    return await response.json();
  }

  public async updateTokens(): Promise<void> {
    const data = await this.refreshTokens({ refresh_token: this.getRefreshToken() });
    this.setTokenInfo(data);
  }

  private async refreshTokens(data: RefreshTokenDto): Promise<TokenDto> {
    const response = await fetch(this.baseUrl + '/auth/refresh-tokens', {
      method: 'GET',
      body: JSON.stringify(data)
      // credentials: 'include',
    });

    if (response.status !== 200) {
      throw new Error('Ошибка при обновлении токена');
    }

    return await response.json();
  }

  // public async register(payload: TRegisterPayload): Promise<TResponseUserCreate> {
  //   const { data, status } = await this.userApi.create(payload);
  //   console.log({ data, status });
  //   return data;
  // }

  // public async login(payload: TLogin): Promise<TTokensInfo> {
  //   const { data, status } = await this.authApi.login(payload);
  //   if (!data) {
  //     throw new PermissionDenied();
  //   }

  //   console.log({ data, status });

  //   cache.set(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH, data, this.CACHE_TTL);
  //   this.setTokenInfo(data);
  //   return data;
  // }

  public getTokensFromCache(): TTokensInfo {
    const tokenInfo = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    if (!tokenInfo) {
      this.redirectToAuthPage();
      return;
    }

    this.setTokenInfo(tokenInfo);
    return tokenInfo;
  }

  private setTokenInfo(tokenInfo: TTokensInfo): void {
    cache.set(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH, tokenInfo, this.CACHE_TTL);
    this.tokensInfo = tokenInfo;
  }

  public getRefreshToken(): TTokensInfo['refresh_token'] {
    if (this.tokensInfo.refresh_token) {
      return this.tokensInfo.refresh_token;
    }

    const { refresh_token: token } = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    if (!token) {
      return null;
    }

    this.tokensInfo.refresh_token = token;
    return token;
  }

  public getAccessToken(): TTokensInfo['refresh_token'] {
    if (this.tokensInfo?.access_token) {
      return this.tokensInfo.access_token;
    }

    const tokensInfo = cache.get<TTokensInfo>(EAuthKeys.FULL_TOKEN_INFO, EAuthTags.AUTH);
    if (!tokensInfo) {
      return null;
    }
    const { access_token } = tokensInfo;
    if (!access_token) {
      return null;
    }

    this.tokensInfo.access_token = access_token;
    return access_token;
  }
}

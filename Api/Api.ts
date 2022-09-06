/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface User {
  /**
   * user`s uniq id
   * @example 45
   */
  id: number;

  /**
   * user`s email
   * @example email@email.com
   */
  email: string;

  /**
   * date user was created
   * @format date-time
   * @example 2022-07-31 22:13:20.794424
   */
  created_at: string;

  /**
   * date user was updated
   * @format date-time
   * @example 2022-07-31 22:13:20.794424
   */
  updated_at: string;

  /**
   * user`s gender
   * @example 2
   */
  gender: number;

  /**
   * user`s height
   * @example 178
   */
  height: number | null;

  /**
   * user`s weight
   * @example 78
   */
  weight: number | null;

  /**
   * user`s age
   * @example 78
   */
  age: number | null;

  /**
   * user`s age
   * @example 78
   */
  dominant_hand: number;
}

export interface CreateUserDto {
  /**
   * user`s email
   * @example awesomeemail@gmail.com
   */
  email: string;

  /**
   * user`s password
   * @example awesomePassword123!@#
   */
  password: string;

  /**
   * user`s password confirmation
   * @example awesomePassword123!@#
   */
  password_confirm: string;
}

export interface ResponseCreateUser {
  /**
   * response status: success | error
   * @example success
   */
  status: string;

  /**
   * status code
   * @example 201
   */
  statusCode: number;
}

export enum EGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export enum EDominantHand {
  RIGHT = "RIGHT",
  LEFT = "LEFT",
}

export interface UpdateUserProfileDto {
  /**
   * user`s uniq id
   * @example 45
   */
  id: number;

  /**
   * user`s gender
   * @example 2
   */
  gender: EGender;

  /**
   * user`s height
   * @min 80
   * @max 250
   * @example 178
   */
  height: number;

  /**
   * user`s weight
   * @min 30
   * @max 300
   * @example 78
   */
  weight: number;

  /**
   * user`s age
   * @example 78
   */
  age: number;

  /**
   * user`s dominant hand (left or right)
   * @example 1
   */
  dominant_hand: EDominantHand;
}

export interface UserCredsDto {
  /**
   * user`s email
   * @example awesomeemail@gmail.com
   */
  email: string;

  /**
   * user`s password
   * @example awesomePassword123!@#
   */
  password: string;
}

export interface TokenDto {
  /** access token */
  access_token: string;

  /** access token */
  refresh_token: string;

  /**
   * when access_token will be expired
   * @example 1243464554
   */
  access_token_expires_in: number;

  /**
   * when refresh_token will be expired
   * @example 1243464554
   */
  refresh_token_expires_in: number;
}

export interface RefreshTokenDto {
  /** refresh token */
  refresh_token: string;
}

export namespace User {
  /**
   * No description
   * @tags User
   * @name FetchUserById
   * @request GET:/user/{id}
   * @secure
   * @response `201` `User` create user
   */
  export namespace FetchUserById {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags User
   * @name Create
   * @request POST:/user/create
   * @response `201` `ResponseCreateUser` create user
   * @response `400` `void` user can not register
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = ResponseCreateUser;
  }
  /**
   * No description
   * @tags User
   * @name UpdateUserProfile
   * @request PUT:/user/update-profile
   * @secure
   * @response `200` `void`
   */
  export namespace UpdateUserProfile {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateUserProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags User
   * @name Get
   * @request GET:/user
   * @secure
   * @response `default` `User` get user info by token
   */
  export namespace Get {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Auth {
  /**
   * No description
   * @tags Auth
   * @name Login
   * @request POST:/auth/login
   * @response `201` `TokenDto` login
   */
  export namespace Login {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserCredsDto;
    export type RequestHeaders = {};
    export type ResponseBody = TokenDto;
  }
  /**
   * No description
   * @tags Auth
   * @name RefreshAccessToken
   * @request GET:/auth/refresh-access-token
   * @secure
   * @response `default` `TokenDto` refresh tokens
   */
  export namespace RefreshAccessToken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RefreshTokenDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Auth
   * @name RefreshTokens
   * @request GET:/auth/refresh-tokens
   * @secure
   * @response `default` `TokenDto` refresh tokens
   */
  export namespace RefreshTokens {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RefreshTokenDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Sportify Api
 * @version 1.0
 * @contact
 *
 * Sportify API description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  user = {
    /**
     * No description
     *
     * @tags User
     * @name FetchUserById
     * @request GET:/user/{id}
     * @secure
     * @response `201` `User` create user
     */
    fetchUserById: (id: string, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/user/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name Create
     * @request POST:/user/create
     * @response `201` `ResponseCreateUser` create user
     * @response `400` `void` user can not register
     */
    create: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<ResponseCreateUser, void>({
        path: `/user/create`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UpdateUserProfile
     * @request PUT:/user/update-profile
     * @secure
     * @response `200` `void`
     */
    updateUserProfile: (data: UpdateUserProfileDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/update-profile`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name Get
     * @request GET:/user
     * @secure
     * @response `default` `User` get user info by token
     */
    get: (params: RequestParams = {}) =>
      this.request<any, User>({
        path: `/user`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name Login
     * @request POST:/auth/login
     * @response `201` `TokenDto` login
     */
    login: (data: UserCredsDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name RefreshAccessToken
     * @request GET:/auth/refresh-access-token
     * @secure
     * @response `default` `TokenDto` refresh tokens
     */
    refreshAccessToken: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<any, TokenDto>({
        path: `/auth/refresh-access-token`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name RefreshTokens
     * @request GET:/auth/refresh-tokens
     * @secure
     * @response `default` `TokenDto` refresh tokens
     */
    refreshTokens: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<any, TokenDto>({
        path: `/auth/refresh-tokens`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}

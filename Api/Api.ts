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

export enum ELanguages {
  En = "en",
  Ru = "ru",
}

export interface ActivityEntity {
  /** uniq id */
  id: number;

  /** calories burn per minute */
  calorie_cost: number;

  /** activity name en */
  name_en: string;

  /** activity name ru */
  name_ru: string;

  /** activity icon */
  icon: string;

  /**
   * activity type
   * @example 2
   */
  type: number;

  /**
   * activity was created
   * @format date-time
   * @example 2022-07-31 22:13:20.794424
   */
  created_at: string;

  /**
   * activity was updated
   * @format date-time
   * @example 2022-07-31 22:13:20.794424
   */
  updated_at: string;
}

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
   * user`s training goal
   * @example 0
   */
  goal: number;

  /**
   * user`s age
   * @format date-time
   * @example "1916-07-15T18:30:00.000Z"
   */
  birthday: string | null;

  /**
   * user status
   * @example 0
   */
  status: number;

  /** user chosen language */
  language: ELanguages;

  /** user activities  */
  activities: ActivityEntity[];
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

  /** system language */
  language?: ELanguages;
}

export enum EHttpStatus {
  Success = "success",
  Error = "error",
}

export interface CreateResponse {
  /**
   * response status: success | error
   * @example success
   */
  status: EHttpStatus;

  /**
   * status code
   * @example 201
   */
  statusCode: number;
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
  gender?: number;

  /**
   * user`s height
   * @min 80
   * @max 250
   * @example 178
   */
  height?: number;

  /**
   * user`s weight
   * @min 30
   * @max 300
   * @example 78
   */
  weight?: number;

  /**
   * user`s goal
   * @example 2
   */
  goal?: number;

  /**
   * user`s age
   * @format date-time
   * @example "1916-07-15T18:30:00.000Z"
   */
  birthday?: string | null;

  /**
   * user status
   * @example 0
   */
  status?: number;

  /** user chosen language */
  language?: ELanguages;

  /** user activities  */
  activities?: ActivityEntity[];
}

export interface CommentDto {
  /**
   * user comment in user profile settings
   * @example your app is awesome
   */
  comment: string;
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

export interface AbstractSelectDto {
  value: object;
  text_en: string;
  text_ru: string;
}

export interface DictionaryDto {
  /** goals */
  goals: AbstractSelectDto[];

  /** activities */
  activities: ActivityEntity[];

  /** activity types */
  activity_types: AbstractSelectDto[];
}

export interface CreateTrainingPlanDto {
  /**
   * user`s training goal
   * @min 0
   * @max 3
   * @example 0
   */
  goal: number;

  /**
   * date user start the plan
   * @format date-time
   */
  start_date: string;

  /**
   * durations of the plan
   * @min 1
   * @max 6
   */
  duration: number;
}

export interface CommandResult {
  /** id of created object */
  id: number;

  /**
   * response status: success | error
   * @example success
   */
  status: EHttpStatus;
}

export interface TrainingPlanActivityEntity {
  /**
   * activity`s uniq id
   * @example 45
   */
  id: number;

  /** activity dictionary id */
  activityId: number;

  /**
   * datetime user start the activity
   * @format date-time
   */
  start_date: string;

  /**
   * datetime user end the activity
   * @format date-time
   */
  end_date: string;

  /** json extra the activity */
  extra: object;

  /** comment the activity */
  comment: string;

  /**
   * date user was created
   * @format date-time
   * @example 2022-07-31 22:13:20.794424
   */
  created_at: string;

  /**
   * date user was created
   * @format date-time
   * @example 2022-07-31 22:13:20.794424
   */
  updated_at: string;
}

export interface ReadTrainingPlanDto {
  /**
   * plan`s uniq id
   * @example 45
   */
  id: number;

  /**
   * user`s training goal
   * @min 0
   * @max 3
   * @example 0
   */
  goal: number;

  /**
   * date user start the plan
   * @format date-time
   */
  start_date: string;

  /**
   * durations of the plan
   * @min 1
   * @max 6
   */
  duration: number;

  /** user plan activities */
  activities: TrainingPlanActivityEntity[];

  /**
   * date user was created
   * @format date-time
   * @example 2022-07-31 22:13:20.794424
   */
  created_at: string;

  /**
   * date user was created
   * @format date-time
   * @example 2022-07-31 22:13:20.794424
   */
  updated_at: string;
}

export interface UpdateTrainingPlanDto {
  /**
   * plan`s uniq id
   * @example 45
   */
  id?: number;

  /**
   * user`s training goal
   * @min 0
   * @max 3
   * @example 0
   */
  goal?: number;

  /**
   * date user start the plan
   * @format date-time
   */
  start_date?: string;

  /**
   * durations of the plan
   * @min 1
   * @max 6
   */
  duration?: number;

  /** user plan activities */
  activities?: ActivityEntity[];
}

export interface CreateTrainingPlanActivityDto {
  /**
   * date user start the activity
   * @format date-time
   */
  start_date: string;

  /**
   * date user end the activity
   * @format date-time
   */
  end_date: string;

  /** link training plan ID */
  trainingPlanId: number;

  /** link activity ID */
  activityId: number;

  /** extra data for the activity */
  extra: object | null;

  /** comment the activity */
  comment: string | null;
}

export interface ReadTrainingPlanActivityDto {
  /**
   * training activity uniq id
   * @example 45
   */
  id: number;

  /**
   * date user start the activity
   * @format date-time
   */
  start_date: string;

  /**
   * date user end the activity
   * @format date-time
   */
  end_date: string;

  /** link training plan ID */
  trainingPlanId: number;

  /** link activity ID */
  activityId: number;

  /** extra data for the activity */
  extra: object | null;

  /** comment the activity */
  comment: string | null;
}

export namespace User {
  /**
   * No description
   * @tags user
   * @name FetchUserById
   * @request GET:/api/user/{id}
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
   * @tags user
   * @name Create
   * @request POST:/api/user/create
   * @response `201` `CreateResponse` create user
   * @response `400` `void` user can not register
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = CreateResponse;
  }
  /**
   * No description
   * @tags user
   * @name Update
   * @request PUT:/api/user/update-profile
   * @secure
   * @response `201` `User`
   * @response `default` `User` returns updated user info
   */
  export namespace Update {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateUserProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags user
   * @name Read
   * @request GET:/api/user
   * @secure
   * @response `201` `User`
   * @response `default` `User` get user info by token
   */
  export namespace Read {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags user
   * @name LeaveComment
   * @request POST:/api/user/leave-comment
   * @secure
   * @response `201` `CreateResponse`
   * @response `default` `CreateResponse` user suggestion/comment
   */
  export namespace LeaveComment {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CommentDto;
    export type RequestHeaders = {};
    export type ResponseBody = CreateResponse;
  }
}

export namespace Auth {
  /**
   * No description
   * @tags Auth
   * @name Login
   * @request POST:/api/auth/login
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
   * @request POST:/api/auth/refresh-access-token
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
   * @request POST:/api/auth/refresh-tokens
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

export namespace Api {
  /**
   * No description
   * @name ReadAll
   * @request GET:/api/activity
   * @secure
   * @response `default` `(ActivityEntity)[]` get all activities
   */
  export namespace ReadAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Dictionary {
  /**
   * No description
   * @tags Dictionary
   * @name Read
   * @request GET:/api/dictionary
   * @secure
   * @response `201` `DictionaryDto`
   * @response `default` `DictionaryDto` project dictionary
   */
  export namespace Read {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DictionaryDto;
  }
}

export namespace TrainingPlan {
  /**
   * No description
   * @tags TrainingPlan
   * @name Create
   * @request POST:/api/training-plan/create
   * @secure
   * @response `201` `CommandResult`
   * @response `default` `CommandResult` new training plan create
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTrainingPlanDto;
    export type RequestHeaders = {};
    export type ResponseBody = CommandResult;
  }
  /**
   * No description
   * @tags TrainingPlan
   * @name ReadOne
   * @request GET:/api/training-plan/{id}
   * @secure
   * @response `201` `ReadTrainingPlanDto`
   * @response `default` `ReadTrainingPlanDto` get training plan by id
   */
  export namespace ReadOne {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReadTrainingPlanDto;
  }
  /**
   * No description
   * @tags TrainingPlan
   * @name Update
   * @request PUT:/api/training-plan/{id}
   * @secure
   * @response `201` `CommandResult`
   */
  export namespace Update {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = UpdateTrainingPlanDto;
    export type RequestHeaders = {};
    export type ResponseBody = CommandResult;
  }
  /**
   * No description
   * @tags TrainingPlan
   * @name Delete
   * @request DELETE:/api/training-plan/{id}
   * @secure
   * @response `201` `CommandResult`
   */
  export namespace Delete {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CommandResult;
  }
  /**
   * No description
   * @tags TrainingPlan
   * @name ReadAll
   * @request GET:/api/training-plan
   * @secure
   * @response `201` `(any)[]`
   * @response `default` `(ReadTrainingPlanDto)[]` get all user training plans
   */
  export namespace ReadAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any[];
  }
}

export namespace TrainingPlanActivity {
  /**
   * No description
   * @tags TrainingPlanActivity
   * @name Create
   * @request POST:/api/training-plan-activity/create
   * @secure
   * @response `201` `CommandResult`
   * @response `default` `CommandResult` new training activity create
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTrainingPlanActivityDto;
    export type RequestHeaders = {};
    export type ResponseBody = CommandResult;
  }
  /**
   * No description
   * @tags TrainingPlanActivity
   * @name Read
   * @request GET:/api/training-plan-activity/{id}
   * @secure
   * @response `default` `ReadTrainingPlanActivityDto` get training activity by id
   */
  export namespace Read {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
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
     * @tags user
     * @name FetchUserById
     * @request GET:/api/user/{id}
     * @secure
     * @response `201` `User` create user
     */
    fetchUserById: (id: string, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/user/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name Create
     * @request POST:/api/user/create
     * @response `201` `CreateResponse` create user
     * @response `400` `void` user can not register
     */
    create: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<CreateResponse, void>({
        path: `/api/user/create`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name Update
     * @request PUT:/api/user/update-profile
     * @secure
     * @response `201` `User`
     * @response `default` `User` returns updated user info
     */
    update: (data: UpdateUserProfileDto, params: RequestParams = {}) =>
      this.request<User, User>({
        path: `/api/user/update-profile`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name Read
     * @request GET:/api/user
     * @secure
     * @response `201` `User`
     * @response `default` `User` get user info by token
     */
    read: (params: RequestParams = {}) =>
      this.request<User, User>({
        path: `/api/user`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name LeaveComment
     * @request POST:/api/user/leave-comment
     * @secure
     * @response `201` `CreateResponse`
     * @response `default` `CreateResponse` user suggestion/comment
     */
    leaveComment: (data: CommentDto, params: RequestParams = {}) =>
      this.request<CreateResponse, CreateResponse>({
        path: `/api/user/leave-comment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name Login
     * @request POST:/api/auth/login
     * @response `201` `TokenDto` login
     */
    login: (data: UserCredsDto, params: RequestParams = {}) =>
      this.request<TokenDto, any>({
        path: `/api/auth/login`,
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
     * @request POST:/api/auth/refresh-access-token
     * @secure
     * @response `default` `TokenDto` refresh tokens
     */
    refreshAccessToken: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<any, TokenDto>({
        path: `/api/auth/refresh-access-token`,
        method: "POST",
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
     * @request POST:/api/auth/refresh-tokens
     * @secure
     * @response `default` `TokenDto` refresh tokens
     */
    refreshTokens: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<any, TokenDto>({
        path: `/api/auth/refresh-tokens`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  api = {
    /**
     * No description
     *
     * @name ReadAll
     * @request GET:/api/activity
     * @secure
     * @response `default` `(ActivityEntity)[]` get all activities
     */
    readAll: (params: RequestParams = {}) =>
      this.request<any, ActivityEntity[]>({
        path: `/api/activity`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  dictionary = {
    /**
     * No description
     *
     * @tags Dictionary
     * @name Read
     * @request GET:/api/dictionary
     * @secure
     * @response `201` `DictionaryDto`
     * @response `default` `DictionaryDto` project dictionary
     */
    read: (params: RequestParams = {}) =>
      this.request<DictionaryDto, DictionaryDto>({
        path: `/api/dictionary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  trainingPlan = {
    /**
     * No description
     *
     * @tags TrainingPlan
     * @name Create
     * @request POST:/api/training-plan/create
     * @secure
     * @response `201` `CommandResult`
     * @response `default` `CommandResult` new training plan create
     */
    create: (data: CreateTrainingPlanDto, params: RequestParams = {}) =>
      this.request<CommandResult, CommandResult>({
        path: `/api/training-plan/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TrainingPlan
     * @name ReadOne
     * @request GET:/api/training-plan/{id}
     * @secure
     * @response `201` `ReadTrainingPlanDto`
     * @response `default` `ReadTrainingPlanDto` get training plan by id
     */
    readOne: (id: number, params: RequestParams = {}) =>
      this.request<ReadTrainingPlanDto, ReadTrainingPlanDto>({
        path: `/api/training-plan/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TrainingPlan
     * @name Update
     * @request PUT:/api/training-plan/{id}
     * @secure
     * @response `201` `CommandResult`
     */
    update: (id: number, data: UpdateTrainingPlanDto, params: RequestParams = {}) =>
      this.request<CommandResult, any>({
        path: `/api/training-plan/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TrainingPlan
     * @name Delete
     * @request DELETE:/api/training-plan/{id}
     * @secure
     * @response `201` `CommandResult`
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<CommandResult, any>({
        path: `/api/training-plan/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TrainingPlan
     * @name ReadAll
     * @request GET:/api/training-plan
     * @secure
     * @response `201` `(any)[]`
     * @response `default` `(ReadTrainingPlanDto)[]` get all user training plans
     */
    readAll: (params: RequestParams = {}) =>
      this.request<any[], ReadTrainingPlanDto[]>({
        path: `/api/training-plan`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  trainingPlanActivity = {
    /**
     * No description
     *
     * @tags TrainingPlanActivity
     * @name Create
     * @request POST:/api/training-plan-activity/create
     * @secure
     * @response `201` `CommandResult`
     * @response `default` `CommandResult` new training activity create
     */
    create: (data: CreateTrainingPlanActivityDto, params: RequestParams = {}) =>
      this.request<CommandResult, CommandResult>({
        path: `/api/training-plan-activity/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TrainingPlanActivity
     * @name Read
     * @request GET:/api/training-plan-activity/{id}
     * @secure
     * @response `default` `ReadTrainingPlanActivityDto` get training activity by id
     */
    read: (id: number, params: RequestParams = {}) =>
      this.request<any, ReadTrainingPlanActivityDto>({
        path: `/api/training-plan-activity/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}

/* eslint-disable no-unused-vars */
export enum EErrorCodes {
  UNAUTHORIZED = 401,
  PERMISSION_DENIED = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  UNKNOWN_SERVER_ERROR = 520
}

export enum EErrorText {
  UNAUTHORIZED = 'Unauthorized',
  PERMISSION_DENIED = 'Permission Denied',
  NOT_FOUND = 'Not Found',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  UNKNOWN_SERVER_ERROR = 'Unknown Server Error'
}

export type TCustomError = {
  message: string;
  name: string;
  description: string;
  statusCode: EErrorCodes;
  type: EErrorText;
  link: string;
  linkName: string;
  isLinkShown: boolean;
} & Error;

export interface IErrorHandlerParams {
  mainRequest(): Promise<any>;
}

export class CustomError extends Error implements TCustomError {
  message: string;
  name: string;
  description: string;
  statusCode: EErrorCodes;
  type: EErrorText;
  link: string = '/list/prepare';
  linkName: string = 'На страницу реестра документов';
  isLinkShown: boolean;
}

export interface IErrorSolver {
  saveError(err: number): void;
  handleError(params: IErrorHandlerParams): void;
}

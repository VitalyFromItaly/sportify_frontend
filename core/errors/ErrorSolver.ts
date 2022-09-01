import ErrorHandler from '../http/ErrorHandler';
import { IErrorSolver, IErrorHandlerParams, EErrorCodes } from './Domain';

export class ErrorSolver implements IErrorSolver {
  private errorsArray: Array<number> = [];
  private queryCounter: number = 0;
  private maxQuery: number = 1;
  private errorHandler: Function;

  constructor(errorHandler: Function) {
    this.errorHandler = errorHandler;
  }

  public saveError(err: number): void {
    this.errorsArray.push(err);
  }

  private async isAdditionalRequestFailed(params: IErrorHandlerParams): Promise<boolean> {
    const { mainRequest } = params;
    if (this.queryCounter >= this.maxQuery) {
      return true;
    }

    this.queryCounter++;

    const response = await mainRequest();
    return !response || !response.ok;
  }

  public async handleError(params: IErrorHandlerParams): Promise<void> {
    if (this.hasError && await this.isAdditionalRequestFailed(params)) {
      this.cleanState();
      this.errorHandler(this.error);
    }
  }

  private cleanState(): void {
    setTimeout(() => {
      this.queryCounter = 0;
      this.errorsArray.splice(0, this.errorsArray.length);
    }, 500);
  }

  get error(): number {
    if (this.errorsArray.length) {
      return this.errorsArray.at(-1);
    }
    return EErrorCodes.NOT_FOUND;
  }

  get hasError(): boolean {
    return !!this.errorsArray.length;
  }
}

export const errorSolver = new ErrorSolver(ErrorHandler);

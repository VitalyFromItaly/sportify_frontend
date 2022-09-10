import { EErrorCodes } from '../errors/Domain';
import errorHandler from './ErrorHandler';
import { fetchDataAndErrorHandler } from './fetchDataAndErrorHandler';
import { errorSolver } from '~/core/errors/ErrorSolver';

export default function() {
  return async function(input: RequestInfo, init?: RequestInit): Promise<Response> {
    if (errorSolver.hasError) {
      return;
    }
    try {
      return await fetchDataAndErrorHandler(async() => await fetch(input, init));
    } catch (err) {
      console.log(err);
      // @ts-ignore
      errorHandler(err.statusCode || EErrorCodes.NOT_FOUND);
    }
  };
}

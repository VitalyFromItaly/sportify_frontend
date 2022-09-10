import { errorSolver } from '~/core/errors/ErrorSolver';

export async function fetchDataAndErrorHandler<T>(requestFunction: () => T): Promise<T> {
  try {
    const response = await requestFunction();
    // @ts-ignore
    if (!response.ok) {
    // @ts-ignore
      const { status: errorStatus } = response;
      if (errorStatus) {
        throw errorStatus;
      }
      // @ts-ignore
      const { status } = response;
      console.log({ status });

      throw status;
    }

    return response;
  } catch (err) {
    // @ts-ignore
    errorSolver.saveError(err);
    await errorSolver.handleError({
      // @ts-ignore
      mainRequest: async() => await requestFunction()
    });
  }
}

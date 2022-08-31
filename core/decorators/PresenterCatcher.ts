import { context } from '~/core/context';
export default function PresenterCatcher() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if (descriptor === undefined) {
      // @ts-ignore
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }

    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      try {
        context.store.commit('Core/setIsLoading');
        // @ts-ignore
        this.onChangeState({ isLoading: true });
        const result = originalMethod.apply(this, args);
        // Check if method is asynchronous
        if (result && result instanceof Promise) {
          // Return promise
          return result
            .then(() => {
              // @ts-ignore
              this.onChangeState({ isLoading: false });
              context.store.commit('Core/removeIsLoading');
            })
            .catch((error: any) => {
              _handleError(this, error);
            });
        }
        return result;
      } catch (error: any) {
        _handleError(this, error);
      }
    };
    return descriptor;
  };
}

function _handleError(ctx: any, error: Error) {
  ctx.onChangeState({ isError: true, isLoading: false });
  context.store.commit('Core/removeIsLoading');

  console.error('[Presenter catcher]', error);
}

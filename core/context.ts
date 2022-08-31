import { Context } from '@nuxt/types';

// eslint-disable-next-line import/no-mutable-exports
let context: Context;

export function initializeContext(ctx: Context): void {
  context = ctx;
}

export { context };

import { Context, Plugin } from '@nuxt/types';
import cache from '~/core/cache/cache';

const cachePlugin: Plugin = (context: Context, inject: any) => {
  inject('cache', cache);
};

export default cachePlugin;

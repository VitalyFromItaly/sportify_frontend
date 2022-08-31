import { Plugin } from '@nuxt/types';
import { initializeContext } from '~/core/context';

const context: Plugin = (context) => {
  initializeContext(context);
};

export default context;

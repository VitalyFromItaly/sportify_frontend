import { Plugin } from '@nuxt/types';
import EventEmitter from '~/core/bus/EventEmitter';

const eventBus: Plugin = (_context, inject) => {
  inject('bus', new EventEmitter());
};

export default eventBus;

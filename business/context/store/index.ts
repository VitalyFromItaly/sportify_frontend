import { namespace } from 'vuex-class';

export const CONTEXT_STORE_NS = 'Context';
export const contextStoreModule = namespace(CONTEXT_STORE_NS);

export { default as ContextStoreModule } from './ContextStoreModule';

---
to: business/<%= section %>/<%= name %>/store/index.ts
---

import { namespace } from 'vuex-class';

export const <%= h.changeCase.constantCase(name) %>_STORE_NS = '';
export const <%= name %>StoreModule = namespace(<%= h.changeCase.constantCase(name) %>_STORE_NS);

export { default as <%= h.changeCase.upperCaseFirst(name) %>StoreModule } from './<%= h.changeCase.upperCaseFirst(name) %>StoreModule';

---
to: business/<%= section %>/<%= name %>/store/<%= h.changeCase.upperCaseFirst(name) %>StoreModule.ts
---

import { Module } from 'vuex-module-decorators';
import { init<%= h.changeCase.upperCaseFirst(name) %>State, TState } from '../Domain';
import { BaseVuexModule } from '~/business/core/store/BaseVuexModule';

@Module({
  namespaced: true,
  stateFactory: true
})
export default class <%= h.changeCase.upperCaseFirst(name) %>StoreModule extends BaseVuexModule<TState> {
  internalState: TState = init<%= h.changeCase.upperCaseFirst(name) %>State();
}

---
to: business/<%= section %>/<%= name %>/views/<%= h.changeCase.upperCaseFirst(name) %>.vue
---
<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import type { TState, IPresenter, TMountPayload } from '../Domain';
import { <%= name %>StoreModule } from '../store';

@Component
export default class <%= h.changeCase.upperCaseFirst(name) %> extends Vue {
  @<%= name %>StoreModule.State('internalState') state: TState;

  private presenter: IPresenter;

  public async mounted(): Promise<void> {
    this.presenter = this.$presenter.<%= name %>Instance;

    await this.presenter.onMounted();
  }
}
</script>
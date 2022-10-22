<template>
  <ui-button :full-width="isTablet" v-bind="$attrs" @click="onFillOutForm">
    <slot>{{ $t('account.buttons.fillOutForm') }}</slot>
  </ui-button>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class FillOutFormButton extends Vue {
  private onFillOutForm(): void {
    this.$router.push({ name: 'account-about-me' });
  }

  private get isTablet(): boolean {
    return this.$breakpoints.width <= 640;
  }
}
</script>

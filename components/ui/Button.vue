<template>
  <button
    class="px-5 py-1 m-1"
    :class="classes"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { EButtonAppearance } from './@types';
import type { TButtonType } from './@types';
import { buttonClasses, disabledButtonClasses } from './Domain';

@Component
export default class UIButton extends Vue {
  @Prop({ default: EButtonAppearance.PRIMARY }) appearance: TButtonType;
  @Prop({ default: false }) isDisabled: boolean;

  private get disabledClasses(): string {
    const classes = disabledButtonClasses[this.appearance];
    return classes + ' cursor-not-allowed';
  }

  private get classes(): string {
    return this.isDisabled ? this.disabledClasses : this.classesByAppearance;
  }

  private get classesByAppearance(): string {
    return buttonClasses[this.appearance];
  }
}
</script>

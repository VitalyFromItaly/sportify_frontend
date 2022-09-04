<template>
  <button
    class="px-5 py-1 my-1"
    :class="[classes, fullWidth ? 'w-full': '' ]"
    :disabled="isDisabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EButtonAppearance } from './domain/@types';
import type { TButtonType } from './domain/@types';
import { buttonClasses, disabledButtonClasses } from './domain/Domain';

@Component
export default class UIButton extends Vue {
  @Prop({ default: false }) fullWidth: boolean;
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

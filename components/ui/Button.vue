<template>
  <button
    class="button"
    :class="[classes, fullWidth ? 'w-full': '' ]"
    :disabled="disabled"
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
  @Prop({ type: Boolean, default: false }) fullWidth: boolean;
  @Prop({ type: String, default: EButtonAppearance.PRIMARY }) appearance: TButtonType;
  @Prop({ type: Boolean, default: false }) disabled: boolean;

  private get disabledClasses(): string {
    const classes = disabledButtonClasses[this.appearance];
    return classes + ' cursor-not-allowed';
  }

  private get classes(): string {
    return this.disabled ? this.disabledClasses : this.classesByAppearance;
  }

  private get classesByAppearance(): string {
    return buttonClasses[this.appearance];
  }
}
</script>

<style scoped lang="postcss">
  .button {
    @apply px-5 my-1 transform active:scale-95 active:translate-y-0.5 active:translate-x-0.5;
  }
</style>

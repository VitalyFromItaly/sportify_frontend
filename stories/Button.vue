<template>
  <button
    class="px-5 py-1 mx-1 mt-5"
    :class="[classes]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EButtonAppearance } from './ui/domain/@types';
import type { TButtonType } from './ui/domain/@types';
import { buttonClasses, disabledButtonClasses } from './ui/domain/Domain';

@Component
export default class UIButton extends Vue {
  @Prop({ default: EButtonAppearance.PRIMARY }) appearance: TButtonType;
  @Prop({ default: false }) disabled: boolean;

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

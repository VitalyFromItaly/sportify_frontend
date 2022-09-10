<template>
  <div>
    <div v-if="label">
      {{ label }}
    </div>
    <div v-if="description" class="text-sm">
      {{ description }}
    </div>
    <div v-if="options.length" :class="[ horizontal ? 'flex space-x-8' : '' ]">
      <div v-for="(option, index) in options" :key="index" class="flex items-center space-x-1" :class="[ horizontal ? '' : '' ]">
        <input
          :id="getId(index, option.label)"
          :value="option.value"
          type="radio"
          class="w-4 h-4"
          :class="[option.disabled ? 'disabled' : '']"
          :name="option.label + index"
          :disabled="!!option.disabled"
          :checked="isOptionChecked(option)"
          v-on="inputListeners(option.value)"
        />
        <label :for="getId(index, option.label)" :class="[option.disabled ? 'disabled' : '']">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import type { TRadioButtonOption } from './domain/@types';

@Component
export default class UIRadioButton extends Vue {
  @Prop({ type: String, default: '' }) label: string;
  @Prop({ type: String, default: '' }) description: string;
  @Prop({ type: Boolean, default: false }) horizontal: boolean;
  @Prop({ type: Boolean, default: false }) allDisabled: boolean;
  @Prop({
    type: Array,
    required: true,
    default(): TRadioButtonOption[] { return []; },
    validator(value: TRadioButtonOption[]) {
      let isValid = true;
      if (value.length < 2) {
        console.warn(`[UIRadioButton.options]: минимальное длина свойства options 2.`);
        isValid = false;
      }
      if (value.length > 3) {
        console.warn(`[UIRadioButton.options]: максимальная длина свойства options 3, используйте select`);
        isValid = false;
      }
      return isValid;
    }
  }) options: TRadioButtonOption[];

  @Model('change') readonly value!: string | number;

  private getId(index: number, label: string): string {
    return label + index;
  }

  private isOptionChecked(option: TRadioButtonOption): boolean {
    if (this.value === null) { return option.checked; }
    return this.value === option.value;
  }

  inputListeners(value: TRadioButtonOption['value']) {
    return {
      ...this.$listeners,
      change: () => this.$emit('change', value),
      blur: () => this.$emit('blur')
    };
  }
}
</script>

<style lang="postcss" scoped>
input[type='radio'] {
    accent-color: #327387;
}

.disabled {
  @apply cursor-not-allowed dark:text-disabledDark text-darkGray;
}

</style>

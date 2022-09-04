<template>
  <div class="flex flex-col m-1">
    <label class="dark:text-lightGray" :for="id">{{ label }}</label>
    <select
      :id="id"
      :disabled="isDisabled"
      :value="value"
      class="w-52 h-7 border focus:outline-none"
      :class="[classes, internalSize]"
      @change="onChange($event.target.value)"
    >
      <option class="text-disabled" value="" disabled selected>
        {{ placeholder }}
      </option>
      <option v-for="({ value, text }, index) in options" :key="index" :value="value">
        {{ text }}
      </option>
    </select>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { v4 as uuidv4 } from 'uuid';
import has from 'lodash/has';
import { inputClasses, inputTextSizes } from './domain/Domain';
import type { TInputSize, TInputTypeValue, TSelectOption } from './domain/@types';
import { EInputSize } from './domain/@types';

@Component
export default class Select extends Vue {
  @Prop({ type: String, required: true }) label: string;
  @Prop({ type: String, default: 'choose value...' }) placeholder: string;
  @Prop({ type: Boolean, default: false }) isDisabled: boolean;
  @Prop({ required: true }) value: TInputTypeValue;
    @Prop({
      default: EInputSize.SM,
      validator(value: TInputSize) {
      // @ts-ignore
        return Object.values(EInputSize).includes(value);
      }
    }) size: TInputSize;

  @Prop({
    type: Array,
    required: true,
    validator(options: TSelectOption[]) {
      if (!Array.isArray(options)) { return false; }
      if (!options.length) { return false; }
      return options.every(option => has(option, 'value') && has(option, 'text'));
    }
  }) options: TSelectOption[];

  private id = uuidv4();

  private get classes(): string {
    if (this.isDisabled) { return inputClasses.isDisabled; }
    return inputClasses.default;
  }

  private get internalSize(): string {
    return inputTextSizes[this.size];
  }

  private onChange(value: TInputTypeValue) {
    this.$emit('input', value);
  }
}
</script>

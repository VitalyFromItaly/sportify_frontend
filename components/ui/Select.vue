<template>
  <div class="flex flex-col">
    <ui-label :for-id="id" :label="label" :disabled="disabled" />
    <ui-label class="text-sm my-0.5" v-if="description">{{ description }}</ui-label>
    <select
      :id="id"
      :disabled="disabled"
      :value="value"
      class="w-52 h-8 border-2 focus:outline-none bg-transparent"
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
    <p v-if="error && errorMessage" class="text-rose-600">
      {{ errorMessage }}
    </p>
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
  @Prop({ type: String, default: 'Choose value...' }) placeholder: string;
  @Prop({ type: String, default: '' }) description: string;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: Boolean, default: false }) error: boolean;
  @Prop({ type: String, default: '' }) errorMessage: string;
  @Prop({ required: true }) value: TInputTypeValue;
    @Prop({
      default: EInputSize.SM,
      validator(value: EInputSize) {
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
    if (this.disabled) { return inputClasses.disabled; }
    if (this.error) { return inputClasses.isError; }
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

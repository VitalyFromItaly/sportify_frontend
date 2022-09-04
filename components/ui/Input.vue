<template>
  <div class="flex flex-col my-4">
    <label v-if="label" class="dark:text-lightGray" :for="id">{{ label }}
      <span v-if="required" class=" text-lightTeal font-semibold">*</span>
    </label>
    <input
      :id="id"
      :value="value"
      class="inline border pl-3 py-1 focus:outline-none focus:border-middleTeal"
      :class="[internalSize, internalClasses]"
      :type="type"
      :placeholder="placeholder"
      @input="updateValue"
    />
    <p v-if="isError" class="text-rose-600">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import { v4 as uuidv4 } from 'uuid';
import type { TInputSize, TInputType, TInputTypeValue } from './domain/@types';
import { EInputTypes, EInputSize } from './domain/@types';
import { inputTextSizes, inputNumberSizes, inputClasses } from './domain/Domain';
@Component
export default class UIInput extends Vue {
  @Prop({ default: 'Label' }) label: string;
  @Prop({
    default: EInputTypes.TEXT,
    validator(value: TInputType) {
      // @ts-ignore
      return Object.values(EInputTypes).includes(value);
    }
  }) type: TInputType;

  @Prop({
    default: EInputSize.SM,
    validator(value: TInputSize) {
      // @ts-ignore
      return Object.values(EInputSize).includes(value);
    }
  }) size: TInputSize;

  @Prop({ default: false }) required: boolean;
  @Prop({ default: false }) isDisabled: boolean;
  @Prop({ default: 'Placeholder' }) placeholder: string;
  @Prop({ default: false }) isError: boolean;
  @Prop({ default: '' }) errorMessage: string;

  @Model('input') readonly value!: TInputTypeValue;

  private id: string = uuidv4();

  private updateValue(event: any): void {
    this.$emit('input', event.target.value);
  }

  private get internalClasses(): string {
    if (this.isDisabled) { return inputClasses.isDisabled; }
    if (this.isError) { return inputClasses.isError; }
    return inputClasses.default;
  }

  private get internalSize(): string {
    // @ts-ignore
    const isTextInput = [EInputTypes.TEXT, EInputTypes.EMAIL, EInputTypes.PASSWORD].includes(this.type);
    if (isTextInput) {
      return inputTextSizes[this.size];
    }

    return inputNumberSizes[this.size];
  }
}
</script>

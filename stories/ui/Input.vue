<template>
  <div class="flex flex-col">
    <ui-label :for-id="id" :label="label">
      <span v-if="required" class=" text-lightTeal font-semibold">*</span>
    </ui-label>
    <input
      :id="id"
      v-click-outside="clickOutside"
      :value="value"
      class="inline border-2 pl-3 focus:outline-none"
      :class="[internalSize, internalClasses]"
      :type="type"
      :placeholder="placeholder"
      @input="updateValue"
      @blur="isTouched = true"
    />
    <p v-if="isTouched && isError" class="text-rose-600">
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
import { clickOutside } from '~/helpers/directives';

@Component({ directives: { clickOutside } })
export default class UIInput extends Vue {
  @Prop({
    default: EInputTypes.TEXT,
    validator(value: TInputType) {
      // @ts-ignore
      return Object.values(EInputTypes).includes(value);
    }
  }) type: TInputType;

  @Prop({ default: 'Label' }) label: string;
  @Prop({
    default: EInputSize.SM,
    validator(value: TInputSize) {
      // @ts-ignore
      return Object.values(EInputSize).includes(value);
    }
  }) size: TInputSize;

  @Prop({ default: false }) required: boolean;
  @Prop({ default: false }) disabled: boolean;
  @Prop({ default: 'Placeholder' }) placeholder: string;
  @Prop({ default: false }) isError: boolean;
  @Prop({ default: '' }) errorMessage: string;

  @Model('input') readonly value!: TInputTypeValue;

  private id: string = uuidv4();

  private isTouched = false;

  private clickOutside(): void {
    console.log('clickoutside');
  }

  private updateValue(event: any): void {
    this.$emit('input', event.target.value);
  }

  private get internalClasses(): string {
    if (this.disabled) { return inputClasses.disabled; }
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

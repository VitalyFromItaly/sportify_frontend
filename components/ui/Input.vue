<template>
  <div class="flex flex-col my-4">
    <label v-if="label" class="dark:text-lightGray" :for="id">{{ label }}
      <span v-if="required" class=" text-lightTeal font-semibold">*</span>
    </label>
    <div class="relative">
      <input
        :id="id"
        :value="value"
        class="inline border pl-3 py-1 focus:outline-none"
        :class="[internalSize, internalClasses]"
        :type="internalType"
        :placeholder="placeholder"
        @input="onUpdateValue"
        @blur="onBlur"
      />
      <button v-if="type === EInputTypes.PASSWORD && !!value" type="button" @click="onTogglePasswordVisibility">
        <eye v-if="type === EInputTypes.PASSWORD && internalType === EInputTypes.PASSWORD" class="eye-icon" />
        <eye-crossed v-if="type === EInputTypes.PASSWORD && internalType !== EInputTypes.PASSWORD" class="eye-icon" />
      </button>
    </div>
    <p v-if="isFocusLost && isError" class="text-rose-600">
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
import Eye from '~/components/svg/Eye.vue';
import EyeCrossed from '~/components/svg/EyeCrossed.vue';

@Component({ components: { Eye, EyeCrossed } })
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

  @Prop({ type: Boolean, default: false }) required: boolean;
  @Prop({ type: Boolean, default: false }) isDisabled: boolean;
  @Prop({ default: 'Placeholder' }) placeholder: string;
  @Prop({ type: Boolean, default: false }) isError: boolean;
  @Prop({ default: '' }) errorMessage: string;

  @Model('input') readonly value!: TInputTypeValue;

  private id: string = uuidv4();
  private EInputTypes = EInputTypes;
  private internalType: TInputType = EInputTypes.TEXT;
  private isFocusLost = false;

  private mounted(): void {
    this.internalType = this.type;
  }

  private onUpdateValue(event: any): void {
    this.$emit('input', event.target.value);
  }

  private get internalClasses(): string {
    if (this.isFocusLost && this.isError) { return inputClasses.isError; }
    if (this.isDisabled) { return inputClasses.isDisabled; }
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

  private onTogglePasswordVisibility(): void {
    if (this.internalType === EInputTypes.PASSWORD) {
      this.internalType = EInputTypes.TEXT;
    } else {
      this.internalType = EInputTypes.PASSWORD;
    }
  }

  private onBlur(): void {
    this.isFocusLost = true;
  }
}
</script>
<style lang="postcss" scoped>
  .eye-icon {
    @apply w-6 absolute right-3 -top-0.5;
  }
</style>

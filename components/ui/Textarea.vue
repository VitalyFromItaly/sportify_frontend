<template>
  <div>
    <div class="flex flex-col my-4" :class="internalSize">
      <div class="flex justify-between">
        <ui-label v-if="label" for-id="id" :label="label" :disabled="disabled">
          <span v-if="required" class=" text-lightTeal font-semibold">*</span>
        </ui-label>
        <p v-if="limit && !disabled" class="text-darkGray">
          {{ value.length || 0 }}/{{ limit }}
        </p>
      </div>
      <textarea
        v-bind="$attrs"
        :id="id"
        ref="textarea"
        :value="value"
        :maxlength="limit"
        class="inline border-2 h-28 pl-3 py-1 bg-transparent focus:outline-none dark:placeholder-gray-400 dark:text-gray-400"
        :class="internalClasses"
        :placeholder="placeholder"
        v-on="events"
      ></textarea>
    </div>
    <p v-if="isError" class="text-rose-600">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import { v4 as uuidv4 } from 'uuid';
import type { TInputTypeValue } from './domain/@types';
import { inputClasses, inputTextSizes } from './domain/Domain';

@Component
export default class UITextarea extends Vue {
  @Prop({ type: String, default: '' }) label: string;
  @Prop({ type: Boolean, default: false }) required: boolean;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: String, default: '' }) placeholder: string;
  @Prop({ type: Number, default: null }) limit: number;
  @Prop({ type: Boolean, default: false }) isError: boolean;
  @Prop({ type: String, default: '' }) errorMessage: string;

  @Model('input') readonly value!: TInputTypeValue;

  private id: string = uuidv4();

  private get events() {
    return {
      ...this.$listeners,
      blur: this.onBlur,
      input: this.onUpdateValue
    };
  }

  private onUpdateValue(event: any): void {
    const { value } = event.target;
    this.$emit('input', value);
  }

  private get internalClasses(): string {
    if (this.isError) { return inputClasses.isError; }
    if (this.disabled) { return inputClasses.disabled; }
    return inputClasses.default;
  }

  private get internalSize(): string {
    return inputTextSizes.m;
  }

  private onBlur(): void {
    this.$emit('blur');
  }
}
</script>
<style lang="postcss" scoped>
  .eye-icon {
    @apply w-6 absolute right-3 -top-0.5;
  }
</style>

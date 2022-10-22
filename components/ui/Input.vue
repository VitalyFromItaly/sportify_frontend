<template>
  <div v-click-outside="clickOutside" class="flex flex-col my-4">
    <ui-label v-if="label" for-id="id" :label="label" :disabled="disabled">
      <span v-if="required" class=" text-lightTeal font-semibold">*</span>
    </ui-label>
    <div class="relative flex">
      <input
        v-bind="$attrs"
        :id="id"
        ref="input"
        v-click-outside="clickOutside"
        :value="value"
        class="inline border-2 pl-3 py-1 focus:outline-none dark:placeholder-gray-400 dark:text-gray-400"
        :class="[internalSize, internalClasses]"
        :type="internalType"
        :placeholder="placeholder"
        v-on="events"
      />
      <button v-if="type === EInputTypes.PASSWORD && !!value" type="button" @click="onTogglePasswordVisibility">
        <eye v-if="[type, internalType].every(t => t === EInputTypes.PASSWORD)" class="eye-icon" />
        <eye-crossed v-if="type === EInputTypes.PASSWORD && internalType !== EInputTypes.PASSWORD" class="eye-icon" />
      </button>
    </div>
    <p v-if="isError && isFocusLost" class="text-rose-600">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import { v4 as uuidv4 } from 'uuid';
import type { TInputSize, TInputType, TInputTypeValue } from './domain/@types';
import { EInputTypes, EInputSize } from './domain/@types';
import { inputTextSizes, inputNumberSizes, inputClasses, keyCodes } from './domain/Domain';
import Eye from '~/components/svg/Eye.vue';
import EyeCrossed from '~/components/svg/EyeCrossed.vue';
import { clickOutside } from '~/helpers/directives';

@Component({ components: { Eye, EyeCrossed }, directives: { clickOutside } })
export default class UIInput extends Vue {
  @Prop({ type: String, default: 'Label' }) label: string;
  @Prop({ type: Boolean, default: false }) required: boolean;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: String, default: 'Placeholder' }) placeholder: string;
  @Prop({ type: Boolean, default: false }) isError: boolean;
  @Prop({ type: String, default: '' }) errorMessage: string;
  @Prop({
    type: String,
    default: EInputTypes.TEXT,
    validator(value: EInputTypes) {
      return Object.values(EInputTypes).includes(value);
    }
  }) type: EInputTypes;

  @Prop({
    type: String,
    default: EInputSize.SM,
    validator(value: EInputSize) {
      return Object.values(EInputSize).includes(value);
    }
  }) size: TInputSize;

  @Model('input') readonly value!: TInputTypeValue;

  private id: string = uuidv4();
  private EInputTypes = EInputTypes;
  private internalType: TInputType = EInputTypes.TEXT;
  private isFocusLost = false;
  private hasMouseDown = false;

  private get events() {
    return {
      ...this.$listeners,
      click: this._onClick,
      blur: this.onBlur,
      input: this.onUpdateValue,
      focus: this._onFocus,
      keydown: this._onKeyDown,
      keyup: this._onKeyUp,
      mouseover: this._onMouseOver,
      mouseout: this._onMouseOut,
      mouseleave: this._onMouseOut
    };
  }

  private clickOutside() {
    this.$emit('clickOutside');
  }

  private _onClick(e: any) {
    this.$emit('click', e);
    this.setFocus();
  }

  private _onFocus(e: any) {
    this.$emit('focus', e);
  }

  private _onKeyDown(e: any) {
    if (e.keyCode === keyCodes.enter) { this.$emit('change', e.target.value); }
    this.$emit('keydown', e);
  }

  private _onKeyUp(e: any) {
    this.$emit('keyup', e);
  }

  private _onMouseDown(e: any) {
    if (e.target !== this.$refs.input) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.hasMouseDown = true;
    this.$emit('mousedown', e);
  }

  private _onMouseUp(e: any) {
    if (this.hasMouseDown) { this.setFocus(); }
    this.hasMouseDown = false;
    this.$emit('mouseup', e);
  }

  private _onMouseOver(e: any) {
    this.$emit('mouseover', e);
  }

  private _onMouseOut(e: any) {
    this.$emit('mouseout', e);
  }

  /**
     * Установить фокус на элементе
     *
     * @method setFocus
     */
  setFocus() {
    // @ts-ignore
    this.$refs.input.focus();
  }

  private mounted(): void {
    this.internalType = this.type;
  }

  private onUpdateValue(event: any): void {
    const { value } = event.target;
    this.$emit('input', this.type === EInputTypes.NUMBER ? +value : value);
  }

  private get internalClasses(): string {
    if (this.isFocusLost && this.isError) { return inputClasses.isError; }
    if (this.disabled) { return inputClasses.disabled; }
    return inputClasses.default;
  }

  private get internalSize(): string {
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
    this.$emit('blur');
  }
}
</script>
<style lang="postcss" scoped>
  .eye-icon {
    @apply w-6 absolute right-3 -top-0.5;
  }
</style>

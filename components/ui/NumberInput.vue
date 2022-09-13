<template>
  <div>
    <ui-label v-if="label" :label="label" :for-id="id" :disabled="disabled">
      <span v-if="required" class=" text-lightTeal font-semibold">*</span>
    </ui-label>
    <div class="flex items-center">
      <button @click="onMinus">
        <minus :color="color" class="mr-1 action" />
      </button>
      <input
        :id="id"
        ref="input"
        :min="min"
        :max="max"
        :value="value"
        :class="internalClasses"
        class="inline border-2 pl-3 py-1 focus:outline-none text-black dark:placeholder-gray-400 w-20 dark:text-gray-200"
        :disabled="disabled"
        type="number"
        v-on="events"
      />
      <button @click="onPlus">
        <plus :color="color" class="ml-1 action" />
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import { v4 as uuidv4 } from 'uuid';
import Plus from '../svg/Plus.vue';
import Minus from '../svg/Minus.vue';
import { inputClasses, keyCodes } from './domain/Domain';

@Component({ components: { Plus, Minus } })
export default class UINumberInput extends Vue {
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: Boolean, default: false }) required: boolean;
  @Prop({ type: String, default: '' }) label: string | number;
  @Prop({ type: Boolean, default: false }) isError: boolean;
  @Prop({ type: Boolean, default: false }) dark: false;
  @Prop({ type: Number, default: -Infinity }) min: number;
  @Prop({ type: Number, default: +Infinity }) max: number;
  @Model('input') readonly value!: number;

  private readonly id = uuidv4();
  private hasMouseDown = false;
  private internalValue = 0;

  private get color(): string {
    return this.dark ? 'white' : 'black';
  }

  private get internalClasses(): string {
    if (this.isError) { return inputClasses.isError; }
    if (this.disabled) { return inputClasses.disabled; }
    return inputClasses.default;
  }

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

  private onMinus(): void {
    if (this.value <= this.min) { return; }
    this.$emit('input', this.value - 1);
  }

  private onPlus(): void {
    if (this.value >= this.max) { return; }
    this.$emit('input', this.value + 1);
  }

  private clickOutside() {
    this.$emit('clickOutside');
  }

  private onBlur(): void {
    this.$emit('blur');
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

  private onUpdateValue(event: any): void {
    const { value } = event.target;
    if (!!value && !Number.isNaN(+value) && typeof +value === 'number') {
      this.$emit('input', +value);
    }
  }

  /**
     * Установить фокус на элементе
     *
     * @method setFocus
     */
  private setFocus() {
    // @ts-ignore
    this.$refs.input.focus();
  }
}
</script>
<style lang="postcss" scoped>
.action {
  @apply w-9 h-9 hover:bg-lightestTeal dark:hover:bg-lightTeal;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>

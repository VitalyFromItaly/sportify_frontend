<template>
  <span
    ref="trigger"
    class="relative inline"
    :aria-label="tip"
    tabindex="0"
    :class="[disabled ? 'cursor-not-allowed' : '']"
    v-on="events"
  >
    <slot></slot>
    <span
      ref="content"
      :style="{ left: left + 'px', top: top + 'px' }"
      role="tooltip"
      :aria-hidden="[!isVisible]"
      style="max-width: 200px; width: max-content"
      class="absolute z-50 bg-lightGray dark:bg-lightDark dark:text-lightGray shadow-2xl py-0.5  px-3 overflow-hidden"
    ><span class="z-0">{{ tip }}</span></span>
  </span>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Watch, Ref } from 'vue-property-decorator';
import { ETooltipAlign, ETooltipDirection } from './domain/@types';
@Component
export default class UITooltip extends Vue {
  @Ref() trigger: any;
  @Ref() content: any;
  @Prop({ type: String, required: true }) tip: string;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: Boolean, default: false }) visible: boolean;
  @Prop({
    type: String,
    default: ETooltipAlign.CENTER,
    validator(value: ETooltipAlign) {
      return Object.values(ETooltipAlign).includes(value);
    }
  }) align: ETooltipAlign;

  @Prop({
    type: String,
    default: ETooltipDirection.BOTTOM,
    validator(value: ETooltipDirection) {
      return Object.values(ETooltipDirection).includes(value);
    }
  }) direction: ETooltipDirection;

  isVisible = false;
  left = -99999;
  top = 0;
  tooltipContent: any = null;

  private get events() {
    return {
      ...this.$listeners,
      focus: this._onFocus,
      blur: this._onBlur,
      mouseover: this._onMouseOver,
      mouseleave: this._onMouseLeave
    };
  }

  @Watch('visible')
  onVisibleChange(value: boolean): void {
    value ? this.show() : this.hide();
  }

  private mounted(): void {
    if (!this.tip || !window || !document) {
      return;
    }
    this.tooltipContent = document.body.appendChild(this.content);
    if (this.visible) {
      this.show();
    } else {
      this.hide();
    }
  }

  private show() {
    if (this.disabled) { return; }
    if (!this.tip) { return; }

    this.isVisible = true;
    this._positionListen(true);
    this.$nextTick(() => {
      this._calculatePosition();
    });
    this.$emit('show', true);
  }

  private hide() {
    if (this.disabled) { return; }

    this.isVisible = false;
    this.left = -99999;
    this.top = 0;
    this._positionListen(false);
    this.$emit('hide', false);
  }

  private _onFocus(e: Event) {
    this.show();
    this.$emit('focus', e);
  }

  private _onBlur(e: Event) {
    this.hide();
    this.$emit('blur', e);
  }

  private _onMouseOver(e: Event) {
    this.show();
    this.$emit('mouseover', e);
  }

  private _onMouseLeave(e: Event) {
    this.hide();
    this.$emit('mouseleave', e);
  }

  _positionListen(on: boolean): void {
    if (!window || !document) { return; }

    if (on) {
      window.addEventListener('scroll', this._calculatePosition);
      window.addEventListener('resize', this._calculatePosition);
    } else {
      window.removeEventListener('scroll', this._calculatePosition);
      window.removeEventListener('resize', this._calculatePosition);
    }
  }

  _calculatePosition() {
    if (!this.$refs.trigger) {
      this._positionListen(false);
      return;
    }

    // @ts-ignore
    const triggerPosition = this.$refs.trigger.getBoundingClientRect();
    const pixelsScrolledX = window.scrollX || window.pageXOffset;
    const pixelsScrolledY = window.scrollY || window.pageYOffset;
    if (this.direction === 'top' || this.direction === 'bottom') {
      // @ts-ignore
      this.left = triggerPosition.left + 0.5 + (this.$refs.trigger.offsetWidth - this.$refs.content.offsetWidth) / 2 + pixelsScrolledX;
      if (this.direction === 'bottom') {
        this.top = triggerPosition.bottom - 5 + pixelsScrolledY;
      } else {
        // @ts-ignore
        this.top = triggerPosition.top - this.$refs.content.offsetHeight + pixelsScrolledY;
      }

      if (this.align === 'start') {
        // @ts-ignore
        this.left += this.$refs.content.offsetWidth / 2 - 12;
      }
      if (this.align === 'end') {
        // @ts-ignore
        this.left -= this.$refs.content.offsetWidth / 2 - 12;
      }
    } else {
      this.top =
          triggerPosition.top +
          // @ts-ignore
          (this.trigger.offsetHeight - 0.5 - this.$refs.content.offsetHeight) / 2 +
          pixelsScrolledY;
      if (this.direction === 'left') {
        // @ts-ignore
        this.left = triggerPosition.left - this.content.offsetWidth + pixelsScrolledX;
      } else {
        this.left = triggerPosition.right + pixelsScrolledX;
      }
    }
  }
}
</script>

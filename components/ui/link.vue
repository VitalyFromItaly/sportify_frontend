<template>
  <nuxt-link
    v-if="useRouter"
    :to="link"
    :disabled="disabled"
    :class="[classes, disabled ? 'cursor-not-allowed': '' ]"
    @click="onClick"
  >
    <slot></slot>
  </nuxt-link>
  <a
    v-else
    :disabled="disabled"
    :target="target"
    :class="[classes, disabled ? 'cursor-not-allowed': '' ]"
    :href="link"
    @click="onClick"
  >
    <slot></slot>
  </a>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import type { TRawLocation } from '~/@types/framework';

@Component
export default class Link extends Vue {
  @Prop({ type: Boolean, default: true }) useRouter: boolean;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: Boolean, default: false }) blank: boolean;
  @Prop({ type: [String, Object], default: '' }) to: TRawLocation;

  private get classes(): string {
    return 'text-lightTeal hover:text-middleTeal visited:text-fuchsia-800';
  }

  private get target() {
    return this.blank ? '_blank' : null;
  }

  private get link() {
    if (!this.useRouter && typeof this.to !== 'string') {
      console.warn('при использовании нативной ссылки, параметр to должен быть типа String');
      return '';
    }
    return this.to;
  }

  private onClick(e: Event): void {
    this.$emit('click');
    if (this.to === '') {
      e.preventDefault();
    }

    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
</script>

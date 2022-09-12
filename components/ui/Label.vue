<template>
  <label
    :for="forId"
    :class="[disabled ? 'text-mainGray cursor-not-allowed': 'dark:text-lightGray text-darkText']"
  >
    {{ label }}
    <slot></slot>
  </label>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class UILabel extends Vue {
  @Prop({ type: [String, Number], default: 'id' }) forId: string | number;
  @Prop({ type: [String, Number], default: '' }) label: string | number;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
}
</script>

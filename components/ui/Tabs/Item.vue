<template>
  <component :is="tag" v-show="isActive" :id="computedId" :aria-hidden="!isActive" role="tabpanel">
    <slot></slot>
  </component>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class UITabItem extends Vue {
  @Prop({ type: String, default: '' }) name: String;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: [String, Number], default: '' }) targetId: string | number;
  @Prop({ type: String, default: 'section' }) tag: string;

  public isActive = false;

  get computedId() {
    return this.targetId ? this.targetId : this.name.toLowerCase().replace(/ /g, '-');
  }
}
</script>

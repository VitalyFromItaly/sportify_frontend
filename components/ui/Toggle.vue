<template>
  <div>
    <p v-if="label">
      {{ label }}
    </p>
      <!-- :class="[{ 'bg-cyan-900': value }, bgColor]" -->
    <div
      class="w-12 h-6 flex items-center rounded-full p-1 duration-300 cursor-pointer"
      :class="classes"
      :aria-checked="value.toString()"
      @click="toggle"
    >
      <div
        class="bg-white w-5 h-5 rounded-full shadow-md transform duration-300"
        :class="[{ 'translate-x-5': value }]"
      ></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Model, Prop } from 'nuxt-property-decorator';
@Component
export default class Toggle extends Vue {
  @Prop({ required: false, default: '' }) label: string;
  @Prop({ default: 'bg-gray-300' }) bgColor: string;
  @Prop({ default: 'bg-white' }) circleColor: string;
  @Model('input') value!: boolean;

  toggle(): void {
    this.$emit('input', !this.value);
  }

  private get classes(): string {
    const { isDefaultBackground, value } = this;
    if (value && isDefaultBackground) {
      return 'bg-lightTeal';
    } else if (value && !isDefaultBackground) {
      return 'bg-cyan-900';
    } else { return 'bg-gray-300'; }
  }

  private get isDefaultBackground(): boolean {
    return this.bgColor === 'bg-gray-300';
  }
}
</script>

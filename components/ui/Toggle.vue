<template>
  <div class="m-1 inline-block">
    <p v-if="label" class=" dark:text-lightGray">
      {{ label }}
    </p>
    <div class="flex items-center">
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
      <p v-if="textOn && textOff" class="ml-2 dark:text-lightGray">
        {{ value ? textOn : textOff }}
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Model, Prop } from 'vue-property-decorator';
@Component
export default class Toggle extends Vue {
  @Prop({ type: String, required: false, default: '' }) label: string;
  @Prop({ type: String, default: 'bg-gray-300' }) bgColor: string;
  @Prop({ type: String, required: false }) textOn: string;
  @Prop({ type: String, required: false }) textOff: string;
  @Prop({ type: String, default: 'bg-white' }) circleColor: string;
  @Model('input') value!: boolean;

  public toggle(): void {
    this.$emit('input', !this.value);
    this.$emit('change', !this.value);
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

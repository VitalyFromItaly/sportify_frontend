<template>
  <svg
    width="21"
    height="27"
    viewBox="0 0 37 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.0825 9.77883L18.245 17.5455L10.2513 9.54657"
      :stroke="color"
      stroke-width="1.58312"
      stroke-linecap="round"
    />
  </svg>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component
export default class ChevronDown extends Vue {
  @Prop({
    type: String,
    default: 'black',
    validator(value: string) {
      return ['black', 'white'].includes(value);
    }
  }) color: string;
}
</script>

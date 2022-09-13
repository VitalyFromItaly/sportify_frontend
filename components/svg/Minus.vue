<template>
  <svg width="25" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3335 19.2273L26.1093 19.2273" :stroke="color" stroke-width="2.11082" stroke-linecap="round" />
  </svg>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class MinusIcon extends Vue {
  @Prop({ type: String, default: 'black' }) color: string;
}
</script>

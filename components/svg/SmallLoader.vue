<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_331_2326)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0V2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 6.34365 13.3288 4.84405 12.2436 3.75835L13.6579 2.34415C15.105 3.79178 16 5.79137 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z" :fill="color" />
    </g>
    <defs>
      <clipPath id="clip0_331_2326">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class SmallLoader extends Vue {
  @Prop({ type: String, default: '#469BA2' }) color: string;
}
</script>

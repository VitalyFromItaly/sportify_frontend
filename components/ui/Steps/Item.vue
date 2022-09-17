<template>
  <div>
    <div class="w-5 h-5 rounded-full bg-gray-600"><div class="w-4 h-4 rounded-full dotted"></div></div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class UIStepsItem extends Vue {}
</script>
<style scoped>
  .dotted {
    border: 1px dashed gray;
  }
</style>

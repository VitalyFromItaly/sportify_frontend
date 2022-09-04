<template>
  <div>
    <h2 class="text-center bg-gray-200 py-2">
      Toggle
    </h2>
    <div class="mx-10 flex">
      <ui-toggle v-model="isEnabled" />
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class ExampleToggle extends Vue {
  isEnabled: boolean = false;
}
</script>

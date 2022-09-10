<template>
  <div>
    <h2 class="text-center bg-gray-200 dark:bg-gray-800 py-2">
      Tabs
    </h2>
    <ui-tabs>
      <ui-tabs-item name="first">Data</ui-tabs-item>
      <ui-tabs-item name="second">Data2</ui-tabs-item>
      <ui-tabs-item name="third">Data3</ui-tabs-item>
      <ui-tabs-item disabled name="4">Data4</ui-tabs-item>
    </ui-tabs>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class ExampleTabs extends Vue {
}
</script>

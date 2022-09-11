<template>
  <abstract-ui-example>
    <template #header>
      Tabs
    </template>
    <template #component>
      <ui-tabs>
        <ui-tabs-item name="first">
          Data
        </ui-tabs-item>
        <ui-tabs-item name="second">
          Data2
        </ui-tabs-item>
        <ui-tabs-item name="third">
          Data3
        </ui-tabs-item>
        <ui-tabs-item disabled name="4">
          Data4
        </ui-tabs-item>
      </ui-tabs>
    </template>
    <template #settings></template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';

@Component({ components: { AbstractUiExample } })
export default class ExampleTabs extends Vue {
}
</script>

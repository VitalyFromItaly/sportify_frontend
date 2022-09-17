<template>
  <abstract-ui-example>
    <template #header>
      Steps
    </template>
    <template #component>
      <ui-steps>
        <ui-steps-item />
      </ui-steps>
    </template>
    <template #settings></template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';
@Component({ components: { AbstractUiExample } })
export default class ExampleSteps extends Vue {}
</script>

<template>
  <abstract-ui-example>
    <template #header>
      Container
    </template>
    <template #component>
      <div>
        <ui-container type="expandable">
          <template #header>
            header
          </template>
          Container
        </ui-container>
      </div>
    </template>
    <template #settings></template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';

@Component({ components: { AbstractUiExample } })
export default class ExampleContainer extends Vue {
}
</script>

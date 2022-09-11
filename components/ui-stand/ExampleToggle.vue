<template>
  <div>
    <abstract-ui-example>
      <template #header>
        Toggle
      </template>
      <template #component>
        <ui-toggle v-model="isEnabled" :label="label" :text-on="textOn" :text-off="textOff" />
      </template>
      <template #settings>
        <ui-input v-model="label" label="Toggle label" />
        <ui-input v-model="textOn" label="Text on" />
        <ui-input v-model="textOff" label="Text off" />
      </template>
    </abstract-ui-example>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';

@Component({ components: { AbstractUiExample } })
export default class ExampleToggle extends Vue {
  isEnabled: boolean = false;
  label = 'label';
  textOn = 'text on';
  textOff = 'text off';
}
</script>

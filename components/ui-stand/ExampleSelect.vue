<template>
  <abstract-ui-example>
    <template #header>
      Select
    </template>
    <template #component>
      <ui-select v-model="selectModel" label="select" :options="options" :disabled="disabled" />
    </template>
    <template #settings>
      <ui-toggle v-model="disabled" label="disable select" />
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { TSelectOption } from '../ui/domain/@types';
import AbstractUiExample from './AbstractUiExample.vue';

@Component({ components: { AbstractUiExample } })
export default class ExampleSelect extends Vue {
  private selectModel: string = '';
  private disabled = false;
  private options: TSelectOption[] = [
    { text: 'text1', value: 'value1' },
    { text: 'text2', value: 'value2' },
    { text: 'text3', value: 'value3' }
  ];
}
</script>

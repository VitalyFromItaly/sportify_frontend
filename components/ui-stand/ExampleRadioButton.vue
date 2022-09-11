<template>
  <abstract-ui-example>
    <template #header>
      Radio Button
    </template>
    <template #component>
      <ui-radio-button
        v-model="value"
        :options="options"
        :label="label"
        :horizontal="isHorizontal"
        :description="description"
      />
    </template>
    <template #settings>
      <ui-input v-model="label" label="label" />
      <ui-input v-model="description" label="description" placeholder="add description" />
      <ui-toggle v-model="isHorizontal" label="horizontal" />
      <p>value: { {{ value }} }</p>
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { TRadioButtonOption } from '../ui/domain/@types';
import AbstractUiExample from './AbstractUiExample.vue';

@Component({ components: { AbstractUiExample } })
export default class ExampleRadioButton extends Vue {
  value: string = 'one';
  isHorizontal = true;
  label = 'label';
  description = '';
  private get options(): TRadioButtonOption[] {
    return [
      { value: 'one', label: 'one', checked: true },
      { value: 'two', label: 'two', checked: false },
      { value: 'three', label: 'three', checked: false, disabled: true }
    ];
  }
}
</script>

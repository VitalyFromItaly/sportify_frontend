<template>
  <abstract-ui-example>
    <template #header>
      Checkbox
    </template>
    <template #component>
      <div v-if="!isArray" class="flex flex-col justify-center items-center h-32">
        <ui-checkbox v-model="value" :label="label" :disabled="disabled" :checked="checked" />
      </div>
      <div v-else>
        <ui-checkbox v-model="array" label="first" :value="{value: 1, text: '1'}" />
        <ui-checkbox v-model="array" label="second" :value="{value: 2, text: '2'}" />
        <ui-checkbox v-model="array" label="third" :value="{value: 3, text: '3'}" />
      </div>
    </template>
    <template #settings>
      <ui-toggle v-model="isArray" label="show checkboxes array" />
      <template v-if="!isArray">
        <ui-input v-model="label" label="Checkbox label" />
        <ui-toggle v-model="checked" label="Checked" />
        <ui-toggle v-model="disabled" label="Disabled" />
        <p> value: {{ value }}</p>
      </template>
      <template v-else>
        <p> array value: {{ array }} </p>
      </template>
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';

@Component({ components: { AbstractUiExample } })
export default class ExampleCheckbox extends Vue {
  private label = 'Checkbox label';
  private value = false;
  private checked = false;
  private disabled = false;
  private isArray = false;
  private array: any[] = [];
}
</script>

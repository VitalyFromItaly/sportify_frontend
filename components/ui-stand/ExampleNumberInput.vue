<template>
  <abstract-ui-example>
    <template #header>
      Number input
    </template>
    <template #component>
      <ui-number-input
        v-model="value"
        :label="label"
        :dark="isDark"
        :min="min"
        :max="max"
        :step="step"
        :placeholder="placeholder"
        :error="isError"
        :error-message="errorMessage"
      />
    </template>
    <template #settings>
      <ui-input v-model="label" label="Label" />
      <ui-input v-model="placeholder" label="Placeholder" />
      <ui-input v-model="errorMessage" label="Error message" />
      <ui-number-input v-model="min" label="min" :dark="isDark" />
      <ui-number-input v-model="max" label="max" :dark="isDark" />
      <ui-number-input v-model="step" label="step" :dark="isDark" />
      <ui-toggle v-model="isError" label="Error" />
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';
@Component({ components: { AbstractUiExample } })
export default class ExampleNumberInput extends Vue {
  value: number = null;
  label = 'Month, duration';
  min = 0;
  max = 10;
  step = 1;
  placeholder = 0;
  isError = false;
  errorMessage = '';

  private get isDark(): string {
    return this.$store.state.Core.isDarkTheme;
  }
}
</script>

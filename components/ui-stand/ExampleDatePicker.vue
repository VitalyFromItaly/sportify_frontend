<template>
  <abstract-ui-example>
    <template #header>
      Date picker
    </template>
    <template #component>
      <ui-date-picker
        v-model="date"
        :is-dark="isDark"
        :label="label"
        :required="required"
        :disabled="disabled"
        :icon-color="iconColor"
        :locale="locale"
        :error="isError"
        :error-message="errorMessage"
      />
    </template>
    <template #settings>
      value: {{ date }}
      <ui-input v-model="label" label="Date Picker label" />
      <ui-radio-button
        v-model="iconColor"
        label="Icon color"
        horizontal
        :options="[{ value: 'black', label: 'black', checked: true }, { value: 'white', label: 'white' }]"
      />
      <ui-radio-button
        v-model="locale"
        label="Language"
        horizontal
        :options="[{ value: 'ru-RU', label: 'rus' }, { value: 'en-US', label: 'en' }]"
      />
      <ui-toggle v-model="isDark" label="Theme" text-on="dark theme" text-off="light theme" />
      <ui-toggle v-model="required" label="Required" text-on="on" text-off="off" />
      <ui-toggle v-model="disabled" label="Disabled" text-on="on" text-off="off" />
      <ui-toggle v-model="isError" label="Error" text-on="on" text-off="off" />
      <ui-input v-model="errorMessage" label="Error message" />
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';
import { EVuexNamespaces } from '~/@types/domain';

@Component({ components: { AbstractUiExample } })
export default class ExampleDatePicker extends Vue {
  private date: Date = null;
  private label = 'label';
  private isDark = false;
  private required = false;
  private disabled = false;
  private iconColor = 'black';
  private locale = 'en-US';
  private errorMessage = '';
  private isError = false;

  mounted(): void {
    const { isThemeDark } = this.$store.state[EVuexNamespaces.CORE];
    this.iconColor = isThemeDark ? 'white' : 'black';
  }
}
</script>

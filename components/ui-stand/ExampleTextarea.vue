<template>
  <abstract-ui-example>
    <template #header>
      Textarea
    </template>
    <template #component>
      <ui-textarea
        v-model="value"
        :is-error="isError"
        :label="label"
        :limit="limit"
        :placeholder="placeholder"
        :error-message="errorMessage"
        :required="required"
        :disabled="disabled"
      />
    </template>
    <template #settings>
      <div class="flex flex-col tablet:flex-row tablet:space-x-5">
        <div>
          <ui-input v-model="label" label="Textarea label" />
          <ui-input v-model="placeholder" label="Textarea label" />
          <ui-input v-model="errorMessage" label="Error message" />
        </div>
        <div>
          <ui-number-input v-model="limit" label="Limit" />
          <ui-toggle v-model="isError" label="is error" />
          <ui-toggle v-model="required" label="required" />
          <ui-toggle v-model="disabled" label="is disabled" />
        </div>
      </div>
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';
@Component({ components: { AbstractUiExample } })
export default class ExampleTextArea extends Vue {
  value = '';
  limit = 250;
  label = 'Label';
  placeholder = 'placeholder';
  errorMessage = 'error message';
  isError = false;
  required = false;
  disabled = false;
}
</script>

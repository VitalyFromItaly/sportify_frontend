<template>
  <abstract-ui-example>
    <template #header>
      Input
    </template>
    <template #component>
      <ui-input
        v-model="exampleModel"
        :is-error="isError"
        :error-message="errorMessage"
        :type="chosenType"
        :label="label"
        :disabled="disabled"
        :placeholder="placeholder"
        :size="chosenSize"
        :required="isRequired"
      />
    </template>
    <template #settings>
      <div class="flex space-x-10">
        <div>
          <ui-select v-model="chosenType" :options="typeOptions" label="type" />
          <ui-select v-model="chosenSize" :options="sizeOptions" label="size" />
        </div>
      </div>
      <div class="flex space-x-5">
        <ui-toggle v-model="disabled" label="disabled state" />
        <ui-toggle v-model="isRequired" label="required state" />
        <ui-toggle v-model="isError" label="Error state" />
      </div>
      <ui-input v-if="isError" v-model="errorMessage" />
      <ui-input v-model="placeholder" label="Placeholder" />
      <ui-input v-model="label" label="label" />
    </template>
  </abstract-ui-example>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { EInputSize, EInputTypes, TInputSize, TInputType, TSelectOption } from '../ui/domain/@types';
import AbstractUiExample from './AbstractUiExample.vue';

@Component({ components: { AbstractUiExample } })
export default class ExampleInput extends Vue {
  private exampleModel: string | number = '';
  private isError: boolean = false;
  private isRequired: boolean = false;
  private disabled: boolean = false;
  private errorMessage = 'error message';
  private chosenType: TInputType = EInputTypes.TEXT;
  private chosenSize: TInputSize = EInputSize.SM;
  private placeholder = 'Placeholder';
  private label = 'label';

  private get typeOptions(): TSelectOption[] {
    return Object.values(EInputTypes).map(appearance => ({ value: appearance, text: appearance }));
  }

  private get sizeOptions(): TSelectOption[] {
    return Object.values(EInputSize).map(option => ({ value: option, text: option }));
  }
}
</script>

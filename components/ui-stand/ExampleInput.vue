<template>
  <div>
    <h2 class="text-center bg-gray-200 py-2">
      Input
    </h2>
    <div class="mx-10 md:flex">
      <div class="w-1/2 border-r">
        <ui-input
          v-model="exampleModel"
          :is-error="isError"
          :error-message="errorMessage"
          :type="chosenType"
          :label="label"
          :is-disabled="isDisabled"
          :placeholder="placeholder"
          :size="chosenSize"
          :required="isRequired"
        />
      </div>
      <div class="ml-5 space-y-5">
        <div class="flex space-x-10">
          <div>
            <ui-select v-model="chosenType" :options="typeOptions" label="type" />
            <ui-select v-model="chosenSize" :options="sizeOptions" label="size" />
          </div>
        </div>
        <div class="flex space-x-5">
          <ui-toggle v-model="isDisabled" label="disabled state" />
          <ui-toggle v-model="isRequired" label="required state" />
          <ui-toggle v-model="isError" label="Error state" />
        </div>
        <ui-input v-if="isError" v-model="errorMessage" />
        <ui-input v-model="placeholder" label="Placeholder" />
        <ui-input v-model="label" label="label" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { EInputSize, EInputTypes, TInputSize, TInputType, TSelectOption } from '../ui/domain/@types';
@Component
export default class ExampleInput extends Vue {
  private exampleModel: string | number = '';
  private isError: boolean = false;
  private isRequired: boolean = false;
  private isDisabled: boolean = false;
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

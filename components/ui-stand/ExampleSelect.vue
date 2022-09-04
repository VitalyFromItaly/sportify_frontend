<template>
  <div>
    <h2 class="text-center bg-gray-200 py-2">
      Select
    </h2>
    <div class="mx-10 flex">
      <div class="w-1/2 border-r">
        <ui-select v-model="selectModel" label="select" :options="options" :is-disabled="isDisabled" />
      </div>
      <div>
        <ui-toggle v-model="isDisabled" label="disable select" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { TSelectOption } from '../ui/domain/@types';
@Component
export default class ExampleSelect extends Vue {
  private selectModel: string = '';
  private isDisabled = false;
  private options: TSelectOption[] = [
    { text: 'text1', value: 'value1' },
    { text: 'text2', value: 'value2' },
    { text: 'text3', value: 'value3' }
  ];
}
</script>

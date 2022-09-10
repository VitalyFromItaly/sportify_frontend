<template>
  <div>
    <h2 class="text-center bg-gray-200 dark:bg-gray-800 py-2">
      Radio Button
    </h2>
    <div class="flex">
      <div class="w-1/2 border-r">
        <ui-radio-button
          v-model="value"
          :options="options"
          :label="label"
          :horizontal="isHorizontal"
          :description="description"
        />
      </div>
      <div class="ml-2">
        <ui-input v-model="label" label="label" />
        <ui-input v-model="description" label="description" placeholder="add description" />
        <ui-toggle v-model="isHorizontal" label="horizontal" />
        <p>value: { {{ value }} }</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { TRadioButtonOption } from '../ui/domain/@types';
@Component
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

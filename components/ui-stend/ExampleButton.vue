<template>
  <div>
    <h2 class="text-center bg-gray-200 py-2">
      Button
    </h2>
    <div class="mx-10 space-y-5 flex justify-between">
      <div class="flex flex-col items-center justify-center w-1/2 border-r">
        <ui-button class="text-center" :appearance="chosenMode" :is-disabled="isDisabled">
          {{ text }}
        </ui-button>
      </div>
      <div class="flex flex-col space-y-5 w-1/2 ml-2">
        <div>
          <label class="block" for="select">Choose button appearance</label>
          <select id="select" v-model="chosenMode" class=" bg-gray-500">
            <option v-for="({ value, text }, index) in buttonOptions" :key="index" :value="value">
              {{ text }}
            </option>
          </select>
        </div>
        <ui-input v-model="text" label="button inner text" />
        <div>
          <ui-toggle v-model="isDisabled" label="disable button state" />
          <!-- <input v-model="isDisabled" type="radio" :value="true" name="disabled" /> -->
          <!-- <input v-model="isDisabled" type="radio" :value="false" name="enabled" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { EButtonAppearance, TButtonType } from '../ui/@types';
@Component
export default class ButtonExample extends Vue {
  text: string = 'button text';
  chosenMode: TButtonType = EButtonAppearance.PRIMARY;
  isDisabled: boolean = false;

  private get buttonOptions(): { value: string, text: string }[] {
    return Object.values(EButtonAppearance).map(appearance => ({ value: appearance, text: appearance }));
  }
}
</script>

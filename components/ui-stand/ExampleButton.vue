<template>
  <abstract-ui-example>
    <template #header>
      Button
    </template>
    <template #component>
      <div class="flex flex-col items-center justify-center h-52">
        <ui-button class="text-center" :full-width="fullWidth" :appearance="chosenMode" :disabled="disabled" :loading="isLoading" @click="onClick">
          {{ text }}
        </ui-button>
      </div>
    </template>
    <template #settings>
      <div>
        <ui-select v-model="chosenMode" :options="buttonOptions" label="button appearance" />
      </div>
      <ui-input v-model="text" label="button inner text" />
      <div>
        <ui-toggle v-model="disabled" label="Disable state" />
        <ui-toggle v-model="isLoading" label="Loading state" />
        <ui-toggle v-model="fullWidth" label="full width" />
      </div>
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { EButtonAppearance, TButtonType } from '../ui/domain/@types';
import AbstractUiExample from './AbstractUiExample.vue';

@Component({ components: { AbstractUiExample } })
export default class ButtonExample extends Vue {
  text: string = 'button text';
  chosenMode: TButtonType = EButtonAppearance.PRIMARY;
  disabled: boolean = false;
  isLoading = false;
  fullWidth = false;

  private get buttonOptions(): { value: string, text: string }[] {
    return Object.values(EButtonAppearance).map(appearance => ({ value: appearance, text: appearance }));
  }

  private onClick(): void {
    this.$notification.success('Clicked!', 'the button was clicked');
  }
}
</script>

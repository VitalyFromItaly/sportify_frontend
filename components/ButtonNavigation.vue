<template>
  <div class="ml-auto">
    <div class="flex items-center justify-end space-x-2">
      <ui-button
        appearance="secondary"
        @click="onPrevStep(prevStep)"
      >
        {{ buttonPrevText }}
      </ui-button>
      <ui-button
        :disabled="disableNextButton"
        icon-after
        @click="onSubmit"
      >
        {{ buttonNextText }}
      </ui-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, namespace } from 'nuxt-property-decorator';
import { EVuexNamespaces } from '~/@types/domain';

const coreStore = namespace(EVuexNamespaces.CORE);

@Component
export default class BottomNavigation extends Vue {
  @Prop() readonly prevStep!: number;
  @Prop() readonly nextStep!: number;
  @Prop({ type: Boolean, default: false }) isFinish!: boolean;
  @Prop() buttonText!: string;
  @Prop({ default: false }) disableNextButton!: boolean;
  @Prop({ default: true }) isCanceled!: boolean;

  @coreStore.Mutation('setCurrentFormStep') setCurrentFormStep!: (step: number) => void;

  public get buttonNextText(): string {
    if (this.buttonText) { return this.buttonText; }
    const finishButtonText = this.$tc('ui.buttonNavigation.finish');
    const nextButtonText = this.$tc('ui.buttonNavigation.next');
    return this.isFinish ? finishButtonText : nextButtonText;
  }

  public get buttonPrevText(): string {
    return this.$tc('ui.buttonNavigation.back');
  }

  onSubmit(): void {
    this.$emit('submit', () => {
      this.setCurrentFormStep(this.nextStep);
    });
  }

  onPrevStep(step: number): void {
    this.setCurrentFormStep(step);
  }
}
</script>

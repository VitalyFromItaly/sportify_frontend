<template>
  <div :class="$style.buttons">
    <div>
      <cds-button v-if="isCanceled" appearance="transparent" text="Отменить" @click="$emit('cancel')" />
    </div>
    <div>
      <ui-button
        v-if="nextStep !== 1"
        appearance="secondary"
        @click="onPrevStep(prevStep)"
      >
      {{  }}
      </ui-button>
      <cds-button
        :text="buttonNextText"
        :disabled="disableNextButton"
        icon-after
        @click="onSubmit"
      >
      {{ buttonNextText }}
      </cds-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class BottomNavigation extends Vue {
  @Prop() readonly prevStep!: number;
  @Prop() readonly nextStep!: number;
  @Prop({ type: Boolean, default: false }) isFinish!: boolean;
  @Prop() buttonText!: string;
  @Prop({ default: false }) disableNextButton!: boolean;
  @Prop({ default: true }) isCanceled!: boolean;

  // @storeDocument.Mutation('setCurrentStep') setCurrentStep!: (step: number) => void;

  get buttonNextText(): string {
    if (this.buttonText) { return this.buttonText; }
    const finishButtonText = this.$tc('ui.buttonNavigation.finish');
    const nextButtonText = this.$tc('ui.buttonNavigation.finish');
    return this.isFinish ? finishButtonText : nextButtonText;
  }

  onSubmit(): void {
    this.$emit('submit', () => {
      // this.setCurrentStep(this.nextStep);
    });
  }

  onPrevStep(step: number): void {
    // this.setCurrentStep(step);
  }
}
</script>

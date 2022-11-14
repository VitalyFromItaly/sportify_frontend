<template>
  <div class="w-full">
    <div class="tablet:flex tablet:items-start tablet:space-x-10 space-y-5 tablet:space-y-0 mt-10 w-full">
      <biometrics ref="biometrics" class="laptop:w-1/2 w-full container" />
      <create-training-plan-form ref="planForm" class="laptop:w-1/2 w-full container" />
    </div>
    <div class="w-full">
      <button-navigation
        :next-step="1"
        :prev-step="0"
        @submit="onSubmit($event)"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import type { IForm } from '~/@types/component';
import ButtonNavigation from '~/components/ButtonNavigation.vue';
import Biometrics from '~/business/user/views/Biometrics.vue';
const CreateTrainingPlanForm = () => import('~/business/trainingPlan/views/CreateTrainingPlanForm.vue');

@Component({ components: { Biometrics, CreateTrainingPlanForm, ButtonNavigation } })
export default class AboutMePage extends Vue {
  @Ref() biometrics: IForm;
  @Ref() planForm: IForm;

  private async onSubmit(next: any): Promise<void> {
    const [isBiometricValid, isPlanFormValid] = await Promise.all([
      this.biometrics.onValidate(),
      this.planForm.onValidate()
    ]);
    if ([isBiometricValid, isPlanFormValid].some(isValid => !isValid)) {
      this.$notification.error(this.$tc('ui.notice.error'), this.$tc('ui.notice.formInvalid'));
      return;
    }

    try {
      await Promise.all([
        this.biometrics.onSubmit(),
        this.planForm.onSubmit()
      ]);
      next();
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<style scoped>
  .container {
    min-height: 32rem;
  }
</style>

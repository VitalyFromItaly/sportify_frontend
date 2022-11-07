<template>
  <div>
    <heading>{{ $t('account.aboutMe.header') }}</heading>
    <nuxt-child />
    <!-- <div class="laptop:flex laptop:items-start laptop:space-x-10 space-y-5 laptop:space-y-0 mt-10">
      <biometrics ref="biometrics" class="laptop:w-1/2 container" />
      <create-training-plan-form ref="planForm" class="laptop:w-1/2 container" />
    </div> -->
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import type { IForm } from '~/@types/component';
// import Biometrics from '~/business/user/views/Biometrics.vue';
// const CreateTrainingPlanForm = () => import('~/business/trainingPlan/views/CreateTrainingPlanForm.vue');

@Component
export default class AboutMePage extends Vue {
  @Ref() biometrics: IForm;
  @Ref() planForm: IForm;

  mounted() {
    console.log('AboutMePage');
  }
}
</script>
<style scoped>
  .container {
    min-height: 27rem;
  }
</style>

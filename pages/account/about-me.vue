<template>
  <div>
    <heading>{{ $t('account.aboutMe.header') }}</heading>
    <nuxt-child />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Ref, namespace, Watch } from 'nuxt-property-decorator';
import type { IForm, TStep } from '~/@types/component';
import { EVuexNamespaces } from '~/@types/domain';

const coreStore = namespace(EVuexNamespaces.CORE);

@Component
export default class AboutMePage extends Vue {
  @Ref() biometrics: IForm;
  @Ref() planForm: IForm;

  @coreStore.State currentFormStep: number;
  @coreStore.Mutation('setCurrentFormStep') setCurrentFormStep!: (step: number) => void;

  @Watch('currentFormStep', { immediate: true })
  onStepChange(step: number): void {
    if (step === -1) {
      step = 0;
    }

    const name = this.steps[step].routeName;
    this.$router.push({ name });
  }

  @Watch('$route.name', { immediate: true })
  onRouteChange(name: string): void {
    if (!this.routeNames.includes(name as string)) {
      return;
    }

    this.$router.push({ name });
  }

  private get steps(): TStep[] {
    return [
      { routeName: 'account-about-me-general-info', name: 'General info' },
      { routeName: 'account-about-me-schedule-form', name: 'Schedule' }
    ];
  }

  private get routeNames(): string[] {
    return this.steps.map(step => step.routeName);
  }

  private mounted(): void {
    const stepIndex = this.steps.findIndex((element: any) => this.$route.name === element.routeName);
    this.setCurrentFormStep(stepIndex === -1 ? 0 : stepIndex);
  }
}
</script>
<style scoped>
  .container {
    min-height: 27rem;
  }
</style>

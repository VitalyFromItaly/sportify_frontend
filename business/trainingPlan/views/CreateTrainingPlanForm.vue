<template>
  <ui-container class="w-full">
    <h3 class=" text-2xl mb-6">
      {{ $t('trainingPlan.form.header') }}
    </h3>
    <ui-loader v-if="state.isLoading" class="flex w-full justify-center h-40" />
    <form v-else>
      <validation-observer ref="validator">
        <validation-provider ref="field.goal" v-slot="{ errors, failed }" name="goal" rules="required|between:0,3">
          <ui-select
            v-model="form.goal"
            :label="goalLabel"
            :options="goalOptions"
            :placeholder="goalPlaceholder"
            :description="goalDescription"
            :error-message="errors[0]"
            :error="failed"
            required
          />
        </validation-provider>
        <div class="tablet:flex tablet:space-x-5">
          <validation-provider ref="field.start_date" v-slot="{ errors, failed }" name="start_date" rules="required">
            <ui-date-picker
              v-model="form.start_date"
              required
              :label="dateLabel"
              :is-error="failed"
              :error-message="errors[0]"
            />
          </validation-provider>
          <validation-provider ref="field.start_date" v-slot="{ errors, failed }" name="start_date" rules="required|between:1,6">
            <ui-number-input
              v-model="form.duration"
              :label="durationInput"
              required
              placeholder="1"
              :is-error="failed"
              :error-message="errors[0]"
            />
          </validation-provider>
        </div>
      </validation-observer>
    </form>
  </ui-container>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'nuxt-property-decorator';
import type { TState, IPresenter, TCreatePayload } from '../Domain';
import { trainingPlanStoreModule } from '../store';
import { EGoal } from '~/@types/domain';
import type { IValidate } from '~/@types/domain';
import { TSelectOption } from '~/components/ui/domain/@types';

@Component
export default class TrainingPlan extends Vue {
  @Ref() validator: IValidate;
  @trainingPlanStoreModule.State('internalState') state: TState;
  form = {} as TCreatePayload;
  private presenter: IPresenter;

  private get goalLabel(): string {
    return this.$tc('trainingPlan.form.goal.label');
  }

  private get goalDescription(): string {
    return this.$tc('trainingPlan.form.goal.description');
  }

  private get goalPlaceholder(): string {
    return this.$tc('trainingPlan.form.goal.placeholder');
  }

  private get dateLabel(): string {
    return this.$tc('trainingPlan.form.startDate.label');
  }

  private get durationInput(): string {
    return this.$tc('trainingPlan.form.duration.label');
  }

  private get goalOptions(): TSelectOption[] {
    return [
      { value: EGoal.WEIGHT_REDUCTION, text: this.$tc('trainingPlan.goal.weightReduction') },
      { value: EGoal.MUSCLE_GAIN, text: this.$tc('trainingPlan.goal.muscleGain') },
      { value: EGoal.WEIGHT_MAINTENANCE, text: this.$tc('trainingPlan.goal.weightMaintenance') },
      { value: EGoal.COMPETITION_PREPARATION, text: this.$tc('trainingPlan.goal.competitionPreparation') }
    ];
  }

  private mounted(): void {
    this.presenter = this.$presenter.trainingPlanInstance;
  }

  public async onSubmit(): Promise<boolean> {
    const isFormValid = await this.validator.validate();
    if (!isFormValid) { return false; }

    await this.presenter.onCreatePlan(this.form);
    if (this.state.isError) { return false; }
    return true;
  }
}
</script>

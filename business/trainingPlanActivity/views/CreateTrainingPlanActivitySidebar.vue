<template>
  <sidebar @hide="$emit('hide')">
    <template #content>
      <select
        :value="form.activityId"
        class="w-52 h-8 border-2 focus:outline-none bg-transparent"
        @change="onChangeActivity($event.target.value)"
      >
        <option class="text-disabled" value="" disabled selected>
          Choose
        </option>
        <option v-for="({ value, text }, index) in activitiesOptions" :key="index" :value="value">
          {{ text }}
        </option>
      </select>
    </template>
    <template #footer>
      <ui-button appearance="primary" full-width>
        Reschedule
      </ui-button>
    </template>
  </sidebar>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'nuxt-property-decorator';
import type { TState, IPresenter } from '../Domain';
import { trainingPlanActivityStoreModule } from '../store';
import type { IValidate } from '~/@types/domain';
import { ActivityEntity, CreateTrainingPlanActivityDto } from '~/Api/Api';
import Sidebar from '~/components/ui/SIdebar.vue';
import { TSelectOption } from '~/components/ui/domain/@types';

@Component({ components: { Sidebar } })
export default class CreateTrainingPlanActivitySidebar extends Vue {
  @Ref() validator: IValidate;

  @trainingPlanActivityStoreModule.State('internalState') state: TState;
  @trainingPlanActivityStoreModule.State('activities') activities: ActivityEntity[];
  @trainingPlanActivityStoreModule.Action loadActivities: () => Promise<void>;

  form = {} as CreateTrainingPlanActivityDto;
  private presenter: IPresenter;

  private mounted(): void {
    this.presenter = this.$presenter.trainingPlanActivityInstance;
    this.loadActivities();
  }

  get activitiesOptions(): TSelectOption[] {
    return this.activities?.map(activity => ({ value: activity.id, text: activity.name_en }));
  }

  public async onValidate(): Promise<boolean> {
    return await this.validator.validate();
  }

  onChangeActivity(value: number) {
    console.log(value);
  }

  public async onSubmit(): Promise<void> {
    const isFormValid = await this.onValidate();
    if (!isFormValid) { return; }

    await this.presenter.onCreate(this.form);
  }
}
</script>

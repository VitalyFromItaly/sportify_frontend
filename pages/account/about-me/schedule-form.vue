<template>
  <div>
    <div class="mt-4 mb-4 flex justify-end">
      <ui-button appearance="secondary" @click="isOpenSidebarCreate = true">
        Add an activity
      </ui-button>
    </div>
    <calendar
      ref="calendar"
      class="spr-calendar"
      :view="view"
      :use-detail-popup="true"
      :calendars="calendars"
      :events="events"
    />
    <create-training-plan-activity-sidebar v-if="isOpenSidebarCreate" @hide="isOpenSidebarCreate = false" />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import Calendar, { IEventObject } from '~/components/ui/Calendar.vue';
import CreateTrainingPlanActivitySidebar
  from '~/business/trainingPlanActivity/views/CreateTrainingPlanActivitySidebar.vue';

@Component({ components: { CreateTrainingPlanActivitySidebar, Calendar } })
export default class ScheduleForm extends Vue {
  isOpenSidebarCreate = false;
  view = 'week';

  calendars = [{ id: 'cal1', name: 'Personal' }];
  events: IEventObject[] = [
    {
      id: '1',
      calendarId: 'cal1',
      title: 'Lunch',
      category: 'time',
      start: '2022-11-26T12:00:00',
      end: '2022-11-26T20:00:00'
    },
    {
      id: '2',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2022-10-31T06:00:00',
      end: '2022-10-31T12:00:00'
    }
  ];
}
</script>

<style>
.spr-calendar {
  height: 800px
}
</style>

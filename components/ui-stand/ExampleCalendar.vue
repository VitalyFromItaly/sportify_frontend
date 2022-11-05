<template>
  <abstract-ui-example :is-full-width="true">
    <template #header>
      header
    </template>
    <template #component>
      <Calendar
        ref="calendar"
        class="spr-calendar"
        :view="view"
        :use-detail-popup="true"
        :month="month"
        :calendars="calendars"
        :events="events"
      />
    </template>
    <template #settings>
      setting
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import CalendarComponent from '@toast-ui/vue-calendar';
import type Calendar from '@toast-ui/calendar';

import AbstractUiExample from './AbstractUiExample.vue';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

@Component({ components: { AbstractUiExample, Calendar: CalendarComponent } })
export default class ExampleCheckbox extends Vue {
  view = 'week';
  month = {
    dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    visibleWeeksCount: 3
  };

  calendars = [{ id: 'cal1', name: 'Personal' }];
  events = [
    {
      id: '1',
      calendarId: 'cal1',
      title: 'Lunch',
      category: 'time',
      start: '2022-10-30T12:00:00',
      end: '2022-10-30T13:00:00'
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

  get calendarInstance(): Calendar {
    return this.$refs.calendar.getInstance();
  }

  mounted() {
    this.calendarInstance.setOptions({
      week: {
        taskView: false,
        eventView: ['time']
      }
    });
  }
}
</script>
<style>
.spr-calendar {
  height: 800px
}
</style>

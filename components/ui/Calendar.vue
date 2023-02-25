<template>
  <calendar-component
    ref="calendar"
    class="spr-calendar"
    :view="view"
    :use-detail-popup="true"
    :month="month"
    :week="week"
    :calendars="calendars"
    :events="events"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import CalendarComponent from '@toast-ui/vue-calendar';
import { Options } from '@toast-ui/calendar/types/types/options';
import BaseCalendar from '@toast-ui/calendar';

import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { EventObject } from '@toast-ui/calendar/types/types/events';

export type IEventObject = EventObject;

// @see Docs https://github.com/nhn/tui.calendar/blob/main/docs/en/apis/options.md
@Component({ components: { CalendarComponent } })
export default class Calendar extends Vue {
  @Prop({
    default: () => { return { visibleWeeksCount: 3 }; }
  }) month: Options['month'];

  @Prop({
    default: () => {
      return {
        dayNames: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        startDayOfWeek: 1
      };
    }
  }) week: Options['week'];

  @Prop() calendars: Options['calendars'];
  @Prop() events: EventObject[];
  @Prop() view: Options['defaultView'];

  private timezone = {
    zones: [{
      timezoneName: 'Europe/Moscow'
    }]
  };

  get calendarInstance(): BaseCalendar {
    // @ts-ignore
    return this.$refs.calendar.getInstance();
  }

  mounted() {
    this.calendarInstance.setOptions({
      week: {
        taskView: false,
        eventView: ['time']
      }
    });
    this.calendarInstance.setTheme({
      week: {
        dayName: {
          borderLeft: 'none',
          borderTop: 'none',
          borderBottom: 'none',
          backgroundColor: '#F2F2F2'
        }
      }
    });
  }
}
</script>

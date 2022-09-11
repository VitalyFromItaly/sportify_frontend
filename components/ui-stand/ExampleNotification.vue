<template>
  <abstract-ui-example>
    <template #header>
      Notification
    </template>
    <template #component>
      <div class="flex flex-col items-center justify-center h-96">
        <ui-notification :level="level" :type="chosenType" :title="title">
          <template #content>
            {{ content }}
          </template>
        </ui-notification>
      </div>
    </template>
    <template #settings>
      <ui-toggle v-model="isPage" label="Level" text-on="Page" text-off="Inline" />
      <ui-select v-model="chosenType" label="Type" :options="options" />
      <ui-input v-model="title" label="Title" />
      <ui-input v-model="content" label="Content" />
      <ui-input v-model="alive" type="number" label="Alive" />
      <ui-button @click="showNotice">
        notice
      </ui-button>
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import { ENotificationLevel, ENotificationType, TSelectOption } from '../ui/domain/@types';
import { NOTICE_PAGE_TYPE_ALIVE } from '../ui/domain/Domain';
import AbstractUiExample from './AbstractUiExample.vue';

@Component({ components: { AbstractUiExample } })
export default class NotificationExample extends Vue {
  private title = 'title';
  private content = 'content';
  private chosenType = ENotificationType.SUCCESS;
  private isPage = false;
  private level = ENotificationLevel.INLINE;
  private alive = NOTICE_PAGE_TYPE_ALIVE;

  @Watch('isPage')
  onLevelChange(value: boolean): void {
    value ? this.level = ENotificationLevel.PAGE : this.level = ENotificationLevel.INLINE;
  }

  private showNotice(): void {
    this.$notification[this.chosenType](this.title, this.content, { alive: this.alive });
  }

  private get options(): TSelectOption[] {
    return Object.values(ENotificationType).map(type => ({ text: type, value: type }));
  }
}
</script>

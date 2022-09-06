<template>
  <div
    class="notice-width border-2 py-2 px-5 dark:text-lightGray bg-white dark:bg-dark"
    :class="internalClasses"
  >
    <div class="flex justify-between items-center">
      <h5 class="font-semibold">
        {{ title }}
      </h5>
      <component :is="type" :class="internalIconClasses" />
    </div>
    <p v-if="!!content">
      {{ content }}
    </p>
    <p v-if="hasContent">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ENotificationType, ENotificationLevel } from './domain/@types';
import { noticeComponentClasses, noticeIconClasses, NOTICE_PAGE_TYPE_ALIVE } from './domain/Domain';
const info = () => import('~/components/svg/InfoColor.vue');
const error = () => import('~/components/svg/WarningColor.vue');
const success = () => import('~/components/svg/SuccessColor.vue');

@Component({ components: { info, error, success } })
export default class UINotification extends Vue {
  @Prop({ type: String, required: true }) title: string;
  @Prop({ type: String, required: false }) content: string;
  @Prop({
    type: Number,
    default: NOTICE_PAGE_TYPE_ALIVE,
    validator(value) {
      return Number.isInteger(value);
    }
  }) alive: number;

  @Prop({
    type: String,
    default: ENotificationLevel.INLINE,
    validator(value: ENotificationLevel) {
      return Object.values(ENotificationLevel).includes(value);
    }
  }) level: ENotificationLevel;

  @Prop({
    type: String,
    default: ENotificationType.INFO,
    validator(value: ENotificationType) {
      return Object.values(ENotificationType).includes(value);
    }
  }) type: ENotificationType;

  private get internalClasses(): string {
    const defaultClasses = noticeComponentClasses[this.type];

    const isPageLevel = this.level === ENotificationLevel.PAGE;
    const extraClasses = isPageLevel ? ' shadow-lg' : '';

    return defaultClasses + extraClasses;
  }

  private get hasContent(): boolean {
    const { $slots, $scopedSlots } = this;
    return !!$slots.content || !!$scopedSlots.content;
  }

  private get internalIconClasses(): string {
    return noticeIconClasses[this.type];
  }
}

</script>
<style lang="postcss" scoped>
  .notice-width {
    width: 352px;
  }
</style>

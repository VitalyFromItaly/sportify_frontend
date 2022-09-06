<template>
  <div>
    <ui-notification
      v-for="notification in computedNotices"
      :key="notification.id"
      class="notification"
      level="page"
      v-bind="notification"
    />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch, namespace } from 'nuxt-property-decorator';
import { NOTICE_PAGE_TYPE_ALIVE } from '../ui/domain/Domain';
import { EVuexNamespaces, TNotification } from '~/@types/domain';
const coreState = namespace(EVuexNamespaces.CORE);

@Component
export default class GlobalNotification extends Vue {
  @coreState.State notifications: TNotification[];
  @coreState.Mutation removeNotification: (payload: TNotification) => void;

  private stack: TNotification[] = [];
  private notices: TNotification[] = [];

  @Watch('notifications')
  onNewNotifications(notices: TNotification[]) {
    if (notices.length) {
      this.init(notices);
    }
  }

  private get computedNotices(): TNotification[] {
    this.setTimerAndChangeStack();
    return this.notices;
  }

  mounted(): void {
    this.init(this.notifications);
  }

  private init(notices: TNotification[]): void {
    if (!notices.length) { return; }
    const [newNotice] = notices;

    const isUniqNotice = this.notifications.length ? this.notifications.filter(notice => notice.id !== newNotice.id) : true;
    const inUniqStack = this.stack.length ? this.stack.filter(notice => notice.id !== newNotice.id) : true;
    if (isUniqNotice && inUniqStack) {
      this.stack.push(newNotice);
      this.removeNotification(newNotice);
    }
  }

  private setTimerAndChangeStack(): void {
    if (this.stack.length && this.notices.length < 3) {
      const notice = this.stack.shift();
      setTimeout(() => {
        this.destroyNotification(notice);
      }, notice.alive || NOTICE_PAGE_TYPE_ALIVE);

      this.notices.unshift(notice);
    }
  }

  private destroyNotification(notification: TNotification) {
    const index = this.notices.findIndex(notice => notice.id === notification.id);
    this.notices.splice(index, 1);
  }
}
</script>
<style scoped>
  .notification {
    z-index: 100;
    animation-name: animateSlideTop;
    animation-duration: 0.3s;
    animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    margin-bottom: 2rem;
  }

  @keyframes animateSlideTop {
    0% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
</style>

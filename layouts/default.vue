<template>
  <main class="flex flex-col min-h-screen text-base text-darkText dark:bg-dark dark:text-white font-sans">
    <portal-target multiple name="main" />
    <layout-header />
    <!-- <ui-button @click="changeLocale('ru')">
      Russian
    </ui-button>
    <ui-button @click="changeLocale('en')">
      English
    </ui-button> -->
    <div class="flex-grow global-padding">
      <nuxt class="" />
    </div>
    <portal-target class="notifications" name="notifications" multiple />
    <portal to="notifications">
      <layout-notification />
    </portal>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { localeChanged } from 'vee-validate';
import { TRouteEventPayload, TNotificationPayload, EAppLanguages } from '~/@types/domain';
import AuthLogo from '~/components/svg/AuthLogo.vue';
import { EEventBusName } from '~/core/bus/Domain';

// @Component({ components: { AuthLogo } })
@Component({ components: { AuthLogo }, middleware: ['route-guard'] })
export default class DefaultLayout extends Vue {
  mounted(): void {
    this.onRouterEvent();
    this.onNotificationEvent();
    if (!this.$auth.isAuth()) {
      console.warn('[auth] not auth');
      this.$router.replace({ name: 'sign-in' });
      return;
    }
    console.log('[auth] success');
  }

  private onRouterEvent(): void {
    this.$bus.on(EEventBusName.ROUTER, (payload: TRouteEventPayload) => {
      const { name, params } = payload;
      const routerPayload: TRouteEventPayload = { name };
      if (params) { routerPayload.params = params; }

      this.$router.push({ name, params });
    });
  }

  private onNotificationEvent(): void {
    this.$bus.on(EEventBusName.NOTIFICATION, (payload: TNotificationPayload) => {
      const { type, content, title, params } = payload;
      this.$notification[type](title, content, params);
    });
  }

  changeLocale(lang: EAppLanguages): void {
    this.$i18n.setLocale(lang);
    localeChanged();
  }
}
</script>
<style lang="postcss">
  .global-padding {
    @apply px-14;
  }
  .notifications {
  position: fixed;
  top: 1.5rem;
  z-index: 100;
  right: 3%;
  /* transform: translateX(-50%); */
  }
</style>

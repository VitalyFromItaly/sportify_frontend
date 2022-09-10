<template>
  <main class="flex flex-col min-h-screen text-base text-darkText">
    <!-- <h1>{{ $t('hello') }}</h1>
    <ui-button @click="changeLocale('ru')">
      Russian
    </ui-button>
    <ui-button @click="changeLocale('en')">
      English
    </ui-button> -->
    <portal-target multiple name="main" />
    <div class=" flex-grow">
      <div class="flex min-h-screen items-stretch justify-center px-10">
        <nuxt class="w-1/2 flex justify-center " />
        <auth-logo class="hidden laptop:block w-1/2 self-center" />
      </div>
      <portal-target class="notifications" name="notifications" multiple />
      <portal to="notifications">
        <layout-notification />
      </portal>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { localeChanged } from 'vee-validate';
import { EAppLanguages, TNotificationPayload, TRouteEventPayload } from '~/@types/domain';
import AuthLogo from '~/components/svg/AuthLogo.vue';
import { EEventBusName } from '~/core/bus/Domain';
@Component({ components: { AuthLogo } })
export default class AuthLayout extends Vue {
  mounted(): void {
    this.$i18n.setLocale(localStorage.getItem('language'));
    this.onRouterEvent();
    this.onNotificationEvent();
    this.$router.push({ name: 'sign-in' });
  }

  private onRouterEvent(): void {
    this.$bus.on(EEventBusName.AUTH_ROUTER, (payload: TRouteEventPayload) => {
      const { name, params } = payload;
      const routerPayload: TRouteEventPayload = { name };
      if (params) { routerPayload.params = params; }

      this.$router.push({ name, params });
    });
  }

  private onNotificationEvent(): void {
    this.$bus.on(EEventBusName.AUTH_NOTIFICATION, (payload: TNotificationPayload) => {
      console.log({ payload });
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

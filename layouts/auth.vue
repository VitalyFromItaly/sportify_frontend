<template>
  <main class="flex flex-col min-h-screen text-base text-darkText">
    <portal-target multiple name="main" />
    <div class="flex-grow">
      <div class="flex flex-col min-h-screen items-stretch justify-center px-10">
        <athletick-logo-dark class="w-1/2 tablet:hidden block self-center mb-5" />
        <div class="flex flex-col-reverse tablet:flex-row">
          <nuxt class="w-1/2 flex justify-center self-center" />
          <auth-logo class="laptop:block w-3/4 laptop:w-1/2 self-center" />
        </div>
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
import { EAppLanguages, TNotificationEvent, TRouteEventPayload } from '~/@types/domain';
import AuthLogo from '~/components/svg/AuthLogo.vue';
import { EEventBusName } from '~/core/bus/Domain';
import MainLogo from '~/components/svg/MainLogo.vue';
import AthletickLogoDark from '~/components/svg/AthletickLogoDark.vue';

@Component({ components: { AuthLogo, MainLogo, AthletickLogoDark } })
export default class AuthLayout extends Vue {
  mounted(): void {
    this.$i18n.setLocale(localStorage.getItem('language'));
    this.onRouterEvent();
    this.onNotificationEvent();
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
    this.$bus.on(EEventBusName.AUTH_NOTIFICATION, (payload: TNotificationEvent) => {
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

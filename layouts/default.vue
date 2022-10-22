<template>
  <main class="flex flex-col min-h-screen text-base text-darkText dark:bg-dark dark:text-lightGray font-sans">
    <div v-if="isAppLoaded">
      <portal-target multiple name="main" />
      <layout-header />
      <div class="body">
        <nuxt />
      </div>
      <portal-target class="notifications" name="notifications" multiple />
      <portal to="notifications">
        <layout-notification />
      </portal>
    </div>
    <layout-global-loader />
  </main>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import { localeChanged } from 'vee-validate';
import { TRouteEventPayload, TNotificationEvent, EAppLanguages, EVuexNamespaces } from '~/@types/domain';
import AuthLogo from '~/components/svg/AuthLogo.vue';
import { EEventBusName } from '~/core/bus/Domain';

const stateCore = namespace(EVuexNamespaces.CORE);

@Component({ components: { AuthLogo }, middleware: ['route-guard'] })
export default class DefaultLayout extends Vue {
  @stateCore.Mutation setIsLoading: () => void;
  @stateCore.Mutation removeIsLoading: () => void;

  isAppLoaded = false;

  async mounted(): Promise<void> {
    this.setIsLoading();
    this.setListeners();
    if (!this.$auth.isAuth()) {
      console.warn('[auth] not auth');
      this.$router.replace({ name: 'sign-in' });
      return;
    }
    console.log('[auth] success');
    await this.initApp();
    this.isAppLoaded = true;
    this.removeIsLoading();
  }

  private setListeners(): void {
    this.onRouterEvent();
    this.onNotificationEvent();
  }

  private async initApp(): Promise<void> {
    await Promise.all([
      this.$presenter.userInstance.onLoad(),
      this.$presenter.contextInstance.onLoad()
    ]);
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
    this.$bus.on(EEventBusName.NOTIFICATION, (payload: TNotificationEvent) => {
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

  .body {
    @apply flex-grow global-padding z-10 mt-12;
  }
  .notifications {
  position: fixed;
  top: 1.5rem;
  z-index: 100;
  right: 3%;
  /* transform: translateX(-50%); */
  }
</style>

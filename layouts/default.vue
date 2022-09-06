<template>
  <main class="flex flex-col min-h-screen dark:bg-dark dark:text-white">
    <portal-target multiple name="main" />
    <layout-header />
    <!-- <auth-logo /> -->
    <div class="flex-grow px-5">
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
import { TRouteEventPayload } from '~/@types/domain';
import AuthLogo from '~/components/svg/AuthLogo.vue';
import { EEventBusName } from '~/core/bus/Domain';

@Component({ components: { AuthLogo } })
export default class DefaultLayout extends Vue {
  mounted(): void {
    this.onRouterEvent();
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
}
</script>
<style scoped>
  .notifications {
  position: fixed;
  top: 1.5rem;
  z-index: 100;
  right: 3%;
  /* transform: translateX(-50%); */
  }
</style>

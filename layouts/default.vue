<template>
  <main class="flex flex-col min-h-screen dark:bg-dark">
    <portal-target multiple name="main" />
    <layout-header />
    <!-- <auth-logo /> -->
    <div class="flex-grow">
      <nuxt class="" />
    </div>
    <portal-target class="notifications" name="notifications" multiple />
    <portal to="notifications">
      <layout-notification class="" />
    </portal>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import AuthLogo from '~/components/svg/AuthLogo.vue';

@Component({ components: { AuthLogo } })
export default class DefaultLayout extends Vue {
  mounted(): void {

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

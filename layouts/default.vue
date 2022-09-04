<template>
  <main class="flex flex-col min-h-screen dark:bg-dark">
    <layout-header />
    <!-- <auth-logo /> -->
    <div class="flex-grow">
      <nuxt class="" />
    </div>
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

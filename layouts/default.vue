<template>
  <main>
    <layout-header />
    <!-- <auth-logo /> -->
    <nuxt />
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

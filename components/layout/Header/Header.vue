<template>
  <header class="global-padding header">
    <div class="flex w-full justify-between items-center">
      <button @click="$router.push({ name: 'account' })">
        <athletick-logo-light class="w-1/2" />
        <!-- <sportify-logo color="white" /> -->
      </button>
      <ui-link v-if="$config.environment === 'dev'" :to="({ name: 'ui-stand' })">
        ui-stend
      </ui-link>
      <div class="flex space-x-10">
        <theme-switcher />
        <user-info-header />
      </div>
    </div>
  </header>
</template>
<script lang='ts'>

import { Vue, Component } from 'nuxt-property-decorator';
import ThemeSwitcher from './ThemeSwitcher.vue';
import UserInfoHeader from '~/business/user/views/HeaderUserInfo.vue';
import SportifyLogo from '~/components/svg/MainLogo.vue';
import { USER_STORE_NS } from '~/business/user/store';
import AthletickLogoLight from '~/components/svg/AthletickLogoLight.vue';

@Component({ components: { SportifyLogo, ThemeSwitcher, UserInfoHeader, AthletickLogoLight } })
export default class Header extends Vue {
  private get hasUser(): boolean {
    return this.$store.getters[`${USER_STORE_NS}/hasUser`];
  }
}
</script>
<style lang="postcss" scoped>
  .header {
    @apply fixed top-0 left-0 right-0 z-20 h-12 bg-gradient-to-r from-lightTeal to-middleTeal text-white py-2 text-sm font-extralight;
  }
</style>

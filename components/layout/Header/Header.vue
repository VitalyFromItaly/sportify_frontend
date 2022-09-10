<template>
  <div class="bg-gradient-to-r from-lightTeal to-middleTeal text-white global-padding py-2 text-sm font-extralight">
    <div class="flex justify-between items-baseline">
      <sportify-logo color="white" />
      <ui-link v-if="$config.environment === 'dev'" :to="({ name: 'ui-stand' })">ui-stend</ui-link>
      <div class="flex space-x-10">
        <theme-switcher />
        <user-info-header />
      </div>
    </div>
  </div>
</template>
<script lang='ts'>

import { Vue, Component } from 'nuxt-property-decorator';
import ThemeSwitcher from './ThemeSwitcher.vue';
import UserInfoHeader from '~/business/user/views/HeaderUserInfo.vue';
import SportifyLogo from '~/components/svg/MainLogo.vue';
import { USER_STORE_NS } from '~/business/user/store';
@Component({ components: { SportifyLogo, ThemeSwitcher, UserInfoHeader } })
export default class Header extends Vue {
  private get hasUser(): boolean {
    return this.$store.getters[`${USER_STORE_NS}/hasUser`];
  }
}
</script>

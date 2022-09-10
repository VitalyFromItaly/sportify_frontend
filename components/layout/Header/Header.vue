<template>
  <div class="bg-gradient-to-r from-lightTeal to-middleTeal text-white global-padding py-2 text-sm font-extralight">
    <div class="flex justify-between">
      <sportify-logo color="white" />
      <div class="flex space-x-10">
        <theme-switcher v-if="hasUser" />
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

<template>
  <div class="bg-gradient-to-r from-lightTeal to-middleTeal text-white px-5 py-2 text-sm font-extralight">
    <div class="flex justify-between">
      <sportify-logo color="white" />
      <div class="flex space-x-10">
        <theme-switcher />
        <user-info />
      </div>
    </div>
  </div>
</template>
<script lang='ts'>

import { Vue, Component } from 'nuxt-property-decorator';
import ThemeSwitcher from './ThemeSwitcher.vue';
import UserInfo from './UserInfo.vue';
import SportifyLogo from '~/components/svg/MainLogo.vue';
@Component({ components: { SportifyLogo, ThemeSwitcher, UserInfo } })
export default class Header extends Vue {}
</script>

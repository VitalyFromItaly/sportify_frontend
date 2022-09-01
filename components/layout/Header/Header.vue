<template>
  <div class="bg-gradient-to-r from-lightTeal to-middleTeal text-white px-5 py-2 text-sm font-extralight">
    <div class="flex justify-between">
      <sportify-logo />
      <div class="flex space-x-10">
        <mode-switcher />
        <user-info />
      </div>
    </div>
  </div>
</template>
<script lang='ts'>

import { Vue, Component } from 'nuxt-property-decorator';
import ModeSwitcher from './ModeSwitcher.vue';
import UserInfo from './UserInfo.vue';
import SportifyLogo from '~/components/svg/MainLogo.vue';
@Component({ components: { SportifyLogo, ModeSwitcher, UserInfo } })
export default class Header extends Vue {}
</script>

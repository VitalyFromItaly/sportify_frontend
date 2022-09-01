<template>
  <div
    class="flex items-center cursor-pointer"
    @click="onShowUserMenu"
  >
    <user />
    <div class="mr-3">
      user email
    </div>
    <chevron-down />
    <div v-if="isUserMenuShown" class="absolute bg-white text-gray-900 right-6 top-11 w-32">
      menu
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import User from '../../svg/User.vue';
import ChevronDown from '../../svg/ChevronDown.vue';
@Component({ components: { User, ChevronDown } })
export default class UserInfo extends Vue {
  isUserMenuShown: boolean = false;

  private onShowUserMenu(): void {
    this.isUserMenuShown = !this.isUserMenuShown;
  }
}
</script>
<style scoped>
div {
  outline-style:none;
}
*, *:before, *:after {
  -webkit-user-select: none; /* Chrome/Safari */     
  -moz-user-select: none; /* Firefox */
}
</style>

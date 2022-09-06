<template>
  <div v-if="userInfo" class="flex items-center cursor-pointer" @click="onShowUserMenu">
    <user-icon />
    <div class="mr-3">
      {{ state.user.email }}
    </div>
    <chevron-down color="white" />
    <div v-if="isUserMenuShown" class="absolute bg-white text-gray-900 right-6 top-11 w-32">
      menu
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import type { TState, IPresenter, TUserInfo } from '../Domain';
import { userStoreModule } from '../store';
import ChevronDown from '~/components/svg/ChevronDown.vue';
import UserIcon from '~/components/svg/User.vue';

@Component({ components: { ChevronDown, UserIcon } })
export default class UserInfo extends Vue {
  @userStoreModule.State('internalState') state: TState;

  private isUserMenuShown: boolean = false;
  private presenter: IPresenter;

  private onShowUserMenu(): void {
    this.isUserMenuShown = !this.isUserMenuShown;
  }

  private get userInfo(): TUserInfo {
    return this.state.user;
  }

  public async mounted(): Promise<void> {
    this.presenter = this.$presenter.userInstance;

    await this.presenter.onMounted();
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

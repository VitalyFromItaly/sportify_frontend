<template>
  <div v-if="user" class="flex items-center cursor-pointer" @click="onShowUserMenu">
    <user-icon />
    <div class="mr-3">
      {{ user.email }}
    </div>
    <ui-button appearance="transparent" @click="onLogout"> logout </ui-button>
    <chevron-down color="white" />
    <div v-if="isUserMenuShown" class="absolute bg-white text-gray-900 right-6 top-11 w-32">
      menu
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import type { IPresenter, TUserInfo } from '../Domain';
import { userStoreModule } from '../store';
import ChevronDown from '~/components/svg/ChevronDown.vue';
import UserIcon from '~/components/svg/User.vue';

@Component({ components: { ChevronDown, UserIcon } })
export default class user extends Vue {
  @userStoreModule.Getter user: TUserInfo;

  private isUserMenuShown: boolean = false;
  private presenter: IPresenter;

  private onShowUserMenu(): void {
    this.isUserMenuShown = !this.isUserMenuShown;
  }

  public async mounted(): Promise<void> {
    this.presenter = this.$presenter.userInstance;

    await this.presenter.onMounted();
  }

  private onLogout(): void {
    this.$presenter.loginInstance.onLogout();
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

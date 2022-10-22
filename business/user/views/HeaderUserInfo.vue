<template>
  <div v-if="user" v-click-outside="onClickOutside" class="relative">
    <div class="flex items-center cursor-pointer" @click="onShowUserMenu">
      <user-icon />
      <div class="mr-3">
        {{ user.email }}
      </div>
      <button><chevron-down color="white" :class="classes" /></button>
      <transition-bounce>
        <div v-if="isUserMenuShown" class="absolute bg-white dark:bg-middleDark dark:text-lightGray text-gray-900 right-0 top-10 shadow-2xl">
          <ul class="text-left">
            <li class="li">
              <p @click="$router.push({ name: 'account' })">
                {{ $t('account.info.link') }}
              </p>
            </li>
            <li class="li">
              <p @mousedown="onLogout">
                {{ $t('account.info.logout') }}
              </p>
            </li>
          </ul>
        </div>
      </transition-bounce>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import type { IPresenter, TUserInfo } from '../Domain';
import { userStoreModule } from '../store';
import ChevronDown from '~/components/svg/ChevronDown.vue';
import UserIcon from '~/components/svg/User.vue';
import { clickOutside } from '~/helpers/directives';

@Component({ components: { ChevronDown, UserIcon }, directives: { clickOutside } })
export default class user extends Vue {
  @userStoreModule.Getter user: TUserInfo;

  private isUserMenuShown: boolean = false;
  private presenter: IPresenter;

  private get classes(): object {
    return {
      'rotate-180': this.isUserMenuShown,
      'rotate-0': !this.isUserMenuShown
    };
  }

  private onShowUserMenu(): void {
    this.isUserMenuShown = !this.isUserMenuShown;
  }

  onClickOutside(): void {
    this.isUserMenuShown = false;
  }

  private onLogout(): void {
    console.log('on logout');
    this.$presenter.authInstance.onLogout();
  }
}
</script>

<style scoped>

.li {
  @apply hover:bg-lightGray dark:hover:bg-gray-800 px-3 py-2;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 200ms ease;
}

.rotate-0 {
  transform: rotate(0deg);
  transition: transform 200ms ease;
}

div {
  outline-style:none;
}
*, *:before, *:after {
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
}
</style>

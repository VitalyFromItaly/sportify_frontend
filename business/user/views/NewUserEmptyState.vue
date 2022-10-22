<template>
  <div class="flex flex-col-reverse tablet:flex-row justify-between items-center">
    <div class="w-full tablet:w-1/2">
      <div class="flex flex-col">
        <div class="text-center tablet:text-left">
          <heading> {{ $t('account.newUser.greetings') }} </heading>
          <p v-for="message in $t('account.newUser.messages')" :key="message" class="mt-5 tablet:max-w-sm text-center tablet:text-left">
            {{ message }}
          </p>
          <div class="mt-5">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </div>
    <new-user-icon class="w-1/2 tablet:w-full" />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import NewUserIcon from '~/components/svg/NewUserIcon.vue';
@Component({ components: { NewUserIcon } })
export default class NewUser extends Vue {

}
</script>

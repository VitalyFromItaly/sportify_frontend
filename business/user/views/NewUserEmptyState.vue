<template>
  <div class="flex justify-center items-center">
    <div class="w-1/2">
      <div class="flex flex-col items-center">
        <div>
          <heading> {{ $t('account.newUser.greetings') }} </heading>
          <p v-for="message in $t('account.newUser.messages')" :key="message" class="mt-5 max-w-sm">
            {{ message }}
          </p>
          <div class="mt-5">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </div>
    <new-user-icon />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import NewUserIcon from '~/components/svg/NewUserIcon.vue';
@Component({ components: { NewUserIcon } })
export default class NewUser extends Vue {

}
</script>

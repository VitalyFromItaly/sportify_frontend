<template>
  <div class="flex flex-col items-center">
    <main-logo style="width: 133px; height: 38.37px;" />
    <sign-in-form />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import SignInForm from '~/business/authorization/views/SignInForm.vue';
import { ELayout } from '~/@types/domain';
import MainLogo from '~/components/svg/MainLogo.vue';
@Component({ layout: ELayout.AUTH, components: { SignInForm, MainLogo } })
export default class SignInPage extends Vue {}
</script>

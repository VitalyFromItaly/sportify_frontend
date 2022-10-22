<template>
  <auth-wrapper>
    <sign-in-form />
  </auth-wrapper>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import SignInForm from '~/business/authorization/views/SignInForm.vue';
import { ELayout } from '~/@types/domain';
import AuthWrapper from '~/components/layout/auth/AuthWrapper.vue';

@Component({ layout: ELayout.AUTH, components: { SignInForm, AuthWrapper } })
export default class SignInPage extends Vue {}
</script>

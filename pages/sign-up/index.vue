<template>
  <auth-wrapper>
    <sign-up-form />
  </auth-wrapper>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { ELayout } from '~/@types/domain';
import SignUpForm from '~/business/authorization/views/SignUpForm.vue';
import AuthWrapper from '~/components/layout/auth/AuthWrapper.vue';

@Component({ layout: ELayout.AUTH, components: { SignUpForm, AuthWrapper } })
export default class SignUpPage extends Vue {}
</script>

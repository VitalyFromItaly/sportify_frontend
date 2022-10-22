<template>
  <div class="flex flex-col items-center">
    <main-logo class="hidden tablet:block" />
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import MainLogo from '~/components/svg/MainLogo.vue';

@Component({ components: { MainLogo } })
export default class AuthWrapper extends Vue {}
</script>

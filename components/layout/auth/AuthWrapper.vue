<template>
  <div class="flex flex-col items-center">
    <main-logo style="width: 133px; height: 38.37px;" />
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
// import { ELayout } from '~/@types/domain';
import MainLogo from '~/components/svg/MainLogo.vue';

@Component({ components: { MainLogo } })
export default class AuthWrapper extends Vue {}
</script>

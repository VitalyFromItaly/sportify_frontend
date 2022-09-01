<template>
  <div>
    <h1>{{ $t('hello') }}</h1>
    <h1>Lang navigation</h1>
    <nuxt-link :to="switchLocalePath('ru')">
      Russian
    </nuxt-link>
    <nuxt-link :to="switchLocalePath('en')">
      English
    </nuxt-link>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class AuthLayout extends Vue {
  mounted(): void {
  }
}
</script>

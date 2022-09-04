<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ layout: 'auth' })
export default class IndexPage extends Vue {
  mounted(): void {
    // this.switchLocalePath('ru');
    // this.$router.replace({ name: 'sign-in___en' });
  }
}
</script>

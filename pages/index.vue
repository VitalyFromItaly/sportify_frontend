<template>
  <div class="flex justify-center h-screen items-center">
    <ui-button>кнопка</ui-button>
    <ui-input />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ layout: 'auth' })
export default class IndexPage extends Vue {
}
</script>

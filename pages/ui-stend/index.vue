<template>
  <div class="space-y-3">
    <example-button />
    <example-input />
    <example-toggle />
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import ExampleButton from '~/components/ui-stend/ExampleButton.vue';
import ExampleInput from '~/components/ui-stend/ExampleInput.vue';
import ExampleToggle from '~/components/ui-stend/ExampleToggle.vue';
@Component({ components: { ExampleButton, ExampleInput, ExampleToggle } })
export default class UIStand extends Vue {}
</script>

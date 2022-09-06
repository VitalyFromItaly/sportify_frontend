<template>
  <div class="space-y-3">
    <example-button />
    <example-input />
    <example-toggle />
    <example-select />
    <example-container />
    <example-notification />
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import ExampleButton from '~/components/ui-stand/ExampleButton.vue';
import ExampleInput from '~/components/ui-stand/ExampleInput.vue';
import ExampleToggle from '~/components/ui-stand/ExampleToggle.vue';
import ExampleSelect from '~/components/ui-stand/ExampleSelect.vue';
import ExampleContainer from '~/components/ui-stand/ExampleContainer.vue';
import ExampleNotification from '~/components/ui-stand/ExampleNotification.vue';
@Component({ components: { ExampleButton, ExampleInput, ExampleToggle, ExampleSelect, ExampleContainer, ExampleNotification } })
export default class UIStand extends Vue {}
</script>

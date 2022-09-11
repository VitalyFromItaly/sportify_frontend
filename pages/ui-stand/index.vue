<template>
  <div class="space-y-3">
    <example-date-picker />
    <example-radio-button />
    <example-tabs />
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
import ExampleDatePicker from '~/components/ui-stand/ExampleDatePicker.vue';
import ExampleTabs from '~/components/ui-stand/ExampleTabs.vue';
import ExampleRadioButton from '~/components/ui-stand/ExampleRadioButton.vue';
import ExampleButton from '~/components/ui-stand/ExampleButton.vue';
import ExampleInput from '~/components/ui-stand/ExampleInput.vue';
import ExampleToggle from '~/components/ui-stand/ExampleToggle.vue';
import ExampleSelect from '~/components/ui-stand/ExampleSelect.vue';
import ExampleContainer from '~/components/ui-stand/ExampleContainer.vue';
import ExampleNotification from '~/components/ui-stand/ExampleNotification.vue';
@Component({
  components: {
    ExampleButton,
    ExampleInput,
    ExampleToggle,
    ExampleSelect,
    ExampleContainer,
    ExampleNotification,
    ExampleTabs,
    ExampleRadioButton,
    ExampleDatePicker
  }
})
export default class UIStand extends Vue {}
</script>

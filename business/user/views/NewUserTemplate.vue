<template>
  <new-user-empty-state>
    <template #actions>
      <fill-out-form-button />
    </template>
  </new-user-empty-state>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import NewUserEmptyState from './NewUserEmptyState.vue';
import FillOutFormButton from './FillOutFormButton.vue';

@Component({ components: { NewUserEmptyState, FillOutFormButton } })
export default class NewUserTemplate extends Vue {}
</script>

<template>
  <div>
    <h2 class="text-center bg-gray-200 py-2">
      Container
    </h2>
    <div class="mx-10 flex">
      <div>
        <ui-container type="expandable">
          <template #header>
            header
          </template>
          Container
        </ui-container>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class ExampleContainer extends Vue {
}
</script>

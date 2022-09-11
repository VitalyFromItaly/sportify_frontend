<template>
  <div>
    <div class="text-center bg-gray-200 -mx-14 dark:bg-gray-800 py-2">
      <slot name="header"></slot>
    </div>
    <div class="laptop:flex">
      <div class="laptop:w-1/2 laptop:border-r border-b laptop:border-b-0">
        <p class="text-center bg-lightTeal text-white">
          UI Component
        </p>
        <div class="my-3">
          <slot name="component"></slot>
        </div>
      </div>
      <div class="flex flex-col space-y-5 laptop:w-1/2">
        <p class="text-center bg-lightTeal text-white">
          All available component props
        </p>
        <div class="ml-2 space-y-2">
          <slot name="settings"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class AbstractUiExample extends Vue {}
</script>

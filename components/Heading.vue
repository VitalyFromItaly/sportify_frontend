<template>
  <h1 class="text-3xl font-semibold mt-6">
    <slot></slot>
  </h1>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class Heading extends Vue {}
</script>

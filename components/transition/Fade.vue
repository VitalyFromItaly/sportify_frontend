<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class TransitionFade extends Vue {}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>

<template>
  <transition name="block">
    <slot></slot>
  </transition>
</template>

<style scoped>
  .block-enter-active {
    animation: bounce-in .5s;
  }

  .block-leave-active {
    animation: bounce-out .5s;
  }

  @keyframes bounce-in {
  0% {
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

  @keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
}
</style>

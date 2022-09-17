<template>
  <transition v-if="overlay" name="fade">
    <div
      class="overscroll-none h-screen overflow-hidden fixed z-50 overflow-x-hidden inset-0"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    >
      <div class="flex min-h-full z-50 overflow-x-hidden overflow-y-hidden dark:bg-dark dark:bg-opacity-80 bg-gray-200 bg-opacity-60 flex-col transition-opacity justify-center items-center">
        <large-loader class="animate-spin" />
      </div>
    </div>
  </transition>
  <div v-else>
    <component :is="loader" :color="color" class="animate-spin" />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
const LargeLoader = () => import('~/components/svg/LargeLoader.vue');
const MiniLoader = () => import('~/components/svg/SmallLoader.vue');
@Component({ components: { LargeLoader, MiniLoader } })
export default class UILoader extends Vue {
  @Prop({ type: Boolean, default: false }) overlay: boolean;
  @Prop({ type: Boolean, default: false }) small: boolean;
  @Prop({ type: String, default: '#469BA2' }) color: string;

  private get loader(): any {
    if (this.small) {
      return MiniLoader;
    }

    return LargeLoader;
  }
}
</script>
<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

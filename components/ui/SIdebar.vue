<template>
  <div v-click-outside="onClickOutside">
    <transition name="slide">
      <div
        class="sidebar"
        tabindex="-1"
        @click.stop
      >
        <div class="content">
          <div class="header">
            <slot name="header">
              <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold">
                <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>Info
              </h5>
            </slot>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="hide">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.6422 0.750816C1.40297 0.511579 1.01509 0.511579 0.77585 0.750816C0.536613 0.990052 0.536613 1.37793 0.77585 1.61717L7.13387 7.97518L0.726302 14.3828C0.487066 14.622 0.487066 15.0099 0.726302 15.2491C0.965539 15.4883 1.35342 15.4883 1.59265 15.2491L8.00022 8.84154L14.4078 15.2491C14.647 15.4883 15.0349 15.4883 15.2741 15.2491C15.5134 15.0099 15.5134 14.622 15.2741 14.3828L8.86657 7.97518L15.2246 1.61717C15.4638 1.37793 15.4638 0.990052 15.2246 0.750816C14.9854 0.511579 14.5975 0.511579 14.3582 0.750816L8.00022 7.10883L1.6422 0.750816Z" :fill="isDarkTheme ? 'white' : 'black'" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <slot name="content"></slot>
        </div>
        <div class="grid grid-cols-2 gap-4 footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { clickOutside } from '~/helpers/directives';
import Button from '~/components/ui/Button.vue';

@Component({
  components: { UiButton: Button },
  directives: { clickOutside }
})
export default class Sidebar extends Vue {
  private internalShown: boolean = false;

  public get isDarkTheme(): boolean {
    return this.$store.state.Core.isDarkTheme;
  }

  public onClickOutside(): void {
    if (!this.internalShown) {
      return;
    }

    this.$emit('hide');
  }

  public hide(): void {
    this.$emit('hide');
  }

  private mounted(): void {
    setTimeout(() => {
      this.internalShown = true;
    }, 100);
  }

  private unmounted() {
    this.internalShown = false;
  }
}
</script>

<style lang="postcss">
 .slide-enter-active, .slide-leave-active {
  transition: width 1s;
}
.slide-enter, .slide-leave-to{
  width:0;
}
/* .slide-enter-active {
  animation: menu-slide .5s;
}
.slide-leave-active {
  animation: menu-slide .5s reverse;
}
@keyframes menu-slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
} */
.sidebar {
  @apply flex fixed z-40 h-full p-4 w-64 overflow-y-auto bg-gray-200 dark:bg-darkContainer dark:text-white w-80 right-0 justify-between flex-col;
  @apply shadow-md;
  background-color: white;
  top: 3rem;
}
.header {
  @apply flex justify-between items-start;
}
.footer {
  margin-bottom: 3rem;
  @apply flex;
}
</style>

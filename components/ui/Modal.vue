<template>
  <section class="fixed w-full h-full inset-0 z-50">
    <div v-click-outside="onClickOutside"
      class="overflow fixed opacity-25 w-full h-full"
    ></div>
    <div class="fixed flex justify-center items-center inset-0 overflow-x-hidden overflow-y-auto" tabindex="-1" aria-hidden="true">
      <div @click.stop class="relative w-4/5 tablet:w-2/3 desktop:w-1/3 ">
        <div class="relative bg-white shadow dark:bg-gray-700">
          <div class="flex justify-between items-start p-4 rounded-t dark:border-gray-600">
            <slot name="header">
              <slot name="title"></slot>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="hide">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.6422 0.750816C1.40297 0.511579 1.01509 0.511579 0.77585 0.750816C0.536613 0.990052 0.536613 1.37793 0.77585 1.61717L7.13387 7.97518L0.726302 14.3828C0.487066 14.622 0.487066 15.0099 0.726302 15.2491C0.965539 15.4883 1.35342 15.4883 1.59265 15.2491L8.00022 8.84154L14.4078 15.2491C14.647 15.4883 15.0349 15.4883 15.2741 15.2491C15.5134 15.0099 15.5134 14.622 15.2741 14.3828L8.86657 7.97518L15.2246 1.61717C15.4638 1.37793 15.4638 0.990052 15.2246 0.750816C14.9854 0.511579 14.5975 0.511579 14.3582 0.750816L8.00022 7.10883L1.6422 0.750816Z" :fill="isDarkTheme ? 'white' : 'black'" />

                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </slot>
          </div>
          <div class="p-5 space-y-5">
            <slot name="body"></slot>
          </div>
          <div class="flex items-center p-5 space-x-1 justify-end">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Button from '~/components/ui/Button.vue';
import { clickOutside } from '~/helpers/directives';

@Component({
  components: { UiButton: Button },
  directives: { clickOutside }
})
export default class Modal extends Vue {
  private internalShown: boolean = false;

  public get isDarkTheme(): boolean {
    return this.$store.state.Core.isDarkTheme;
  }

  public onClickOutside(): void {
    console.log('click');
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
}
</script>

<style lang="postcss">
.overflow {
  background-color: black;
}
</style>

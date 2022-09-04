<template>
  <div class="flex space-x-10">
    <div class="flex items-center space-x-2">
      <ui-toggle v-model="isDarkTheme" bg-color="bg-cyan-900" circle-color="bg-lightTeal" />
      <sun v-if="!isDarkTheme" class="w-5" />
      <moon v-if="isDarkTheme" class="w-5" />
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, namespace, Watch } from 'nuxt-property-decorator';
import Sun from '~/components/svg/Sun.vue';
import Moon from '~/components/svg/Moon.vue';
import { ETheme } from '~/@types/domain';
const coreState = namespace('Core');
@Component({ components: { Moon, Sun } })
export default class ModeSwitcher extends Vue {
  @coreState.Mutation setTheme:(value: boolean) => void;

  private get isDarkTheme(): boolean {
    return this.$store.state.Core.isDarkTheme;
  }

  private set isDarkTheme(value) {
    this.setTheme(value);
  }

  @Watch('isDarkTheme')
  onChangeTheme(theme: boolean): void {
    // if (theme) {
    //   this.$colorMode.preference = ETheme.DARK;
    //   return;
    // }

    // this.$colorMode.preference = ETheme.LIGHT;

    if (
      (!theme && !localStorage.getItem('theme')) ||
        localStorage.getItem('theme') == null
    ) {
      document.querySelector('html').classList.add(ETheme.DARK);
      localStorage.setItem('theme', ETheme.DARK);
      this.isDarkTheme = true;
    }
    if (theme) {
      document.querySelector('html').classList.add(ETheme.DARK);
      localStorage.setItem('theme', ETheme.DARK);
    } else if (!theme) {
      document.querySelector('html').classList.remove(ETheme.DARK);
      localStorage.setItem('theme', ETheme.LIGHT);
    }
  }

  mounted(): void {
    console.log(this.$colorMode);
    const theme = localStorage.getItem('theme');
    if (theme === ETheme.DARK || (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add(ETheme.DARK);
      this.isDarkTheme = true;
    } else {
      document.querySelector('html').classList.remove(ETheme.DARK);
      this.isDarkTheme = false;
    }
  }
}
</script>

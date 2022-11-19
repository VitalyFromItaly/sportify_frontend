<template>
  <div class="flex space-x-10">
    <div class="flex items-center space-x-2">
      <ui-toggle v-model="isDarkTheme" bg-color="bg-cyan-900" circle-color="bg-lightTeal" />
      <moon v-if="isDarkTheme" class="w-5" />
      <sun v-else class="w-5" />
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, namespace, Watch } from 'nuxt-property-decorator';
import Sun from '~/components/svg/Sun.vue';
import Moon from '~/components/svg/Moon.vue';
import { ETheme, EVuexNamespaces } from '~/@types/domain';
import { ECacheKeys, ECacheTags } from '~/@types/cache';
import { USER_STORE_NS } from '~/business/user/store';

const coreState = namespace(EVuexNamespaces.CORE);

@Component({ components: { Moon, Sun } })
export default class ModeSwitcher extends Vue {
  @coreState.Mutation setTheme:(value: boolean) => void;

  private get userId(): number {
    return this.$store.getters[`${USER_STORE_NS}/id`];
  }

  public get isDarkTheme(): boolean {
    return this.$store.state.Core.isDarkTheme;
  }

  public set isDarkTheme(value) {
    this.setTheme(value);
  }

  @Watch('isDarkTheme')
  onChangeTheme(theme: boolean): void {
    const cachedTheme = this.getThemeFromCache();
    if ((!theme && !cachedTheme) || cachedTheme === null) {
      document.querySelector('html').classList.add(ETheme.DARK);
      this.setThemeInCache(ETheme.DARK);
      this.isDarkTheme = true;
    }
    if (theme) {
      document.querySelector('html').classList.add(ETheme.DARK);
      this.setThemeInCache(ETheme.DARK);
    } else if (!theme) {
      document.querySelector('html').classList.remove(ETheme.DARK);
      this.setThemeInCache(ETheme.LIGHT);
    }
  }

  // destroyed() {
  //   document.querySelector('html').classList.remove(ETheme.DARK);
  // }

  mounted(): void {
    const theme = this.getThemeFromCache();
    if (theme === ETheme.DARK || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add(ETheme.DARK);
      this.isDarkTheme = true;
    } else {
      document.querySelector('html').classList.remove(ETheme.DARK);
      this.isDarkTheme = false;
    }
  }

  private getThemeFromCache(): string {
    return this.$cache.get<string>(`${ECacheKeys.THEME}:${this.userId}`, ECacheTags.SYSTEM);
  }

  private setThemeInCache(theme: string): void {
    this.$cache.set<string>(`${ECacheKeys.THEME}:${this.userId}`, ECacheTags.SYSTEM, theme, 100000000);
  }
}
</script>

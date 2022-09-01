<template>
  <div class="flex space-x-10">
    <div class="flex items-center space-x-2">
      <ui-toggle v-model="isDarkMode" bg-color="bg-cyan-900" circle-color="bg-lightTeal" />
      <sun v-if="!isDarkMode" class="w-5" />
      <moon v-if="isDarkMode" class="w-5" />
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import Sun from '~/components/svg/Sun.vue';
import Moon from '~/components/svg/Moon.vue';
@Component({ components: { Moon, Sun } })
export default class ModeSwitcher extends Vue {
  isDarkMode = false;
}
</script>

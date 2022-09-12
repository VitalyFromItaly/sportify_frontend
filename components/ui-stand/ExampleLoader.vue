<template>
  <abstract-ui-example>
    <template #header>
      Loader
    </template>
    <template #component>
      <ui-container class="w-full h-64">
        <div class="flex flex-col justify-center items-center h-full">
          <ui-loader :overlay="overlay" :small="small" />
        </div>
      </ui-container>
    </template>
    <template #settings>
      <ui-toggle v-model="overlay" label="Overlay loading" />
      <ui-toggle v-model="small" label="Loader size" text-on="mini" text-off="large" />
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';
@Component({ components: { AbstractUiExample } })
export default class ExampleLoader extends Vue {
  overlay = false;
  small = false;

  @Watch('overlay')
  onOverlayChanged(overlay: boolean): void {
    if (overlay) {
      setTimeout(() => {
        this.overlay = false;
      }, 3000);
    }
  }
}
</script>

<template>
  <abstract-ui-example>
    <template #header>
      Sidebar
    </template>
    <template #component>
      <sidebar v-if="isSidebarShown" @hide="isSidebarShown = false">
        <template #content>
          <p class="mb-6 text-sm">
            Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
          </p>
        </template>
        <template #footer>
          <ui-button appearance="primary" full-width>
            Reschedule
          </ui-button>
        </template>
      </sidebar>
    </template>
    <template #settings>
      <ui-button :appearance="isSidebarShown ? 'secondary' : 'primary'" @click="isSidebarShown = true">
        Open sidebar
      </ui-button>
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';
import Sidebar from '~/components/ui/SIdebar.vue';

@Component({ components: { Sidebar, AbstractUiExample } })
export default class ExampleSidebar extends Vue {
  isSidebarShown = false;
}
</script>

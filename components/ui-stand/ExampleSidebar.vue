<template>
  <abstract-ui-example>
    <template #header>
      Sidebar
    </template>
    <template #component>
      <sidebar v-model="isShowSidebar">
        <template #content>
          <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
          </p>
        </template>
        <template #footer>
          <ui-button appearance="secondary" class="w-full">
            Reschedule
          </ui-button>
        </template>
      </sidebar>
    </template>
    <template #settings>
      <ui-button :appearance="isShowSidebar ? 'secondary' : 'primary'" @click="isShowSidebar = true">
        Open sidebar
      </ui-button>
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';
import Modal from '~/components/ui/Modal.vue';
import UIButton from '~/components/ui/Button.vue';
import Sidebar from '~/components/ui/SIdebar.vue';

@Component({ components: { Sidebar, Modal, AbstractUiExample, UIButton } })
export default class ExampleSidebar extends Vue {
  isShowSidebar = false;
}
</script>

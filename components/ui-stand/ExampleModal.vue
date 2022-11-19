<template>
  <abstract-ui-example>
    <template #header>
      Modal
    </template>
    <template #component>
      <modal v-if="isShowModal" @hide="isShowModal = false">
        <template #title>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
            Terms of Service
          </h3>
        </template>
        <template #body>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
          </p>
        </template>
        <template #footer>
          <ui-button appearance="secondary">
            Reschedule
          </ui-button>
          <ui-button appearance="secondary">
            Mark and dismiss
          </ui-button>
          <ui-button class="ml-5">
            Add info
          </ui-button>
        </template>
      </modal>
    </template>
    <template #settings>
      <ui-button :appearance="isShowModal ? 'secondary' : 'primary'" @click="isShowModal = true">
        Open Modal
      </ui-button>
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import AbstractUiExample from './AbstractUiExample.vue';
import Modal from '~/components/ui/Modal.vue';
import UIButton from '~/components/ui/Button.vue';

@Component({ components: { Modal, AbstractUiExample, UIButton } })
export default class ExampleModal extends Vue {
  isShowModal = false;
}
</script>

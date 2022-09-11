<template>
  <div class=" bg-lightGray dark:bg-lightDark dark:text-gray-300 px-2 py-1 inline-block">
    <div v-if="type === EContainer.EXPANDABLE" class="flex justify-between items-center">
      <slot name="header"></slot>
      <button @click="isExpanded = !isExpanded">
        <chevron-down class="ml-5" />
      </button>
    </div>
    <template v-if="isDefaultSlotShown">
      <slot></slot>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { EContainer } from './domain/@types';
import ChevronDown from '~/components/svg/ChevronDown.vue';

@Component({ components: { ChevronDown } })
export default class Container extends Vue {
  @Prop({
    type: String,
    default: EContainer.STANDARD,
    validator(value) {
      // @ts-ignore
      return Object.values(EContainer).includes(value);
    }
  }) type: EContainer;

  isExpanded = false;
  EContainer = EContainer;

  private get isExpandable(): boolean {
    return this.type === EContainer.EXPANDABLE;
  }

  private get isDefaultSlotShown(): boolean {
    if (!this.isExpandable) { return true; }
    return this.isExpandable && this.isExpanded;
  }

  mounted(): void {
  }
}
</script>

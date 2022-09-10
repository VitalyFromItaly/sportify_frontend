<template>
  <div>
    <ul class="flex">
      <li v-for="(tab, index) in tabs" :key="index" class="">
        <span
          :class="getHeaderClasses(tab)"
          class="border-b-2 mx-1 px-2 cursor-pointer"
          :aria-controls="tab.computedId"
          :href="tab.computedId"
          :aria-selected="tab.isActive"
          role="tab"
          @click="selectTab(tab.computedId, $event), getHeaderClasses(tab)"
        >
          {{ tab.name }}
        </span>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator';
import type { TTypeId } from '../domain/@types';
import { tabClasses } from '../domain/Domain';
@Component
export default class UITabs extends Vue {
  tabs: any[] = [];
  activeTabId: TTypeId = null;

  @Watch('activeTabId', { immediate: true })
  setActiveTab(id: TTypeId): void {
    if (!this.tabs.length) { return; }

    this.tabs.forEach((tab) => {
      if (tab.computedId !== id) {
        tab.isActive = false;
      } else {
        tab.isActive = true;
      }
    });
  }

  mounted(): void {
    this.tabs = this.getTabsFromSlots();
    const [tab] = this.tabs;
    this.activeTabId = tab.computedId;
  }

  private getTabsFromSlots() {
    if (!this.$slots.default) { return []; }
    const tabSlots = this.$slots.default.filter(($slot) => {
      return $slot.tag && ['UiTabsItem', 'ui-tabs-item'].includes($slot.componentOptions.tag);
    });
    return tabSlots.map($slot => $slot.componentInstance);
  }

  private getTabsId(): string {
    return this.tabs.map(tab => tab.name).toString();
  }

  private getHeaderClasses(tab: any) {
    const { isActive, disabled } = tab;
    if (disabled) { return tabClasses.disabled; }
    if (isActive) { return tabClasses.active; }
    return tabClasses.default;
  }

  selectTab(tabId: TTypeId, event: Event): void {
    if (event) { event.preventDefault(); }

    const selectedTab = this.findTab(tabId);

    if (!selectedTab) { return; }

    if (selectedTab.disabled) {
      if (!event) { return; }

      event.preventDefault();
      return;
    }

    this.tabs.forEach((tab) => {
      tab.isActive = tab.computedId === selectedTab.computedId;
    });
    this.$emit('changed', { tab: selectedTab });

    this.activeTabId = selectedTab.computedId;
  }

  private findTab(id: number | string) {
    return this.tabs.find(tab => tab.computedId === id);
  }
}
</script>

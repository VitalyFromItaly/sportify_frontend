<template>
  <div class="space-y-3">
    <div class="flex items-center space-x-5">
      <p>already done <span class=" text-middleTeal dark:text-lightTeal font-bold">{{ components.length }}</span> ui components</p>
      <ui-toggle v-model="shownAsList" text-on="shown as list" text-off="shown as tabs" />
    </div>
    <ui-tabs v-if="!shownAsList" @changed="onTabChanged">
      <ui-tabs-item v-for="( { component, name }, index) in components" :key="index" :name="name">
        <component :is="component" v-if="activeTab === name" />
      </ui-tabs-item>
    </ui-tabs>
    <div v-else>
      <component :is="component.component" v-for="(component, index) in components" :key="index" />
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Watch } from 'nuxt-property-decorator';
const ExampleTooltip = () => import('~/components/ui-stand/ExampleTooltip.vue');
const ExampleTextarea = () => import('~/components/ui-stand/ExampleTextarea.vue');
const ExampleNumberInput = () => import('~/components/ui-stand/ExampleNumberInput.vue');
const ExampleCheckbox = () => import('~/components/ui-stand/ExampleCheckbox.vue');
const ExampleLoader = () => import('~/components/ui-stand/ExampleLoader.vue');
const ExampleDatePicker = () => import('~/components/ui-stand/ExampleDatePicker.vue');
const ExampleTabs = () => import('~/components/ui-stand/ExampleTabs.vue');
const ExampleRadioButton = () => import('~/components/ui-stand/ExampleRadioButton.vue');
const ExampleButton = () => import('~/components/ui-stand/ExampleButton.vue');
const ExampleInput = () => import('~/components/ui-stand/ExampleInput.vue');
const ExampleToggle = () => import('~/components/ui-stand/ExampleToggle.vue');
const ExampleSelect = () => import('~/components/ui-stand/ExampleSelect.vue');
const ExampleContainer = () => import('~/components/ui-stand/ExampleContainer.vue');
const ExampleNotification = () => import('~/components/ui-stand/ExampleNotification.vue');
@Component({
  components: {
    ExampleTooltip,
    ExampleTextarea,
    ExampleNumberInput,
    ExampleCheckbox,
    ExampleButton,
    ExampleInput,
    ExampleToggle,
    ExampleSelect,
    ExampleContainer,
    ExampleNotification,
    ExampleTabs,
    ExampleRadioButton,
    ExampleDatePicker,
    ExampleLoader
  }
})
export default class UIStand extends Vue {
  private activeTab = this.components[0].name;
  private shownAsList = false;

  @Watch('shownAsList')
  onShownChange(value: boolean): void {
    if (value) {
      this.activeTab = this.components[0].name;
    }
  }

  private get components(): { component: any; name: string; }[] {
    return [
      { component: ExampleTooltip, name: 'tooltip' },
      { component: ExampleTextarea, name: 'textarea' },
      { component: ExampleNumberInput, name: 'number-input' },
      { component: ExampleCheckbox, name: 'checkbox' },
      { component: ExampleLoader, name: 'loader' },
      { component: ExampleDatePicker, name: 'date-picker' },
      { component: ExampleTabs, name: 'tabs' },
      { component: ExampleRadioButton, name: 'radio' },
      { component: ExampleButton, name: 'button' },
      { component: ExampleInput, name: 'input' },
      { component: ExampleToggle, name: 'toggle' },
      { component: ExampleSelect, name: 'select' },
      { component: ExampleContainer, name: 'container' },
      { component: ExampleNotification, name: 'notification' }
    ];
  }

  onTabChanged(tab: any): void {
    this.activeTab = tab.id;
  }
}
</script>

<template>
  <abstract-ui-example>
    <template #header>
      Tooltip
    </template>
    <template #component>
      <div class="h-32 flex justify-center items-center">
        <ui-tooltip :tip="tip" :disabled="disabled" :visible="visible" :align="align" :direction="direction">
          <info-color />
        </ui-tooltip>
      </div>
    </template>
    <template #settings>
      <ui-select v-model="direction" :options="directOptions" label="Direction" />
      <ui-select v-model="align" :options="alignOptions" label="Align" />
      <ui-textarea v-model="tip" label="Tip" />
      <ui-toggle v-model="disabled" label="disabled" />
      <ui-toggle v-model="visible" label="visible" />
    </template>
  </abstract-ui-example>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import InfoColor from '../svg/InfoColor.vue';
import { TSelectOption } from '../ui/domain/@types';
import AbstractUiExample from './AbstractUiExample.vue';
@Component({ components: { AbstractUiExample, InfoColor } })
export default class ExampleTooltip extends Vue {
  tip = 'tool tip text';
  disabled = false;
  visible = false;
  direction = 'bottom';
  align = 'center';

  alignOptions: TSelectOption[] = [
    { text: 'center', value: 'center' },
    { text: 'start', value: 'start' },
    { text: 'end', value: 'end' }
  ];

  directOptions: TSelectOption[] = [
    { text: 'top', value: 'top' },
    { text: 'right', value: 'right' },
    { text: 'bottom', value: 'bottom' },
    { text: 'left', value: 'left' }
  ];
}
</script>

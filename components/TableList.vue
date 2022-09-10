<template>
  <div>
    <div v-for="({ left, right }, index) in rows" :key="index">
      <p class="my-2">
        <span class=" font-semibold">{{ left }}:</span> <span class=" text-darkGrayText"> {{ right }} </span>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { TDataListRow } from '~/@types/component';
@Component
export default class TableList extends Vue {
  @Prop({ type: Array, required: true }) rows: TDataListRow[];
}
</script>

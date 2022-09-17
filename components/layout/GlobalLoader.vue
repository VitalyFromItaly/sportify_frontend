<template>
  <transition-fade>
    <ui-loader v-if="isLoading" overlay />
  </transition-fade>
</template>

<script lang='ts'>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import { EVuexNamespaces } from '~/@types/domain';
const coreState = namespace(EVuexNamespaces.CORE);
@Component
export default class GlobalLoader extends Vue {
  @coreState.State isLoading: boolean;
}
</script>

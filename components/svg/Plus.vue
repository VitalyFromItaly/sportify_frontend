<template>
  <svg width="25" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1813 29.2742C18.1813 29.6385 18.4767 29.9338 18.841 29.9338C19.2053 29.9338 19.5006 29.6385 19.5006 29.2742V18.984H29.7908C30.1551 18.984 30.4504 18.6887 30.4504 18.3244C30.4504 17.9601 30.1551 17.6648 29.7908 17.6648H19.5006V8.16598C19.5006 7.80167 19.2053 7.50635 18.841 7.50635C18.4767 7.50635 18.1813 7.80167 18.1813 8.16598V17.6648H8.68258C8.31828 17.6648 8.02295 17.9601 8.02295 18.3244C8.02295 18.6887 8.31828 18.984 8.68258 18.984H18.1813V29.2742Z" :fill="color" />
  </svg>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class PlusIcon extends Vue {
  @Prop({ type: String, default: 'black' }) color: string;
}
</script>

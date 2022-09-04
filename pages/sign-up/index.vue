<template>
  <div></div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { ELayout } from '~/@types/domain';
@Component({ layout: ELayout.AUTH })
export default class SignUpPage extends Vue {}
</script>

<template>
  <div>
    <heading>{{ $t('account.aboutMe.header') }}</heading>
    <div class="laptop:flex laptop:items-start laptop:space-x-10 mt-10">
      <biometrics ref="biometrics" class="laptop:w-1/2" />
      <div>
        <ui-container class="mt-6 laptop:mt-0">
          training plan coming soon
        </ui-container>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import Biometrics from '~/business/user/views/Biometrics.vue';
@Component({ components: { Biometrics } })
export default class AboutMePage extends Vue {
  @Ref() biometrics: any;
}
</script>

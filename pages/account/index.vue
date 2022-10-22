<template>
  <div v-if="!isLoading" class="my-2">
    <heading> {{ $t('account.header') }} </heading>
    <ui-tabs class="mt-6">
      <ui-tabs-item v-for="({ component, targetId, name }, index) in tabs" :key="index" :name="name" :target-id="targetId">
        <component :is="component" class="mt-6" />
      </ui-tabs-item>
    </ui-tabs>
  </div>
  <div v-else>
    <ui-loader />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { EAccountTabs, EUserStatus, TAccountTabConfig } from '~/business/user/Domain';
import { userStoreModule } from '~/business/user/store/index';

const NewUserTemplate = () => import('~/business/user/views/NewUserTemplate.vue');
const ParametersInfo = () => import('~/business/user/views/ParametersInfo.vue');
const SystemSettings = () => import('~/business/user/views/SystemSettings.vue');

@Component({ components: { NewUserTemplate, ParametersInfo } })
export default class AccountPage extends Vue {
  @userStoreModule.Getter status: EUserStatus;
  @userStoreModule.Getter isLoading: boolean;

  EUserStatus = EUserStatus;

  private get tabs(): TAccountTabConfig[] {
    const personalTabByStatus = this.status === EUserStatus.NEW ? NewUserTemplate : ParametersInfo;
    return [
      { component: personalTabByStatus, name: this.$tc('account.tabs.personal'), targetId: EAccountTabs.PERSONAL },
      { component: SystemSettings, name: this.$tc('account.tabs.system'), targetId: EAccountTabs.SYSTEM }
    ];
  }
}
</script>

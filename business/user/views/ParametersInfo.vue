<template>
  <div>
    <table-list class="mb-6" :rows="rows" />
    <fill-out-form-button appearance="secondary">
      {{ $t('account.buttons.edit') }}
    </fill-out-form-button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';

import { genderDictionary, goalDictionary } from '../Domain';
import type { TUser } from '../Domain';
import { userStoreModule } from '../store';

import FillOutFormButton from '~/business/user/views/FillOutFormButton.vue';
import { TDataListRow } from '~/@types/component';

@Component({ components: { FillOutFormButton } })
export default class ParametersInfo extends Vue {
  @userStoreModule.Getter user: TUser;

  private get rows(): TDataListRow[] {
    const rows: TDataListRow[] = [];
    const { user } = this;
    const { height, weight, birthday, activities, gender, goal } = user;
    rows.push({ left: this.$tc('account.knownUser.height'), right: height ? `${height} ${this.$t('measurementStandards.centimetersShort')}` : '—' });
    rows.push({ left: this.$tc('account.knownUser.weight'), right: weight ? `${weight} ${this.$t('measurementStandards.kilogramShort')}` : '—' });
    rows.push({ left: this.$tc('account.knownUser.age'), right: birthday || '—' });
    // @ts-ignore
    const activitiesToSting = !!activities && activities.length ? activities.map(activity => activity[`name_${this.$i18n.localeProperties.code}`]).join(', ') : '—';
    rows.push({ left: this.$tc('account.knownUser.activities'), right: activitiesToSting });
    rows.push({ left: this.$tc('account.knownUser.gender'), right: this.$tc(`account.gender.${genderDictionary[gender]}`) });

    rows.push({ left: this.$tc('account.knownUser.goal'), right: this.$tc(`account.goal.${goalDictionary[goal]}`) });
    return rows;
  }
}
</script>

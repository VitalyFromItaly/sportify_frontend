<template>
  <div>
    <ui-radio-button
      v-model="language"
      horizontal
      :label="$t('account.settings.language')"
      :options="languageOptions"
      @change="onLanguageChange"
    />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { USER_STORE_NS } from '../store';
import { ELanguages } from '~/@types/domain';
import type { TRadioButtonOption } from '~/components/ui/domain/@types';
@Component
export default class SystemSettings extends Vue {
  language = ELanguages.En;

  private get languageOptions(): TRadioButtonOption[] {
    return [
      { value: ELanguages.En, label: this.$tc('account.settings.english') },
      { value: ELanguages.Ru, label: this.$tc('account.settings.russian') }
    ];
  }

  private get userLanguage(): ELanguages {
    return this.$store.getters[`${USER_STORE_NS}/language`];
  }

  mounted(): void {
    this.language = this.userLanguage || ELanguages.En;
  }

  private async onLanguageChange(value: TRadioButtonOption['value']): Promise<void> {
    await this.$presenter.userInstance.onUpdate({ language: value as ELanguages });
  }
}
</script>

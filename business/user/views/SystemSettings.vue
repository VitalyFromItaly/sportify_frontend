<template>
  <div>
    <ui-radio-button
      v-model="language"
      horizontal
      :label="$t('account.settings.language')"
      :options="languageOptions"
      @change="onLanguageChange"
    />
    <div class="mt-20 w-96">
      <p>{{ $t('account.settings.suggestionText') }}</p>
      <ui-textarea v-model="comment" :limit="500" :label="$t('account.settings.commentLabel')" :placeholder="$t('account.settings.suggestionPlaceholder')" />
      <div class="flex justify-between">
        <div></div>
        <transition-bounce>
          <div v-if="comment.length" class="flex">
            <ui-button class="mr-3" appearance="secondary" @click="onCancel">
              {{ $t('account.settings.cancelButton') }}
            </ui-button>
            <ui-button @click="onAddComment">{{ $t('account.settings.submitButton') }}</ui-button>
          </div>
        </transition-bounce>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator';
import { USER_STORE_NS } from '../store';
import { ELanguages } from '~/@types/domain';
import type { TRadioButtonOption } from '~/components/ui/domain/@types';
import { EHttpStatus } from '~/Api/Api';
@Component
export default class SystemSettings extends Vue {
  language = ELanguages.En;
  comment = '';

  private get languageOptions(): TRadioButtonOption[] {
    return [
      { value: ELanguages.En, label: this.$tc('account.settings.english') },
      { value: ELanguages.Ru, label: this.$tc('account.settings.russian') }
    ];
  }

  private get userLanguage(): ELanguages {
    return this.$store.getters[`${USER_STORE_NS}/language`];
  }

  private mounted(): void {
    this.language = this.userLanguage || ELanguages.En;
  }

  private onCancel(): void {
    this.comment = '';
  }

  private async onAddComment(): Promise<void> {
    const status = await this.$presenter.userInstance.onCreateComment(this.comment);
    if (status === EHttpStatus.Success) {
      this.comment = '';
    }
  }

  private async onLanguageChange(value: TRadioButtonOption['value']): Promise<void> {
    await this.$presenter.userInstance.onUpdate({ language: value as ELanguages });
  }
}
</script>

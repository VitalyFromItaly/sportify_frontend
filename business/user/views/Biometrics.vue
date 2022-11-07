<template>
  <ui-container class="w-full">
    <h3 class=" text-2xl mb-6">
      {{ $t('account.aboutMe.biometrics.header') }}
    </h3>
    <ui-loader v-if="isLoading" class="flex w-full justify-center h-40" />
    <form v-else>
      <validation-observer ref="validator">
        <ui-number-input v-model="form.height" :label="heightLabel" placeholder="0" />
        <validation-provider ref="field.weight" v-slot="{ errors, failed }" name="weight" rules="required|between:40,200">
          <ui-number-input
            v-model="form.weight"
            required
            :label="weightLabel"
            placeholder="0"
            :is-error="failed"
            :error-message="errors[0]"
          />
        </validation-provider>
        <validation-provider ref="field.birthday" v-slot="{ errors, failed }" name="birthday" rules="required">
          <ui-date-picker
            v-model="form.birthday"
            :label="birthdayLabel"
            :error="failed"
            :error-message="errors[0]"
            required
            :is-dark="isDark"
          />
        </validation-provider>
      </validation-observer>
      <ui-radio-button
        v-model="form.gender"
        horizontal
        :options="genderOptions"
        :label="$tc('account.aboutMe.biometrics.gender.label')"
        :description="$tc('account.aboutMe.biometrics.gender.description')"
      />
    </form>
  </ui-container>
</template>

<script lang='ts'>
import { Vue, Component, Watch, Ref } from 'nuxt-property-decorator';
import isEmpty from 'lodash/isEmpty';
import cloneDeep from 'lodash/cloneDeep';
import { userStoreModule } from '../store';
import { EGender } from '../Domain';
import type { TUser, TRawUpdateUser, IPresenter } from '../Domain';
import { EVuexNamespaces } from '~/@types/domain';
import type { IValidate } from '~/@types/domain';
import { TRadioButtonOption } from '~/components/ui/domain/@types';

@Component
export default class Biometrics extends Vue {
  @Ref() validator: IValidate;

  @userStoreModule.Getter user: TUser;
  @userStoreModule.Getter isLoading: boolean;
  @userStoreModule.Getter isError: boolean;

  presenter: IPresenter = null;

  form = {} as Partial<TRawUpdateUser>;

  @Watch('user', { deep: true })
  onUserChange(user: TUser): void {
    if (isEmpty(user)) {
      return;
    }

    this.form = cloneDeep(this.user);
  }

  private get genderOptions(): TRadioButtonOption[] {
    return [
      { value: EGender.MALE, label: this.$tc('account.aboutMe.biometrics.gender.male') },
      { value: EGender.FEMALE, label: this.$tc('account.aboutMe.biometrics.gender.female') },
      { value: EGender.OTHER, label: this.$tc('account.aboutMe.biometrics.gender.other'), checked: true }
    ];
  }

  private get isDark(): boolean {
    return this.$store.state[EVuexNamespaces.CORE].isDarkTheme;
  }

  private get birthdayLabel(): string {
    return this.$tc('account.aboutMe.biometrics.birthDate');
  }

  private get weightLabel(): string {
    return `${this.$tc('account.aboutMe.biometrics.weight')}, ${this.$tc('account.aboutMe.biometrics.measurementSystems.weight.metric')}`;
  }

  private get heightLabel(): string {
    return `${this.$tc('account.aboutMe.biometrics.height')}, ${this.$tc('account.aboutMe.biometrics.measurementSystems.height.metric')}`;
  }

  private mounted(): void {
    this.presenter = this.$presenter.userInstance;
  }

  public async onSubmit(): Promise<boolean> {
    const isFormValid = await this.validator.validate();
    if (!isFormValid) { return false; }

    await this.presenter.onUpdate(this.form);

    if (this.isError) { return false; }
    return true;
  }
}
</script>

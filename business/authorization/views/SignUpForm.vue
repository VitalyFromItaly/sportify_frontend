<template>
  <form @submit.prevent="onRegister">
    <validation-observer ref="validator">
      <validation-provider ref="email" v-slot="{ errors, failed }" name="email" rules="email|required">
        <ui-input
          v-model="form.email"
          required
          type="email"
          :placeholder="$t('auth.common.loginLabel')"
          :label="$t('auth.common.loginLabel')"
          :is-error="failed"
          :error-message="errors[0]"
        />
      </validation-provider>
      <validation-provider ref="password" v-slot="{ errors, failed }" name="password" rules="required|password">
        <div class="flex items-center">
          <ui-input
            v-model="form.password"
            required
            :placeholder="$t('auth.common.passwordPlaceholder')"
            :label="$t('auth.common.passwordLabel')"
            :is-error="failed"
            :error-message="errors[0]"
            type="password"
            @focus="isPasswordFocused = true"
            @blur="isPasswordFocused = false"
          />
          <div class="relative right-44 bottom-20 tablet:top-12 tablet:left-4">
            <ui-tooltip v-if="form.password" :visible="isPasswordFocused" align="center" direction="right">
              <template #tip>
                <h6 class="font-bold">
                  {{ $t('auth.signUpTooltipHeader') }}
                </h6>
                <p v-for="({ rule, isMatched }, index) in passwordRules" :key="index" :class="[isMatched ? 'text-middleTeal' : ' text-darkGray']">
                  {{ rule }}
                </p>
              </template>
            </ui-tooltip>
          </div>
        </div>
      </validation-provider>
      <validation-provider ref="password_confirm" v-slot="{ errors, failed }" name="password_confirm" rules="required|password|confirmed:password" data-vv-as="password">
        <ui-input
          v-model="form.password_confirm"
          required
          :placeholder="$t('auth.repeatPasswordPlaceholder')"
          :label="$t('auth.repeatPasswordLabel')"
          :is-error="failed"
          :error-message="errors[0]"
          type="password"
        />
      </validation-provider>
      <ui-button full-width class="mt-8">
        {{ $t('auth.signUp') }}
      </ui-button>
      <p class="text-center mt-5">
        {{ $t('auth.signUpAlternativeHint') }}
        <ui-link :to="{ name: 'sign-in' }">
          {{ $t('auth.login') }}
        </ui-link>
      </p>
    </validation-observer>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import type { TState, IPresenter, TRegisterForm } from '../Domain';
import { authorizationStoreModule } from '../store';

@Component
export default class SignUpForm extends Vue {
  @authorizationStoreModule.State('internalState') state: TState;

  public form = {} as TRegisterForm;
  public isPasswordFocused = false;

  private presenter: IPresenter;

  public get passwordRules(): { rule: string, isMatched: boolean }[] {
    const { password } = this.form;
    return [
      { rule: this.$tc('auth.signUpRules.passwordLength'), isMatched: /^.{8,}$/.test(password) },
      { rule: this.$tc('auth.signUpRules.capitalLetters'), isMatched: /[A-Z]/.test(password) },
      { rule: this.$tc('auth.signUpRules.digital'), isMatched: /\d/.test(password) },
      { rule: this.$tc('auth.signUpRules.specialSymbols'), isMatched: /^(?=.*[@#$%^&+=]).*$/.test(password) }
    ];
  }

  private mounted(): void {
    this.presenter = this.$presenter.authInstance;
  }

  public async onRegister(): Promise<void> {
    // @ts-ignore
    const isFromValid = await this.$refs.validator.validate();
    if (!isFromValid) {
      console.warn('[Sign-in form] form is not valid');
      return;
    }
    await this.presenter.onRegister(this.form);
  }
}
</script>
<style scoped>
  .top-50 {
    top: 3.5rem;
  }
</style>

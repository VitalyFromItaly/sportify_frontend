<template>
  <form @submit.prevent="login">
    <validation-observer ref="validator">
      <validation-provider ref="email" v-slot="{ errors, failed }" name="email" rules="email|required">
        <ui-input
          v-model="form.email"
          required
          type="email"
          :placeholder="$t('auth.common.loginPlaceholder')"
          :label="$t('auth.common.loginLabel')"
          :is-error="failed"
          :error-message="errors[0]"
        />
      </validation-provider>
      <validation-provider ref="password" v-slot="{ errors, failed }" name="password" rules="required">
        <ui-input
          v-model="form.password"
          required
          :placeholder="$t('auth.common.passwordPlaceholder')"
          :label="$t('auth.common.passwordLabel')"
          :is-error="failed"
          :error-message="errors[0]"
          type="password"
        />
      </validation-provider>

      <div class="text-right">
        <ui-link :to="{ name: 'sign-up' }">
          {{ $t('auth.forgotPassword') }}
        </ui-link>
      </div>
      <ui-button type="submit" :loading="state.isLoading" full-width class="mt-8">
        {{ $t('auth.login') }}
      </ui-button>
      <p class="text-center mt-5">
        {{ $t('auth.alternativeHint') }}
        <ui-link :to="{ name: 'sign-up' }">
          {{ $t('auth.signUp') }}
        </ui-link>
      </p>
    </validation-observer>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import type { TState, IPresenter, TLoginForm } from '../Domain';
import { authorizationStoreModule } from '../store';

@Component
export default class SignInForm extends Vue {
  @authorizationStoreModule.State('internalState') state: TState;

  private form = {} as TLoginForm;

  private presenter: IPresenter;

  private mounted(): void {
    this.presenter = this.$presenter.authInstance;
  }

  private async login(): Promise<void> {
    // @ts-ignore
    const isFromValid = await this.$refs.validator.validate();
    if (!isFromValid) {
      console.warn('[Sign-in form] form is not valid');
      return;
    }
    await this.presenter.onLogin(this.form);
  }
}
</script>

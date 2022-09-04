<template>
  <form @submit.prevent="login">
    <validation-observer ref="validator">
      <validation-provider v-slot="{ errors, failed }" name="email" rules="email|required">
        <ui-input
          v-model="form.email"
          required
          :placeholder="$t('login.common.loginPlaceholder')"
          :label="$t('login.common.loginLabel')"
          :is-error="failed"
          :error-message="errors[0]"
        />
      </validation-provider>
      <validation-provider v-slot="{ errors, failed }" name="email" rules="password|required">
        <ui-input
          v-model="form.password"
          required
          :placeholder="$t('login.common.passwordPlaceholder')"
          :label="$t('login.common.passwordLabel')"
          :is-error="failed"
          :error-message="errors[0]"
        />
      </validation-provider>

      <div class="text-right">
        <ui-link :to="{ name: 'sign-up' }">
          {{ $t('login.forgotPassword') }}
        </ui-link>
      </div>
      <ui-button full-width class="mt-8">
        {{ $t('login.loginButton') }}
      </ui-button>
      <p class="text-center mt-5">
        {{ $t('login.loginAlternativeHint') }}
        <ui-link :to="{ name: 'sign-up' }">
          {{ $t('login.loginAlternativeHintLink') }}
        </ui-link>
      </p>
    </validation-observer>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import type { TState, IPresenter, TLoginForm } from '../Domain';
import { loginStoreModule } from '../store';

@Component
export default class SignInForm extends Vue {
  @loginStoreModule.State('internalState') state: TState;

  private form = {} as TLoginForm;

  private presenter: IPresenter;

  public async mounted(): Promise<void> {
    this.presenter = this.$presenter.loginInstance;
    await this.presenter.onMounted();
  }

  private async login(): Promise<void> {
    // @ts-ignore
    const isFromValid = await this.$refs.validator.validate();
    console.log({ isFromValid });
    console.log(this.form);
  }
}
</script>

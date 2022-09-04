<template>
  <form @submit.prevent="login">
    <ui-input
      v-model="form.email"
      :placeholder="$t('login.common.loginPlaceholder')"
      :label="$t('login.common.loginLabel')"
    />
    <ui-input
      v-model="form.password"
      :placeholder="$t('login.common.passwordPlaceholder')"
      :label="$t('login.common.passwordLabel')"
    />
    <div class="text-right">
      <ui-link :to="{ name: 'sign-up' }">
        {{ $t('login.forgotPassword') }}
      </ui-link>
    </div>
    <ui-button :full-width="true" class="mt-8">
      {{ $t('login.loginButton') }}
    </ui-button>
    <p class="text-center mt-5">
      {{ $t('login.loginAlternativeHint') }}
      <ui-link :to="{ name: 'sign-up' }">
        {{ $t('login.loginAlternativeHintLink') }}
      </ui-link>
    </p>
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

        login(): void {
          console.log(this.form);
        }
}
</script>
        </void>
      </ui-link>
    </p>
  </form>
</template>

<template>
  <main class="flex flex-col min-h-screen">
    <!-- <h1>{{ $t('hello') }}</h1>
    <ui-button @click="changeLocale('ru')">
      Russian
    </ui-button>
    <ui-button @click="changeLocale('en')">
      English
    </ui-button> -->
    <div class=" flex-grow">
      <div class="flex min-h-screen items-stretch justify-center px-10">
        <nuxt class="w-1/2 flex justify-center " />
        <auth-logo class="hidden lg:block w-1/2 self-center" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { localeChanged } from 'vee-validate';
import { EAppLanguages } from '~/@types/domain';
import AuthLogo from '~/components/svg/AuthLogo.vue';
@Component({ components: { AuthLogo } })
export default class AuthLayout extends Vue {
  mounted(): void {
    this.$i18n.setLocale(localStorage.getItem('language'));
    this.$router.push({ name: 'sign-in' });
  }

  changeLocale(lang: EAppLanguages): void {
    this.$i18n.setLocale(lang);
    localeChanged();
  }
}
</script>

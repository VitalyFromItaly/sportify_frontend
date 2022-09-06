// eslint-disable-next-line import/named
import { INotifications, TNotificationPayload } from './domain';
// import { IPresenterPlugin } from '~/plugins/presenter';
import { IBrowserStorage } from '~/core/cache/Domain';
import { IEventBus } from '~/core/bus/Domain';
import IAuth from '~/core/auth/IAuth';
import { Api } from '~/Api/Api';
import { IPresenterPlugin } from '~/plugins/presenter';

export interface IApi {
  swagger: Api<unknown>
}

declare module 'vue/types/vue' {
  // this.$api inside Vue components
  interface Vue {
    $api: IApi;
    $auth: IAuth;
    // $bus: IEventBus;
    $presenter: IPresenterPlugin;
    $cache: IBrowserStorage;
    $bus: IEventBus;
    $notification: INotifications;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: IApi;
    $presenter: IPresenterPlugin;
    $cache: IBrowserStorage;
    $auth: IAuth;
    $bus: IEventBus;
    $notification: INotifications;
  }
  interface Context {
    $presenter: IPresenterPlugin;
    $auth: IAuth;
    $api: IApi;
    $cache: IBrowserStorage;
    $notification: INotifications;
    $bus: IEventBus;
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  interface Store<S> {
    $presenter: IPresenterPlugin;
    $cache: IBrowserStorage;
    $api: IApi;
    $auth: IAuth;
    $bus: IEventBus;
    $notification: INotifications;
  }
}

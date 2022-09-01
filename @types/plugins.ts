// eslint-disable-next-line import/named
import { TNotificationPayload } from './domain';
// import { IPresenterPlugin } from '~/plugins/presenter';
import { IBrowserStorage } from '~/core/cache/Domain';
import { IEventBus } from '~/core/bus/Domain';
import IAuth from '~/core/auth/IAuth';
declare module 'vue/types/vue' {
  // this.$api inside Vue components
  interface Vue {
    // $api: IApi;
    // $http: IFetchAdapter;
    $auth: IAuth;
    // $bus: IEventBus;
    // $presenter: IPresenterPlugin;
    $cache: IBrowserStorage;
    $bus: IEventBus;
    $notification: (payload: TNotificationPayload) => void;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    // $presenter: IPresenterPlugin;
    $cache: IBrowserStorage;
    $auth: IAuth;
    $bus: IEventBus;
    $notification: (payload: TNotificationPayload) => void;

  }
  interface Context {
    $auth: IAuth;
    // $presenter: IPresenterPlugin;
    // $auth: NuxtAxiosInstance;
    $cache: IBrowserStorage;
    $notification: (payload: TNotificationPayload) => void;
    $bus: IEventBus;
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  interface Store<S> {
    // $presenter: IPresenterPlugin;
    $cache: IBrowserStorage;
    // $auth: NuxtAxiosInstance;
    $bus: IEventBus;
    $notification: (payload: TNotificationPayload) => void;
  }
}

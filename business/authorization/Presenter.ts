import Service from './Service';
import type { IPresenter, TState, IService, TLoginForm, TRegisterForm } from './Domain';
import { VuexObservable } from '~/business/core/store/VuexObservable';
import { IVuexStateHolder } from '~/business/core/store/Domain';
import { EEventBusName, IEventBus, TRouterEvent } from '~/core/bus/Domain';
import PresenterCatcher from '~/core/decorators/PresenterCatcher';
import { context } from '~/core/context';
import { EHttpStatus } from '~/Api/Api';
import { TNotificationEvent } from '~/@types/domain';

export default class Presenter extends VuexObservable<TState> implements IPresenter {
  private readonly service: IService;
  private readonly bus: IEventBus;

  constructor(stateMutator: IVuexStateHolder<TState>) {
    super(stateMutator);
    const { $bus, $api } = context;

    this.bus = $bus;
    this.service = new Service($api.swagger);
  }

  @PresenterCatcher()
  public async onRegister(payload: TRegisterForm): Promise<void> {
    const status = await this.service.register(payload);
    if (status === EHttpStatus.Success) {
      this.redirectToSignInPage(EEventBusName.AUTH_ROUTER);
      return;
    }

    this.bus.emit<TNotificationEvent>(EEventBusName.AUTH_NOTIFICATION, {
      type: 'error',
      title: context.i18n.tc('auth.errorSignUp.title'),
      content: context.i18n.tc('auth.errorSignUp.content')
    });
  }

  @PresenterCatcher()
  public async onLogin(payload: TLoginForm): Promise<void> {
    const tokens = await this.service.login(payload);
    if (!tokens) {
      return;
    }
    // @ts-ignore
    context.$api.swagger.baseApiParams.headers.Authorization = `Bearer ${tokens.access_token}`;
    this.bus.emit<TRouterEvent>(EEventBusName.AUTH_ROUTER, {
      name: 'account'
    });
  }

  public onLogout(): void {
    this.service.logout();
    this.redirectToSignInPage(EEventBusName.ROUTER);
  }

  private redirectToSignInPage(eventType: EEventBusName): void {
    this.bus.emit<TRouterEvent>(eventType, {
      name: 'sign-in'
    });
  }
}

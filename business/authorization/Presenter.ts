import Service from './Service';
import type { IPresenter, TState, IService, TLoginForm } from './Domain';
import { VuexObservable } from '~/business/core/store/VuexObservable';
import { IVuexStateHolder } from '~/business/core/store/Domain';
import { EEventBusName, IEventBus, TRouterEvent } from '~/core/bus/Domain';
import PresenterCatcher from '~/core/decorators/PresenterCatcher';
import { context } from '~/core/context';

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
  public async onLogin(payload: TLoginForm): Promise<void> {
    const tokens = await this.service.login(payload);
    if (tokens) {
      this.bus.emit<TRouterEvent>(EEventBusName.ROUTER, {
        name: 'profile'
      });
    }
  }

  public async onLogout(): Promise<void> {
    await this.service.logout();
  }
}

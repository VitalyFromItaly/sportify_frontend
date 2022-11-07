---
to: business/<%= section %>/<%= name %>/Presenter.ts
---
import Service from './Service';
import { IPresenter, TState, IService } from './Domain';
import { VuexObservable } from '~/business/core/store/VuexObservable';
import { IVuexStateHolder } from '~/business/core/store/Domain';
import { IEventBus } from '~/core/bus/Domain';
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
  public async onLoad(): Promise<void> {
    const dictionary = await this.service.read();
    this.onChangeState({ dictionary });
  }
}

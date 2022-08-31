---
to: business/<%= section %>/<%= name %>/Presenter.ts
---
import Service from './Service';
import { IPresenter, TState, IService, TMountPayload } from './Domain';
import { VuexObservable } from '~/business/core/store/VuexObservable';
import { IVuexStateHolder } from '~/business/core/store/Domain';
import { EEventBusName, IEventBus } from '~/core/bus/Domain';
import PresenterCatcher from '~/core/decorators/PresenterCatcher';
import { context } from '~/core/context';

export default class Presenter extends VuexObservable<TState> implements IPresenter {
  private readonly service: IService;
  private readonly bus: IEventBus;

  constructor(stateMutator: IVuexStateHolder<TState>) {
    super(stateMutator);
    this.bus = context.$bus;
    this.service = new Service();
  }

  @PresenterCatcher()
  public async onMounted(payload: TMountPayload): Promise<void> {
    this.onChangeState({ ...payload });
    const { data: { data } } = await this.service.read(this.state.id);
    this.onChangeState({ data, isLoading: false });
  }
}

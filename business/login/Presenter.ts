import Service from './Service';
import { IPresenter, TState, IService } from './Domain';
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
    console.log({ context });
    const { $bus, $api } = context;
    this.bus = $bus;
    this.service = new Service($api);
  }

  @PresenterCatcher()
  public async onMounted(): Promise<void> {
    // const { data: { data } } = await this.service.read(this.state.id);
    // this.onChangeState({ data });
  }
}

import Service from './Service';
import type { IPresenter, TState, IService, TUpdatePlanPayload, TCreatePayload } from './Domain';
import { VuexObservable } from '~/business/core/store/VuexObservable';
import type { IVuexStateHolder } from '~/business/core/store/Domain';
import { EEventBusName, IEventBus } from '~/core/bus/Domain';
import PresenterCatcher from '~/core/decorators/PresenterCatcher';
import { context } from '~/core/context';
import type { TNotificationEvent, TResponseResult } from '~/@types/domain';

export default class Presenter extends VuexObservable<TState> implements IPresenter {
  private readonly service: IService;
  private readonly bus: IEventBus;

  constructor(stateMutator: IVuexStateHolder<TState>) {
    super(stateMutator);
    const { $bus, $api } = context;
    this.bus = $bus;
    this.service = new Service($api);
  }

  @PresenterCatcher()
  public async onCreatePlan(payload: TCreatePayload): Promise<TResponseResult> {
    const response = await this.service.create(payload);

    if (!response) {
      this.onErrorNotice(context.i18n.tc('trainingPlan.errorCreated'));
      return null;
    }

    this.onSuccessNotice(context.i18n.tc('trainingPlan.successCreated'));
    return response;
  }

  @PresenterCatcher()
  public async onGetOnePlan(id: number): Promise<void> {
    const trainingPlan = await this.service.readOne(id);

    if (!trainingPlan) { return; }

    this.onChangeState({ trainingPlan });
  }

  @PresenterCatcher()
  public async onGetAllPlans(): Promise<void> {
    const trainingPlans = await this.service.readAll();

    if (!trainingPlans || !trainingPlans.length) { return; }

    this.onChangeState({ trainingPlans });
  }

  @PresenterCatcher()
  public async onUpdatePlan(payload: TUpdatePlanPayload): Promise<TResponseResult> {
    const { id } = this.state.trainingPlan;
    const response = await this.service.update(id, payload);

    if (!response) {
      this.onErrorNotice(context.i18n.tc('trainingPlan.errorUpdated'));
      return null;
    }

    await this.onGetOnePlan(id);
    this.onErrorNotice(context.i18n.tc('trainingPlan.successUpdated'));
    return response;
  }

  @PresenterCatcher()
  public async onDeleteOne(id: number): Promise<TResponseResult> {
    const response = await this.service.delete(id);

    if (!response) {
      this.onErrorNotice(context.i18n.tc('trainingPlan.errorDeleted'));
      return null;
    }

    this.onChangeState({ trainingPlan: null });
    this.onErrorNotice(context.i18n.tc('trainingPlan.successDeleted'));
    return response;
  }

  private onSuccessNotice(content: string, title: string = ''): void {
    this.bus.emit<TNotificationEvent>(EEventBusName.NOTIFICATION, {
      type: 'success',
      content,
      title
    });
  }

  private onErrorNotice(content: string, title: string = ''): void {
    this.bus.emit<TNotificationEvent>(EEventBusName.NOTIFICATION, {
      type: 'error',
      content,
      title
    });
  }
}

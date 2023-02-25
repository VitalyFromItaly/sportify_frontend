import Service from './Service';
import type { IPresenter, TState, IService, TUpdatePlanPayload, TCreatePayload } from './Domain';
import { VuexObservable } from '~/business/core/store/VuexObservable';
import type { IVuexStateHolder } from '~/business/core/store/Domain';
import { EEventBusName, IEventBus } from '~/core/bus/Domain';
import PresenterCatcher from '~/core/decorators/PresenterCatcher';
import { context } from '~/core/context';
import type { TNotificationEvent, TResponseResult } from '~/@types/domain';
import { CreateTrainingPlanActivityDto } from '~/Api/Api';

export default class Presenter extends VuexObservable<TState> implements IPresenter {
  private readonly service: IService;
  private readonly bus: IEventBus;

  constructor(stateMutator: IVuexStateHolder<TState>) {
    super(stateMutator);
    this.bus = context.$bus;
    this.service = new Service();
  }

  @PresenterCatcher()
  public async onCreate(payload: CreateTrainingPlanActivityDto): Promise<TResponseResult> {
    const response = await this.service.create(payload);

    if (!response) {
      this.onErrorNotice(context.i18n.tc('trainingPlan.errorCreated'));
      return null;
    }

    this.onSuccessNotice(context.i18n.tc('trainingPlan.successCreated'));
    const activity = await this.onGetOne(response.id);
    this.onChangeState({ activity });
    return response;
  }

  @PresenterCatcher()
  public async onGetOne(id: number): Promise<void> {
    const activity = await this.service.read(id);

    if (!activity) { return; }

    this.onChangeState({ activity });
  }

  @PresenterCatcher()
  public async onGetAll(): Promise<void> {
    const activities = await this.service.readAll();

    if (!activities || !activities.length) { return; }

    this.onChangeState({ activities });
  }

  @PresenterCatcher()
  public async onUpdate(payload: TUpdatePlanPayload): Promise<TResponseResult> {
    // const { id } = this.state.trainingPlan;
    // const response = await this.service.update(id, payload);
    //
    // if (!response) {
    //   this.onErrorNotice(context.i18n.tc('trainingPlan.errorUpdated'));
    //   return null;
    // }
    //
    // await this.onGetOnePlan(id);
    // this.onErrorNotice(context.i18n.tc('trainingPlan.successUpdated'));
    // return response;
  }

  @PresenterCatcher()
  public async onDelete(id: number): Promise<TResponseResult> {
    // const response = await this.service.delete(id);
    //
    // if (!response) {
    //   this.onErrorNotice(context.i18n.tc('trainingPlan.errorDeleted'));
    //   return null;
    // }
    //
    // this.onChangeState({ trainingPlan: null });
    // this.onErrorNotice(context.i18n.tc('trainingPlan.successDeleted'));
    // return response;
  }

  private onSuccessNotice(content: string, title: string = ''): void {
    this.bus.emit<TNotificationEvent>(EEventBusName.NOTIFICATION, {
      type: 'success',
      content,
      title: title || context.i18n.tc('ui.notice.success')
    });
  }

  private onErrorNotice(content: string, title: string = ''): void {
    this.bus.emit<TNotificationEvent>(EEventBusName.NOTIFICATION, {
      type: 'error',
      content,
      title: title || context.i18n.tc('ui.notice.error')
    });
  }
}

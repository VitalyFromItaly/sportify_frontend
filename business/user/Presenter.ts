import { localeChanged } from 'vee-validate';
import has from 'lodash/has';
import Service from './Service';
import { IPresenter, TState, IService, TUpdateUser } from './Domain';
import { VuexObservable } from '~/business/core/store/VuexObservable';
import { IVuexStateHolder } from '~/business/core/store/Domain';
import { EEventBusName, IEventBus } from '~/core/bus/Domain';
import PresenterCatcher from '~/core/decorators/PresenterCatcher';
import { context } from '~/core/context';
import { TNotificationPayload } from '~/@types/domain';
import { EHttpStatus, ELanguages } from '~/Api/Api';

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
    const user = await this.service.read();
    this.onChangeState({ user });

    this.onSetLocale(user.language);
  }

  public async onUpdate(payload: TUpdateUser): Promise<void> {
    Object.assign(payload, { id: this.state.user.id });
    const user = await this.service.update(payload);
    if (!user) {
      this.onErrorUpdateProfile();
      return;
    }
    if (has(payload, 'language')) {
      this.onSetLocale(payload.language);
    }

    this.onSuccessUpdateProfile();
    this.onChangeState({ user });
  }

  private onErrorUpdateProfile(): void {
    this.bus.emit<TNotificationPayload>(EEventBusName.NOTIFICATION, {
      type: 'error',
      title: context.i18n.tc('account.notices.updateProfile.error.title'),
      content: context.i18n.tc('account.notices.updateProfile.error.content')
    });
  }

  private onSuccessUpdateProfile(): void {
    this.bus.emit<TNotificationPayload>(EEventBusName.NOTIFICATION, {
      type: 'success',
      title: context.i18n.tc('account.notices.updateProfile.success.title'),
      content: context.i18n.tc('account.notices.updateProfile.success.content')
    });
  }

  public onSetLocale(locale: ELanguages): void {
    context.i18n.setLocale(locale as string);
    localeChanged();
  }

  public async onCreateComment(comment: string): Promise<EHttpStatus> {
    const status = await this.service.postComment({ comment });
    if (status === EHttpStatus.Success) {
      this.bus.emit<TNotificationPayload>(EEventBusName.NOTIFICATION, {
        type: 'success',
        title: context.i18n.tc('account.notices.leaveFeedback.success.title'),
        content: context.i18n.tc('account.notices.leaveFeedback.success.content')
      });
    } else {
      this.bus.emit<TNotificationPayload>(EEventBusName.NOTIFICATION, {
        type: 'error',
        title: context.i18n.tc('account.notices.leaveFeedback.error.title'),
        content: context.i18n.tc('account.notices.leaveFeedback.error.content')
      });
    }
    return status;
  }
}

import { Context, Plugin } from '@nuxt/types';
import { v4 as uuidv4 } from 'uuid';
import { IRawNotifications, TNotification, TNotificationParams } from '~/@types/domain';
import { ENotificationType } from '~/components/ui/domain/@types';

const notification: Plugin = ({ store }: Context, inject) => {
  const notification: IRawNotifications = {
    success(title: string, content: string, params: TNotificationParams) {
      this._prepare(title, content, ENotificationType.SUCCESS, params);
    },
    error(title: string, content: string, params: TNotificationParams) {
      this._prepare(title, content, ENotificationType.ERROR, params);
    },
    info(title: string, content: string, params: TNotificationParams) {
      this._prepare(title, content, ENotificationType.INFO, params);
    },
    _prepare(title: string, content: string, type: ENotificationType, params: TNotificationParams) {
      const notification: TNotification = Object.assign({ id: uuidv4(), title, content, type, ...params });
      this._add(notification);
    },
    _add(notification: TNotification) {
      store.commit('Core/addNotification', notification);
    }
  };
  inject('notification', notification);
};

export default notification;

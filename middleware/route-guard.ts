import { Context } from '@nuxt/types';
import { ENotificationType, TNotificationEvent } from '~/@types/domain';
import { EEventBusName } from '~/core/bus/Domain';
import { context } from '~/core/context';

export default async function({ app }: Context) {
  await app.$auth.checkTokens();
  const tokens = app.$auth.getTokens();
  if (tokens) {
    return;
  }
  setTimeout(() => {
    context.$bus.emit<TNotificationEvent>(EEventBusName.AUTH_NOTIFICATION, {
      type: ENotificationType.ERROR,
      title: 'Access Denied',
      content: 'Please, log in the system'
    });
  }, 100);
  app.router.replace({ name: 'sign-in' });
}

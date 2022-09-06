import { Context } from '@nuxt/types';
import { TNotificationPayload } from '~/@types/domain';
import { EEventBusName } from '~/core/bus/Domain';
import { context } from '~/core/context';

export default function({ app: { router, $auth } }: Context) {
  router.beforeEach(async(_to, _from, next) => {
    await $auth.checkTokens();
    const tokens = $auth.getTokens();
    if (!tokens) {
      context.$bus.emit<TNotificationPayload>(EEventBusName.NOTIFICATION, {
        type: 'error',
        title: 'Access Denied',
        text: 'Please, log in in the system'
      });
      router.replace({ name: 'sign-in' });
      return;
    }
    next();
  });
}

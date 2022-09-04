import { Context } from '@nuxt/types';

export default function({ app: { router, i18n } }: Context) {
  router.beforeEach((to, from, next) => { 
    // to.name = name + '___' + i18n.locale;
    // router
    // next({ name: newName, params, query });x
  });
}

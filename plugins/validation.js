/**
 * Клиентская валидация
 * Набор встроенных правил https://logaretm.github.io/vee-validate/guide/rules.html#rules
 * Установка ошибок сервера https://logaretm.github.io/vee-validate/advanced/server-side-validation.html#handling-backend-validation
 * Добавление новых правил https://logaretm.github.io/vee-validate/api/extend.html#signature
 * Полная документация https://logaretm.github.io/vee-validate/
 */

/* eslint-disable */
import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend, configure } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { context } from '~/core/context';
configure({
  defaultMessage: (field, values) => {
    // override the field name.
    values._field_ = context.i18n.t(`fields.${field}`);

    return context.i18n.t(`validation.${values._rule_}`, values);
  }
});

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

extend('password', {
  getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: value => {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      return passwordRegex.test(value);
  }
});

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

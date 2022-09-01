/**
 * Клиентская валидация
 * Набор встроенных правил https://logaretm.github.io/vee-validate/guide/rules.html#rules
 * Установка ошибок сервера https://logaretm.github.io/vee-validate/advanced/server-side-validation.html#handling-backend-validation
 * Добавление новых правил https://logaretm.github.io/vee-validate/api/extend.html#signature
 * Полная документация https://logaretm.github.io/vee-validate/
 */

/* eslint-disable */
import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';
import * as rules from 'vee-validate/dist/rules';
import { password } from '~/core/validation'
import { email, confirmed, required, max, max_value } from 'vee-validate/dist/rules.umd.js';

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('ru', ru);

extend('required', {
  ...required,
  message: 'Поле обязательно к заполнению'
});

extend('email', {
  ...email,
  message: 'Проверьте написание email-адреса'
});

extend('check-forbidden-symbols',  text => {
  const forbiddenSymbols = /[[\]{}<>]/;
  if (forbiddenSymbols.test(text)) {
    return 'Комментарий содержит запрещённые символы.'
  }

  return true;
});

extend('password', {
  ...password,
  message: 'Пароль не удовлетворяет требованиям'
});

extend('confirmed', {
  ...confirmed,
  message: 'Пароли не совпадают'
});

extend('max', {
  ...max,
  message: (_, { length}) => `Количество символов не может быть больше ${length}`
});

extend('max_value', {
  ...max_value,
  message: (_, { max}) => `Значение не может быть больше ${max}`
});

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

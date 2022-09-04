/**
 * Клиентская валидация
 * Набор встроенных правил https://logaretm.github.io/vee-validate/guide/rules.html#rules
 * Установка ошибок сервера https://logaretm.github.io/vee-validate/advanced/server-side-validation.html#handling-backend-validation
 * Добавление новых правил https://logaretm.github.io/vee-validate/api/extend.html#signature
 * Полная документация https://logaretm.github.io/vee-validate/
 */

/* eslint-disable */
import Vue from "vue";
import VueI18n from 'vue-i18n';
import { ValidationObserver, ValidationProvider, extend, configure } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';
import en from 'vee-validate/dist/locale/en.json';
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

// extend('password', {
//   ...password,
//   message: 'Пароль не удовлетворяет требованиям'
// });

extend('password', {
  // getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: value => {
      const passwordRegex = new RegExp("/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/");
      return strongRegex.test(value);
  }
});

// localize({
//   en: {
//     messages: {
//       email: 'Invalid e-mail',
//       required: 'The field is required',
//       password: 'Incorrect password',
//       passwordConfirmed: `Passwords don't match`
//     }
//   },
//   ru: {
//     messages: {
//       required: 'Поле обязательно для заполнения',
//       password: 'Пароль не удовлетворяет требованиям',
//       passwordConfirmed: 'Пароли не совпадают',
//       email: 'Проверьте написание email-адреса'
//     }
//   }
// });

// extend('required', {
//   ...required,
//   message: 'Поле обязательно к заполнению'
// });

// extend('email', {
//   ...email,
//   message: 'Проверьте написание email-адреса'
// });

// extend('check-forbidden-symbols',  text => {
//   const forbiddenSymbols = /[[\]{}<>]/;
//   if (forbiddenSymbols.test(text)) {
//     return 'Комментарий содержит запрещённые символы.'
//   }

//   return true;
// });

// extend('password', {
//   ...password,
//   message: 'Пароль не удовлетворяет требованиям'
// });

// extend('confirmed', {
//   ...confirmed,
//   message: 'Пароли не совпадают'
// });

// extend('max', {
//   ...max,
//   message: (_, { length}) => `Количество символов не может быть больше ${length}`
// });

// extend('max_value', {
//   ...max_value,
//   message: (_, { max}) => `Значение не может быть больше ${max}`
// });

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

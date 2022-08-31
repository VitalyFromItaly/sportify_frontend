import { formatISO } from 'date-fns';
import Vue from 'vue';

export const formatDate = (date: string) => formatISO(new Date(date), { representation: 'date' })
  .split('-').reverse().join('.');

export const formatTime = (date: string) => formatISO(new Date(date), { representation: 'time' }).slice(0, -6);

export const formatDateFilter = Vue.filter('formatDate', (date: string): string => {
  if (!date) { return '—'; }
  return formatISO(new Date(date), { representation: 'date' }).split('-').reverse().join('.') + ' ' + formatISO(new Date(date), { representation: 'time' }).slice(0, -6);
});

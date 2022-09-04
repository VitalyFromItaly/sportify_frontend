import { Plugin } from '@nuxt/types';
import { EAppLanguages, ESystemDefaultLanguage } from '~/@types/domain';

const context: Plugin = ({ app }) => {
  const { language } = navigator;
  const isRus = ESystemDefaultLanguage.RU === language;
  if (isRus) {
    localStorage.setItem('language', EAppLanguages.RU);
  } else {
    localStorage.setItem('language', EAppLanguages.EN);
  }
};

export default context;

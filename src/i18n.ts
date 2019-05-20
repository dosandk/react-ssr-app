import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';

import en from './assets/locales/en/translation.json';
import ru from './assets/locales/ru/translation.json';

i18n
  .use(LngDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en, ru
    },
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    nsSeparator: '|',
    saveMissing: true,
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      bindI18n: 'languageChanged',
      transEmptyNodeValue: '',
      useSuspense: false,
    }
  });

export default i18n;

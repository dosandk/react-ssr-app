import isomorphicFetch from 'isomorphic-fetch';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';
import Fetch from 'i18next-fetch-backend';

import en from './assets/locales/en/translation.json';
import uk from './assets/locales/uk/translation.json';

const detectionOptions = {
  order: ['path', 'localStorage'],
  lookupFromPathIndex: 0,
  lookupLocalStorage: 'i18nextLng',

  // cache user language on
  caches: ['localStorage', 'cookie'],
};

const options = {
  resources: {
    en, uk
  },
  fallbackLng: 'en', // use en if detected lng is not available
  detection: detectionOptions,
  keySeparator: false, // we do not use keys in form messages.welcome
  nsSeparator: '|',

  debug: true,
  saveMissing: true,
  interpolation: {
    escapeValue: false // react already safes from xss
  },
  backend: {
    loadPath: 'locales/{{lng}}/translation.json',
    addPath: 'locales/add/{{lng}}/translation.json',
    fetch: isomorphicFetch
  },
  react: {
    bindI18n: 'languageChanged',
    transEmptyNodeValue: '',
    useSuspense: false,
  }
};

i18n
  .use(Fetch)
  .use(LngDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(options);

export default i18n;

import isomorphicFetch from 'isomorphic-fetch';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';
import Fetch from 'i18next-fetch-backend';

const detectionOptions = {
  order: ['path', 'localStorage'],
  lookupFromPathIndex: 0,
  lookupLocalStorage: 'i18nextLng',

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  // htmlTag: document.documentElement
};
const options = {
  // preload: ['en'],
  fallbackLng: 'en', // use en if detected lng is not available
  detection: detectionOptions,
  keySeparator: false, // we do not use keys in form messages.welcome
  nsSeparator: '|',

  debug: true,
  interpolation: {
    escapeValue: false // react already safes from xss
  },
  backend: {
    loadPath: 'locales/{{lng}}/translation.json',
    fetch: isomorphicFetch
  },
  react: {
    bindI18n: 'languageChanged',
    transEmptyNodeValue: '',
    useSuspense: false
  },
  wait: process && !process.release,
};

// for browser use fetch backend to load translations and browser lng detector
if (process && !process.release) {
  i18n
    .use(Fetch)
    .use(LngDetector)
    .use(initReactI18next); // passes i18n down to react-i18next
  // .init();
}

if (!i18n.isInitialized) {
  i18n.init(options);
}

export default i18n;

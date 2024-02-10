import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import euTranslations from './locales/eu.json';
import esTranslations from './locales/es.json';
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    lng: 'en',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      eu: { translation: euTranslations },
      fr: { translation: frTranslations },
    },
  });

export default i18n;

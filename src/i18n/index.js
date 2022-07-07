import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform, NativeModules } from 'react-native';

const resources = {
  'zh-Hant': {
    translation: require('./langs/zh-Hant.json'),
  },
  'zh-Hans': {
    translation: require('./langs/zh-Hans.json'),
  },
  en: {
    translation: require('./langs/en.json'),
  },
  vi: {
    translation: require('./langs/vi.json'),
  },
  km: {
    translation: require('./langs/km.json'),
  },
  th: {
    translation: require('./langs/th.json'),
  },
  ar: {
    translation: require('./langs/ar.json'),
  },
  ja: {
    translation: require('./langs/ja.json'),
  },
  ko: {
    translation: require('./langs/ko.json'),
  },
  pl: {
    translation: require('./langs/pl.json'),
  },
  ru: {
    translation: require('./langs/ru.json'),
  },
};

export const langs = Object.keys(resources).reduce((acc, cur) => {
  acc[cur] = {
    label: cur,
    value: cur,
  };
  return acc;
}, {});

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => {
    const data =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
    cb(data);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

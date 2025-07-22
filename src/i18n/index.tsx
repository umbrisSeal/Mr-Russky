import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './es.json';
import en from './en.json'

i18n
    .use(LanguageDetector)          // Allow browser language detection.
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            en: { translation: en },
        },
        //lng: 'es',                // Use it only in dev to switch languages manually from here.
        fallbackLng: 'en',          // Most common.
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['cookie', 'navigator', 'localStorage', 'path', 'subdomain'],    // Prioritize cookie language config instead of browser config.
            caches: ['cookie'],
            lookupCookie: 'user_lang',
            cookieMinutes: 10080 * 3,       // 21 days
            cookieDomain: window.location.hostname,
            // cacheUserLanguage: false     // For future if we handle user_lang cookie manually.
        }
    })
;

export default i18n;
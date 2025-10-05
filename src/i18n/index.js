import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

// Configuración de recursos
const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  }
};

i18n
  .use(initReactI18next) // Pasa la instancia de i18n al react-i18next
  .init({
    resources,
    // Idioma por defecto. Debe ser 'en' según tu solicitud.
    lng: 'en', 
    fallbackLng: 'en', // Idioma de respaldo si no se encuentra la traducción
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    }
  });

export default i18n;
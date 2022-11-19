import 'intl-pluralrules';
import i18next from 'i18next';
import countriesPtBr from '../../locales/pt-BR/countries.json';
import messagesBr from '../../locales/pt-BR/messages.json';

export const i18n = {t: (v?: string | null) => v ?? ''};
i18next
  .init({
    //compatibilityJSON: 'v3',
    lng: 'pt-BR',
    resources: {
      'pt-BR': {
        translation: {
          countries: countriesPtBr,
          messages: messagesBr,
        },
      },
    },
  })
  .then(t => (i18n.t = t));

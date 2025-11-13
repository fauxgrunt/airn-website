// src/lib/i18n-config.ts
export const i18n = {
    defaultLocale: 'en', // English is the default
    locales: ['en', 'bn'],
  } as const;
  
  export type Locale = (typeof i18n)['locales'][number];
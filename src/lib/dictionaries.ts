// src/lib/dictionaries.ts
import 'server-only';
import type { Locale } from './i18n-config';

// This is the lookup object for your dictionaries
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  bn: () => import('@/dictionaries/bn.json').then((module) => module.default),
};

// This is your main function to get a dictionary
export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();


// --- THIS IS THE NEW LINE ---
// This creates and exports a type named 'Dictionary'
// that matches the exact "shape" of your en.json file.
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
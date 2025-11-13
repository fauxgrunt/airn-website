// src/components/layout/LanguageToggle.tsx
'use client'; // This component MUST be a client component

import { usePathname, useRouter } from 'next/navigation';
import { i18n, Locale } from '@/lib/i18n-config';

export const LanguageToggle = ({ lang }: { lang: Locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    if (!pathname) return;

    // Remove the current locale prefix from the pathname
    // e.g., /en/partners -> /partners
    const newPath = pathname.replace(`/${lang}`, '');

    // Redirect to the new locale
    // e.g., /bn/partners
    router.push(`/${newLocale}${newPath}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`text-sm font-medium ${
          lang === 'en' ? 'text-green-600' : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        EN
      </button>
      <span className="text-gray-300">/</span>
      <button
        onClick={() => handleLanguageChange('bn')}
        className={`text-sm font-medium ${
          lang === 'bn' ? 'text-green-600' : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        BN
      </button>
    </div>
  );
};
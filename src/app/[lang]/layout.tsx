// src/app/[lang]/layout.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getDictionary } from '@/lib/dictionaries';
import { Locale, i18n } from '@/lib/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dictionary={dictionary.navbar} />
      <main>{children}</main>
      <Footer lang={lang} dictionary={dictionary.footer} />
    </>
  );
}
// src/components/layout/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/lib/i18n-config';
import { Dictionary } from '@/lib/dictionaries';
import { LanguageToggle } from './LanguageToggle';

// --- FIX ---
// Changed 'partner' to 'gallery'
type NavLinkName = 'about' | 'products' | 'gallery' | 'contact';

const navLinks: { name: NavLinkName; href: string }[] = [
  { name: 'about', href: '/about' },
  { name: 'products', href: '/products' },
  { name: 'gallery', href: '/gallery' }, // <-- FIX: Was 'partner'
  { name: 'contact', href: '/contact' },
];
// --- END OF FIX ---

interface HeaderProps {
  lang: Locale;
  dictionary: Dictionary['navbar'];
}

export function Header({ lang, dictionary }: HeaderProps) {
  return (
    <header className="relative z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        
        {/* Left: Logo */}
        <div className="flex lg:flex-1">
          <Link href={`/${lang}`}>
            <Image
              src="/images/logo.png"
              alt="AIRN Agro Logo"
              width={120} 
              height={32} 
              priority
            />
          </Link>
        </div>
        
        {/* Center: Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${lang}${link.href}`}
              className="text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-green-700 transition-colors"
            >
              {dictionary[link.name]}
            </Link>
          ))}
        </div>

        {/* Right: Language Toggle */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LanguageToggle lang={lang} />
        </div>
        
        {/* Mobile menu button (hidden) */}
        <div className="flex lg:hidden">
        </div>
      </nav>
    </header>
  );
}
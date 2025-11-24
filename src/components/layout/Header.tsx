// src/components/layout/Header.tsx
'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; 
import { Locale } from '@/lib/i18n-config';
import { Dictionary } from '@/lib/dictionaries';
import { Menu, X } from 'lucide-react'; 

interface HeaderProps {
  lang: Locale;
  dictionary: Dictionary['navbar'];
}

// --- Helper component for links ---
function NavLink({
  href,
  children,
  isTransparent, 
  isActive,
  isMobile = false, 
  onClick, 
}: {
  href: string;
  children: React.ReactNode;
  isTransparent?: boolean;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}) {
  // Base styles
  const baseClasses = isMobile 
    ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50' 
    : 'text-sm font-semibold leading-6 transition-colors';

  // Color logic (Desktop only)
  const textColor = isTransparent ? 'text-white' : 'text-gray-900';
  const hoverClass = 'hover:text-green-500';
  const activeColor = isTransparent ? 'text-green-400' : 'text-green-600';

  // Mobile Color Logic
  const mobileColor = isActive ? 'text-green-600 bg-gray-50' : 'text-gray-900';

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${isMobile 
          ? mobileColor // Mobile styles
          : (isActive ? activeColor : `${textColor} ${hoverClass}`) // Desktop styles
        }
      `}
    >
      {children}
    </Link>
  );
}

export function Header({ lang, dictionary }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const pathname = usePathname(); 

  const isHomepage = pathname === `/${lang}` || pathname === '/';
  const isTransparent = isHomepage && !isScrolled;

  // --- DYNAMIC LANGUAGE SWITCHER LOGIC ---
  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale; // Replace the language segment (e.g., 'en' -> 'bn')
    return segments.join('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isTransparent
          ? 'bg-transparent shadow-none' 
          : 'bg-white/90 shadow-md backdrop-blur-lg' 
        }
      `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href={`/${lang}`} className="-m-1.5 p-1.5">
            <span className="sr-only">AIRN Agro</span>
            <Image
              src="/images/logo.png"
              alt="AIRN Agro Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)} 
          >
            <span className="sr-only">Open main menu</span>
            <Menu className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-gray-900'}`} />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink href={`/${lang}/about`} isTransparent={isTransparent} isActive={pathname === `/${lang}/about`}>
            {dictionary.about}
          </NavLink>
          <NavLink href={`/${lang}/products`} isTransparent={isTransparent} isActive={pathname.startsWith(`/${lang}/products`)}>
            {dictionary.products}
          </NavLink>
          <NavLink href={`/${lang}/gallery`} isTransparent={isTransparent} isActive={pathname === `/${lang}/gallery`}>
            {dictionary.gallery}
          </NavLink>
          <NavLink href={`/${lang}/contact`} isTransparent={isTransparent} isActive={pathname === `/${lang}/contact`}>
            {dictionary.contact}
          </NavLink>
        </div>

        {/* Desktop Language Switcher */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href={redirectedPathName('en')} 
            className={`text-sm font-bold 
              ${isTransparent ? 'text-white' : 'text-gray-900'} 
              ${lang === 'en' ? (isTransparent ? 'text-green-400' : 'text-green-600') : 'hover:text-green-500'}`}
          >
            EN
          </Link>
          <span className={`${isTransparent ? 'text-white/50' : 'text-gray-400'}`}>|</span>
          <Link
            href={redirectedPathName('bn')} 
            className={`text-sm font-bold 
              ${isTransparent ? 'text-white' : 'text-gray-900'} 
              ${lang === 'bn' ? (isTransparent ? 'text-green-400' : 'text-green-600') : 'hover:text-green-500'}`}
          >
            BN
          </Link>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href={`/${lang}`} className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">AIRN Agro</span>
                <Image
                  src="/images/logo.png"
                  alt="AIRN Agro Logo"
                  width={140}
                  height={35}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)} 
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink isMobile href={`/${lang}/about`} isActive={pathname === `/${lang}/about`} onClick={() => setMobileMenuOpen(false)}>
                    {dictionary.about}
                  </NavLink>
                  <NavLink isMobile href={`/${lang}/products`} isActive={pathname.startsWith(`/${lang}/products`)} onClick={() => setMobileMenuOpen(false)}>
                    {dictionary.products}
                  </NavLink>
                  <NavLink isMobile href={`/${lang}/gallery`} isActive={pathname === `/${lang}/gallery`} onClick={() => setMobileMenuOpen(false)}>
                    {dictionary.gallery}
                  </NavLink>
                  <NavLink isMobile href={`/${lang}/contact`} isActive={pathname === `/${lang}/contact`} onClick={() => setMobileMenuOpen(false)}>
                    {dictionary.contact}
                  </NavLink>
                </div>
                
                {/* Mobile Language Switcher */}
                <div className="py-6 flex gap-x-4">
                   <Link href={redirectedPathName('en')} className={`text-sm font-bold ${lang === 'en' ? 'text-green-600' : 'text-gray-900'}`}>EN</Link>
                   <span className="text-gray-300">|</span>
                   <Link href={redirectedPathName('bn')} className={`text-sm font-bold ${lang === 'bn' ? 'text-green-600' : 'text-gray-900'}`}>BN</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
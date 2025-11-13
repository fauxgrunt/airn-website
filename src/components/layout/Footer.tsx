// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import { Locale } from '@/lib/i18n-config';
import { Dictionary } from '@/lib/dictionaries';

interface FooterProps {
  lang: Locale;
  dictionary: Dictionary['footer'];
}

export function Footer({ lang, dictionary }: FooterProps) {
  const langKey = lang as 'en' | 'bn';

  return (
    <footer className="bg-gray-900 text-gray-400" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <Image
              src="/images/logo-full.jpg"
              alt="AIRN Agro Full Logo"
              width={200}
              height={55}
              priority
            />
            <p className="text-sm leading-6">{dictionary.about}</p>
            <div className="flex space-x-6">
              {/* --- FIX: Real Social Links --- */}
              <a href={dictionary.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={dictionary.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={dictionary.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">{dictionary.linksTitle}</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li><Link href={`/${lang}/about`} className="hover:text-white">{dictionary.links.about}</Link></li>
              <li><Link href={`/${lang}/products`} className="hover:text-white">{dictionary.links.products}</Link></li>
              <li><Link href={`/${lang}/gallery`} className="hover:text-white">{dictionary.links.gallery}</Link></li>
              <li><Link href={`/${lang}/contact`} className="hover:text-white">{dictionary.links.contact}</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">{dictionary.productsTitle}</h3>
            <ul role="list" className="mt-6 space-y-4">
              {/* These can eventually be links too */}
              <li><Link href={`/${lang}/products`} className="hover:text-white">{dictionary.products.bioFertilizers}</Link></li>
              <li><Link href={`/${lang}/products`} className="hover:text-white">{dictionary.products.microNutrients}</Link></li>
              <li><Link href={`/${lang}/products`} className="hover:text-white">{dictionary.products.organicFertilizers}</Link></li>
              <li><Link href={`/${lang}/products`} className="hover:text-white">{dictionary.products.bioFungicides}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">{dictionary.contactTitle}</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex gap-x-3">
                <span className="font-semibold text-white">{dictionary.contact.address}</span>
                <span>{dictionary.contact.addressValue}</span>
              </li>
              <li className="flex gap-x-3">
                <span className="font-semibold text-white">{dictionary.contact.phone}</span>
                {/* --- FIX: Clickable Phone --- */}
                <a href={`tel:${dictionary.contact.phoneValue}`} className="hover:text-white">
                  {dictionary.contact.phoneValue}
                </a>
              </li>
              <li className="flex gap-x-3">
                <span className="font-semibold text-white">{dictionary.contact.email}</span>
                {/* --- FIX: Clickable Email --- */}
                <a href={`mailto:${dictionary.contact.emailValue}`} className="hover:text-white">
                  {dictionary.contact.emailValue}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5">{dictionary.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
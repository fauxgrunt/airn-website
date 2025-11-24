// src/components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/product-data';
import { Locale } from '@/lib/i18n-config';

interface ProductCardProps {
  product: Product;
  lang: Locale;
  ctaText: string; // <-- This is what fixes the error!
}

export function ProductCard({ product, lang, ctaText }: ProductCardProps) {
  // Safe check for name/description to prevent crashes if data is old
  const name = product.name ? (lang === 'bn' ? product.name.bn : product.name.en) : "Product Name";
  const description = product.description ? (lang === 'bn' ? product.description.bn : product.description.en) : "";

  return (
    <div
      className="
        group relative flex flex-col overflow-hidden rounded-xl 
        border border-gray-200 bg-white 
        transition-all duration-300 ease-in-out
        hover:shadow-2xl hover:-translate-y-2 hover:border-green-100
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 sm:aspect-[4/3]">
        <Image
          src={product.image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-gray-900">
          <Link href={`/${lang}/products/${product.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex flex-1 items-end justify-between">
          <p className="text-sm font-medium text-green-600 group-hover:text-green-700 flex items-center gap-1">
            {ctaText}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </p>
        </div>
      </div>
    </div>
  );
}
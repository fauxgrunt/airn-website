// src/app/[lang]/products/page.tsx
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n-config';
import { productDb } from '@/lib/product-data';
import { ProductGrid } from './ProductGrid'; // <-- Import our new "worker"

export default async function ProductsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // 1. Fetch all data on the server
  const { productsPage, productCategories } = await getDictionary(lang);
  const allProducts = productDb;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        {/* Page Header (from server) */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {productsPage.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {productsPage.subtitle}
        </p>

        {/* 2. Pass all data to the interactive "worker" component */}
        <ProductGrid
          lang={lang}
          allProducts={allProducts}
          dictionary={{ productsPage, productCategories }}
        />
      </div>
    </div>
  );
}
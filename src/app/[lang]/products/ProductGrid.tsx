// src/app/[lang]/products/ProductGrid.tsx
'use client'; // This is the "worker" - it's a Client Component

import { useState } from 'react';
import { Product } from '@/lib/product-data';
import { Dictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n-config';
import Image from 'next/image';
import Link from 'next/link';

// Define the categories we want to show filters for
type CategoryId = 'all' | Product['categoryId'];
const categories: CategoryId[] = ['all', 'micro-nutrient', 'bio-fungicide', 'organic-fertilizer'];

// Define the props that the "boss" (page.tsx) will pass to us
interface ProductGridProps {
  lang: Locale;
  allProducts: Product[];
  dictionary: {
    productsPage: Dictionary['productsPage'];
    productCategories: Dictionary['productCategories'];
  };
}

export function ProductGrid({ lang, allProducts, dictionary }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const { productsPage, productCategories } = dictionary;

  // The filtering logic
  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory === 'all') {
      return true; // Show all
    }
    return product.categoryId === selectedCategory; // Show only selected
  });

  return (
    <>
      {/* --- Filter Buttons --- */}
      <div className="mt-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              rounded-full px-5 py-2 text-sm font-semibold transition-colors
              ${selectedCategory === category
                ? 'bg-green-600 text-white' // Active style
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200' // Inactive
              }
            `}
          >
            {productCategories[category]}
          </button>
        ))}
      </div>
      {/* --- END OF FILTERS --- */}

      {/* --- Product Grid --- */}
      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.slug}
            className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm"
          >
            {/* Product Image */}
            <div className="relative h-64 w-full bg-gray-50">
              <Image
                src={product.image}
                alt={product.productName[lang]}
                layout="fill"
                objectFit="contain"
                className="p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* Product Info Card */}
            <div className="p-6">
              <p className="text-sm font-semibold text-green-700">
                {product.category[lang]}
              </p>
              <h3 className="mt-1 text-lg font-bold text-gray-900">
                {product.productName[lang]}
              </h3>
              <Link
                href={`/${lang}/products/${product.slug}`}
                className="mt-6 block w-full rounded-md bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700"
              >
                {productsPage.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* --- If no products match --- */}
      {filteredProducts.length === 0 && (
        <div className="mt-16 text-center text-gray-500">
          <p className="text-lg">No products found in this category.</p>
          <p>More products coming soon!</p>
        </div>
      )}
    </>
  );
}
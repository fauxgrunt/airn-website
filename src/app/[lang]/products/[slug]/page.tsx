// src/app/[lang]/products/[slug]/page.tsx
import { getProductBySlug, productDb } from '@/lib/product-data';
import { Locale } from '@/lib/i18n-config';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// This props type tells TypeScript what to expect
interface ProductPageProps {
  params: {
    lang: Locale;
    slug: string;
  };
}

// --- This part is for Next.js ---
// This tells Next.js to pre-build pages for all our products
export async function generateStaticParams() {
  const allProductSlugs = productDb.map((product) => product.slug);
  
  // We need to generate params for both 'en' and 'bn'
  const allParams = [];
  for (const lang of ['en', 'bn'] as Locale[]) {
    for (const slug of allProductSlugs) {
      allParams.push({ lang, slug });
    }
  }
  return allParams;
}
// --- End of Next.js part ---


export default function ProductPage({ params }: ProductPageProps) {
  const { lang, slug } = params;
  const product = getProductBySlug(slug);

  // If no product is found, show the 404 page
  if (!product) {
    notFound();
  }

  // This is the 2-column layout you liked from the 'Jalali' example
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 lg:grid-cols-2">
          
          {/* Column 1: Product Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.productName[lang]}
              layout="fill"
              objectFit="contain" // 'contain' is better for product bags
              className="bg-gray-50 p-4"
            />
          </div>

          {/* Column 2: Product Specs */}
          <div>
            <p className="text-base font-semibold leading-7 text-green-700">
              {product.category[lang]}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.productName[lang]}
            </h1>
            
            <div className="mt-10 divide-y divide-gray-200 border-t border-gray-200">
              {product.specs.map((spec) => (
                <div key={spec.title.en} className="py-6">
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">
                    {spec.title[lang]}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 whitespace-pre-line">
                    {spec.details[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
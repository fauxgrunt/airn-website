// src/app/[lang]/page.tsx
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n-config';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Truck, BarChart3 } from 'lucide-react'; // Using BarChart3 for Lucide compatibility
import { ProductCard } from '@/components/ProductCard';
import { productDb } from '@/lib/product-data';

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { homepage, features, products } = await getDictionary(lang);

  // We use the smart ProductDB we built so cards have the Hover/Zoom effects
  const sampleProducts = productDb.slice(0, 3);
  const ctaButtonText = lang === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details';

  return (
    <main>
      {/* --- SECTION 1: HERO --- */}
      <div 
        className="relative isolate bg-white"
        style={{
          backgroundImage: `url('/images/hero-pattern.svg')`,
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          
          {/* MOBILE FIX 1: Padding Top 
             Changed 'pt-10' to 'pt-32'. 
             This pushes content down so the fixed header doesn't cover it on mobile.
          */}
          <div className="px-6 pb-24 pt-32 sm:pb-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-lg">
              {/* MOBILE FIX 2: Text Size 
                 Changed 'text-4xl' to 'text-3xl'.
                 This stops the "Zoomed In" feeling on phones.
              */}
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {homepage.heroTitle}
              </h1>
              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                {homepage.heroSubtitle}
              </p>
              <div className="mt-10">
                <Link
                  href={`/${lang}/products`}
                  className="rounded-md bg-green-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700"
                >
                  {homepage.cta} 
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-80 lg:h-full">
            <Image
              src="/images/hero-bg.jpg"
              alt="A farmer spraying crops in a field"
              layout="fill"
              objectFit="cover" 
              className="lg:rounded-l-xl"
            />
             {/* Gradient Overlay for better contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
          </div>

        </div>
      </div>
      {/* --- END OF HERO SECTION --- */}


      {/* --- SECTION 2: "WHY US?" FEATURES --- */}
      <div className="py-16 sm:py-32"> {/* Reduced mobile padding */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {features.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"> {/* Reduced mobile margin */}
            
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 text-white">
                <Leaf size={32} />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {features.item1.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {features.item1.description}
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 text-white">
                <Truck size={32} />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {features.item2.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {features.item2.description}
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 text-white">
                <BarChart3 size={32} />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {features.item3.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {features.item3.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --- END OF FEATURES --- */}


      {/* --- SECTION 3: PRODUCT SNAPSHOT --- */}
      <div className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {products.title}
          </h2>
          <p className="mt-4 text-center text-base leading-8 text-gray-600 sm:text-lg">
            {products.subtitle}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Here we use the ProductCard component. 
               This preserves the Shadow/Zoom effects you liked, 
               while keeping the layout of your original code.
            */}
            {sampleProducts.map((product) => (
              <ProductCard 
                key={product.slug}
                lang={lang}
                product={product}
                ctaText={ctaButtonText} 
              />
            ))}
          </div>
        </div>
      </div>
      {/* --- END OF PRODUCT SECTION --- */}
    </main>
  );
}
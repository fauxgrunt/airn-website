// src/app/[lang]/page.tsx
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n-config';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Truck, BarChart } from 'lucide-react';

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // Now fetching all sections for the homepage
  const { homepage, features, products } = await getDictionary(lang);

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
          
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {homepage.heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
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
          </div>

        </div>
      </div>
      {/* --- END OF HERO SECTION --- */}


      {/* --- SECTION 2: "WHY US?" FEATURES --- */}
      {/* This section stays on the default bg-gray-50 for contrast */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {features.title}
          </h2>
          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            
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
                <BarChart size={32} />
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
      {/* --- END OF "WHY US?" SECTION --- */}


      {/* --- SECTION 3: PRODUCT SNAPSHOT --- */}
      {/* This section is bg-white to pop off the gray background */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {products.title}
          </h2>
          <p className="mt-4 text-center text-lg leading-8 text-gray-600">
            {products.subtitle}
          </p>

          <div className="mt-20 grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="flex flex-col items-center text-center">
              <div className="h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/product-fertilizer.jpg"
                  alt="AIRN Jaibo Shar Organic Fertilizer"
                  width={500} height={500}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {products.item1.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {products.item1.description}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/product-bio.jpeg"
                  alt="AIRN Trirun Bio-Fungicide"
                  width={500} height={500}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {products.item2.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {products.item2.description}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/product-nutrient.png"
                  alt="AIRN Solubor Boron"
                  width={500} height={500}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {products.item3.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {products.item3.description}
              </p>
            </div>

          </div>
        </div>
      </div>
      {/* --- END OF PRODUCT SECTION --- */}
    </main>
  );
}
// src/app/[lang]/about/page.tsx
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n-config';
import Image from 'next/image';
import { Network, Target, BookOpen } from 'lucide-react';

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { aboutPage } = await getDictionary(lang);

  return (
    <div className="bg-white">
      {/* --- Section 1: Hero --- */}
      <div className="relative isolate bg-gray-50">
        <div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {aboutPage.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {aboutPage.subtitle}
          </p>
        </div>
      </div>

      {/* --- Section 2: Our Story (Text + Image) --- */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
          
          {/* Column 1: Text Content */}
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 text-white">
              <BookOpen size={32} />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {aboutPage.story.title}
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {aboutPage.story.text}
            </p>
          </div>

          {/* Column 2: Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/gallery/gallery-warehouse-full.jpg"
              alt="AIRN Agro warehouse"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* --- Section 3: Mission & Vision (Centered) --- */}
      <div className="bg-gray-900 text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* Mission */}
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 text-white">
                <Network size={32} />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              {aboutPage.mission.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {aboutPage.mission.text}
            </p>

            {/* Vision */}
            <div className="flex justify-center mt-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 text-white">
                <Target size={32} />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              {aboutPage.vision.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {aboutPage.vision.text}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
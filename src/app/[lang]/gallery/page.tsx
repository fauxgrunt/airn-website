// src/app/[lang]/gallery/page.tsx
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n-config';
import { galleryPhotos, galleryVideos } from '@/lib/gallery-data'; // <-- FIX: Import separate arrays
import Image from 'next/image';

export default async function GalleryPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { galleryPage } = await getDictionary(lang);
  const langKey = lang as 'en' | 'bn'; // For TypeScript safety

  return (
    <div className="bg-white">
      {/* --- Section 1: Hero (Title) --- */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {galleryPage.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {galleryPage.subtitle}
          </p>
        </div>
      </div>

      {/* --- Section 2: Videos --- */}
      {galleryVideos.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {galleryPage.videos} {/* Title for Videos Section */}
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-2"> {/* Wider grid for videos */}
            {galleryVideos.map((item) => (
              <li key={item.src} className="flex flex-col gap-4">
                <div className="w-full overflow-hidden rounded-lg aspect-video"> {/* Aspect ratio for video */}
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${item.src}`}
                    title={item.caption[langKey]}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base leading-7 text-gray-600">
                  {item.caption[langKey]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* --- Section 3: Photos --- */}
      {galleryPhotos.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 border-t border-gray-200"> {/* Added border-t for separation */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {galleryPage.photos} {/* Title for Photos Section */}
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"> {/* Grid for photos */}
            {galleryPhotos.map((item) => (
              <li key={item.src} className="flex flex-col gap-4">
                <div className="relative w-full overflow-hidden rounded-lg aspect-square"> {/* Aspect ratio for image */}
                  <Image
                    src={item.src}
                    alt={item.caption[langKey]}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-base leading-7 text-gray-600">
                  {item.caption[langKey]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
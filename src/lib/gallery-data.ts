// src/lib/gallery-data.ts

// ১. প্রতিটি গ্যালারি আইটেমের "গঠন" কেমন হবে তা নির্ধারণ
export type GalleryItem = {
    src: string; // ছবির পাথ অথবা ইউটিউব ভিডিও আইডি
    caption: { en: string; bn: string }; // ছবির বা ভিডিওর ক্যাপশন
    // 'aspect' property will be managed by the parent component layout
  };
  
  // ২. ছবির ডেটাবেস
  export const galleryPhotos: GalleryItem[] = [
    // আপনার দেওয়া ওয়্যারহাউসের ছবি
    {
      src: '/images/gallery/gallery-warehouse-full.jpg',
      caption: {
        en: 'Our main warehouse, fully stocked with AIRN Agro products, ready for distribution.',
        bn: 'আমাদের প্রধান গুদাম, AIRN এগ্রো পণ্যে পূর্ণ এবং বিতরণের জন্য প্রস্তুত।',
      },
    },
    // একটি প্লেসহোল্ডার ছবি (আপনি পরে এটি পরিবর্তন করতে পারেন)
    {
      src: '/images/hero-bg.jpg', // আমরা আপাতত এই ছবিটি ব্যবহার করছি
      caption: {
        en: 'A healthy field, thanks to AIRN solutions.',
        bn: 'AIRN সলিউশনের ফলে একটি স্বাস্থ্যকর ক্ষেত।',
      },
    },
    // Add more photos here
  ];
  
  // ৩. ভিডিও ডেটাবেস
  export const galleryVideos: GalleryItem[] = [
    // আপনার দেওয়া পজিটিভ রিভিউ ভিডিও
    {
      src: '-xevZbhRzxc', // এটা ইউটিউব ভিডিও আইডি
      caption: {
        en: 'How are farmers benefiting from bio-fertilizers? Watch this interview.',
        bn: 'জৈব সার ব্যবহারে কেমন ফল পাচ্ছেন কৃষকরা? দেখুন এই সাক্ষাৎকার।',
      },
    },
    // আপনার দেওয়া দ্বিতীয় ভিডিও (সচেতনতা)
    {
      src: 'PhQFc_Q6BGA',
      caption: {
        en: 'Farmer Survey: Do you know about the need for bio-fertilizers?',
        bn: 'কৃষক জরিপ: আপনি কি জৈব সারের প্রয়োজনীয়তা সম্পর্কে জানেন?',
      },
    },
    // Add more videos here
  ];
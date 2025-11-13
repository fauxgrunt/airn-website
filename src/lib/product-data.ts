// src/lib/product-data.ts

export type Product = {
    slug: string;
    categoryId: 'micro-nutrient' | 'bio-fungicide' | 'organic-fertilizer';
    category: { en: string; bn: string };
    productName: { en: string; bn: string };
    image: string;
    specs: {
      title: { en: string; bn: string };
      details: { en: string; bn: string };
    }[];
  };
  
  // --- THIS IS THE NEW, COMPLETE DATABASE ---
  export const productDb: Product[] = [
    // === CATEGORY: MICRO-NUTRIENT ===
  
    {
      slug: 'boric-acid',
      categoryId: 'micro-nutrient',
      category: { en: 'Micro-Nutrient', bn: 'মাইক্রো-নিউট্রিয়েন্ট' },
      productName: { en: 'AIRN Boric Acid (Boron 17%)', bn: 'এয়ারএন বোরিক এসিড (বোরন ১৭%)' },
      image: '/images/product-boric-acid.jpg', // New image
      specs: [
        {
          title: { en: 'Ingredients', bn: 'উপাদান' },
          details: { en: 'Boron (B): 17%', bn: 'বোরন (Boron): ১৭%' },
        },
        {
          title: { en: 'Benefits', bn: 'ব্যবহারের সুবিধা' },
          details: { en: 'Helps in pollen germination and fertilization, preventing flower and fruit drop. Essential for cell division and root development.', bn: 'বোরন পরাগরেণু ও গর্ভধারণে সহায়তা করে, তাই ফুল ও ফল ঝরে পড়া রোধ করে। কোষ বিভাজন ও মূল গঠনে অপরিহার্য।' },
        },
        {
          title: { en: 'Crops', bn: 'প্রয়োগ ক্ষেত্র' },
          details: { en: 'Paddy, Jute, Wheat, Mustard, Potato, Cotton, Vegetables, Pulses, Onion, Garlic, Sugarcane, Sunflower, Tobacco, Flowers, and Fruit trees.', bn: 'ধান, পাট, গম, সরিষা, আলু, তুলা, শাকসবজি, ডাল, পেঁয়াজ, রসুন, আখ, সূর্যমুখী, তামাক, ফুল ও ফল গাছ।' },
        },
      ],
    },
    {
      slug: 'solubor-boron',
      categoryId: 'micro-nutrient',
      category: { en: 'Micro-Nutrient', bn: 'মাইক্রো-নিউট্রিয়েন্ট' },
      productName: { en: 'AIRN Solubor Boron (Boron 20%)', bn: 'এয়ারএন সলুবর বোরন (বোরন ২০%)' },
      image: '/images/product-solubor.png', // New product
      specs: [
        {
          title: { en: 'Ingredients', bn: 'উপাদান' },
          details: { en: 'Boron (B): 20%', bn: 'বোরন (Boron): ২০%' },
        },
        {
          title: { en: 'Benefits', bn: 'ব্যবহারের সুবিধা' },
          details: { en: 'Fully water-soluble. Quickly corrects Boron deficiency, prevents flower and fruit drop, and ensures healthy fruit development.', bn: 'সম্পূর্ণরূপে পানিতে দ্রবণীয়। বোরনের অভাব দ্রুত পূরণ করে, ফুল ও ফল ঝরা রোধ করে এবং ফলের সুষম গঠনে সহায়তা করে।' },
        },
        {
          title: { en: 'Crops', bn: 'প্রয়োগ ক্ষেত্র' },
          details: { en: 'All kinds of crops, including vegetables, fruits, and grains.', bn: 'সকল প্রকার ফসল, সবজি, ও ফল গাছে ব্যবহার্য।' },
        },
      ],
    },
    {
      slug: 'zinc-sulphate',
      categoryId: 'micro-nutrient',
      category: { en: 'Micro-Nutrient', bn: 'মাইক্রো-নিউট্রিয়েন্ট' },
      productName: { en: 'AIRN Zinc (Monohydrate)', bn: 'এয়ারএন জিংক (মনোহাইড্রেট)' },
      image: '/images/product-zinc.jpg', // New image
      specs: [
        {
          title: { en: 'Ingredients', bn: 'উপাদান' },
          details: { en: 'Zinc (Zn): 36%', bn: 'জিংক (Zn): ৩৬%' },
        },
        {
          title: { en: 'Benefits', bn: 'ব্যবহারের সুবিধা' },
          details: { en: 'Corrects Zinc deficiency. Essential for enzyme activity, hormone production, and carbohydrate metabolism. Boosts root growth and plant vigor.', bn: 'জিংক-এর অভাব পূরণ করে। এনজাইম কার্যকলাপ, হরমোন উৎপাদন এবং কার্বোহাইড্রেট বিপাকের জন্য অপরিহার্য। মূলের বৃদ্ধি এবং উদ্ভিদের সতেজতা বাড়ায়।' },
        },
        {
          title: { en: 'Crops', bn: 'প্রয়োগ ক্ষেত্র' },
          details: { en: 'Paddy, Wheat, Maize, Pulses, Vegetables, and Fruit trees.', bn: 'ধান, গম, ভুট্টা, ডাল, শাকসবজি এবং ফল গাছ।' },
        },
      ],
    },
    {
      slug: 'gypsum',
      categoryId: 'micro-nutrient',
      category: { en: 'Micro-Nutrient', bn: 'মাইক্রো-নিউট্রিয়েন্ট' },
      productName: { en: 'AIRN Gypsum (Sulphur 17%)', bn: 'এয়ারএন জিপসাম (সালফার ১৭%)' },
      image: '/images/product-gypsum.jpg', // Old image (we'll keep it)
      specs: [
        {
          title: { en: 'Ingredients', bn: 'উপাদান' },
          details: { en: 'Sulphur (S): 17%, Calcium (Ca): 22%', bn: 'সালফার (S): ১৭%, ক্যালসিয়াম (Ca): ২২%' },
        },
        {
          title: { en: 'Benefits', bn: 'ব্যবহারের সুবিধা' },
          details: { en: 'Essential for oilseed crops. Improves soil structure and water retention. Helps in protein and chlorophyll synthesis. Makes soil more porous.', bn: 'তৈলবীজ ফসলের জন্য অপরিহার্য। মাটির গঠন ও পানি ধারণ ক্ষমতা উন্নত করে। প্রোটিন এবং ক্লোরোফিল সংশ্লেষণে সহায়তা করে। মাটিকে আরও ঝুরঝুরে করে।' },
        },
      ],
    },
    {
      slug: 'magnesium-sulphate',
      categoryId: 'micro-nutrient',
      category: { en: 'Micro-Nutrient', bn: 'মাইক্রো-নিউট্রিয়েন্ট' },
      productName: { en: 'AIRN Magnesium Sulphate', bn: 'এয়ারএন ম্যাগনেসিয়াম সালফেট' },
      image: '/images/product-magnesium.jpg', // New product
      specs: [
        {
          title: { en: 'Ingredients', bn: 'উপাদান' },
          details: { en: 'Magnesium (Mg): 9.6%', bn: 'ম্যাগনেসিয়াম (Mg): ৯.৬%' },
        },
        {
          title: { en: 'Benefits', bn: 'ব্যবহারের সুবিধা' },
          details: { en: 'A core component of chlorophyll. Corrects Magnesium deficiency, prevents leaf yellowing (chlorosis), and increases photosynthesis, leading to greener, healthier plants.', bn: 'ক্লোরোফিলের প্রধান উপাদান। ম্যাগনেসিয়ামের অভাব পূরণ করে, পাতার হলুদাভ ভাব (ক্লোরোসিস) দূর করে এবং সালোকসংশ্লেষণ বাড়ায়, যার ফলে গাছ সবুজ ও স্বাস্থ্যকর হয়।' },
        },
      ],
    },
  
    // === CATEGORY: BIO-FUNGICIDE ===
    
    {
      slug: 'trirun',
      categoryId: 'bio-fungicide',
      category: { en: 'Bio-Fungicide', bn: 'বায়ো-ফাঙ্গিসাইড' },
      productName: { en: 'Trirun Bio-Fungicide', bn: 'ট্রাইরুন বায়ো-ফাঙ্গিসাইড' },
      image: '/images/product-trirun.jpeg', // New image
      specs: [
        {
          title: { en: 'Active Ingredient', bn: 'সক্রিয় উপাদান' },
          details: { en: 'Trichoderma Harzianum', bn: 'ট্রাইকোডারমা হারজিয়ানাম' },
        },
        {
          title: { en: 'Benefits', bn: 'ব্যবহারের সুবিধা' },
          details: { en: 'A natural and organic fungicide that protects crops from various soil-borne and seed-borne diseases like root rot, damping-off, and wilt.', bn: 'একটি প্রাকৃতিক ও জৈব ছত্রাকনাশক যা ফসলকে মূল পচা, গোড়া পচা এবং ঢলে পড়া রোগের মতো বিভিন্ন মাটি ও বীজবাহিত রোগ থেকে রক্ষা করে।' },
        },
      ],
    },
  
    // === CATEGORY: ORGANIC FERTILIZER ===
    
    {
      slug: 'jaibo-shar-40kg',
      categoryId: 'organic-fertilizer',
      category: { en: 'Organic Fertilizer', bn: 'জৈব সার' },
      productName: { en: 'AIRN Jaibo Shar (40 KG)', bn: 'এয়ারএন জৈব সার (৪০ কেজি)' },
      image: '/images/product-jaibo-shar-40kg.jpg', // New variant
      specs: [
        {
          title: { en: 'Benefits', bn: 'ব্যবহারের সুবিধা' },
          details: { en: 'Improves soil structure, water retention, and aeration. Provides balanced macro and micro-nutrients. Enhances beneficial microbial activity.', bn: 'মাটির গঠন, পানি ধারণ ক্ষমতা এবং বায়ুচলাচল উন্নত করে। সুষম ম্যাক্রো ও মাইক্রো-নিউট্রিয়েন্ট সরবরাহ করে। মাটিতে উপকারী অণুজীবের কার্যকলাপ বৃদ্ধি করে।' },
        },
        {
          title: { en: 'Application Rate', bn: 'প্রয়োগের মাত্রা' },
          details: { en: 'Apply 100-150 kg per bigha (33 decimals) during final land preparation.', bn: 'শেষ চাষের সময় বিঘা প্রতি (৩৩ শতাংশ) ১০০-১৫০ কেজি প্রয়োগ করুন।' },
        },
      ],
    },
    {
      slug: 'jaibo-shar-10kg',
      categoryId: 'organic-fertilizer',
      category: { en: 'Organic Fertilizer', bn: 'জৈব সার' },
      productName: { en: 'AIRN Jaibo Shar (10 KG)', bn: 'এয়ারএন জৈব সার (১০ কেজি)' },
      image: '/images/product-jaibo-shar-10kg.jpg', // New variant
      specs: [
        {
          title: { en: 'Benefits', bn: 'ব্যবহারের সুবিধা' },
          details: { en: 'Improves soil structure, water retention, and aeration. Provides balanced macro and micro-nutrients. Enhances beneficial microbial activity.', bn: 'মাটির গঠন, পানি ধারণ ক্ষমতা এবং বায়ুচলাচল উন্নত করে। সুষম ম্যাক্রো ও মাইক্রো-নিউট্রিয়েন্ট সরবরাহ করে। মাটিতে উপকারী অণুজীবের কার্যকলাপ বৃদ্ধি করে।' },
        },
        {
          title: { en: 'Note', bn: 'দ্রষ্টব্য' },
          details: { en: 'Also available in 5 KG and 40 KG sizes.', bn: '৫ কেজি এবং ৪০ কেজি সাইজেও পাওয়া যায়।' },
        },
      ],
    },
    {
      slug: 'jaibo-shar-5kg',
      categoryId: 'organic-fertilizer',
      category: { en: 'Organic Fertilizer', bn: 'জৈব সার' },
      productName: { en: 'AIRN Jaibo Shar (5 KG)', bn: 'এয়ারএন জৈব সার (৫ কেজি)' },
      image: '/images/product-jaibo-shar-5kg.jpg', // New variant
      specs: [
        {
          title: { en: 'Benefits', bn: 'ব্যবহারের সুবিধা' },
          details: { en: 'Improves soil structure, water retention, and aeration. Provides balanced macro and micro-nutrients. Enhances beneficial microbial activity.', bn: 'মাটির গঠন, পানি ধারণ ক্ষমতা এবং বায়ুচলাচল উন্নত করে। সুষম ম্যাক্রো ও মাইক্রো-নিউট্রিয়েন্ট সরবরাহ করে। মাটিতে উপকারী অণুজীবের কার্যকলাপ বৃদ্ধি করে।' },
        },
        {
          title: { en: 'Note', bn: 'দ্রষ্টব্য' },
          details: { en: 'Also available in 10 KG and 40 KG sizes.', bn: '১০ কেজি এবং ৪০ কেজি সাইজেও পাওয়া যায়।' },
        },
      ],
    },
  ];
  
  export function getProductBySlug(slug: string) {
    return productDb.find((product) => product.slug === slug);
  }
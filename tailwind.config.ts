// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // --- THIS IS THE NEW CODE ---
      fontFamily: {
        // We tell Tailwind's 'sans' font to use Inter first,
        // then fall back to Hind Siliguri for Bangla.
        sans: ['var(--font-inter)', 'var(--font-hind-siliguri)', 'sans-serif'],
      },
      // --- END OF NEW CODE ---
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
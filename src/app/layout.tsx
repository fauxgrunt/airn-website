// src/app/layout.tsx
import './globals.css';
import { Inter, Hind_Siliguri } from 'next/font/google';

// 1. Set up the fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
});

export const metadata = {
  title: 'AIRN Agro',
  description: 'Reliable Agrochemical Solutions for Bangladesh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. Apply font variables to the <html> tag
    <html lang="en" className={`${inter.variable} ${hindSiliguri.variable}`}>
      {/* 3. Apply the off-white background and default font */}
      <body className="bg-gray-50 font-sans">
        {children}
      </body>
    </html>
  );
}
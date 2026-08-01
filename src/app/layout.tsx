import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Purnam Counselling | Thernika R (Psychologist & Perinatal Counsellor)',
  description:
    'Where Compassionate Service Meets Transformative Guidance. Professional psychological counselling, student-parent mediation, perinatal mental health, and institutional workshops operated by Thernika R in Coimbatore, Tamil Nadu.',
  keywords: [
    'Purnam Counselling',
    'Thernika R',
    'Psychologist Coimbatore',
    'Perinatal Mental Health',
    'Student Counsellor',
    'Antenatal Counselling',
    'Cal.id Thernika',
    'Parent Counselling',
  ],
  authors: [{ name: 'Thernika R' }],
  icons: {
    icon: [
      { url: '/favicon_512.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon_512.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Purnam Counselling | Thernika R',
    description:
      'Professional psychological counselling and institutional workshops tailored for students, mothers, and institutions.',
    url: 'https://purnamcounselling.com',
    siteName: 'Purnam Counselling',
    images: [
      {
        url: '/favicon_512.png',
        width: 512,
        height: 512,
        alt: 'Purnam Counselling Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon_512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="font-sans antialiased bg-[#fcfbfa] dark:bg-[#0d1a15] text-[#1c2826] dark:text-[#f3f4f6] transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import JsonLd from '@/components/JsonLd';

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
  metadataBase: new URL('https://rthernika.github.io'),
  alternates: {
    canonical: '/',
  },
  title: 'Purnam Counselling | Thernika R (Psychologist & Perinatal Counsellor)',
  description:
    'Where Compassionate Service Meets Transformative Guidance. Professional psychological counselling, student-parent mediation, perinatal & postnatal mental health support, and institutional workshops by Thernika R in Coimbatore, Tamil Nadu.',
  keywords: [
    'Purnam Counselling',
    'Thernika R',
    'thernika.purnam',
    'Psychologist Coimbatore',
    'Best Psychologist Coimbatore',
    'Counsellor in Coimbatore',
    'Mental Health Professional Coimbatore',
    'Psychological Counselling Tamil Nadu',
    'Perinatal Mental Health Counsellor',
    'Certified Perinatal Counsellor Coimbatore',
    'Antenatal Mental Health Support',
    'Postnatal Depression Counsellor',
    'Pregnancy Counselling Coimbatore',
    'Labor Birthing Emotional Support',
    'Student Parent Counsellor Coimbatore',
    'Student Teacher Conflict Mediation',
    'Teenager Counselling Coimbatore',
    'Academic Stress Counselling',
    'Tamil Speaking Psychologist',
    'English Speaking Psychologist Coimbatore',
    'German Speaking Counsellor India',
    'Online Psychological Counselling India',
    'Offline Counselling Coimbatore',
    'Institutional Mental Health Workshops',
    'Cal.id Thernika',
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
    title: 'Purnam Counselling | Thernika R (Psychologist & Perinatal Counsellor)',
    description:
      'Certified psychological counselling, perinatal & postnatal mental health, student-parent mediation, and institutional workshops by Thernika R in Coimbatore.',
    url: 'https://rthernika.github.io',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Purnam Counselling | Thernika R (Psychologist & Perinatal Counsellor)',
    description:
      'Professional psychological counselling, maternal mental health, student counselling, and institutional workshops in Coimbatore.',
    images: ['/favicon_512.png'],
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
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.0168;76.9558" />
        <meta name="ICBM" content="11.0168, 76.9558" />
        <JsonLd />
      </head>
      <body className="font-sans antialiased bg-[#fcfbfa] dark:bg-[#0d1a15] text-[#1c2826] dark:text-[#f3f4f6] transition-colors duration-300">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SNJ1BR55KK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SNJ1BR55KK');
          `}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}


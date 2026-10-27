import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const SITE_URL = 'https://elev8fitnessclub.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Elev8 Fitness Club | Premium Gym in Edakkara, Nilambur',
    template: '%s | Elev8 Fitness Club'
  },
  description: 'Elev8 Fitness Club is the only premium unisex gym in Edakkara, near Nilambur, Malappuram. Personal training, cardio, strength, CrossFit, diet plans, steam bath and ladies special hours.',
  keywords: [
    'Elev8', 'Elev8 Fitness Club', 'Elev8 gym', 'gym in Edakkara', 'gym in Nilambur', 'premium gym in Edakkara',
    'fitness center Edakkara', 'gym near me', 'ladies gym Edakkara', 'unisex gym Nilambur', 'gym in Malappuram',
    'personal training', 'crossfit', 'strength training', 'cardio training', 'steam bath',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Elev8 Fitness Club | Premium Gym in Edakkara, Nilambur',
    description: 'The only premium unisex gym in Edakkara, near Nilambur. Personal training, CrossFit, strength, cardio and steam bath.',
    url: SITE_URL,
    siteName: 'Elev8 Fitness Club',
    images: [
      {
        url: '/image/logo/logo.png',
        width: 800,
        height: 600,
        alt: 'Elev8 Fitness Club Logo',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elev8 Fitness Club | Premium Gym in Edakkara, Nilambur',
    description: 'The only premium unisex gym in Edakkara, near Nilambur. Personal training, CrossFit, strength, cardio and steam bath.',
    images: ['/image/logo/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  '@id': `${SITE_URL}/#gym`,
  name: 'Elev8 Fitness Club',
  alternateName: ['Elev8', 'Elev8 Gym', 'Elev8 Fitness'],
  description: 'The only premium unisex gym in Edakkara, near Nilambur, Malappuram, Kerala.',
  url: SITE_URL,
  logo: `${SITE_URL}/image/logo/logo.png`,
  image: `${SITE_URL}/image/home/hero1.png`,
  telephone: '+91-7034201452',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Chicking, Munda PO',
    addressLocality: 'Edakkara',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.3627071,
    longitude: 76.3208911,
  },
  areaServed: ['Edakkara', 'Nilambur', 'Munda', 'Malappuram'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '05:30',
      closes: '21:30',
    },
  ],
  sameAs: ['https://www.instagram.com/elev8_fitnessclub/'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/image/logo/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/image/logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/logo/favicon-16x16.png" />
        <link rel="manifest" href="/image/logo/site.webmanifest" />

        {/* CSS links */}
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="/css/animate.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/odometer-theme-default.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/jquery-ui.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/styles.css" />
        <link rel="stylesheet" type="text/css" href="/icons/icomoon/style.css" />
        <link rel="stylesheet" href="/font/fonts.css" />
      </head>
      <body className="" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <main>{children}</main>

        {/* Javascript */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/jquery-validate.js"></Script>
        <Script src="/js/jquery-ui.min.js"></Script>
        <Script src="/js/jquery.nice-select.min.js"></Script>
        <Script src="/js/magnific-popup.min.js"></Script>
        <Script src="/js/odometer.min.js"></Script>
        <Script src="/js/swiper-bundle.min.js"></Script>
        <Script src="/js/simpleParallaxVanilla.js"></Script>
        
        <Script src="/js/gsap.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/ScrollTrigger.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/Splitetext.js" strategy="beforeInteractive"></Script>
                <Script src="/js/wow.min.js" strategy="beforeInteractive"></Script>

        <Script src="/js/gsap-animation.js"></Script>
        <Script src="/js/carousel.js"></Script>
        <Script src="/js/main.js"></Script>
      </body>
    </html>
  );
}

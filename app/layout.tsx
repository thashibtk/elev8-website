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


export const metadata: Metadata = {
  title: {
    default: 'Elev8 Fitness Club | The Premium Fitness Center',
    template: '%s | Elev8 Fitness Club'
  },
  description: 'The only premium fitness center in the Edakkara, built for real, world-class results. Join Elev8 for Personal Training, CrossFit, and more.',
  keywords: ['gym', 'fitness club', 'personal training', 'crossfit', 'workout', 'strength training', 'elev8 fitness'],
  openGraph: {
    title: 'Elev8 Fitness Club',
    description: 'The only premium fitness center in the Edakkara, built for real, world-class results.',
    url: 'https://elev8fitness.com',
    siteName: 'Elev8 Fitness Club',
    images: [
      {
        url: '/image/logo/logo.png',
        width: 800,
        height: 600,
        alt: 'Elev8 Fitness Club Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elev8 Fitness Club',
    description: 'The only premium fitness center in the Edakkara, built for real, world-class results.',
    images: ['/image/logo/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Elev8 Fitness Club</title>
        <meta name="author" content="themesflat.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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

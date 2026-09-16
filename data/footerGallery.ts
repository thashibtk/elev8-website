export interface FooterGalleryItem {
  id: string;
  image: string;
  alt: string;
  href?: string;
}

export const footerGalleryItems: FooterGalleryItem[] = [
  {
    id: '1',
    image: '/image/portfolio/1.webp',
    alt: 'Elev8 Gym equipment & workout area',
    href: '/',
  },
  {
    id: '2',
    image: '/image/portfolio/2.webp',
    alt: 'Personal training & cardio setup',
    href: '/',
  },
  {
    id: '3',
    image: '/image/portfolio/3.webp',
    alt: 'Strength training equipment',
    href: '/',
  },
  {
    id: '4',
    image: '/image/portfolio/4.webp',
    alt: 'CrossFit training zone',
    href: '/',
  },
  {
    id: '5',
    image: '/image/portfolio/5.webp',
    alt: 'Workout session at Elev8',
    href: '/',
  },
  {
    id: '6',
    image: '/image/portfolio/6.webp',
    alt: 'Elev8 Fitness Club ambiance',
    href: '/',
  },
];

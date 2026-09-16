export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Elev8 has the best equipment in the area, and the trainers actually care about your progress. Highly recommend.',
    author: 'Samil',
    rating: 5,
  },
  {
    id: '2',
    quote: 'As a woman, I finally feel comfortable working out. The ladies special hours make all the difference.',
    author: 'Fathima Nuha',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The CrossFit sessions push me every time, and the steam bath after is the perfect way to finish.',
    author: 'Jibin Josy',
    rating: 5,
  },
  {
    id: '4',
    quote: 'The personal training program completely transformed my daily routine. Tailored nutrition and constant motivation!',
    author: 'Jimshad',
    rating: 5,
  },
  {
    id: '5',
    quote: 'I had never stepped into a gym before, but the friendly atmosphere and helpful trainers at Elev8 made it easy to start.',
    author: 'Reshma',
    rating: 5,
  },
];

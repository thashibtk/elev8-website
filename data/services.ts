export interface Service {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  detailImage: string;
  description: string[];
  features: string[];
}

export const services: Service[] = [
  {
    slug: 'personal-training',
    number: '01',
    title: 'Personal Training',
    tagline: 'Exclusive personal training with expert guidance & diet plans.',
    detailImage: "/image/services/personal.webp",
    description: [
      'Our Personal Training programs pair you with an experienced, certified trainer for one-on-one guidance built around your specific goals — whether that\'s building muscle, losing weight, or improving overall fitness.',
      'Every plan comes with a customized diet component, so your training and nutrition work together instead of pulling in different directions.',
    ],
    features: [
      'One-on-One Expert Guidance',
      'Customized Diet Plans',
      'Imported, High-Quality Equipment',
      'Safe, Women-Friendly Environment',
    ],
  },
  {
    slug: 'cardio-training',
    number: '02',
    title: 'Cardio Training',
    tagline: 'Dedicated setups designed to elevate cardiovascular health and endurance.',
    detailImage: "/image/services/cardio.webp",
    description: [
      'Elev8\'s cardio section is built around imported, high-quality machines designed to elevate cardiovascular health and endurance.',
      'Whether you\'re warming up before a strength session or focused purely on heart health, our cardio setups give you a dependable, well-maintained space to work in.',
    ],
    features: [
      'Imported Cardio Machines',
      'Endurance-Focused Setups',
      'Certified Trainer Support',
      'Mon–Sat, 5:30 AM – 9:30 PM',
    ],
  },
  {
    slug: 'strength-training',
    number: '03',
    title: 'Strength Training',
    tagline: 'Premium weight training gear and expert supervision to build muscle and raw power.',
    detailImage: "/image/services/strength.webp",
    description: [
      'Our Strength Training setup features premium weight training gear and expert supervision, giving you the tools and guidance to build muscle and develop raw power safely.',
      'Experienced trainers are on hand to help with form and progression, whether you\'re lifting for the first time or chasing a serious personal best.',
    ],
    features: [
      'Premium Weight Training Gear',
      'Expert Trainer Supervision',
      'Imported, High-Quality Equipment',
      'Safe, Supervised Environment',
    ],
  },
  {
    slug: 'crossfit-workouts',
    number: '04',
    title: 'CrossFit Workouts',
    tagline: 'High-intensity functional movement programs to improve conditioning and agility.',
    detailImage: "/image/services/crossfit.webp",
    description: [
      'Elev8\'s CrossFit workouts are high-intensity functional movement programs aimed at improving your overall conditioning and agility.',
      'Sessions are led by experienced, certified trainers who keep the intensity high while keeping your technique safe.',
    ],
    features: [
      'High-Intensity Functional Training',
      'Overall Conditioning & Agility',
      'Experienced, Certified Trainers',
      'Unisex, Women-Friendly Sessions',
    ],
  },
  {
    slug: 'diet-weight-control',
    number: '05',
    title: 'Diet & Weight Control',
    tagline: 'Customized guidance and nutritional structuring to manage body composition effectively.',
    detailImage: "/image/services/diet.webp",
    description: [
      'Training is only half the equation — our Diet & Weight Control guidance gives you customized nutritional structuring to manage your body composition effectively.',
      'This runs alongside your training plan, so your trainer can help keep both your workouts and your diet pointed at the same goal.',
    ],
    features: [
      'Customized Nutritional Guidance',
      'Body Composition Management',
      'Paired with Your Training Plan',
      'Ongoing Trainer Support',
    ],
  },
  {
    slug: 'steam-bath',
    number: '06',
    title: 'Steam Bath',
    tagline: 'Post-workout recovery amenities to help soothe muscles and detoxify after training.',
    detailImage: "/image/services/steambath.webp",
    description: [
      'After an intense training session, our Steam Bath facility gives you a place to recover — helping soothe tired muscles and detoxify before you head out.',
      'It\'s a small addition that makes a real difference to how you feel the next day.',
    ],
    features: [
      'Post-Workout Recovery',
      'Muscle Soothing',
      'Available On-Site',
      'Part of the Elev8 Membership Experience',
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
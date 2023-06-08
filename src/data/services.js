import clipping_path_medium from '../assets/clipping_path_sample_1.jpg';
import clipping_path_basic from '../assets/clipping_path_sample_2.png';
const services = [
  {
    name: 'Clipping Path Service',
    difficulty: {
      basic: {
        thumbnail: clipping_path_basic,
        pricing: [
          { title: '6 hours - $1.50 USD', price: 1.5 },
          { title: '12 hours - $0.39 USD', price: 0.39 },
          { title: '24 hours - $0.29 USD', price: 0.29 },
          { title: '48 hours - $0.25 USD', price: 0.25 },
          { title: '72 hours - $0.23USD', price: 0.23 },
          { title: 'This Week (96+ Hours) - $0.20 USD', price: 0.2 },
        ],
      },
      medium: {
        thumbnail: clipping_path_medium,
        pricing: [
          { title: '6 hours - $2.50 USD', price: 2.5 },
          { title: '12 hours - $0.39 USD', price: 0.39 },
          { title: '24 hours - $0.29 USD', price: 0.29 },
          { title: '48 hours - $0.25 USD', price: 0.25 },
          { title: '72 hours - $0.23USD', price: 0.23 },
          { title: 'This Week (96+ Hours) - $0.20 USD', price: 0.2 },
        ],
      },
      complicated: {
        thumbnail: clipping_path_medium,
        pricing: [
          { title: '6 hours - $3.50 USD', price: 3.5 },
          { title: '12 hours - $0.39 USD', price: 0.39 },
          { title: '24 hours - $0.29 USD', price: 0.29 },
          { title: '48 hours - $0.25 USD', price: 0.25 },
          { title: '72 hours - $0.23USD', price: 0.23 },
          { title: 'This Week (96+ Hours) - $0.20 USD', price: 0.2 },
        ],
      },
    },
  },
  {
    name: 'Multi Clipping Path',
  },
];

export default services;

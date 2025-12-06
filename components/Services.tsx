import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Crystal Bowl Healing',
    description: 'Immerse yourself in the pure, resonant tones of quartz crystal bowls. These frequencies align with the chakras to clear energetic blockages.',
    duration: '60 Mins',
    price: 120,
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2672&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Gong Bath Ceremony',
    description: 'A powerful sonic journey using a symphonic gong. The complex overtones induce a theta state, promoting deep cellular regeneration.',
    duration: '75 Mins',
    price: 150,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Private Vibrational Therapy',
    description: 'A 1:1 session tailored to your specific emotional and physical needs, utilizing tuning forks and singing bowls placed on the body.',
    duration: '90 Mins',
    price: 200,
    image: 'https://images.unsplash.com/photo-1600334089648-b1d9759af96d?q=80&w=2670&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#F3F0EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
           <span className="uppercase tracking-widest text-xs font-bold text-stone-500 mb-4 block">Offerings</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917]">Holistic Sound Journeys</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/4] mb-6 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-2xl text-[#1c1917]">{service.title}</h3>
                <span className="text-stone-500 font-serif italic">${service.price}</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center text-xs tracking-widest uppercase text-stone-400">
                {service.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';

const Founder: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <span className="uppercase tracking-widest text-xs font-bold text-stone-500 mb-4 block">The Founder</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] mb-8">Sonia Razdan</h2>
          <p className="text-stone-600 leading-relaxed text-lg font-light mb-6">
            Sonia is a certified sound healer, Reiki Master, and meditation guide dedicated to helping others rediscover their inner silence. Her journey began in the foothills of the Himalayas, where she first experienced the transformative power of vibrational medicine.
          </p>
          <p className="text-stone-600 leading-relaxed text-lg font-light mb-8">
            With over a decade of practice, Sonia weaves ancient wisdom with modern acoustics to create safe containers for emotional release and deep rest. She believes that when we tune ourselves, we tune the world.
          </p>
           <button className="bg-[#1c1917] text-white px-8 py-4 text-sm tracking-widest hover:bg-stone-700 transition-colors">
            Read Full Bio
          </button>
        </div>
        <div className="order-1 md:order-2 relative">
             <div className="aspect-[3/4] bg-stone-200">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" 
                  alt="Sonia Razdan Portrait" 
                  className="w-full h-full object-cover grayscale-[10%]"
                />
             </div>
             {/* Decorative graphic */}
             <div className="absolute -bottom-8 -left-8 w-full h-full border border-stone-200 -z-10 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

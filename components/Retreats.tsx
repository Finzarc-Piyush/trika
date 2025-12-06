
import React from 'react';

interface RetreatsProps {
  openBooking: () => void;
}

const Retreats: React.FC<RetreatsProps> = ({ openBooking }) => {
  return (
    <section id="retreat" className="py-24 bg-[#EBE7E0]/30 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EBE7E0]/20 -skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="mb-16 text-center md:text-left">
           <span className="uppercase tracking-widest text-xs font-bold text-stone-500 mb-4 block">Immersive Experiences</span>
           <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917]">Upcoming Retreats</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Retreat Image */}
          <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1545623049-9c5ae9d2906b?q=80&w=2666&auto=format&fit=crop" 
              alt="Desert Retreat Landscape" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-widest font-bold text-[#1c1917]">
              Oct 12-15, 2024
            </div>
          </div>

          {/* Retreat Info */}
          <div className="lg:pl-8">
            <h3 className="font-serif text-3xl md:text-4xl text-[#1c1917] mb-4">Sacred Silence: Joshua Tree</h3>
            <p className="text-stone-500 italic mb-8 font-serif">A 4-day immersion into sound, silence, and the desert soul.</p>
            
            <p className="text-stone-600 leading-relaxed text-lg font-light mb-6">
              Join Sonia Razdan for a transformative journey in the high desert. We will disconnect from the digital world to reconnect with our inner rhythm.
            </p>
            
            <ul className="space-y-3 mb-8 text-stone-600 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#A69C8E] text-xl">✦</span>
                <span>Daily Sunrise & Sunset Sound Baths</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A69C8E] text-xl">✦</span>
                <span>Cacao Ceremony & Ecstatic Dance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A69C8E] text-xl">✦</span>
                <span>Luxury Yurt Accommodation</span>
              </li>
               <li className="flex items-start gap-3">
                <span className="text-[#A69C8E] text-xl">✦</span>
                <span>Organic Plant-Based Meals</span>
              </li>
            </ul>

            <div className="flex items-center gap-8">
              <div>
                <span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Price</span>
                <span className="font-serif text-2xl text-[#1c1917]">$1,200</span>
              </div>
              <button 
                onClick={openBooking}
                className="bg-[#1c1917] text-white px-8 py-4 text-sm tracking-widest hover:bg-stone-700 transition-colors"
              >
                Reserve Spot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retreats;

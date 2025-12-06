import React from 'react';

interface StatsProps {
  openBooking: () => void;
}

const StatsSection: React.FC<StatsProps> = ({ openBooking }) => {
  return (
    <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative h-[500px] w-full bg-stone-100 overflow-hidden">
           <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2670&auto=format&fit=crop" 
              alt="Sound healing instruments setup" 
              className="w-full h-full object-cover object-center grayscale-[10%]"
            />
        </div>

        {/* Right: Stats */}
        <div className="flex flex-col justify-center space-y-16 lg:pl-12">
          
          {/* Stat 1 */}
          <div>
            <span className="font-serif text-6xl md:text-7xl text-[#A69C8E]">936hz</span>
            <p className="text-stone-500 mt-2 text-lg tracking-wide">Healing frequency for pineal gland activation</p>
          </div>

          {/* Stat 2 */}
          <div>
            <span className="font-serif text-6xl md:text-7xl text-[#A69C8E]">1,080+</span>
            <p className="text-stone-500 mt-2 text-lg tracking-wide">Sound baths facilitated globally</p>
          </div>

          <div className="pt-4">
             <button 
              onClick={openBooking}
              className="text-[#2A2624] font-medium text-lg border-b border-[#2A2624] pb-1 hover:text-stone-600 hover:border-stone-400 transition-all"
            >
              Book A Session
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
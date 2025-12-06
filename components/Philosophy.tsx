import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917] leading-tight">
            Relax, recalibrate, and find inner peace again
          </h2>
        </div>
        <div className="pt-2 md:pl-10">
          <p className="text-stone-600 leading-relaxed text-lg font-light">
            Everything in the universe is in a state of vibration. Sound healing synchronizes our brain waves to achieve profound states of relaxation, helping to restore the normal vibratory frequencies of our cells and bringing the body, mind, and soul into alignment.
          </p>
          <p className="text-stone-600 leading-relaxed text-lg font-light mt-4">
             Under the guidance of Sonia Razdan, we explore the ancient modalities of sound to clear energetic blockages and foster a state of deep harmony.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
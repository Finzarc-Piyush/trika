import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm">
      <div className="bg-[#FDFBF9] w-full max-w-lg shadow-2xl relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-stone-900"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="font-serif text-3xl text-[#1c1917] mb-2">Begin Your Journey</h2>
          <p className="text-stone-500 mb-8 font-light">Schedule a session with Sonia Razdan.</p>

          {step === 1 && (
            <div className="space-y-4">
              <button 
                onClick={() => setStep(2)}
                className="w-full text-left p-4 border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all group"
              >
                <div className="flex justify-between items-center">
                   <span className="font-serif text-lg text-stone-800">Private Session</span>
                   <span className="text-stone-400 group-hover:text-stone-600">$120</span>
                </div>
                <p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">60 Minutes</p>
              </button>
               <button 
                onClick={() => setStep(2)}
                className="w-full text-left p-4 border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all group"
              >
                <div className="flex justify-between items-center">
                   <span className="font-serif text-lg text-stone-800">Couple's Sound Bath</span>
                   <span className="text-stone-400 group-hover:text-stone-600">$200</span>
                </div>
                <p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">90 Minutes</p>
              </button>
               <button 
                onClick={() => setStep(2)}
                className="w-full text-left p-4 border border-stone-200 hover:border-stone-400 hover:bg-stone-50 transition-all group"
              >
                <div className="flex justify-between items-center">
                   <span className="font-serif text-lg text-stone-800">Online Consultation</span>
                   <span className="text-stone-400 group-hover:text-stone-600">$80</span>
                </div>
                <p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">45 Minutes</p>
              </button>
            </div>
          )}

          {step === 2 && (
             <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                <div>
                   <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Name</label>
                   <input type="text" required className="w-full bg-[#F3F0EB] border-none p-3 text-stone-900 focus:ring-1 focus:ring-stone-400 placeholder-stone-400/50" placeholder="Jane Doe" />
                </div>
                <div>
                   <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email</label>
                   <input type="email" required className="w-full bg-[#F3F0EB] border-none p-3 text-stone-900 focus:ring-1 focus:ring-stone-400 placeholder-stone-400/50" placeholder="jane@example.com" />
                </div>
                 <div>
                   <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Preferred Date</label>
                   <input type="date" required className="w-full bg-[#F3F0EB] border-none p-3 text-stone-900 focus:ring-1 focus:ring-stone-400" />
                </div>
                <button type="submit" className="w-full bg-[#1c1917] text-white py-3 mt-4 tracking-widest hover:bg-stone-800">
                   Request Booking
                </button>
                <button type="button" onClick={() => setStep(1)} className="w-full text-stone-400 text-xs py-2 hover:text-stone-600">
                   Back
                </button>
             </form>
          )}

           {step === 3 && (
             <div className="text-center py-8">
               <h3 className="font-serif text-2xl mb-4">Thank you</h3>
               <p className="text-stone-600 font-light mb-6">Your request has been received. Sonia or her team will reach out to you within 24 hours to confirm your appointment.</p>
               <button onClick={onClose} className="border-b border-stone-800 pb-1 text-stone-800 hover:text-stone-500">
                 Return to Home
               </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
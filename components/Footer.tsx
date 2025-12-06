import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A2624] text-[#EBE7E0] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <span className="font-serif text-3xl font-bold tracking-widest uppercase">AJNA</span>
        </div>
        
        <div>
           <h4 className="font-serif text-lg mb-6">Explore</h4>
           <ul className="space-y-3 font-light text-sm text-stone-400">
             <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Retreats</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
           </ul>
        </div>

        <div>
           <h4 className="font-serif text-lg mb-6">Connect</h4>
           <ul className="space-y-3 font-light text-sm text-stone-400">
             <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Spotify</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
           </ul>
        </div>

        <div>
           <h4 className="font-serif text-lg mb-6">Visit</h4>
           <address className="not-italic font-light text-sm text-stone-400 space-y-2">
             <p>123 Harmony Lane</p>
             <p>Sedona, AZ 86336</p>
             <p>hello@ajnahealing.com</p>
           </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-700 flex flex-col md:flex-row justify-between text-xs text-stone-500 font-light">
        <p>&copy; {new Date().getFullYear()} AJNA Sound Healing. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-stone-300">Privacy Policy</a>
          <a href="#" className="hover:text-stone-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
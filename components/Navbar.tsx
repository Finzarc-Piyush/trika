
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  isScrolled: boolean;
  openBooking: () => void;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Sound Healing Services', href: '#services' },
  { label: 'Retreat', href: '#retreat' },
  { label: 'Upcoming Events', href: '#events' },
];

const Navbar: React.FC<NavbarProps> = ({ isScrolled, openBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FDFBF9]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <a href="#home" className="font-serif text-2xl tracking-widest font-bold text-ajna-dark uppercase">
            AJNA
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={openBooking}
            className="bg-[#3D3336] text-white px-5 py-2 text-sm tracking-widest hover:bg-stone-800 transition-colors flex items-center gap-2"
          >
            $0.00
            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">0</span>
            <ShoppingCart size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 text-stone-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#FDFBF9] z-40 flex flex-col justify-center items-center transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-stone-800 hover:text-stone-500"
            >
              {item.label}
            </a>
          ))}
          <button 
             onClick={() => {
                openBooking();
                setIsMobileMenuOpen(false);
             }}
             className="mt-8 text-lg underline decoration-1 underline-offset-4"
          >
            Book A Session
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

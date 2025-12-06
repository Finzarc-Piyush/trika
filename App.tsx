
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import StatsSection from './components/StatsSection';
import Services from './components/Services';
import Founder from './components/Founder';
import Retreats from './components/Retreats';
import Events from './components/Events';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen font-sans text-stone-800 antialiased overflow-x-hidden selection:bg-stone-200">
      <Navbar isScrolled={isScrolled} openBooking={openBooking} />
      
      <main>
        <Hero openBooking={openBooking} />
        <Philosophy />
        <Founder />
        <StatsSection openBooking={openBooking} />
        <Services />
        <Retreats openBooking={openBooking} />
        <Events openBooking={openBooking} />
      </main>

      <Footer />
      
      {isBookingOpen && <BookingModal onClose={closeBooking} />}
    </div>
  );
};

export default App;

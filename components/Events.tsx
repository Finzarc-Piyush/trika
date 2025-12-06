
import React from 'react';

interface EventsProps {
  openBooking: () => void;
}

const events = [
  {
    id: 1,
    date: 'Sep 24',
    title: 'New Moon Gong Bath',
    time: '7:00 PM - 8:30 PM',
    location: 'The Sanctuary, Sedona',
    price: '$45'
  },
  {
    id: 2,
    date: 'Oct 02',
    title: 'Chakra Balancing Workshop',
    time: '10:00 AM - 1:00 PM',
    location: 'AJNA Studio',
    price: '$80'
  },
  {
    id: 3,
    date: 'Oct 08',
    title: 'Full Moon Sound Circle',
    time: '6:30 PM - 8:00 PM',
    location: 'Red Rock State Park',
    price: '$55'
  }
];

const Events: React.FC<EventsProps> = ({ openBooking }) => {
  return (
    <section id="events" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-200 pb-8">
        <div>
           <span className="uppercase tracking-widest text-xs font-bold text-stone-500 mb-4 block">Gatherings</span>
           <h2 className="font-serif text-4xl md:text-5xl text-[#1c1917]">Upcoming Events</h2>
        </div>
        <a href="#" className="hidden md:block text-stone-500 hover:text-[#1c1917] transition-colors border-b border-transparent hover:border-stone-800 text-sm tracking-wide pb-1 mt-4 md:mt-0">
          View Full Calendar
        </a>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="group flex flex-col md:flex-row items-center justify-between bg-white border border-stone-100 hover:border-stone-200 p-6 md:p-8 hover:shadow-lg transition-all duration-300 rounded-sm">
            
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
              <div className="flex flex-col items-center justify-center w-16 h-16 bg-[#F3F0EB] text-[#1c1917] font-serif mr-6 flex-shrink-0">
                 <span className="text-xs uppercase tracking-wider">{event.date.split(' ')[0]}</span>
                 <span className="text-xl font-bold">{event.date.split(' ')[1]}</span>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#1c1917] mb-1 group-hover:text-stone-600 transition-colors">{event.title}</h3>
                <div className="text-stone-500 text-sm font-light flex items-center gap-4">
                   <span>{event.time}</span>
                   <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                   <span>{event.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full md:w-auto gap-8 border-t md:border-t-0 border-stone-100 pt-4 md:pt-0">
               <span className="font-serif text-xl text-[#1c1917]">{event.price}</span>
               <button 
                onClick={openBooking}
                className="border border-[#1c1917] text-[#1c1917] px-6 py-2 text-xs uppercase tracking-widest hover:bg-[#1c1917] hover:text-white transition-all"
               >
                 Book
               </button>
            </div>

          </div>
        ))}
      </div>
      
       <div className="mt-8 text-center md:hidden">
         <a href="#" className="text-stone-500 hover:text-[#1c1917] transition-colors border-b border-stone-300 pb-1 text-sm tracking-wide">
          View Full Calendar
        </a>
      </div>
    </section>
  );
};

export default Events;

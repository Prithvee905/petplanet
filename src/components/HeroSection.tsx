import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Doodle } from './Doodle';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-[#f3f0ec] overflow-hidden pt-24 pb-12 lg:py-0" id="home">
      {/* Background with puppy image blending in */}
      <motion.div 
        className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[50%] z-0 overflow-hidden"
        initial={{ scale: 1.02, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Responsive gradient fading image into beige background */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#f3f0ec] via-[#f3f0ec]/30 to-transparent z-10" />
        
        {/* Puppy photo on matching beige studio background */}
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Happy puppy"
          className="w-full h-full object-cover object-[center_bottom] lg:object-center opacity-95"
        />
      </motion.div>

      {/* Decorative Doodles */}
      <Doodle type="paw" className="top-32 left-10 w-16 h-16 rotate-[-15deg] z-20 text-orange/30" />
      <Doodle type="sparkle" className="top-40 left-[45%] w-12 h-12 z-20 text-orange/40" />
      <Doodle type="dog" className="bottom-20 right-20 w-24 h-24 rotate-12 z-20 text-orange/15 hidden lg:block" />
      <Doodle type="bone" className="top-[65%] left-[8%] w-16 h-16 rotate-[25deg] z-20 text-orange/20" />
      <Doodle type="paw" className="bottom-[10%] left-[45%] w-14 h-14 rotate-[-30deg] z-20 text-orange/30 lg:block hidden" />
      <Doodle type="sparkle" className="top-24 right-[55%] w-10 h-10 z-20 text-orange/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="max-w-2xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-black mb-6 leading-[1.1] tracking-tight">
              Advanced care for your <span className="text-orange relative inline-block">
                best friend.
                <Doodle type="arrow" className="-bottom-8 right-0 w-12 h-12 -rotate-12 absolute text-orange/80" />
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A state-of-the-art facility providing comprehensive veterinary care and advanced diagnostics for your pet in Ramakrishnapuram.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 relative z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onBookClick}
              className="bg-orange hover:bg-orange-hover text-white px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-2 group transition-all"
            >
              <Calendar size={20} className="group-hover:scale-110 transition-transform" />
              Book Appointment
            </button>
            <a 
              href="#services"
              className="border border-black/20 hover:border-black/40 text-black px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-2 transition-all"
            >
              Our Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Doodle } from './Doodle';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black overflow-hidden pt-24 pb-8 lg:flex-row lg:items-center lg:py-0" id="home">
      {/* Background Image Container */}
      <motion.div 
        className="absolute inset-0 lg:left-auto lg:right-0 w-full lg:w-[55%] h-full z-0 overflow-hidden"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Dark gradient overlay on top and bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black lg:bg-gradient-to-r lg:from-black lg:via-black/50 lg:to-transparent z-10" />
        
        {/* Puppy Photo - Fitted in the middle window on mobile */}
        <img
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Happy, healthy dog"
          className="w-full h-full object-cover object-[center_62%] scale-[1.25] lg:object-[center_30%] lg:scale-[1.5] lg:origin-[center_30%] opacity-90"
        />
      </motion.div>

      {/* Decorative Doodles */}
      <Doodle type="paw" className="top-28 left-6 w-14 h-14 rotate-[-15deg] z-20 text-orange/30" />
      <Doodle type="sparkle" className="top-36 left-[45%] w-10 h-10 z-20 text-orange/40" />
      <Doodle type="dog" className="bottom-20 right-20 w-24 h-24 rotate-12 z-20 text-white/20 hidden lg:block" />
      <Doodle type="bone" className="top-[60%] left-[8%] w-14 h-14 rotate-[25deg] z-20 text-orange/20" />
      <Doodle type="sparkle" className="top-20 right-[10%] w-10 h-10 z-20 text-orange/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full flex-grow flex flex-col justify-between lg:justify-center">
        {/* Top Text Block */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 lg:mb-6 leading-[1.1] tracking-tight">
              Advanced care for your <span className="text-orange relative inline-block">
                best friend.
                <Doodle type="arrow" className="-bottom-6 right-0 w-10 h-10 -rotate-12 absolute text-orange/80" />
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-2 lg:mb-10 max-w-lg font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A state-of-the-art facility providing comprehensive veterinary care and advanced diagnostics for your pet in Ramakrishnapuram.
          </motion.p>
        </div>

        {/* Dedicated Middle Window for Dog Face (Between Text and Buttons) */}
        <div className="h-52 sm:h-64 my-2 lg:hidden" />

        {/* Bottom Buttons Block */}
        <div className="max-w-2xl">
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-3 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto bg-orange hover:bg-orange-hover text-white px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-2 group transition-all"
            >
              <Calendar size={20} className="group-hover:scale-110 transition-transform" />
              Book Appointment
            </button>
            <a 
              href="#services"
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-sm font-medium flex items-center justify-center gap-2 transition-all"
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

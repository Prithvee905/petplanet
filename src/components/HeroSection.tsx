import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Doodle } from './Doodle';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center bg-black overflow-hidden pt-28 pb-16 lg:py-20" id="home">
      {/* Background with real clinic image and overlay */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0 overflow-hidden"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Gradient that fades from top-to-bottom on mobile and left-to-right on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black/60 to-transparent z-10" />

        {/* Zoomed-in happy dog face, positioned on the right side */}
        <img
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Happy, healthy dog"
          className="w-full h-full object-cover object-[center_30%] scale-[1.5] origin-[center_30%] opacity-90"
        />
      </motion.div>

      {/* Decorative Doodles */}
      <Doodle type="paw" className="top-32 left-10 w-16 h-16 rotate-[-15deg] z-20 text-orange/30" />
      <Doodle type="sparkle" className="top-40 left-[45%] w-12 h-12 z-20 text-orange/40" />
      <Doodle type="dog" className="bottom-20 right-20 w-24 h-24 rotate-12 z-20 text-white/20" />
      <Doodle type="bone" className="top-[65%] left-[8%] w-16 h-16 rotate-[25deg] z-20 text-orange/20" />
      <Doodle type="paw" className="bottom-[10%] left-[45%] w-14 h-14 rotate-[-30deg] z-20 text-orange/30" />
      <Doodle type="sparkle" className="top-24 right-[55%] w-10 h-10 z-20 text-orange/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="max-w-2xl flex flex-col min-h-[calc(100vh-140px)] lg:min-h-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              Advanced care for your <span className="text-orange relative inline-block">
                best friend.
                <Doodle type="arrow" className="-bottom-8 right-0 w-12 h-12 -rotate-12 absolute text-orange/80" />
              </span>
            </h1>
          </motion.div>

          {/* Wrapper for Paragraph and Buttons positioned cleanly at bottom */}
          <div className="mt-auto pt-16 sm:pt-20 lg:pt-8 pb-12 lg:pb-0">
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-200/90 font-body leading-relaxed tracking-normal mb-6 max-w-lg font-light drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              A state-of-the-art facility providing comprehensive veterinary care and advanced diagnostics for your pet in Ramakrishnapuram.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={onBookClick}
                className="group relative flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange to-amber-500 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-md shadow-orange/30 hover:shadow-lg hover:shadow-orange/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <Calendar size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Book Appointment</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </button>
              <a
                href="#services"
                className="group flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-black/20"
              >
                <span>Our Services</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300 text-orange" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Customer Attracting Animated Moving Bar (Full Screen Edge-to-Edge, Normal Corners) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 w-full z-30 bg-white/10 backdrop-blur-md border-y border-white/15 py-3.5 overflow-hidden pointer-events-none rounded-none shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="flex items-center gap-6 whitespace-nowrap shrink-0 w-full"
          animate={{ x: [-800, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[
            { icon: '⚡', text: 'Consultation Fee: Starting at ₹500' },
            { icon: '⭐', text: '4.7 ★ Rating (1,800+ Happy Clients)' },
            { icon: '🐾', text: '20+ Years Veterinary Experience' },
            { icon: '🩺', text: 'In-House Diagnostics & X-Ray' },
            { icon: '⏰', text: 'Open 7 Days: 8:00 AM - 9:00 PM' },
            { icon: '⚡', text: 'Consultation Fee: Starting at ₹500' },
            { icon: '⭐', text: '4.7 ★ Rating (1,800+ Happy Clients)' },
            { icon: '🐾', text: '20+ Years Veterinary Experience' },
            { icon: '🩺', text: 'In-House Diagnostics & X-Ray' },
            { icon: '⏰', text: 'Open 7 Days: 8:00 AM - 9:00 PM' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 shrink-0">
              <span className="text-base">{item.icon}</span>
              <span className="font-medium tracking-wide">{item.text}</span>
              <span className="text-orange font-bold text-sm ml-4">•</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

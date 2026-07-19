import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Parallax & Duotone Tint */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-orange/20 mix-blend-multiply z-10" />
        {/* Real clinic photo (Labrador on exam table) tinted with CSS filters */}
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkPV2JzX_bx2VTEn8p89W2ROzXMInCd8fkFJGg7hhJHFb9WVF_vI_eg_e30gWlncZGAsIZ4KVq5xN7uEJeZHLSQ8QT81mIbDSimbRgUz5N_eqVJ7uhEVumz7214T5-ipIMRqh0e0w=s1600"
          alt="Veterinarian examining dog at Petplanet Clinic"
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </motion.div>

      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20"
        style={{ opacity }}
      >
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Expert Care <br />
            for Your <br />
            <span className="text-orange">Best Friend.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg font-body"
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
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onBookClick}
              className="group relative flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white px-8 py-4 rounded-sm font-semibold text-lg overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-orange hover:text-orange text-white px-8 py-4 rounded-sm font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

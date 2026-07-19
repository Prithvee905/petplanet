import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface CtaBannerProps {
  onBookClick: () => void;
}

export function CtaBanner({ onBookClick }: CtaBannerProps) {
  return (
    <section className="py-24 bg-orange relative z-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent scale-150" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-display font-bold text-black mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to give your pet the care they deserve?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={onBookClick}
            className="group relative inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-sm font-bold text-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
          >
            <Calendar className="w-6 h-6" />
            <span>Book Appointment Now</span>
            <div className="absolute inset-0 h-full w-full bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

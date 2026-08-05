import { motion } from 'framer-motion';
import { Doodle } from './Doodle';
import { Quote } from 'lucide-react';

export function DrKiranSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden z-20">
      {/* Decorative doodles */}
      <Doodle type="paw" className="top-12 left-[6%] w-16 h-16 rotate-[-20deg] text-orange/20" />
      <Doodle type="sparkle" className="bottom-16 right-[8%] w-14 h-14 text-orange/25" />
      <Doodle type="bone" className="top-1/2 right-[4%] w-20 h-20 rotate-[30deg] text-orange/15" />
      {/* Logo watermark */}
      <Doodle type="logo" className="-top-10 -left-20 w-[420px] h-auto rotate-[8deg] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section label */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange bg-orange/10 border border-orange/30 px-4 py-2 rounded-full mb-4">
            Meet Our Doctor
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Dr. M. Kiran Kumar
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-orange/50" />
            <span className="text-orange font-medium text-sm">Founder &amp; Chief Veterinarian</span>
            <div className="h-px w-16 bg-orange/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photo column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-orange/30">
              <img
                src="/dr-kiran.jpg"
                alt="Dr. M. Kiran Kumar – Founder & Chief Veterinarian, Pet Planet"
                className="w-full h-[480px] object-cover object-top"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-sm border border-orange/30 rounded-xl px-5 py-4">
                  <p className="font-display font-bold text-white text-lg">Dr. M. Kiran Kumar</p>
                  <p className="text-orange text-sm font-medium">Founder &amp; Chief Veterinarian</p>
                  <p className="text-gray-400 text-xs mt-1">23+ Years of Veterinary Excellence</p>
                </div>
              </div>
            </div>
            {/* Decorative orange accent box */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-orange/40 rounded-xl -z-10" />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Quote icon */}
            <div className="w-12 h-12 bg-orange/10 border border-orange/30 rounded-xl flex items-center justify-center mb-6">
              <Quote size={24} className="text-orange" />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-5 font-body">
              Dr. M. Kiran Kumar, Founder of <strong className="text-white font-bold">Pet Planet</strong>, began his veterinary career serving in large animal practice. While this experience provided him with a strong clinical foundation, his passion and compassion for companion animals inspired him to establish <strong className="text-white font-bold">Pet Planet</strong> over 17 years ago with a vision of providing high-quality healthcare for pets.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-5 font-body">
              From its very beginning, Dr. Kiran Kumar has devoted his time, energy, and unwavering commitment to building <strong className="text-white font-bold">Pet Planet</strong> into the trusted veterinary centre it is today.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-body">
              As a pet parent himself, Dr. Kiran Kumar understands the deep emotional bond between pets and their families, allowing him to empathize with every pet owner and treat each patient with the same love and care. This philosophy continues to shape the culture of <strong className="text-white font-bold">Pet Planet</strong>, where every pet is treated as a cherished member of the family.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { number: '2009', label: 'Est. Year' },
                { number: '23+', label: 'Years Experience' },
                { number: '1800+', label: 'Pet Families' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="text-center p-4 rounded-xl border border-white/10 bg-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-3xl font-display font-bold text-orange">{s.number}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

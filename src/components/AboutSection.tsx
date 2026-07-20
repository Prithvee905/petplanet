import { motion } from 'framer-motion';
import { Doodle } from './Doodle';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative z-20 overflow-hidden">
      {/* Decorative Doodles */}
      <Doodle type="paw" className="top-8 left-[8%] w-16 h-16 rotate-[-15deg] text-orange/20" />
      <Doodle type="bone" className="top-1/3 right-[10%] w-20 h-20 rotate-[45deg] text-orange/15" />
      <Doodle type="paw" className="bottom-12 left-[12%] w-24 h-24 rotate-[25deg] text-orange/25" />
      <Doodle type="sparkle" className="top-1/2 left-[5%] w-10 h-10 text-orange/30" />
      <Doodle type="swirl" className="bottom-6 right-[5%] w-28 h-28 rotate-12 text-orange/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              A modern approach to <span className="text-orange">veterinary care.</span>
            </h2>
            <p className="text-lg text-gray-800 mb-6 font-body leading-relaxed">
              At Petplanet Dog Clinic & Animal Diagnostics, we believe your best friend deserves the absolute best care. Located in the heart of Ramakrishnapuram, Kothapet, our state-of-the-art facility combines advanced diagnostic technology with a warm, compassionate approach.
            </p>
            <p className="text-lg text-gray-800 font-body leading-relaxed">
              From routine checkups to complex surgical cases, Dr. M. Kiran Kumar, Dr. Meghana, and our dedicated team are highly experienced in treating dogs, cats, and other small animals, ensuring they live long, healthy, and happy lives.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '4.7', label: 'Average Rating' },
              { number: '1,800+', label: 'Happy Client Reviews' },
              { number: '✓', label: 'Trusted on Practo' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 p-8 rounded-sm border-l-4 border-orange"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-4xl font-display font-bold text-black mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-gray-800 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

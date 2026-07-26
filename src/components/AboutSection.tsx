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
      {/* Logo watermark doodle */}
      <Doodle type="logo" className="-bottom-10 -right-20 w-[480px] h-auto rotate-[-12deg] z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              About <span className="text-orange">Pet Planet.</span>
            </h2>
            <p className="text-lg text-gray-800 mb-4 font-body leading-relaxed">
              Founded over 16 years ago, <strong className="font-bold text-black">Pet Planet</strong> began as a small veterinary clinic with a simple vision—to provide genuine, compassionate care for every pet. What started as a modest practice has now grown into a trusted destination for pet healthcare.
            </p>
            <p className="text-lg text-gray-800 mb-4 font-body leading-relaxed">
              Over the years, we have continually expanded our services to meet the evolving needs of pets and their families. Today, <strong className="font-bold text-black">Pet Planet</strong> offers a wide range of services—all under one roof.
            </p>
            <p className="text-lg text-gray-800 mb-4 font-body leading-relaxed">
              Every patient we care for and every family we serve has been a part of our journey. Their trust and confidence have been the foundation of our growth and continue to inspire us to raise the standards of veterinary care.
            </p>
            <p className="text-lg text-gray-800 mb-6 font-body leading-relaxed">
              As we look to the future, we remain dedicated to creating a world where every pet receives the care, attention, and love they truly deserve.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '17+', label: 'Years Clinic Excellence' },
              { number: '4.7', label: 'Average Client Rating' },
              { number: '1,800+', label: 'Happy Pet Patient Reviews' },
              { number: '✓', label: 'Certified & Verified' },
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

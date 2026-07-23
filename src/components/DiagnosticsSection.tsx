import { motion } from 'framer-motion';
import { Doodle } from './Doodle';

export function DiagnosticsSection() {
  return (
    <section id="diagnostics" className="py-24 bg-black text-white relative overflow-hidden z-20">
      {/* Decorative Doodles */}
      <Doodle type="swirl" className="absolute top-10 left-10 w-24 h-24 z-10 text-white/5" />
      <Doodle type="paw" className="absolute bottom-10 right-10 w-16 h-16 rotate-[25deg] z-10 text-white/5" />
      <Doodle type="sparkle" className="absolute top-1/2 left-[10%] w-12 h-12 z-10 text-orange/30" />
      <Doodle type="bone" className="absolute top-10 right-[25%] w-18 h-18 rotate-[-15deg] z-10 text-white/10" />
      <Doodle type="paw" className="absolute top-1/3 right-[5%] w-16 h-16 rotate-[45deg] z-10 text-white/5" />
      <Doodle type="swirl" className="absolute bottom-12 left-5 w-24 h-24 rotate-[60deg] z-10 text-white/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <motion.div
              className="h-64 bg-gray-800 rounded-sm overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwquFLiAZ1pGq0rOC2dM-1i2nLj_6Z6isy-g9pH8nE49UKvUfZOCPJULpwU45Ztyxri9488IxDT7tvc2zdkavPraHZdw-Ww6wnv1Xu8uFwzCEToePsN_C_dbrxCyeVZhoJc98=s1600" alt="Pet Planet Clinic Entrance" className="w-full h-full object-cover grayscale contrast-125" />
            </motion.div>
            <motion.div
              className="h-64 bg-gray-800 rounded-sm overflow-hidden mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmff23IfLnRGqNQbWlJGwgp3y5UX1EbLWHuWlrI1U2y64Em0lVnqNWijhLlcp4uSXVEneL0PQ0L7nJzHRn9YjJ0Q3_9b0hsKUS2SDhjB0-jHRrCp3UHZ3W4FtF77Xu2HdzaO8Y3=s1600" alt="Clinic IV and Treatment Area" className="w-full h-full object-cover grayscale contrast-125" />
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Precision Clinical <span className="text-orange">Diagnostics.</span></h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We believe in accurate, rapid diagnoses to provide the best possible care. Our clinic is equipped with modern, in-house diagnostic tools so you don't have to wait for answers when your pet needs help.
            </p>
            <ul className="space-y-4">
              {[
                'Digital X-Ray Imaging',
                'Advanced Ultrasound',
                'In-house Blood Analyzers',
                'Microscopic Examinations'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange rounded-full" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

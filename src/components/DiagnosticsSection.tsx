import { motion } from 'framer-motion';
import { Doodle } from './Doodle';

const diagnosticsShowcase = [
  {
    title: 'In-House Blood Analysis',
    description: 'Rapid CBC and biochemistry processing for faster treatment decisions.',
    image: '/diagnostics-lab-analyzers.jpg',
    className: 'md:col-span-2 md:row-span-2',
    imageClassName: 'object-center',
  },
  {
    title: 'Microscopic Evaluation',
    description: 'Detailed sample review for skin, ear, and lab-based investigations.',
    image: '/diagnostics-microscope.jpg',
    className: 'md:col-span-1',
    imageClassName: 'object-center',
  },
  {
    title: 'Digital X-Ray Imaging',
    description: 'Clear radiographs for bone, chest, and abdominal screening.',
    image: '/diagnostics-ultrasound.jpg',
    className: 'md:col-span-1',
    imageClassName: 'object-center',
  },
  {
    title: 'Diagnostic Ultrasound',
    description: 'Real-time internal imaging for soft tissue and abdominal evaluation.',
    image: '/diagnostics-xray.jpg',
    className: 'md:col-span-1',
    imageClassName: 'object-center',
  },
  {
    title: 'Integrated Diagnostics Setup',
    description: 'A connected diagnostics workflow under one roof for urgent cases.',
    image: '/diagnostics-full-lab.jpg',
    className: 'md:col-span-1',
    imageClassName: 'object-center',
  },
];

export function DiagnosticsSection() {
  return (
    <section id="diagnostics" className="py-24 bg-black text-white relative overflow-hidden z-20">
      <Doodle type="swirl" className="absolute top-10 left-10 w-24 h-24 z-10 text-white/5" />
      <Doodle type="paw" className="absolute bottom-10 right-10 w-16 h-16 rotate-[25deg] z-10 text-white/5" />
      <Doodle type="sparkle" className="absolute top-1/2 left-[10%] w-12 h-12 z-10 text-orange/30" />
      <Doodle type="bone" className="absolute top-10 right-[25%] w-18 h-18 rotate-[-15deg] z-10 text-white/10" />
      <Doodle type="paw" className="absolute top-1/3 right-[5%] w-16 h-16 rotate-[45deg] z-10 text-white/5" />
      <Doodle type="swirl" className="absolute bottom-12 left-5 w-24 h-24 rotate-[60deg] z-10 text-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-sm font-semibold text-orange mb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-orange" />
              Diagnostics Inside The Clinic
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight">
              Precision Clinical <span className="text-orange">Diagnostics.</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl font-body text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We believe in accurate, rapid diagnoses to provide the best possible care. Our clinic is equipped with modern, in-house diagnostic tools so you do not have to wait for answers when your pet needs help.
            </p>

            <ul className="space-y-4">
              {[
                'Digital X-Ray Imaging for fast orthopedic and thoracic screening',
                'Advanced Ultrasound for abdominal and soft tissue evaluation',
                'In-house Blood Analyzers for same-visit clinical insights',
                'Microscopic Examinations for cytology and pathology support',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg font-body text-gray-100">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {diagnosticsShowcase.map((item, index) => (
              <motion.div
                key={item.title}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 shadow-xl hover:border-orange/50 transition-all duration-300 ${item.className}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                {/* Photo Container */}
                <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full ${item.imageClassName} object-cover transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>

                {/* Test Name Below Photo */}
                <div className="p-3.5 sm:p-4 bg-zinc-900 border-t border-white/10 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-orange transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

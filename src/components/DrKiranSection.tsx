import { motion } from 'framer-motion';
import { Doodle } from './Doodle';
import { Quote } from 'lucide-react';

const seniorDoctorsHome = [
  {
    name: 'Dr. M. Kiran Kumar',
    qualification: 'B.V.Sc & A.H.',
    title: 'Founder & Chief Veterinarian',
    badge: '23+ Years Experience',
    bio: 'Dr. M. Kiran Kumar, Founder of Pet Planet, began his veterinary career serving in large animal practice. Inspiring compassion for companion animals, he established Pet Planet over 17 years ago with a vision of providing high-quality healthcare for pets.',
    image: '/dr-kiran.jpg',
  },
  {
    name: 'Dr. G. Shambhulingam',
    qualification: 'M.V.Sc',
    title: 'Veterinary Surgeon',
    badge: '35+ Years Experience',
    bio: 'Senior Veterinary Surgeon with over 35+ years of dedicated surgical experience. Dr. Shambhulingam brings exceptional surgical expertise in orthopedic, soft-tissue, and emergency procedures to Pet Planet.',
    image: '/dr-shambhulingam.jpg',
  },
];

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
            Clinical Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Meet Our <span className="text-orange">Senior Doctors.</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-orange/50" />
            <span className="text-orange font-medium text-sm">Decades of Veterinary &amp; Surgical Excellence</span>
            <div className="h-px w-16 bg-orange/50" />
          </div>
        </motion.div>

        {/* 2-Column Senior Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {seniorDoctorsHome.map((doc, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-6 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl relative group hover:border-orange/40 transition-colors duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="w-full md:w-52 h-64 md:h-auto flex-shrink-0 rounded-xl overflow-hidden relative shadow-lg">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-2 left-2 bg-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  {doc.badge}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-orange/10 border border-orange/30 rounded-lg flex items-center justify-center mb-3">
                    <Quote size={18} className="text-orange" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1 group-hover:text-orange transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 mb-1">{doc.qualification}</p>
                  <p className="text-xs font-semibold text-orange uppercase tracking-wider mb-3">{doc.title}</p>
                  <p className="text-gray-300 text-sm leading-relaxed font-body">
                    {doc.bio}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Pet Planet Veterinary Care</span>
                  <span className="text-orange font-medium">{doc.badge}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

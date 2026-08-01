import { motion } from 'framer-motion';
import { Doodle } from './Doodle';

const doctors = [
  {
    name: 'Dr. M. Kiran Kumar',
    specialty: 'Founder & Chief Veterinarian',
    bio: 'With over 17 years of hands-on experience, Dr. Kiran is a highly experienced small-animal veterinarian. He expertly handles both routine preventive care and complex surgical cases, including tumor removals, all while maintaining a calm, trusted bedside manner that puts pets and parents at ease.',
    image: '/dr-kiran.jpg',
  },
];

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-24 bg-white relative z-20 overflow-hidden">
      {/* Decorative Doodles */}
      <Doodle type="bone" className="top-12 right-10 w-24 h-24 rotate-[30deg] text-orange/20" />
      <Doodle type="sparkle" className="bottom-8 left-10 w-16 h-16 text-orange/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center sm:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Meet the <span className="text-orange">Doctor.</span></h2>
          <p className="text-lg text-gray-800 max-w-2xl">
            Passionate professional dedicated to the health and happiness of your pets.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {doctors.map((doc, index) => (
            <motion.div
              key={index}
              className="group flex flex-col sm:flex-row gap-8 items-center bg-gray-100 p-8 rounded-2xl hover:bg-black hover:text-white transition-colors duration-500 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-56 h-56 flex-shrink-0 overflow-hidden rounded-xl relative shadow-md">
                <div className="absolute inset-0 bg-orange/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-orange transition-colors">{doc.name}</h3>
                <p className="text-sm font-semibold text-orange group-hover:text-amber-400 mb-4 uppercase tracking-wider">{doc.specialty}</p>
                <p className="text-gray-800 group-hover:text-gray-200 leading-relaxed text-base">
                  {doc.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

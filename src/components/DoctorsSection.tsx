import { motion } from 'framer-motion';
import { Doodle } from './Doodle';

const doctors = [
  {
    name: 'Dr. Kiran Kumar',
    specialty: 'Veterinary Physician',
    bio: 'With over 20 years of hands-on experience, Dr. Kiran is a highly experienced small-animal veterinarian. He expertly handles both routine preventive care and complex surgical cases, including tumor removals, all while maintaining a calm, trusted bedside manner that puts pets and parents at ease.',
    image: 'https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Dr. Meghana',
    specialty: 'Veterinarian',
    bio: 'Practicing alongside Dr. Kiran, Dr. Meghana is dedicated to providing compassionate, thorough patient care. She utilizes the clinic\'s advanced diagnostic tools to ensure every pet receives an accurate diagnosis and a personalized treatment plan.',
    image: 'https://images.unsplash.com/photo-1594824436951-7f12bc574828?q=80&w=2071&auto=format&fit=crop',
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
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Meet the <span className="text-orange">Doctors.</span></h2>
          <p className="text-lg text-gray-800 max-w-2xl">
            Passionate professionals dedicated to the health and happiness of your pets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {doctors.map((doc, index) => (
            <motion.div
              key={index}
              className="group flex flex-col sm:flex-row gap-8 items-center bg-gray-100 p-6 rounded-sm hover:bg-black hover:text-white transition-colors duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-sm relative">
                <div className="absolute inset-0 bg-orange/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-orange transition-colors">{doc.name}</h3>
                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-300 mb-4 uppercase tracking-wider">{doc.specialty}</p>
                <p className="text-gray-800 group-hover:text-gray-200 leading-relaxed">
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

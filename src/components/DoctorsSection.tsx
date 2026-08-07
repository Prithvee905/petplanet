import { motion } from 'framer-motion';
import { Doodle } from './Doodle';

const seniorDoctors = [
  {
    name: 'Dr. M. Kiran Kumar',
    qualification: 'B.V.Sc & A.H.',
    specialty: 'Founder & Chief Veterinarian',
    bio: 'With over 23 years of hands-on clinical experience, Dr. Kiran is a highly experienced small-animal veterinarian. He expertly handles preventive care, internal medicine, and complex surgical cases, maintaining a trusted bedside manner that puts pets and parents at ease.',
    image: '/dr-kiran.jpg',
    experience: '23+ Years Experience',
  },
  {
    name: 'Dr. G. Shambhulingam',
    qualification: 'M.V.Sc',
    specialty: 'Veterinary Surgeon',
    bio: 'Senior Veterinary Surgeon with over 35+ years of dedicated surgical experience. Specializing in advanced orthopedic, soft-tissue, and emergency procedures delivered with high precision and compassionate care.',
    image: '/dr-shambhulingam.jpg',
    experience: '35+ Years Experience',
  },
];

const associateDoctors = [
  {
    name: 'Dr. Akhila',
    qualification: 'M.V.Sc',
    specialty: 'Veterinarian',
    image: '/dr-akhila.jpg',
  },
  {
    name: 'Dr. Manasa',
    qualification: 'M.V.Sc',
    specialty: 'Veterinarian',
    image: '/dr-manasa.jpg',
  },
  {
    name: 'Dr. T. Kiranmayee',
    qualification: 'B.V.Sc',
    specialty: 'Veterinarian',
    image: '/dr-kiranmayee.jpg',
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
          className="mb-12 text-center sm:text-left"
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

        {/* 🌟 1. Senior Doctors Featured Cards (Dr. Kiran & Dr. Shambhulingam) */}
        <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {seniorDoctors.map((doc, index) => (
            <motion.div
              key={index}
              className="group flex flex-col sm:flex-row gap-6 items-center bg-gray-100 p-6 sm:p-8 rounded-2xl hover:bg-black hover:text-white transition-colors duration-500 shadow-xl border border-gray-200/80"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="w-48 h-60 sm:w-52 sm:h-64 flex-shrink-0 overflow-hidden rounded-xl relative shadow-md">
                <div className="absolute inset-0 bg-orange/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <span className="absolute top-2 left-2 bg-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-sm">
                  {doc.experience}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-1 group-hover:text-orange transition-colors">{doc.name}</h3>
                <p className="text-xs font-bold text-gray-700 group-hover:text-gray-300 mb-1">{doc.qualification}</p>
                <p className="text-xs font-semibold text-orange group-hover:text-amber-400 mb-3 uppercase tracking-wider">{doc.specialty}</p>
                <p className="text-gray-800 group-hover:text-gray-200 leading-relaxed text-sm">
                  {doc.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🩺 2. Associate Doctors Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-8 text-gray-900 border-l-4 border-orange pl-4">
            Veterinarians
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {associateDoctors.map((doc, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center text-center p-6 bg-gray-100 rounded-2xl hover:bg-black hover:text-white transition-colors duration-500 shadow-md border border-gray-200/60"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="w-36 h-48 overflow-hidden rounded-xl relative shadow-sm mb-4">
                  <div className="absolute inset-0 bg-orange/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-1 group-hover:text-orange transition-colors">
                    {doc.name}
                  </h4>
                  <p className="text-xs font-semibold text-orange group-hover:text-amber-400 uppercase tracking-wider">
                    {doc.specialty}
                  </p>
                  <p className="text-xs font-bold text-gray-600 group-hover:text-gray-300 mt-1">
                    {doc.qualification}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

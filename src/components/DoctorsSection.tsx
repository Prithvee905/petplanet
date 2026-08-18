import { motion } from 'framer-motion';
import { Doodle } from './Doodle';

const founderDoctor = {
  name: 'Dr. M. Kiran Kumar',
  specialty: 'Founder & Chief Veterinarian',
  bio: 'With over 23 years of hands-on experience, Dr. Kiran is a highly experienced small-animal veterinarian. He expertly handles both routine preventive care and complex surgical cases, including tumor removals, all while maintaining a calm, trusted bedside manner that puts pets and parents at ease.',
  image: '/dr-kiran.jpg',
};

const associateDoctors = [
  {
    name: 'Dr. G. Shambhulingam',
    qualification: 'M.V.Sc',
    specialty: 'Veterinary Surgeon',
    experience: '35+ Years Experience',
    image: '/dr-shambhulingam.jpg',
  },
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

        {/* 🌟 1. Founder Card (BIGGEST Hero Card with Bio) */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            className="group flex flex-col md:flex-row gap-8 items-center bg-gray-100 p-8 sm:p-10 rounded-3xl hover:bg-black hover:text-white transition-colors duration-500 shadow-2xl border border-gray-200/80"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-64 h-72 sm:w-80 sm:h-96 flex-shrink-0 overflow-hidden rounded-2xl relative shadow-lg">
              <div className="absolute inset-0 bg-orange/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img
                src={founderDoctor.image}
                alt={founderDoctor.name}
                className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange bg-orange/10 px-3 py-1 rounded-full mb-3">
                Founder &amp; Chief Veterinarian
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-2 group-hover:text-orange transition-colors">
                {founderDoctor.name}
              </h3>
              <p className="text-base font-semibold text-orange group-hover:text-amber-400 mb-4 uppercase tracking-wider">
                {founderDoctor.specialty}
              </p>
              <p className="text-gray-800 group-hover:text-gray-200 leading-relaxed text-base sm:text-lg">
                {founderDoctor.bio}
              </p>
            </div>
          </motion.div>
        </div>

        {/* 🩺 2. Doctors Team Grid (4 Doctors: Dr. G. Shambhulingam first, followed by Dr. Akhila, Dr. Manasa, Dr. T. Kiranmayee) */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-8 text-gray-900 border-l-4 border-orange pl-4">
            Veterinary Surgeons &amp; Doctors
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {associateDoctors.map((doc, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center text-center p-6 bg-gray-100 rounded-2xl hover:bg-black hover:text-white transition-colors duration-500 shadow-md border border-gray-200/60"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <h4 className="text-lg font-display font-bold mb-1 group-hover:text-orange transition-colors">
                    {doc.name}
                  </h4>
                  <p className="text-xs font-semibold text-orange group-hover:text-amber-400 uppercase tracking-wider mb-1">
                    {doc.specialty}
                  </p>
                  <div className="inline-block bg-gray-200 group-hover:bg-white/10 px-2.5 py-0.5 rounded-full text-xs font-bold text-gray-700 group-hover:text-gray-200">
                    {doc.qualification}
                  </div>
                  {doc.experience && (
                    <p className="text-[11px] font-medium text-gray-500 group-hover:text-gray-400 mt-2">
                      ({doc.experience})
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🏥 3. Complete Clinical & Support Team Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-l-4 border-orange pl-4 gap-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                Our Complete Team
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                The compassionate veterinary doctors, clinical staff, and support team behind Pet Planet.
              </p>
            </div>
            <span className="inline-block self-start sm:self-auto bg-orange/10 text-orange border border-orange/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Clinical &amp; Support Staff
            </span>
          </div>

          <motion.div
            className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-200/80 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-72 sm:h-96 md:h-[460px] w-full overflow-hidden bg-black">
              <img
                src="/pet-planet-complete-team.jpg"
                alt="Pet Planet Complete Clinical & Support Team"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200/80">
              <h4 className="text-base sm:text-lg font-display font-bold text-gray-900 mb-1">
                Team Pet Planet
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Our dedicated team of veterinarians, veterinary assistants, lab technicians, and support staff working together to deliver excellence for every pet.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

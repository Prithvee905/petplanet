import { motion } from 'framer-motion';
import { Syringe, Stethoscope, HeartPulse, Activity, Scissors, AlertCircle, Pill, Microscope, ClipboardPlus } from 'lucide-react';
import { Doodle } from './Doodle';

const services = [
  {
    icon: Stethoscope,
    title: 'Preventive Care & Routine Check-ups',
    description: 'Regular wellness exams to catch potential health issues early and keep your pet thriving.',
  },
  {
    icon: Syringe,
    title: 'Vaccinations / Immunization',
    description: 'Core and lifestyle vaccines tailored for dogs, cats, and other small animals to prevent dangerous diseases.',
  },
  {
    icon: HeartPulse,
    title: 'Dental Treatments',
    description: 'Professional dental cleaning, checks, and procedures to prevent oral disease and maintain overall health.',
  },
  {
    icon: Microscope,
    title: 'Advanced Diagnostics',
    description: 'State-of-the-art diagnostic equipment including X-ray, ultrasound, and lab diagnostics for fast, accurate diagnosis.',
  },
  {
    icon: Activity,
    title: 'Veterinary Treatment & Surgery',
    description: 'General medical treatment and specialized surgical procedures, including tumor removals, with decades of surgical experience.',
  },
  {
    icon: Scissors,
    title: 'Pet Grooming',
    description: 'Premium grooming services to keep your pet clean, comfortable, and looking their best.',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Services',
    description: 'Urgent medical attention when your pet needs it most, with rapid response protocols and expert care.',
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'Fully stocked on-site pharmacy for immediate access to prescribed medicines and pet health products.',
  },
  {
    icon: ClipboardPlus,
    title: 'OPD / Outpatient Consultations',
    description: 'Convenient outpatient services and expert consultations for your pet’s daily health concerns.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-100 relative overflow-hidden z-20">
      {/* Decorative Doodles */}
      <Doodle type="paw" className="top-20 left-5 w-20 h-20 -rotate-[25deg] z-10 text-orange/20" />
      <Doodle type="sparkle" className="bottom-40 right-10 w-16 h-16 z-10 text-orange/25" />
      <Doodle type="bone" className="bottom-20 left-10 w-22 h-22 rotate-[40deg] z-10 text-orange/15" />
      <Doodle type="paw" className="top-12 left-[30%] w-14 h-14 rotate-[15deg] z-10 text-orange/20" />
      <Doodle type="sparkle" className="top-1/2 right-[15%] w-12 h-12 z-10 text-orange/25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 relative inline-block">
            Our Services
            <Doodle type="dog" className="-top-8 -right-16 w-14 h-14 absolute text-orange/30" />
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Comprehensive care under one roof. We offer a full spectrum of veterinary services to keep your pet healthy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-black/5 text-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">{service.description}</p>
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center z-0 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Syringe, Stethoscope, HeartPulse, Activity, Scissors, AlertCircle, Pill, Microscope, ClipboardPlus, Video } from 'lucide-react';
import { Doodle } from './Doodle';

const services = [
  {
    icon: Stethoscope,
    title: 'Preventive Healthcare & Routine Check-ups',
    description: 'Comprehensive prophylactic wellness examinations, vital sign evaluations, and early health screening for small animals.',
  },
  {
    icon: Syringe,
    title: 'Vaccinations & Automated Reminders',
    description: 'Core and lifestyle immunization protocols tailored for your pet. We send automated reminder notifications for your pet’s next scheduled vaccination date so they stay fully protected.',
  },
  {
    icon: ClipboardPlus,
    title: 'OPD / Outpatient Consultations',
    description: 'Convenient outpatient medical consultations and ongoing therapeutic management for acute and chronic conditions.',
  },
  {
    icon: Video,
    title: 'Teleconsultation',
    description: 'Convenient online consultation for follow-up care, general guidance, advice, and follow-up care when an in-person visit may not be necessary.',
  },
  {
    icon: Microscope,
    title: 'Advanced Clinical Diagnostics',
    description: 'In-house diagnostic laboratory equipment, digital radiography (X-ray), and ultrasonography for immediate, accurate diagnostic evaluation.',
  },
  {
    icon: Activity,
    title: 'Medical & Surgical Care',
    description: 'Comprehensive medical management and advanced surgical services, including soft tissue, orthopaedic, elective, and exploratory procedures, delivered with safe anaesthesia and dedicated post-operative care.',
  },
  {
    icon: HeartPulse,
    title: 'Dental & Oral Care',
    description: 'Professional ultrasonic scaling, oral prophylaxis, and comprehensive dental health treatments to prevent periodontal disease.',
  },
  {
    icon: Scissors,
    title: 'Pet Grooming',
    description: 'Professional hygienic grooming, coat styling, medicated baths, and ear/nail care for overall skin and coat health.',
  },
  {
    icon: Pill,
    title: 'Pharmacy & Pet Care Store',
    description: 'Fully equipped on-site store stocking prescription veterinary pharmaceuticals, specialized clinical nutrition, wellness supplements, and everyday essentials for your pet.',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Medical Services',
    description: 'Immediate medical triage and urgent critical care protocols for trauma, acute illness, and severe systemic emergencies.',
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

import { motion } from 'framer-motion';
import { Syringe, Stethoscope, HeartPulse, Activity, Scissors, AlertCircle, Pill, Microscope, ClipboardPlus, Video } from 'lucide-react';
import { Doodle } from './Doodle';

const services = [
  {
    icon: Stethoscope,
    title: 'Preventive Healthcare & Routine Check-ups',
    description: 'Comprehensive prophylactic wellness examinations, vital sign evaluations, and early health screening for small animals.',
    image: '/pet-healthcare.jpg',
    imagePosition: 'object-bottom',
    imageStyle: { objectPosition: '50% 90%' },
  },
  {
    icon: Syringe,
    title: 'Vaccinations & Automated Reminders',
    description: 'Core and lifestyle immunization protocols tailored for your pet. We send automated reminder notifications for your pet’s next scheduled vaccination date so they stay fully protected.',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: ClipboardPlus,
    title: 'OPD / Outpatient Consultations',
    description: 'Convenient outpatient medical consultations and ongoing therapeutic management for acute and chronic conditions.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Video,
    title: 'Teleconsultation',
    description: 'Convenient online consultation for follow-up care, general guidance, advice, and follow-up care when an in-person visit may not be necessary.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Microscope,
    title: 'Advanced Clinical Diagnostics',
    description: 'In-house diagnostic laboratory equipment, digital radiography (X-ray), and ultrasonography for immediate, accurate diagnostic evaluation.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Activity,
    title: 'Medical & Surgical Care',
    description: 'Comprehensive medical management and advanced surgical services, including soft tissue, orthopaedic, elective, and exploratory procedures, delivered with safe anaesthesia and dedicated post-operative care.',
    image: '/surgery-clinical.jpg',
  },
  {
    icon: HeartPulse,
    title: 'Dental & Oral Care',
    description: 'Professional ultrasonic scaling, oral prophylaxis, and comprehensive dental health treatments to prevent periodontal disease.',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Scissors,
    title: 'Pet Grooming',
    description: 'Professional hygienic grooming, coat styling, medicated baths, and ear/nail care for overall skin and coat health.',
    image: '/pet-grooming.jpg',
  },
  {
    icon: Pill,
    title: 'Pharmacy & Pet Care Store',
    description: 'Fully equipped on-site store stocking prescription veterinary pharmaceuticals, specialized clinical nutrition, wellness supplements, and everyday essentials for your pet.',
    image: '/pet-care-store.png',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Medical Services',
    description: 'Immediate medical triage and urgent critical care protocols for trauma, acute illness, and severe systemic emergencies.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop',
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
          <p className="text-lg text-gray-800 max-w-2xl mx-auto font-body">
            Comprehensive care under one roof. We offer a full spectrum of veterinary services to keep your pet healthy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange/30 relative overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Card Image Header - Responsive height for better mobile viewing */}
              <div className="relative h-56 sm:h-64 lg:h-80 w-full overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${service.imagePosition || 'object-center'}`}
                  style={service.imageStyle || {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                  <service.icon size={24} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold mb-2.5 text-black group-hover:text-orange transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

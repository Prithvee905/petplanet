import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Doodle } from '../components/Doodle';
import { Camera } from 'lucide-react';

const galleryItems = [
  {
    title: 'Modern Clinic Entrance & Reception',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=2070&auto=format&fit=crop',
    caption: 'Welcoming reception and waiting lounge designed for low-stress patient visits.',
  },
  {
    title: 'Advanced Diagnostic & Digital X-Ray Suite',
    category: 'Diagnostics',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
    caption: 'In-house radiography and laboratory diagnostic equipment for rapid diagnostic triage.',
  },
  {
    title: 'Aseptic Surgical Operating Theater',
    category: 'Surgery',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop',
    caption: 'Sterile surgical suite for major and minor soft-tissue procedures and tumor removals.',
  },
  {
    title: 'Clinical Examination & Wellness Check',
    category: 'Clinical Care',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop',
    caption: 'Dr. Kiran Kumar conducting a thorough physical examination on a dog patient.',
  },
  {
    title: 'Professional Pet Grooming & Spa Station',
    category: 'Grooming',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop',
    caption: 'Hygienic bathing, coat styling, and therapeutic skin care station.',
  },
  {
    title: 'In-House Pet Store & Prescription Pharmacy',
    category: 'Pharmacy & Store',
    image: '/pet-care-store.png',
    caption: 'Fully stocked with veterinary pharmaceuticals, therapeutic diets, and accessories.',
  },
];

export function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Clinic Photo Gallery | Pet Planet Dog Clinic & Diagnostics</title>
        <meta name="description" content="Explore photos of Pet Planet Dog Clinic & Animal Diagnostics in Andal Homes, RK Puram, Hyderabad. Take a visual tour of our modern facilities, lab, and patient rooms." />
      </Helmet>

      <div className="pt-28 pb-16 min-h-[420px] md:min-h-[520px] bg-black text-white relative overflow-hidden flex items-center">
        <video
          className="absolute inset-0 h-full w-full object-cover object-top scale-110"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/clinic-gallery-hero-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/65" />
        <Doodle type="paw" className="top-10 left-[8%] w-20 h-20 text-orange/20" />
        <Doodle type="sparkle" className="bottom-8 right-[10%] w-16 h-16 text-orange/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange/20 text-orange border border-orange/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Camera size={16} />
              <span>Visual Tour & Facilities</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Clinic <span className="text-orange">Gallery .</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed">
              Take a tour of our modern, fully-equipped veterinary facility, clinical examination rooms, surgical suite, and diagnostic lab.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-orange/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

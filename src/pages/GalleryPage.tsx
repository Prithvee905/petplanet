import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Doodle } from '../components/Doodle';
import { Camera } from 'lucide-react';

const galleryItems = [
  {
    title: 'Pet Planet Clinic Frontage & Storefront',
    category: 'Clinic Frontside',
    image: '/clinic-storefront.jpg',
    imagePosition: 'object-top',
  },
  {
    title: 'Andal Homes Clinic Building Exterior',
    category: 'Clinic Frontside',
    image: '/gallery-building-exterior-full.jpg',
    imagePosition: 'object-bottom',
  },
  {
    title: 'Decorated Clinic Exterior & Entrance',
    category: 'Clinic Frontside',
    image: '/gallery-clinic-exterior-decorated.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Dr. Kiran & Surgical Team in Operation Theatre',
    category: 'Surgery',
    image: '/gallery-surgery-team.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Dr. Kiran Performing Diagnostic Ultrasound Scan',
    category: 'Diagnostics',
    image: '/gallery-ultrasound-live.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Clinical & Nursing Staff Group',
    category: 'Staff & Team',
    image: '/gallery-clinical-staff-group.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Grand Inauguration & Ribbon Cutting Ceremony',
    category: 'Inauguration',
    image: '/gallery-inauguration-ribbon.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Honoured Guests Presentation at Inauguration',
    category: 'Inauguration',
    image: '/gallery-inauguration-guests.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Dr. Shambhulingam & Dr. Kiran Inauguration Speech',
    category: 'Inauguration',
    image: '/gallery-inauguration-speech.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Complete Clinical Team on Stage',
    category: 'Inauguration',
    image: '/gallery-inauguration-team.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Pet Planet Wall Art & Mascot Plaques',
    category: 'Facility Decor',
    image: '/gallery-wall-art-plaques.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Happy Shih Tzu Patient',
    category: 'Grooming',
    image: '/shih-tzu-gallery-video.mp4',
    isVideo: true,
    imagePosition: 'object-center',
  },
  {
    title: 'Grooming',
    category: 'Grooming',
    image: '/gallery-video-harry.mp4',
    isVideo: true,
    imagePosition: 'object-center',
  },
  {
    title: 'Urinary Catheterisation',
    category: 'Urinary Catheterisation',
    image: '/gallery-video-123431.mp4',
    isVideo: true,
    imagePosition: 'object-center',
  },
  {
    title: 'Urinary Catheterisation',
    category: 'Clinical Care',
    image: '/gallery-video-123223.mp4',
    isVideo: true,
    imagePosition: 'object-center',
  },
  {
    title: 'General Health Checkup',
    category: 'Otoscopic Examination',
    image: '/gallery-video-122657.mp4',
    isVideo: true,
    imagePosition: 'object-center',
  },
  {
    title: 'Clinic Visit Moment',
    category: 'Grooming',
    image: '/gallery-image-131859.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Happy Clinic Visit',
    category: 'Grooming',
    image: '/gallery-image-131909.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Floral Reception Desk & Welcome Counter',
    category: 'Facility',
    image: '/gallery-reception-flowers.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'In-Patient Care & IV Fluid Therapy',
    category: 'Clinical Care',
    image: '/gallery-iv-therapy.jpg',
    imagePosition: 'object-bottom',
  },
  {
    title: 'Post-Grooming Styling Station',
    category: 'Grooming',
    image: '/gallery-grooming-mirror.jpg',
    imagePosition: 'object-bottom',
  },
  {
    title: 'Professional Pet Grooming Station',
    category: 'Grooming',
    image: '/pet-grooming.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Ultrasonic Dental Scaling & Oral Care',
    category: 'Dental Care',
    image: '/pet-dental.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Digital Radiography (X-Ray) Workstation',
    category: 'Diagnostics',
    image: '/diagnostics-xray.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'Emergency Critical Care & Oxygen Support',
    category: 'Emergency Care',
    image: '/pet-emergency.jpg',
    imagePosition: 'object-bottom',
  },
  {
    title: 'Core & Prophylactic Vaccination Procedure',
    category: 'Clinical Care',
    image: '/pet-vaccination.jpg',
    imagePosition: 'object-center',
  },
  {
    title: 'In-House Pet Pharmacy & Care Store',
    category: 'Pharmacy & Store',
    image: '/pet-care-store.png',
    imagePosition: 'object-center',
  },
];

export function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Clinic Photo Gallery | Pet Planet Dog Clinic & Diagnostics</title>
        <meta name="description" content="Explore real clinic photos of Pet Planet Dog Clinic & Animal Diagnostics in Andal Homes, Kothapet, Hyderabad. Visual tour of our surgeries, inauguration, ultrasound, grooming, and patient care." />
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
              <span>Visual Tour & Real Clinic Photos</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Clinic <span className="text-orange">Gallery .</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed">
              Explore authentic photos of our clinic facilities, grand inauguration ceremony, surgical operating theatre, live ultrasound diagnostic procedures, grooming station, and in-patient care.
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
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-orange/40 transition-all duration-500 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden bg-black">
                  {item.isVideo ? (
                    <video
                      src={item.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className={`w-full h-full object-cover ${item.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700`}
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className={`w-full h-full object-cover ${item.imagePosition || 'object-bottom'} group-hover:scale-105 transition-transform duration-700`}
                    />
                  )}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    {item.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

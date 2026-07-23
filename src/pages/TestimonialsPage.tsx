import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Doodle } from '../components/Doodle';
import { Star, CheckCircle2 } from 'lucide-react';

const detailedReviews = [
  {
    name: 'Rajesh & Family',
    pet: 'Bruno (Golden Retriever)',
    rating: 5,
    date: 'Verified Client',
    text: 'Dr. Kiran Kumar successfully performed a complex major tumor removal surgery on our 8-year-old Retriever, Bruno. His 20+ years of surgical experience and gentle, confident demeanor put our entire family at ease. Bruno recovered remarkably fast under their postoperative care protocol!',
  },
  {
    name: 'Ananya S.',
    pet: 'Milo (Beagle)',
    rating: 5,
    date: 'Verified Client',
    text: 'The diagnostic facilities at Pet Planet Dog Clinic are truly top-notch. When Milo was lethargic, their in-house lab and ultrasound gave us precise diagnostic results within the hour. Dr. Meghana explained every detail of the treatment plan clearly.',
  },
  {
    name: 'Vikram Reddy',
    pet: 'Coco (Indie Rescue)',
    rating: 5,
    date: 'Verified Client',
    text: 'I love that Pet Planet sends automated WhatsApp/SMS reminders for scheduled vaccination dates! It makes managing Coco’s annual booster shots completely stress-free. The entire clinic team is compassionate and professional.',
  },
  {
    name: 'Priya Sharma',
    pet: 'Simba (Persian Cat)',
    rating: 5,
    date: 'Verified Client',
    text: 'Finding a clinic in Hyderabad that handles cats with such gentle care is rare. Their outpatient consultation, routine check-ups, and dental cleaning services are exceptional.',
  },
  {
    name: 'Srinivas Rao',
    pet: 'Rocky (German Shepherd)',
    rating: 5,
    date: 'Verified Client',
    text: 'Pet Planet has been our trusted veterinary clinic in RK Puram for over 10 years. Their attached pet store and pharmacy make getting prescription diets and medicines super convenient right after our visit.',
  },
  {
    name: 'Sneha Patel',
    pet: 'Leo (Shih Tzu)',
    rating: 5,
    date: 'Verified Client',
    text: 'Used their Online Consultation service when Leo had an unexpected skin rash over the weekend. Dr. Kiran provided prompt tele-triage guidance and prescribed effective topical therapy. Highly recommended!',
  },
];

export function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Client Testimonials & Reviews | Pet Planet Dog Clinic</title>
        <meta name="description" content="Read real reviews from pet parents in Hyderabad about Pet Planet Dog Clinic & Animal Diagnostics. 4.7 star rating with 1,800+ happy clients." />
      </Helmet>

      <div className="pt-28 pb-16 bg-black text-white relative overflow-hidden">
        <Doodle type="paw" className="top-10 left-[8%] w-20 h-20 text-orange/20" />
        <Doodle type="sparkle" className="bottom-8 right-[10%] w-16 h-16 text-orange/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange/20 text-orange border border-orange/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Star size={16} className="fill-orange text-orange" />
              <span>4.7 Star Rating (1,800+ Verified Reviews)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Client <span className="text-orange">Testimonials .</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed">
              Discover why thousands of pet parents across Hyderabad trust Pet Planet with the health and happiness of their pets.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedReviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 size={12} />
                      {review.date}
                    </span>
                  </div>

                  <p className="text-gray-700 font-body leading-relaxed mb-6 italic text-sm">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange/10 text-orange rounded-full flex items-center justify-center font-bold font-display">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-orange font-medium">{review.pet}</p>
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

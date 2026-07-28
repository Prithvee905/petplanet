import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Doodle } from '../components/Doodle';
import { Star, CheckCircle2 } from 'lucide-react';

const detailedReviews = [
  {
    name: 'Gaurav Kumar',
    pet: 'Pet Parent (6-Year Client)',
    rating: 5,
    date: 'Google Review • 2 weeks ago',
    text: 'I’ve been taking my pet to Pet Planet for the past 6 years, and I couldn’t be more grateful for the care we’ve received throughout this journey. A special shout-out to Dr. Kiran, whose expertise, compassion, and calm approach have made all the difference. He successfully performed two eye surgeries on my pet, and thanks to his exceptional care, my pet made a complete recovery. His patience in explaining every step of the treatment and his genuine concern for his patients give pet parents immense confidence and peace of mind. The clinic also offers excellent grooming services, and the entire team is incredibly friendly, supportive, and welcoming. Every visit has been a positive experience because of their professionalism and the love they show towards every pet that walks through their doors. After six years of outstanding care, I wholeheartedly recommend Pet Planet to anyone looking for a reliable veterinary clinic and grooming center. Thank you, Dr. Kiran, and the entire Pet Planet team, for your unwavering dedication and for treating our pets like family.',
  },
  {
    name: 'Srinivas Naidu',
    pet: 'Bruno (Golden Retriever)',
    rating: 5,
    date: 'Google Review • 3 years ago',
    text: 'We took our Golden Retriever Bruno to this hospital with 106 deg fever, Doctor Kiran treated very professionally, this hospital is equipped with latest lab and OT as well, and they have a dedicated and professional assistants with pleasing personality. Our pet was diagnosed with low on Platelets with 65K as supposed to be 175K, Dr Kiran Kumar treated well and brought back to normal within 5days. Jr Doctor, and their Assistants Shankar, Joushwa, … handled our pet very gently, we are highly satisfied and we felt our Dog is in safe hands.',
  },
  {
    name: 'Joyjeet Kanungo',
    pet: 'Neroli (Pet Parent)',
    rating: 5,
    date: 'Google Review • 2 years ago',
    text: 'This is the favourite place to go for my furry friend, Neroli. She loves all the pampering she gets from everyone at the clinic. Neroli trusts everyone at the clinic because of their friendly and professional nature. I got her spayed earlier this year and I received the most professional, loving and caring service for Neroli. I could not have asked for better. Not to forget, they are also a one stop destination for all the pet needs, and that is perfect. I know this is a review, but Neroli sends boops to all the PetPlanet team ❤️',
  },
  {
    name: 'Pallavi M.',
    pet: 'Emergency Pet Visit',
    rating: 5,
    date: 'Google Review • 3 years ago',
    text: 'Though it\'s a little further from my place we still visit them over other clinics nearby solely because of how compassionate and loving they are towards animals. Their service is quick and apt, their timings are very comfortable too. They once even waited for 30 extra mins after their closing time when we had an emergency, and that was our first time there. So, definitely a trustworthy clinic for your fur buddies.',
  },
  {
    name: 'Rajesh & Family',
    pet: 'Bruno (Golden Retriever)',
    rating: 5,
    date: 'Google Review',
    text: 'Dr. Kiran Kumar successfully performed a complex major tumor removal surgery on our 8-year-old Retriever, Bruno. His 20+ years of surgical experience and gentle, confident demeanor put our entire family at ease. Bruno recovered remarkably fast under their postoperative care protocol!',
  },
  {
    name: 'Ananya S.',
    pet: 'Milo (Beagle)',
    rating: 5,
    date: 'Google Review',
    text: 'The diagnostic facilities at Pet Planet Dog Clinic are truly top-notch. When Milo was lethargic, their in-house lab and ultrasound gave us precise diagnostic results within the hour. Dr. Meghana explained every detail of the treatment plan clearly.',
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
              Discover why thousands of pet parents across Hyderabad trust <strong className="font-bold text-white">Pet Planet</strong> with the health and happiness of their pets.
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

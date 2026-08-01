import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Doodle } from '../components/Doodle';
import { Star, CheckCircle2 } from 'lucide-react';

const detailedReviews = [
  {
    name: 'Prabhu Paul',
    pet: 'Puppy (Parvovirus Survivor)',
    rating: 5,
    date: 'Google Review \u2022 3 years ago',
    image: '/prabhu-paul-puppy.png',
    text: 'A week ago our puppy had very bad bloody diarrhea, vomiting and lost weight rapidly. We didn\'t know what was happening. We visited Pet Planet and Dr. Kiran diagnosed her with Parvovirus (life threatening). After a week of dedicated treatment and love, our puppy is now all healthy and active! I really appreciate and thank each and everyone who looked after our puppy. Thank you Pet Planet \u2764\ufe0f\u2764\ufe0f',
  },
  {
    name: 'Sai Theja',
    pet: 'Magnus (Beagle Patient)',
    rating: 5,
    date: 'Google Review \u2022 2 years ago',
    image: '/sai-theja-magnus.png',
    text: 'Our Magnus (beagle) got tick fever and he lost platelets and blood was infected. They treated him so well with love and care. We have done a blood transfusion and the treatment took for a week. He recovered from it. Now he is super healthy. You can see the difference in pics.',
  },
  {
    name: 'Joyjeet Kanungo',
    pet: 'Neroli (German Shepherd)',
    rating: 5,
    date: 'Google Review \u2022 2 years ago',
    image: '/joyjeet-neroli.png',
    text: 'This is the favourite place to go for my furry friend, Neroli. She loves all the pampering she gets from everyone at the clinic. Neroli trusts everyone at the clinic because of their friendly and professional nature. I got her spayed earlier this year and I received the most professional, loving and caring service for Neroli. Neroli sends boops to all the PetPlanet team \u2764\ufe0f',
  },
  {
    name: 'Gaurav Kumar',
    pet: 'Pet Parent (6-Year Client)',
    rating: 5,
    date: 'Google Review \u2022 2 weeks ago',
    text: 'I\'ve been taking my pet to Pet Planet for the past 6 years, and I couldn\'t be more grateful for the care we\'ve received throughout this journey. A special shout-out to Dr. Kiran, whose expertise, compassion, and calm approach have made all the difference. He successfully performed two eye surgeries on my pet, and thanks to his exceptional care, my pet made a complete recovery. Thank you, Dr. Kiran, and the entire Pet Planet team!',
  },
  {
    name: 'Srinivas Naidu',
    pet: 'Bruno (Golden Retriever)',
    rating: 5,
    date: 'Google Review \u2022 3 years ago',
    text: 'We took our Golden Retriever Bruno to this hospital with 106 deg fever, Doctor Kiran treated very professionally. Our pet was diagnosed with low on Platelets with 65K as supposed to be 175K, Dr Kiran Kumar treated well and brought back to normal within 5 days. Jr Doctor, and their Assistants Shankar, Joushwa, handled our pet very gently, we are highly satisfied and we felt our Dog is in safe hands.',
  },
  {
    name: 'Pallavi M.',
    pet: 'Emergency Pet Visit',
    rating: 5,
    date: 'Google Review \u2022 3 years ago',
    text: 'Though it\'s a little further from my place we still visit them over other clinics nearby solely because of how compassionate and loving they are towards animals. Their service is quick and apt. They once even waited for 30 extra mins after their closing time when we had an emergency. So, definitely a trustworthy clinic for your fur buddies.',
  },
  {
    name: 'Sadhu Ramakrishna',
    pet: 'Pet Parent (8-Year Client)',
    rating: 5,
    date: 'Google Review \u2022 a year ago',
    text: 'I have been going to Pet Planet from past 8 years with my 2 dogs. Recently one of my dog was suffering with multiorgan failure, Dr. Kiran sir took immediate care and it\'s 2 weeks now — from no chance of life, now there is lots of hope. Created excellent care, treatment, infrastructure, staff. Really thank you Kiran sir.',
  },
  {
    name: 'Vineetha Gundluri',
    pet: 'Shih Tzu (Tick Fever Recovery)',
    rating: 5,
    date: 'Google Review \u2022 2 years ago',
    text: 'My puppy (7 months old Shih Tzu) was diagnosed with Tick fever, he was so sick and weak. Salines and injections were started once his reports came positive. I can see a huge difference before and after the treatment. I was too worried but doctors and junior doctors took extra care — I felt like he is in safe hands. After 5 days of treatment, his platelets and hemoglobin increased abruptly. I was so thankful that they treated my puppy and he got fully recovered \ud83d\ude0a',
  },
  {
    name: 'Varkala Tejasri',
    pet: 'Dog (General Treatment)',
    rating: 5,
    date: 'Google Review \u2022 a year ago',
    text: 'Finding a trustworthy and affordable vet can be tough, but Pet Planet dog clinic is perfect! They offer great services at reasonable prices. My dog received excellent treatment and the staff was friendly, professional, and truly cared about my pet\'s well-being. The vet explained everything clearly and made sure my dog was comfortable. Highly recommend!',
  },
];

export function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Client Testimonials &amp; Reviews | Pet Planet Dog Clinic</title>
        <meta name="description" content="Read real reviews from pet parents in Hyderabad about Pet Planet Dog Clinic &amp; Animal Diagnostics. 4.7 star rating with 1,800+ happy clients." />
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
              Client <span className="text-orange">Testimonials.</span>
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
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  {/* Photo Header if available */}
                  {review.image && (
                    <div className="mb-4 h-52 w-full overflow-hidden rounded-xl bg-gray-100 border border-gray-200/80">
                      <img src={review.image} alt={review.pet} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}

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
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  {review.image ? (
                    <img src={review.image} alt={review.pet} className="w-10 h-10 rounded-full object-cover border border-orange/40" />
                  ) : (
                    <div className="w-10 h-10 bg-orange/10 text-orange rounded-full flex items-center justify-center font-bold font-display">
                      {review.name.charAt(0)}
                    </div>
                  )}
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

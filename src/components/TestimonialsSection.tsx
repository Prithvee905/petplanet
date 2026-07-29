import { motion } from 'framer-motion';
import { Doodle } from './Doodle';

const testimonials = [
  {
    name: 'Prabhu Paul',
    pet: 'Puppy (Parvovirus Survivor)',
    image: '/prabhu-paul-puppy.png',
    text: 'Our puppy had severe bloody diarrhea, vomiting & lost weight rapidly. Dr. Kiran diagnosed Parvovirus. After a week of dedicated treatment and care, she is fully healthy & active!',
  },
  {
    name: 'Sai Theja',
    pet: 'Magnus (Beagle)',
    image: '/sai-theja-magnus.png',
    text: 'Our Beagle Magnus got tick fever with low platelets & blood infection. They treated him with so much love, care & a successful blood transfusion. He recovered in a week and is super healthy now!',
  },
  {
    name: 'Joyjeet Kanungo',
    pet: 'Neroli (German Shepherd)',
    image: '/joyjeet-neroli.png',
    text: 'This is the favourite place to go for my furry friend, Neroli. She loves all the pampering she gets. I got her spayed earlier this year and received the most professional, loving and caring service ❤️',
  },
  {
    name: 'Gaurav Kumar',
    pet: 'Pet Parent (6 Years)',
    text: 'I’ve been taking my pet to Pet Planet for 6 years. Dr. Kiran performed two eye surgeries on my pet with exceptional care for a complete recovery. Highly recommend Dr. Kiran and the team!',
  },
  {
    name: 'Srinivas Naidu',
    pet: 'Bruno (Golden Retriever)',
    text: 'We took Bruno with 106° fever & 65K platelets. Dr. Kiran treated him professionally and brought him back to normal within 5 days. Highly satisfied and felt our dog was in safe hands.',
  },
  {
    name: 'Pallavi M.',
    pet: 'Emergency Pet Visit',
    text: 'We visit them over nearby clinics solely because of how compassionate they are. They once even waited 30 mins after closing time when we had an emergency. A trustworthy clinic!',
  },
  {
    name: 'Ravi Teja',
    pet: 'Golden Retriever',
    text: 'Dr. Kiran is a lifesaver. My dog was in critical condition and needed immediate IV fluid treatment. The doctor acted swiftly and saved his life. I highly recommend Pet Planet for any emergency.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative z-20 overflow-hidden">
      {/* Decorative Doodles */}
      <Doodle type="paw" className="top-10 left-5 w-20 h-20 rotate-[-10deg] text-orange/30" />
      <Doodle type="dog" className="bottom-10 right-10 w-24 h-24 text-orange/25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Happy <span className="text-orange">Pets</span> & Parents.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 p-6 md:p-8 rounded-2xl relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div>
                {testimonial.image && (
                  <div className="mb-4 h-48 w-full overflow-hidden rounded-xl bg-gray-200 shadow-inner border border-gray-200/80">
                    <img src={testimonial.image} alt={testimonial.pet} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="text-orange text-6xl font-display leading-none absolute -top-4 left-6 opacity-20">"</div>
                <p className="text-gray-800 mb-6 md:mb-8 relative z-10 font-body leading-relaxed text-base md:text-lg">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                {testimonial.image ? (
                  <img src={testimonial.image} alt={testimonial.pet} className="w-10 h-10 rounded-full object-cover border-2 border-orange/60 shadow-sm" />
                ) : (
                  <div className="w-10 h-10 bg-orange/10 text-orange rounded-full flex items-center justify-center font-bold font-display">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-display font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

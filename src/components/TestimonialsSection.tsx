import { motion } from 'framer-motion';
import { Doodle } from './Doodle';

const testimonials = [
  {
    name: 'Pet Parent',
    pet: 'Labrador',
    text: 'Dr. Kiran successfully treated my Labrador’s tumor through surgery. His two decades of experience really shone through, and his calm manner put us completely at ease during a stressful time.',
  },
  {
    name: 'Clinic Client',
    pet: 'Dog Owner',
    text: 'The facility is incredibly clean, modern, and well-organized. You can tell they have top-tier clinical equipment, which instantly made me feel confident that my pet was in the best hands.',
  },
  {
    name: 'Pet Parent',
    pet: 'Rescued Dog',
    text: 'My dog had severe diarrhea and recovered so quickly under Dr. Kiran’s expert treatment. The entire staff is incredibly friendly, professional, and they take the time to explain every detail of the treatment.',
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
              className="bg-gray-100 p-8 rounded-sm relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="text-orange text-6xl font-display leading-none absolute -top-4 left-6 opacity-20">"</div>
              <p className="text-gray-800 mb-8 relative z-10 font-body leading-relaxed text-lg">
                {testimonial.text}
              </p>
              <div>
                <h4 className="font-display font-bold text-xl">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.pet}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

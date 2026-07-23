import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Award, ShieldCheck, Heart } from 'lucide-react';
import { AboutSection } from '../components/AboutSection';
import { DoctorsSection } from '../components/DoctorsSection';
import { Doodle } from '../components/Doodle';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Pet Planet Dog Clinic & Animal Diagnostics</title>
        <meta name="description" content="Learn about Pet Planet Dog Clinic & Animal Diagnostics in RK Puram, Hyderabad. 17+ years of compassionate veterinary care and clinical excellence led by Dr. M. Kiran Kumar." />
      </Helmet>

      <div className="pt-28 pb-16 bg-black text-white relative overflow-hidden">
        {/* Doodles */}
        <Doodle type="paw" className="top-12 left-[10%] w-20 h-20 text-orange/20" />
        <Doodle type="sparkle" className="top-20 right-[15%] w-16 h-16 text-orange/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-orange">Pet Planet .</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            17+ Years of Dedicated Clinical Excellence & Advanced Animal Diagnostics in Saroornagar, Hyderabad.
          </motion.p>
        </div>
      </div>

      {/* Core About Section */}
      <AboutSection />

      {/* Clinic Pillars / Mission */}
      <section className="py-20 bg-gray-100 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Pet Parents Trust <span className="text-orange">Pet Planet</span></h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our clinical philosophy combines evidence-based veterinary medicine with genuine warmth for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="w-14 h-14 bg-orange/10 text-orange rounded-xl flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">17+ Years Legacy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Serving the RK Puram and Kothapet community for over 17 years with consistent clinical outcome standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="w-14 h-14 bg-orange/10 text-orange rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Advanced In-House Diagnostics</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                In-house digital radiography, ultrasonography, and blood lab diagnostic equipment for rapid therapeutic decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="w-14 h-14 bg-orange/10 text-orange rounded-xl flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Compassionate Patient Care</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Low-stress clinical environment tailored specifically for small animal wellness, prophylactic care, and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <DoctorsSection />
    </>
  );
}

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';
import { Doodle } from './Doodle';

export function LocationSection() {
  return (
    <section id="contact" className="py-24 bg-gray-100 relative z-20 overflow-hidden">
      {/* Decorative Doodles */}
      <Doodle type="paw" className="top-10 right-10 w-24 h-24 rotate-[15deg] text-orange/20" />
      <Doodle type="arrow" className="bottom-12 left-8 w-20 h-20 -rotate-45 text-orange/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden">
          
          <motion.div
            className="bg-black text-white p-12 md:p-16 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">
              Visit <span className="text-orange">Us.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm group-hover:bg-orange transition-colors">
                  <MapPin className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1">Clinic Address</h4>
                  <p className="text-gray-400 font-body leading-relaxed">
                    11-13-167, Andal Homes<br />
                    Alkapuri Road Number 3, RK Puram<br />
                    Saroornagar, Kothapet<br />
                    Hyderabad, Telangana 500102
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm group-hover:bg-orange transition-colors">
                  <Clock className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1">Clinical Operating Hours</h4>
                  <p className="text-gray-400 font-body leading-relaxed">Monday - Sunday: 8:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm group-hover:bg-orange transition-colors">
                  <Phone className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-1">Contact</h4>
                  <p className="text-gray-400">
                    <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-orange transition-colors">{WHATSAPP_NUMBER}</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="h-[400px] lg:h-auto relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15230.134371457497!2d78.5303254554199!3d17.37894980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f2441d8e13%3A0x6b1db94c348f0605!2sRamakrishnapuram%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

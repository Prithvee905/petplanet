import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, Mail } from 'lucide-react';
import { Doodle } from './Doodle';

const PHONE_DISPLAY = '+91 77026 61567';
const PHONE_RAW = '+917702661567';

// Directions URL — opens Google Maps and routes to clinic
const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Pet+Planet+Dog+Clinic+%26+Animal+Diagnostics,+Kothapet,+Hyderabad';

// Embedded map — use whatever embed the user provides; for now we use the existing one
// (will be updated once user shares the correct Maps link)
const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2897305249576!2d78.5472443!3d17.3680615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17.0!3m3!1m2!1s0x3bcb98b044de13e3%3A0x104276b317de0b6e!2sPet%20Planet%20Dog%20Clinic%20%26%20Animal%20Diagnostics!5e0!3m2!1sen!2sin!4v1722444000000!5m2!1sen!2sin';

export function LocationSection() {
  return (
    <section id="contact" className="py-12 sm:py-24 bg-gray-100 relative z-20 overflow-hidden">
      {/* Decorative Doodles — hidden on mobile for cleanliness */}
      <Doodle type="paw" className="hidden sm:block top-10 right-10 w-24 h-24 rotate-[15deg] text-orange/20" />
      <Doodle type="arrow" className="hidden sm:block bottom-12 left-8 w-20 h-20 -rotate-45 text-orange/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-2 lg:gap-0">

          {/* ── Info Panel ── */}
          <motion.div
            className="bg-black text-white p-6 sm:p-10 md:p-16 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 sm:mb-8">
              Visit <span className="text-orange">Us.</span>
            </h2>

            <div className="space-y-5 sm:space-y-8">

              {/* Address → opens Maps directions */}
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 sm:gap-4 group cursor-pointer"
                aria-label="Get directions to Pet Planet Clinic"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 flex items-center justify-center rounded-sm group-hover:bg-orange transition-colors shrink-0">
                  <MapPin size={18} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-xl mb-0.5 sm:mb-1 flex items-center gap-2">
                    Clinic Address
                    <Navigation size={12} className="text-orange opacity-70 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-gray-400 font-body leading-relaxed text-sm sm:text-base group-hover:text-orange/80 transition-colors">
                    11-13-167, Andal Homes<br />
                    Alkapuri Road No. 3, RK Puram<br />
                    Saroornagar, Kothapet<br />
                    Hyderabad, Telangana 500102
                  </p>
                  <span className="inline-block mt-1.5 text-xs text-orange/70 group-hover:text-orange font-medium transition-colors">
                    Tap for directions →
                  </span>
                </div>
              </a>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 flex items-center justify-center rounded-sm group-hover:bg-orange transition-colors shrink-0">
                  <Clock size={18} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-xl mb-0.5 sm:mb-1">Operating Hours</h4>
                  <p className="text-gray-400 font-body leading-relaxed text-sm sm:text-base">
                    Open <span className="text-white font-semibold">365 Days</span> &nbsp;·&nbsp; 9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

              {/* Phone → opens dialer */}
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-start gap-3 sm:gap-4 group cursor-pointer"
                aria-label="Call Pet Planet Clinic"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 flex items-center justify-center rounded-sm group-hover:bg-orange transition-colors shrink-0">
                  <Phone size={18} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-xl mb-0.5 sm:mb-1">Call Us</h4>
                  <p className="text-xl sm:text-2xl font-display font-bold text-orange group-hover:text-white transition-colors">
                    {PHONE_DISPLAY}
                  </p>
                  <span className="inline-block mt-1 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                    Tap to call directly →
                  </span>
                </div>
              </a>

              {/* Email → opens mail client */}
              <a
                href="mailto:petplanetanimaldiagnostics@gmail.com"
                className="flex items-start gap-3 sm:gap-4 group cursor-pointer"
                aria-label="Email Pet Planet Clinic"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 flex items-center justify-center rounded-sm group-hover:bg-orange transition-colors shrink-0">
                  <Mail size={18} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-xl mb-0.5 sm:mb-1">Email Us</h4>
                  <p className="text-sm sm:text-base font-body text-orange group-hover:text-white transition-colors break-all">
                    petplanetanimaldiagnostics@gmail.com
                  </p>
                  <span className="inline-block mt-1 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                    Tap to send an email →
                  </span>
                </div>
              </a>

            </div>
          </motion.div>

          {/* ── Map & Storefront Panel ── */}
          <motion.div
            className="flex flex-col h-full bg-black relative border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 🗺️ Interactive Google Map (Full Natural Colors + Red Location Pin) */}
            <div className="h-64 sm:h-80 lg:h-full min-h-[280px] relative border-b border-white/10">
              {/* Animated Red Location Pin Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-20 pointer-events-none flex flex-col items-center">
                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-2xl flex items-center gap-1.5 border-2 border-white animate-bounce">
                  <MapPin size={14} className="fill-white text-red-600" />
                  <span>Pet Planet Clinic</span>
                </div>
                <div className="w-3 h-3 bg-red-600 rotate-45 -mt-1.5 border-r-2 border-b-2 border-white" />
              </div>

              {/* Clickable overlay → opens Google Maps */}
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-end justify-center pb-4 group"
                aria-label="Open in Google Maps"
              >
                <span className="bg-black/85 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg group-hover:bg-orange transition-colors duration-300 backdrop-blur-sm border border-white/20">
                  <Navigation size={12} className="text-orange" />
                  Open in Google Maps
                </span>
              </a>

              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Pet Planet Clinic Location"
              />
            </div>

            {/* 📸 Storefront Photo Preview (Top Side Banner Fully Visible) */}
            <div className="relative h-60 sm:h-72 lg:h-80 w-full overflow-hidden group shrink-0">
              <img
                src="/clinic-storefront.jpg"
                alt="Pet Planet Clinic Storefront & Building"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                <span className="text-xs font-bold bg-orange text-white px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  🏥 Clinic Storefront & Main Entrance
                </span>
                <span className="text-xs text-gray-300 font-medium bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  Andal Homes, Kothapet
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

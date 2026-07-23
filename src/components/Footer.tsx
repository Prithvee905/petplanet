import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t-8 border-orange relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="bg-white p-1.5 rounded-lg shadow-md border border-white/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Pet Planet Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <span className="text-3xl font-display font-bold tracking-tight text-white group-hover:text-orange transition-colors">
                Pet Planet <span className="text-orange">.</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-4 leading-relaxed font-body">
              Advanced veterinary medical care, major & minor surgeries, and comprehensive animal diagnostics in Hyderabad.
            </p>
            <p className="text-sm text-gray-500 font-body">
              11-13-167, Andal Homes, Alkapuri Road No. 3, RK Puram, Saroornagar, Kothapet, Hyderabad 500102.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Diagnostics', path: '/diagnostics' },
                { name: 'Doctors', path: '/doctors' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['Vaccinations & Reminders', 'Online Consultation', 'Major & Minor Surgeries', 'Pet Store & Pharmacy', 'X-Ray & Ultrasound', 'Emergency Triage'].map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pet Planet Dog Clinic & Animal Diagnostics. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

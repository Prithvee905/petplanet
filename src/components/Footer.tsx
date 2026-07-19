import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t-8 border-orange relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-display font-bold tracking-tight text-white">
                Petplanet <span className="text-orange">.</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Premium veterinary care and diagnostics in Hyderabad. We treat your pets like family.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Doctors', path: '/doctors' },
                { name: 'Diagnostics', path: '/diagnostics' },
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
            <ul className="space-y-4">
              {['Vaccinations', 'Dental Care', 'X-Ray & Ultrasound', 'Emergency'].map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Petplanet Dog Clinic. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

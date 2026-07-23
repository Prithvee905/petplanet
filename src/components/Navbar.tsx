import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Diagnostics', href: '/diagnostics' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || !isHome ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded-lg shadow-md border border-white/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Pet Planet Logo" 
                  className="h-9 md:h-11 w-auto object-contain"
                />
              </div>
              <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-white group-hover:text-orange transition-colors">
                Pet Planet <span className="text-orange">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-orange',
                  location.pathname === link.href ? 'text-orange' : 'text-gray-200'
                )}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={onBookClick}
              className="bg-orange hover:bg-orange-hover text-white px-6 py-2.5 rounded-sm font-medium transition-transform hover:scale-105 active:scale-95"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm md:hidden"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-3xl font-display hover:text-orange transition-colors",
                location.pathname === link.href ? 'text-orange' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookClick();
            }}
            className="bg-orange text-white px-8 py-3 text-lg rounded-sm font-medium mt-4"
          >
            Book Appointment
          </button>
        </div>
      </motion.div>
    </>
  );
}

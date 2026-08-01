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
    { name: 'Team', href: '/doctors' },
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
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo-white.png" 
                alt="Pet Planet Logo" 
                className="h-14 sm:h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
              />
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
              className="text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Centered Card & Backdrop */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop click dismiss with background blur */}
          <motion.div 
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Centered Display Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden pointer-events-none">
            <motion.div
              className="pointer-events-auto w-full max-w-xs bg-black/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-2xl overflow-hidden text-center"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* Single vertical line layout in center */}
              <div className="flex flex-col divide-y divide-white/10 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "py-2.5 px-4 text-base font-medium transition-all duration-200 flex items-center justify-center",
                      location.pathname === link.href 
                        ? 'text-orange font-bold' 
                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-gradient-to-r from-orange to-amber-500 hover:from-orange/90 hover:to-amber-500/90 text-white py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-orange/30 active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
              >
                Book Appointment
              </button>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Bridal', href: '#bridal' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F5]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(44,36,32,0.06)] border-b border-[#E8DFD8]'
          : 'bg-[#FAF7F5]/80 backdrop-blur-sm border-b border-[#E8DFD8]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#hero"
            className="flex flex-col group whitespace-nowrap shrink-0 text-left"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-[#2C2420] group-hover:text-[#B38E5D] transition-colors uppercase">
              Glamour
            </span>
            <span className="text-[10px] tracking-[0.35em] text-[#8C7A70] uppercase font-sans -mt-1 font-medium">
              Beauty Salon · Lahore
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A3E39]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#B38E5D] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Phone */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={`tel:${SALON_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#6B5A52] hover:text-[#B38E5D] transition-colors whitespace-nowrap"
              title="Call Reception"
            >
              <Phone className="w-3.5 h-3.5 text-[#B38E5D]" />
              <span className="font-mono text-xs">{SALON_CONFIG.phone}</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-white bg-[#2C2420] hover:bg-[#B38E5D] rounded-full transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-[#DFCA9B]" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A3E39] hover:text-[#2C2420] hover:bg-[#EFE8E1] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F5] border-b border-[#E8DFD8] px-5 py-6 shadow-xl transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#3D332D] hover:text-[#B38E5D] py-1 transition-colors border-b border-[#F0E6DE]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={SALON_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-xs tracking-wider font-semibold text-[#1F5E39] bg-[#E8F5E9] hover:bg-[#D4EDDA] rounded-lg border border-[#C3E6CB] transition-colors"
              >
                Chat on WhatsApp (+92 300 4567890)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 text-xs tracking-wider font-semibold uppercase text-white bg-[#2C2420] hover:bg-[#B38E5D] rounded-lg transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

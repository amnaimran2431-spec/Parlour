import React from 'react';
import { SALON_CONFIG } from '../config/salonConfig';
import { Instagram, Facebook, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#231C18] text-[#D5CAC2] pt-16 pb-12 border-t border-[#3D322B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#3D322B]">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#hero" className="inline-block mb-4">
              <span className="font-serif text-3xl tracking-[0.2em] font-medium text-[#FAF7F5] uppercase block">
                Glamour
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#DFCA9B] uppercase font-sans -mt-1 block">
                Beauty Salon · Lahore
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-[#A89A91] leading-relaxed mb-6 max-w-sm">
              Lahore’s premier beauty atelier for couture bridal transformations,
              haute hair artistry, and clinical aesthetic treatments on prestigious M.M. Alam Road.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SALON_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#DFCA9B] hover:text-[#231C18] transition-colors flex items-center justify-center text-[#DFCA9B]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#DFCA9B] hover:text-[#231C18] transition-colors flex items-center justify-center text-[#DFCA9B]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SALON_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center text-[#DFCA9B]"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#DFCA9B] font-semibold mb-4">
              Atelier
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89A91]">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Menu</a></li>
              <li><a href="#bridal" className="hover:text-white transition-colors">Bridal Packages</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Before & After</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Maps</a></li>
            </ul>
          </div>

          {/* Key Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#DFCA9B] font-semibold mb-4">
              Featured Rituals
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89A91]">
              <li><a href="#services" className="hover:text-white transition-colors">Signature Baraat Bridal Look</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Balayage & Hair Lightening</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">HydraFacial 24K Gold Ritual</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Russian Gel Manicure</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Rose Petal Spa Pedicure</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Evening Party Glamour</a></li>
            </ul>
          </div>

          {/* Lahore Address & Concierge */}
          <div className="lg:col-span-3 text-xs text-[#A89A91] space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#DFCA9B] font-semibold mb-4">
              Lahore Concierge
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#DFCA9B] shrink-0 mt-0.5" />
              <span>{SALON_CONFIG.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#DFCA9B] shrink-0" />
              <span className="font-mono">{SALON_CONFIG.phone}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#DFCA9B] shrink-0" />
              <span>{SALON_CONFIG.email}</span>
            </div>
            <div className="pt-2 text-[11px] text-[#8C7A70]">
              <span>Mon - Sat: 10:30 AM - 8:30 PM · Sun: 11:00 AM - 7:30 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6A61]">
          <div>
            © {new Date().getFullYear()} Glamour Beauty Salon Lahore. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#booking" className="hover:text-[#DFCA9B] transition-colors">
              Online Booking
            </a>
            <span aria-hidden="true">·</span>
            <a href={SALON_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#DFCA9B] transition-colors">
              M.M. Alam Road Directions
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#DFCA9B] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

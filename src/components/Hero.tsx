import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Calendar, Sparkles, MapPin, Award, ShieldCheck } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { SALON_IMAGES } from '../data/salonData';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreServices }) => {
  const whatsappHeroUrl = SALON_CONFIG.createWhatsAppBookingLink({
    notes: 'Inquiry from website hero'
  });

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Measured Luxury Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={SALON_IMAGES.hero}
          alt="Glamour Beauty Salon luxury interior in Lahore"
          className="w-full h-full object-cover object-center filter brightness-[0.92]"
          referrerPolicy="no-referrer"
        />
        {/* Scrim: gentle soft ivory-blush glow from left, delicate vignette for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F5]/95 via-[#FAF7F5]/85 to-[#FAF7F5]/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F5] via-transparent to-[#FAF7F5]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtle Location Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 text-xs tracking-[0.25em] uppercase font-semibold text-[#8C633A]"
          >
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span>M.M. Alam Road, Gulberg III · Lahore</span>
            <span className="w-6 h-[1px] bg-[#C5A880]" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-[#2C2420] leading-[1.08] tracking-tight text-balance mb-6"
          >
            Reveal Your <br />
            <span className="font-normal italic text-[#9F7E4F] font-serif">True Beauty</span>
          </motion.h1>

          {/* Elegant Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A4C44] leading-relaxed mb-8 max-w-xl"
          >
            Lahore’s premier beauty atelier for couture bridal transformations,
            master balayage coloring, bespoke party glam, and rejuvenating clinical
            skin rituals in an ultra-luxurious sanctuary.
          </motion.p>

          {/* CTAs: WhatsApp + Appointment Booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            {/* WhatsApp Booking CTA */}
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-200 shadow-md shadow-[#25D366]/20 cursor-pointer active:scale-[0.98] whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp</span>
            </a>

            {/* Direct Booking Modal / Scroll CTA */}
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#2C2420] hover:bg-[#B38E5D] transition-all duration-200 shadow-md whitespace-nowrap cursor-pointer active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-[#DFCA9B]" />
              <span>Reserve Online</span>
            </button>

            {/* Explore Services Link */}
            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-medium text-[#4A3E39] hover:text-[#9F7E4F] transition-colors whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>View Services & Rates</span>
            </button>
          </motion.div>

          {/* Trust strip / Hallmark markers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-6 border-t border-[#E8DFD8] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#6B5A52]"
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#B38E5D] shrink-0" />
              <span>Award-Winning Bridal Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B38E5D] shrink-0" />
              <span>100% Medical Autoclave Sterilized</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <MapPin className="w-4 h-4 text-[#B38E5D] shrink-0" />
              <span>Valet Parking on M.M. Alam Road</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

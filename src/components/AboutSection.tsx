import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, HeartHandshake, Shield } from 'lucide-react';
import { SALON_IMAGES } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F6EFEA] border-y border-[#E8DFD8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#2C2420]/10 border border-[#E0D3C7]">
              <img
                src={SALON_IMAGES.about}
                alt="Glamour Beauty Salon luxury interior and lounge in Gulberg Lahore"
                className="w-full h-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating aesthetic quote card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#FAF7F5]/95 backdrop-blur-md rounded-xl border border-[#E8DFD8] shadow-lg">
                <p className="font-serif italic text-base sm:text-lg text-[#2C2420] leading-snug">
                  "Where modern haute aesthetics meet warm Lahore hospitality."
                </p>
                <div className="mt-2 text-xs uppercase tracking-widest text-[#9F7E4F] font-semibold">
                  M.M. Alam Road Atelier · Lahore
                </div>
              </div>
            </div>

            {/* Decorative background champagne accent glow */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#DFCA9B]/20 blur-2xl pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="text-xs tracking-[0.25em] uppercase font-semibold text-[#8C633A] mb-3">
              About Our Atelier
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2C2420] tracking-tight leading-[1.15] mb-6">
              An Oasis of Elegance in the Heart of Lahore
            </h2>

            <p className="text-base text-[#5A4C44] leading-relaxed mb-5">
              Founded on Lahore’s illustrious M.M. Alam Road, <strong>Glamour Beauty Salon</strong> was created with a singular vision: to curate an unmatched sanctuary where beauty is treated as fine art. We believe every woman possesses an intrinsic radiance that deserves bespoke celebration.
            </p>

            <p className="text-sm text-[#6B5A52] leading-relaxed mb-8">
              Whether preparing an unforgettable South Asian bride for her Baraat or perfecting a high-gloss balayage for an intimate dinner, our international certified stylists combine London & Dubai artistry with deep mastery of South Asian skin tones and hair textures.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#E2D5C9]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EADFD5] flex items-center justify-center shrink-0 text-[#8C633A]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C2420]">Private VIP Suites</h4>
                  <p className="text-xs text-[#7A6A61] mt-0.5">Discreet dressing sanctuaries for brides and families.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EADFD5] flex items-center justify-center shrink-0 text-[#8C633A]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C2420]">Sterilized Perfection</h4>
                  <p className="text-xs text-[#7A6A61] mt-0.5">Hospital-grade autoclave sterilization for every client.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EADFD5] flex items-center justify-center shrink-0 text-[#8C633A]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C2420]">Prestige Formulations</h4>
                  <p className="text-xs text-[#7A6A61] mt-0.5">Exclusively Olaplex, Kérastase, Charlotte Tilbury & NARS.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EADFD5] flex items-center justify-center shrink-0 text-[#8C633A]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2C2420]">Prompt Service Guarantee</h4>
                  <p className="text-xs text-[#7A6A61] mt-0.5">Dedicated booking slots with no chaotic delays on your big day.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

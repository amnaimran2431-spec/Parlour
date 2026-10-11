import React from 'react';
import { motion } from 'motion/react';
import { Crown, Check, MessageCircle, Calendar } from 'lucide-react';
import { BRIDAL_PACKAGES } from '../data/salonData';
import { SALON_CONFIG } from '../config/salonConfig';
import { BridalPackage } from '../types/salon';

interface BridalPackagesSectionProps {
  onSelectPackage: (pkg: BridalPackage) => void;
}

export const BridalPackagesSection: React.FC<BridalPackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="bridal" className="py-20 lg:py-28 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-semibold text-[#8C633A] mb-3">
            <Crown className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span>Bridal Couture Haute Artistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2C2420] tracking-tight mb-4">
            Exclusive Bridal Packages
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A52]">
            Curated specifically for Pakistani weddings. Every bride is granted an exclusive VIP Dressing Suite with private vanity mirrors and personal styling attendants.
          </p>
        </div>

        {/* Bridal Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRIDAL_PACKAGES.map((pkg, idx) => {
            const isFeatured = pkg.featured;
            const pkgWhatsAppUrl = SALON_CONFIG.createWhatsAppBookingLink({
              service: `Bridal Package: ${pkg.name}`,
              notes: `Inquiring about ${pkg.price}`
            });

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-[#2C2420] text-white shadow-2xl scale-[1.02] border-2 border-[#DFCA9B]'
                    : 'bg-white text-[#2C2420] border border-[#E8DFD8] shadow-sm hover:shadow-md'
                }`}
              >
                {isFeatured && (
                  <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#DFCA9B] mb-2 flex items-center gap-1.5">
                    <Crown className="w-3 h-3 fill-current" />
                    <span>Most Requested Package</span>
                  </div>
                )}

                <div>
                  <h3 className={`text-xl font-serif font-medium mb-1 ${isFeatured ? 'text-[#FAF7F5]' : 'text-[#2C2420]'}`}>
                    {pkg.name}
                  </h3>
                  
                  <div className={`text-xs mb-4 ${isFeatured ? 'text-[#D0C2B9]' : 'text-[#8C633A]'}`}>
                    {pkg.subtitle}
                  </div>

                  <div className="py-4 my-3 border-y border-dashed border-[#DFCA9B]/30 flex items-baseline justify-between">
                    <div>
                      <span className={`text-2xl font-serif font-semibold tracking-tight ${isFeatured ? 'text-[#DFCA9B]' : 'text-[#2C2420]'}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <span className={`text-xs ${isFeatured ? 'text-[#AFA29A]' : 'text-[#8C7A70]'}`}>
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Included list */}
                  <div className="space-y-2.5 my-6">
                    <div className={`text-xs uppercase tracking-wider font-semibold ${isFeatured ? 'text-[#DFCA9B]' : 'text-[#8C633A]'}`}>
                      Included Rituals:
                    </div>
                    {pkg.included.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isFeatured ? 'text-[#DFCA9B]' : 'text-[#8C633A]'}`} />
                        <span className={isFeatured ? 'text-[#EAE3DE]' : 'text-[#5A4C44]'}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Perks */}
                  <div className={`p-3 rounded-xl mb-6 text-xs ${isFeatured ? 'bg-white/5 text-[#E0D5CE]' : 'bg-[#FAF7F5] text-[#6B5A52]'}`}>
                    <span className="font-semibold block mb-1">VIP Suite Privilege:</span>
                    <span>{pkg.perks.join(' · ')}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-4 border-t border-[#DFCA9B]/20">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[#DFCA9B] text-[#2C2420] hover:bg-[#ebd9b3]'
                        : 'bg-[#2C2420] text-white hover:bg-[#8C633A]'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reserve Consultation</span>
                  </button>

                  <a
                    href={pkgWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2 px-3 rounded-xl text-xs font-medium tracking-wide transition-colors flex items-center justify-center gap-1.5 ${
                      isFeatured
                        ? 'text-[#DFCA9B] hover:text-white bg-white/5 hover:bg-white/10'
                        : 'text-[#1F5E39] bg-[#E8F5E9] hover:bg-[#D4EDDA]'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

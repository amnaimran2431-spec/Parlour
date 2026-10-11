import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, MessageCircle, ExternalLink, Car } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F6EFEA] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.25em] uppercase font-semibold text-[#8C633A] mb-3">
            Visit Our Atelier
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2C2420] tracking-tight mb-4">
            Contact & Location
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A52]">
            Conveniently situated in the prestigious heart of Lahore on M.M. Alam Road, Gulberg III.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#E0D3C7] shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-serif text-[#2C2420] mb-6">
                Glamour Beauty Salon Lahore
              </h3>

              <div className="space-y-6 text-sm text-[#4A3E39]">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F5] border border-[#E8DFD8] flex items-center justify-center shrink-0 text-[#8C633A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A70] mb-1">
                      Salon Address
                    </h4>
                    <p className="font-medium text-[#2C2420] leading-snug">
                      {SALON_CONFIG.address}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#8C633A] mt-1.5">
                      <Car className="w-3.5 h-3.5" />
                      <span>Complimentary valet parking available</span>
                    </div>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F5] border border-[#E8DFD8] flex items-center justify-center shrink-0 text-[#8C633A]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A70] mb-1">
                      Phone & Concierge
                    </h4>
                    <p className="font-mono text-sm text-[#2C2420]">
                      <a href={`tel:${SALON_CONFIG.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#B38E5D] transition-colors">
                        Mobile: {SALON_CONFIG.phone}
                      </a>
                    </p>
                    <p className="font-mono text-xs text-[#6B5A52] mt-0.5">
                      <a href={`tel:${SALON_CONFIG.landline.replace(/[^0-9+]/g, '')}`} className="hover:text-[#B38E5D] transition-colors">
                        Landline: {SALON_CONFIG.landline}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F5] border border-[#E8DFD8] flex items-center justify-center shrink-0 text-[#8C633A]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A70] mb-1">
                      Business Hours
                    </h4>
                    <p className="text-xs font-medium text-[#2C2420]">
                      {SALON_CONFIG.businessHours.weekdays}
                    </p>
                    <p className="text-xs text-[#6B5A52] mt-0.5">
                      {SALON_CONFIG.businessHours.sunday}
                    </p>
                    <p className="text-[11px] text-[#8C633A] italic mt-1">
                      {SALON_CONFIG.businessHours.bridalNote}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F5] border border-[#E8DFD8] flex items-center justify-center shrink-0 text-[#8C633A]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A70] mb-1">
                      Direct Inquiries
                    </h4>
                    <a
                      href={`mailto:${SALON_CONFIG.email}`}
                      className="text-xs font-mono text-[#2C2420] hover:text-[#B38E5D] transition-colors"
                    >
                      {SALON_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-6 mt-6 border-t border-[#F0E6DE]">
              <a
                href={SALON_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat with Salon Reception on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Google Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E0D3C7] shadow-lg flex flex-col"
          >
            {/* Top Bar above map */}
            <div className="p-4 sm:px-6 bg-[#FAF7F5] border-b border-[#E8DFD8] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-[#4A3E39]">
                <MapPin className="w-4 h-4 text-[#8C633A]" />
                <span>Gulberg III, Lahore, Punjab, Pakistan</span>
              </div>
              <a
                href={SALON_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#8C633A] hover:text-[#2C2420] font-semibold transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Map Iframe */}
            <div className="w-full flex-1 min-h-[380px] relative bg-[#EFE8E1]">
              <iframe
                title="Google Maps Glamour Beauty Salon Lahore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.398670557476!2d74.341498!3d31.508532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a27892557%3A0x6b4efb387e67f08c!2sM.M.%20Alam%20Rd%2C%20Gulberg%20III%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1712000000000!5m2!1sen!2s"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Bottom Landmark Notice */}
            <div className="p-4 bg-[#FAF7F5] border-t border-[#E8DFD8] flex flex-wrap items-center justify-between gap-3 text-xs text-[#6B5A52]">
              <span>Landmark: Near Cafe Aylanto & Xinhua Mall, Gulberg III</span>
              <span className="font-medium text-[#2C2420]">GPS: 31.5085° N, 74.3512° E</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

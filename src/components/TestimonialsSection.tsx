import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F6EFEA] border-y border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.25em] uppercase font-semibold text-[#8C633A] mb-3">
            Voices of Delight
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2C2420] tracking-tight mb-4">
            Loved by Lahore’s Finest
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A52]">
            Over 12,000 brides and beauty aficionados have trusted Glamour Beauty Salon with their most cherished occasions.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#E0D3C7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#DFCA9B] text-[#DFCA9B]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#DFCA9B]/50" />
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-[#5A4C44] leading-relaxed mb-6 italic">
                  "{t.review}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#F0E6DE]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-serif font-semibold text-[#2C2420]">
                      {t.name}
                    </h4>
                    <div className="text-[11px] text-[#8C7A70] flex items-center gap-1 mt-0.5">
                      <span>{t.location}</span>
                      <span>·</span>
                      <span>{t.date}</span>
                    </div>
                  </div>
                  {t.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#1F5E39] font-medium" title="Verified Client">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                {/* Service Tag */}
                <div className="mt-2 text-[11px] text-[#8C633A] font-medium tracking-wide">
                  {t.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary trust bar */}
        <div className="mt-12 text-center text-xs text-[#6B5A52]">
          <span>Rated <strong>4.9 / 5.0</strong> across 1,840+ verified client appointments in Lahore</span>
          <span className="mx-2">·</span>
          <span>Google Business & Social Reviews</span>
        </div>
      </div>
    </section>
  );
};

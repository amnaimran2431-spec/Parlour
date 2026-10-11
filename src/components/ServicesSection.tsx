import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/salonData';
import { ServiceItem } from '../types/salon';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Styling & Color' },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'makeup', label: 'Party Makeup' },
    { id: 'skin', label: 'Facial Aesthetics' },
    { id: 'nails', label: 'Manicure & Pedicure' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(item => {
        if (activeCategory === 'hair') return item.category === 'hair';
        if (activeCategory === 'nails') return item.category === 'nails';
        return item.category === activeCategory;
      });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs tracking-[0.25em] uppercase font-semibold text-[#8C633A] mb-3">
            Haute Couture Beauty Menu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2C2420] tracking-tight mb-4">
            Our Signature Services
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A52]">
            Every ritual is conducted by master specialists using premium imported formulations in sterile, private styling stations.
          </p>

          {/* Interactive Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#F0E6DE] rounded-full max-w-xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#2C2420] text-white shadow-sm'
                    : 'text-[#6B5A52] hover:text-[#2C2420] hover:bg-[#FAF7F5]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD8] shadow-[0_4px_20px_rgba(44,36,32,0.04)] hover:shadow-[0_8px_30px_rgba(44,36,32,0.08)] transition-all duration-300 flex flex-col group"
            >
              {/* Service Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EAE4]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {/* Duration & Category Clean Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/95 font-medium drop-shadow-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#DFCA9B]" />
                    <span>{service.duration}</span>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#DFCA9B]">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#2C2420] group-hover:text-[#8C633A] transition-colors mb-1.5">
                    {service.name}
                  </h3>
                  
                  <div className="text-xs text-[#9F7E4F] font-medium tracking-wide mb-3">
                    {service.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-[#6B5A52] leading-relaxed mb-5 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="text-xs text-[#5A4C44] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#8C633A] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#F0E6DE] flex items-center justify-between">
                  <div className="text-xs text-[#8C7A70]">
                    <span>Consultation Included</span>
                  </div>
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C2420] hover:text-[#8C633A] group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8C633A]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { SALON_IMAGES } from '../data/salonData';

interface TransformationItem {
  id: string;
  title: string;
  category: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImg: string;
  afterImg: string;
  stylist: string;
  details: string;
}

export const BeforeAfterGallery: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const transformations: TransformationItem[] = [
    {
      id: 'trans-1',
      title: 'Signature Baraat Royal Bridal Glow',
      category: 'bridal',
      beforeLabel: 'Initial Skin Consultation',
      afterLabel: 'Completed Regal Baraat Look',
      beforeImg: SALON_IMAGES.about,
      afterImg: SALON_IMAGES.bridal,
      stylist: 'Ayla R. · Master Bridal Specialist',
      details: 'Complexion harmonized with dewy airbrush foundation, customized warm champagne eye contour, and intricate royal matha-patti placement.'
    },
    {
      id: 'trans-2',
      title: 'Honey Melt Balayage & Silk Wave Texture',
      category: 'hair',
      beforeLabel: 'Single Tone Brown Base',
      afterLabel: 'Dimensional Balayage Glow',
      beforeImg: SALON_IMAGES.hairColor,
      afterImg: SALON_IMAGES.hairStyling,
      stylist: 'Danial K. · Senior Colorist',
      details: 'Lifted with bond-building Olaplex, hand-painted babylights, and finished with a rich gloss toner for high shine.'
    },
    {
      id: 'trans-3',
      title: '24K Gold HydraFacial Glass Radiance',
      category: 'skin',
      beforeLabel: 'Dehydrated, Dull Texture',
      afterLabel: 'Plumped Glass Skin Radiance',
      beforeImg: SALON_IMAGES.facial,
      afterImg: SALON_IMAGES.facial,
      stylist: 'Zoya M. · Aesthetic Lead',
      details: 'Pore decongestion, ultrasound peptide infusion, and cryogenic sculpting restoring barrier firmness without redness.'
    },
    {
      id: 'trans-4',
      title: 'Sangeet Night Soft Bronze Glam',
      category: 'makeup',
      beforeLabel: 'Bare Faced Consultation',
      afterLabel: 'Evening Festive Glamour',
      beforeImg: SALON_IMAGES.about,
      afterImg: SALON_IMAGES.partyGlam,
      stylist: 'Hiba S. · Celebrity Makeup Artist',
      details: 'Sweat-resistant matte-velvet base with customized wispy mink lashes and high-beam cheekbone sculpting.'
    }
  ];

  const currentItem = transformations[activeItemIndex];

  const filteredItems = activeFilter === 'all'
    ? transformations
    : transformations.filter(t => t.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F6EFEA] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs tracking-[0.25em] uppercase font-semibold text-[#8C633A] mb-3">
            Real Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2C2420] tracking-tight mb-4">
            Before & After Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A52]">
            Experience the artistry of our master practitioners. Slide across or explore our verified transformation portfolio.
          </p>
        </div>

        {/* Featured Interactive Comparison Slider Card */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#E0D3C7] shadow-xl p-6 lg:p-8 mb-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Image Split View */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden select-none bg-[#2C2420] shadow-inner">
                {/* After Image (Full background) */}
                <img
                  src={currentItem.afterImg}
                  alt={currentItem.afterLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full uppercase tracking-wider z-10">
                  After
                </span>

                {/* Before Image (Clipped by slider position) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentItem.beforeImg}
                    alt={currentItem.beforeLabel}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                    Before
                  </span>
                </div>

                {/* Vertical Divider Line with handle */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-[#2C2420]">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#B38E5D]" />
                  </div>
                </div>

                {/* Invisible native range input on top for touch/mouse drag */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  aria-label="Before and after comparison slider"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#8C7A70] mt-3">
                <span>◀ Slide left to reveal 'After' look</span>
                <span>Slide right to see 'Before' ▶</span>
              </div>
            </div>

            {/* Transformation Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C633A] uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Case Study</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#2C2420] mb-3 leading-snug">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5A52] leading-relaxed mb-5">
                  {currentItem.details}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#F0E6DE] text-xs text-[#5A4C44]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B38E5D]" />
                    <span><strong>Master Stylist:</strong> {currentItem.stylist}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B38E5D]" />
                    <span><strong>Location:</strong> Private VIP Bridal Atelier, Gulberg III</span>
                  </div>
                </div>
              </div>

              {/* Selector buttons to switch featured transformation */}
              <div className="pt-6 mt-6 border-t border-[#F0E6DE]">
                <div className="text-xs font-medium text-[#8C7A70] mb-2 uppercase tracking-wider">
                  Select Transformation:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {transformations.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveItemIndex(idx);
                        setSliderPosition(50);
                      }}
                      className={`px-2.5 py-2 text-left text-xs rounded-lg transition-all cursor-pointer truncate ${
                        activeItemIndex === idx
                          ? 'bg-[#2C2420] text-white font-medium shadow-sm'
                          : 'bg-[#F6EFEA] text-[#6B5A52] hover:bg-[#EAE0D7]'
                      }`}
                    >
                      {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Image Grid with Hover Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
                const el = document.getElementById('gallery');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white rounded-xl overflow-hidden border border-[#E8DFD8] shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="relative aspect-square overflow-hidden bg-[#EFE8E1]">
                <img
                  src={item.afterImg}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-medium">Click to compare before/after</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-serif font-medium text-[#2C2420] truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-[#8C7A70] mt-1 truncate">
                  {item.stylist}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

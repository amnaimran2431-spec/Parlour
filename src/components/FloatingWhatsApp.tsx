import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const quickMessageUrl = SALON_CONFIG.createWhatsAppBookingLink({
    notes: 'Quick chat from website floating button'
  });

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Optional luxury prompt bubble */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-[#E0D3C7] max-w-xs text-xs text-[#2C2420] relative mb-1 animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#8C7A70] hover:text-[#2C2420] cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-semibold text-[#8C633A] mb-1">
            Need quick assistance?
          </div>
          <p className="text-[#6B5A52] leading-snug">
            Chat directly with our Lahore reception team on WhatsApp for immediate appointments and bridal quotes.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={quickMessageUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95"
        aria-label="Chat with Glamour Beauty Salon on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap hidden sm:inline-block">
          WhatsApp Reception
        </span>
      </a>
    </div>
  );
};

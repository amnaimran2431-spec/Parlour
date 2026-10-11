import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, User, MessageCircle, Clock, Sparkles, CheckCircle, Copy, Check } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { SERVICES_LIST, BRIDAL_PACKAGES } from '../data/salonData';
import { BookingFormData, ServiceItem, BridalPackage } from '../types/salon';

interface BookingSectionProps {
  preselectedService?: ServiceItem | null;
  preselectedPackage?: BridalPackage | null;
  onClearPreselection?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService,
  preselectedPackage,
  onClearPreselection,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: 'bridal-makeup',
    preferredDate: '',
    preferredTime: '14:00',
    artistPreference: 'Master Stylist / Director',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    id: string;
    details: BookingFormData;
    serviceName: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Set initial minimum date to tomorrow
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        serviceId: preselectedService.id,
        notes: `Selected service: ${preselectedService.name} (${preselectedService.price})`
      }));
    } else if (preselectedPackage) {
      setFormData(prev => ({
        ...prev,
        serviceId: `package-${preselectedPackage.id}`,
        notes: `Selected Bridal Package: ${preselectedPackage.name} (${preselectedPackage.price})`
      }));
    }
  }, [preselectedService, preselectedPackage]);

  const allServiceOptions = [
    { group: 'Signature Services', items: SERVICES_LIST.map(s => ({ id: s.id, name: `${s.name} (${s.price})` })) },
    { group: 'Bridal Packages', items: BRIDAL_PACKAGES.map(p => ({ id: `package-${p.id}`, name: `${p.name} (${p.price})` })) }
  ];

  const getSelectedServiceName = (): string => {
    if (formData.serviceId.startsWith('package-')) {
      const pId = formData.serviceId.replace('package-', '');
      const found = BRIDAL_PACKAGES.find(p => p.id === pId);
      return found ? found.name : 'Bridal Package';
    }
    const found = SERVICES_LIST.find(s => s.id === formData.serviceId);
    return found ? found.name : 'Beauty Service';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppDirect = () => {
    const serviceName = getSelectedServiceName();
    const link = SALON_CONFIG.createWhatsAppBookingLink({
      name: formData.fullName || undefined,
      phone: formData.phone || undefined,
      service: serviceName,
      date: formData.preferredDate || undefined,
      time: formData.preferredTime || undefined,
      notes: formData.notes || undefined,
    });
    window.open(link, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingId = `GLM-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedBooking({
        id: bookingId,
        details: { ...formData },
        serviceName: getSelectedServiceName(),
      });
    }, 600);
  };

  const handleCopySummary = () => {
    if (!confirmedBooking) return;
    const text = `Booking Ref: ${confirmedBooking.id}\nName: ${confirmedBooking.details.fullName}\nService: ${confirmedBooking.serviceName}\nDate: ${confirmedBooking.details.preferredDate}\nTime: ${confirmedBooking.details.preferredTime}\nSalon: Glamour Beauty Salon, M.M. Alam Road, Gulberg III Lahore`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.25em] uppercase font-semibold text-[#8C633A] mb-3">
              VIP Reservation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#2C2420] tracking-tight mb-4">
              Book Your Appointment
            </h2>
            <p className="text-sm sm:text-base text-[#6B5A52]">
              Reserve your personalized session online or connect directly with our bridal concierge via WhatsApp.
            </p>
          </div>

          {/* Booking Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD8] shadow-xl shadow-[#2C2420]/5 relative overflow-hidden">
            {/* Soft decorative background tone */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F6EFEA] rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Preselection notice if any */}
              {(preselectedService || preselectedPackage) && (
                <div className="p-3 bg-[#F6EFEA] border border-[#E0D3C7] rounded-xl flex items-center justify-between text-xs text-[#8C633A]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#B38E5D]" />
                    <span>
                      Selected:{' '}
                      <strong>
                        {preselectedService ? preselectedService.name : preselectedPackage?.name}
                      </strong>
                    </span>
                  </div>
                  {onClearPreselection && (
                    <button
                      type="button"
                      onClick={onClearPreselection}
                      className="underline text-[#6B5A52] hover:text-[#2C2420] cursor-pointer"
                    >
                      Reset selection
                    </button>
                  )}
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E39] uppercase tracking-wider mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C7A70] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Ayesha Malik"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F5] border border-[#E8DFD8] rounded-xl text-sm text-[#2C2420] placeholder-[#A09289] focus:outline-none focus:border-[#B38E5D] focus:ring-1 focus:ring-[#B38E5D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E39] uppercase tracking-wider mb-2">
                    Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8C7A70] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="0300 1234567 or +92 300 1234567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F5] border border-[#E8DFD8] rounded-xl text-sm text-[#2C2420] placeholder-[#A09289] focus:outline-none focus:border-[#B38E5D] focus:ring-1 focus:ring-[#B38E5D] transition-colors font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#4A3E39] uppercase tracking-wider mb-2">
                  Select Desired Service or Bridal Package
                </label>
                <select
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#E8DFD8] rounded-xl text-sm text-[#2C2420] focus:outline-none focus:border-[#B38E5D] focus:ring-1 focus:ring-[#B38E5D] transition-colors cursor-pointer"
                >
                  {allServiceOptions.map(group => (
                    <optgroup key={group.group} label={group.group}>
                      {group.items.map(item => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E39] uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#8C7A70] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      name="preferredDate"
                      min={today}
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F5] border border-[#E8DFD8] rounded-xl text-sm text-[#2C2420] focus:outline-none focus:border-[#B38E5D] focus:ring-1 focus:ring-[#B38E5D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E39] uppercase tracking-wider mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#8C7A70] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF7F5] border border-[#E8DFD8] rounded-xl text-sm text-[#2C2420] focus:outline-none focus:border-[#B38E5D] focus:ring-1 focus:ring-[#B38E5D] transition-colors cursor-pointer"
                    >
                      <option value="11:00">11:00 AM (Morning Glow)</option>
                      <option value="13:00">01:00 PM (Early Afternoon)</option>
                      <option value="15:00">03:00 PM (Afternoon)</option>
                      <option value="17:00">05:00 PM (Bridal / Evening Glam)</option>
                      <option value="19:00">07:00 PM (Sunset Slot)</option>
                      <option value="08:00">08:00 AM (Early Bridal VIP Slot)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Stylist Preference */}
              <div>
                <label className="block text-xs font-semibold text-[#4A3E39] uppercase tracking-wider mb-2">
                  Stylist / Artist Preference
                </label>
                <select
                  name="artistPreference"
                  value={formData.artistPreference}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#E8DFD8] rounded-xl text-sm text-[#2C2420] focus:outline-none focus:border-[#B38E5D] focus:ring-1 focus:ring-[#B38E5D] transition-colors cursor-pointer"
                >
                  <option value="Master Stylist / Director">Creative Director / Master Bridal Specialist</option>
                  <option value="Senior Artist">Senior Artist</option>
                  <option value="First Available">First Available Certified Specialist</option>
                </select>
              </div>

              {/* Special Notes / Requests */}
              <div>
                <label className="block text-xs font-semibold text-[#4A3E39] uppercase tracking-wider mb-2">
                  Special Notes / Bridal Dress Color / Details
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="e.g., Looking for a soft dewy glow for my Baraat lehenga, need hair styling with fresh flowers..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#E8DFD8] rounded-xl text-sm text-[#2C2420] placeholder-[#A09289] focus:outline-none focus:border-[#B38E5D] focus:ring-1 focus:ring-[#B38E5D] transition-colors resize-none"
                />
              </div>

              {/* Two Booking Actions: WhatsApp & Instant Submission */}
              <div className="pt-4 border-t border-[#F0E6DE] flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#2C2420] hover:bg-[#8C633A] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  {isSubmitting ? (
                    <span>Securing Slot...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#DFCA9B]" />
                      <span>Submit Online Reservation</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-[#8C7A70]">
                <span>No advance payment needed for initial consultation. Our concierge will confirm availability within 30 minutes.</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmedBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#E0D3C7] shadow-2xl relative"
            >
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#E8F5E9] text-[#1F5E39] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#2C2420] mb-1">
                  Reservation Received!
                </h3>
                <p className="text-xs text-[#8C7A70]">
                  Booking Reference: <strong className="font-mono text-[#2C2420]">{confirmedBooking.id}</strong>
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="bg-[#FAF7F5] rounded-2xl p-4 border border-[#E8DFD8] space-y-2.5 text-xs text-[#4A3E39] mb-6">
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Client:</span>
                  <span className="font-semibold text-[#2C2420]">{confirmedBooking.details.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Contact:</span>
                  <span className="font-mono">{confirmedBooking.details.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Service:</span>
                  <span className="font-medium text-[#8C633A]">{confirmedBooking.serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Date & Slot:</span>
                  <span>{confirmedBooking.details.preferredDate || 'To be scheduled'} ({confirmedBooking.details.preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Stylist Tier:</span>
                  <span>{confirmedBooking.details.artistPreference}</span>
                </div>
                <div className="pt-2 border-t border-[#E8DFD8] text-[11px] text-[#6B5A52]">
                  <span>Location: 42-B, M.M. Alam Road, Gulberg III, Lahore</span>
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    const link = SALON_CONFIG.createWhatsAppBookingLink({
                      name: confirmedBooking.details.fullName,
                      phone: confirmedBooking.details.phone,
                      service: confirmedBooking.serviceName,
                      date: confirmedBooking.details.preferredDate,
                      time: confirmedBooking.details.preferredTime,
                      notes: `Ref: ${confirmedBooking.id}. ${confirmedBooking.details.notes}`
                    });
                    window.open(link, '_blank');
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Notify Reception via WhatsApp</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={handleCopySummary}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-medium bg-[#F6EFEA] hover:bg-[#EAE0D7] text-[#4A3E39] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Summary'}</span>
                  </button>

                  <button
                    onClick={() => setConfirmedBooking(null)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-medium bg-[#2C2420] text-white hover:bg-[#8C633A] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

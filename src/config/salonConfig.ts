export const SALON_CONFIG = {
  salonName: "Glamour Beauty Salon",
  tagline: "Reveal Your True Beauty",
  city: "Lahore, Pakistan",
  neighborhood: "Gulberg III & DHA",
  address: "42-B, M.M. Alam Road, Gulberg III, Lahore, Pakistan",
  googleMapsUrl: "https://maps.google.com/?q=MM+Alam+Road+Gulberg+Lahore",
  phone: "+92 300 4567890",
  landline: "+92 42 35789012",
  email: "concierge@glamoursalonlahore.com",
  // International format without + or spaces for wa.me API
  whatsappNumber: "923004567890",
  businessHours: {
    weekdays: "Monday – Saturday: 10:30 AM – 8:30 PM",
    sunday: "Sunday: 11:00 AM – 7:30 PM",
    bridalNote: "Early morning bridal appointments available upon request from 7:00 AM"
  },
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    whatsapp: "https://wa.me/923004567890"
  },
  // WhatsApp message generator
  createWhatsAppBookingLink: (details: {
    name?: string;
    phone?: string;
    service?: string;
    date?: string;
    time?: string;
    notes?: string;
  }) => {
    let message = `Hello Glamour Beauty Salon Lahore! ✨\nI would like to inquire about an appointment:`;
    if (details.name) message += `\n- Name: ${details.name}`;
    if (details.phone) message += `\n- Contact: ${details.phone}`;
    if (details.service) message += `\n- Service Requested: ${details.service}`;
    if (details.date) message += `\n- Preferred Date: ${details.date}`;
    if (details.time) message += `\n- Preferred Slot: ${details.time}`;
    if (details.notes) message += `\n- Special Requests: ${details.notes}`;
    message += `\n\nPlease let me know your availability. Thank you!`;
    return `https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
};

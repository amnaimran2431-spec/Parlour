import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { BridalPackagesSection } from './components/BridalPackagesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceItem, BridalPackage } from './types/salon';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<BridalPackage | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setSelectedPackage(null);
    scrollToBooking();
  };

  const handleSelectPackage = (pkg: BridalPackage) => {
    setSelectedPackage(pkg);
    setSelectedService(null);
    scrollToBooking();
  };

  const handleClearPreselection = () => {
    setSelectedService(null);
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#2C2420] flex flex-col font-sans selection:bg-[#EAD6D0] selection:text-[#3B2C24]">
      {/* 1. Sticky Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      <main className="flex-1">
        {/* 2. Full-Screen Hero */}
        <Hero
          onBookClick={scrollToBooking}
          onExploreServices={scrollToServices}
        />

        {/* 3. About Us Section */}
        <AboutSection />

        {/* 4. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Before & After Gallery */}
        <BeforeAfterGallery />

        {/* 6. Bridal Packages Section */}
        <BridalPackagesSection onSelectPackage={handleSelectPackage} />

        {/* 7. Testimonials Section */}
        <TestimonialsSection />

        {/* 8. Appointment Booking Form */}
        <BookingSection
          preselectedService={selectedService}
          preselectedPackage={selectedPackage}
          onClearPreselection={handleClearPreselection}
        />

        {/* 9. Contact & Maps Section */}
        <ContactSection />
      </main>

      {/* 10. Premium Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

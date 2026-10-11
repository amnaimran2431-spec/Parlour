export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'bridal' | 'makeup' | 'skin' | 'nails';
  tagline: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export interface BridalPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  duration: string;
  bestFor: string;
  included: string[];
  perks: string[];
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'skin' | 'makeup';
  beforeImage: string;
  afterImage: string;
  description: string;
  stylist: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  artistPreference: string;
  notes: string;
}

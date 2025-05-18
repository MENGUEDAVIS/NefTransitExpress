export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType: string;
  details?: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: number;
  content: string;
  author: string;
  position: string;
  rating: number;
  initials: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

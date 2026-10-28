export interface SchoolConfig {
  name: string;
  shortName: string;
  monogram: string;
  logoUrl?: string;
  tagline: string;
  motto: string;
  establishedYear: string;
  location: {
    city: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  contact: {
    phonePrimary: string;
    phoneSecondary: string;
    email: string;
    officeHours: string;
  };
  whatsapp: {
    number: string; // international format without + or spaces e.g., '919876543210'
    isConfigured: boolean;
    defaultMessage: string;
  };
  developer: {
    name: string;
    credit: string;
    email: string;
    phone: string;
    whatsappNumber: string;
    portfolioUrl: string;
    offerText: string;
  };
  affiliationNote: string;
  demoDisclaimer: string;
}

export interface AcademicProgram {
  id: string;
  title: string;
  grades: string;
  ageGroup: string;
  description: string;
  features: string[];
  sampleSubjects: string[];
  icon: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'academic' | 'sports' | 'technology' | 'infrastructure';
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  highlights: string[];
  sampleBadge?: string;
}

export interface Notice {
  id: string;
  title: string;
  category: 'Admissions' | 'Academic' | 'Events' | 'Holidays';
  date: string;
  isUrgent?: boolean;
  content: string;
  fileLabel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Sports' | 'Laboratories' | 'Events' | 'Arts';
  imageUrl: string;
  description: string;
  aspect?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  award: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

import type { SchoolConfig, AcademicProgram, Facility, Notice, GalleryItem, Achievement, FAQItem } from '../types';

export const siteConfig: SchoolConfig = {
  name: "Dholpur Public Academy",
  shortName: "DPA Dholpur",
  monogram: "DPA",
  logoUrl: "/logo.png",
  tagline: "Empowering Minds, Shaping Tomorrow's Leaders",
  motto: "Learn • Grow • Succeed",
  establishedYear: "2014 (Sample)",
  location: {
    city: "Dholpur",
    state: "Rajasthan",
    country: "India",
    fullAddress: "Campus Plot 14, Near Chambal Road, Dholpur, Rajasthan - 328001 (SAMPLE LOCATION)",
  },
  contact: {
    phonePrimary: "+91 (05642) 220XXX (Sample)",
    phoneSecondary: "+91 98765 43210 (Sample Enquiry)",
    email: "admissions@dholpurpublicacademy.sample.in",
    officeHours: "Monday to Saturday: 8:00 AM – 3:30 PM",
  },
  whatsapp: {
    // Leave configured to demonstrate real WhatsApp integration with prefilled message
    // If you wish to simulate an unconfigured phone, set isConfigured: false or number: ""
    number: "919876543210", 
    isConfigured: true,
    defaultMessage: "Hello Dholpur Public Academy! I am interested in admission for the upcoming academic session. Please share details.",
  },
  developer: {
    name: "Pankaj",
    credit: "Website concept by Pankaj | Web Development",
    email: "pankaj.developer@example.com",
    phone: "+91 98765 01234",
    whatsappNumber: "919876501234",
    portfolioUrl: "https://github.com/",
    offerText: "Looking for an attractive, modern, and affordable website for your school, college, or coaching institute in Rajasthan? I design lightning-fast websites with online admissions, notices, photo galleries & mobile-friendly layouts.",
  },
  affiliationNote: "CBSE Curriculum Framework & NCERT Guidelines (Sample Demonstration Concept - Not an Affiliation Claim)",
  demoDisclaimer: "DEMO WEBSITE — Sample school information. Designed by freelance developer Pankaj to showcase school website solutions for local institutions.",
};

export const samplePrograms: AcademicProgram[] = [
  {
    id: "pre-primary",
    title: "Foundational & Pre-Primary Wing",
    grades: "Playgroup, Nursery, LKG & UKG",
    ageGroup: "Ages 3 to 6 Years",
    description: "Activity-based experiential learning fostering early language development, numeracy, social skills, and creative imagination in a vibrant, safe play-way atmosphere.",
    features: [
      "Montessori-inspired sensory learning corners",
      "Phonics & early storytelling sessions",
      "Gross and fine motor skill developmental games",
      "Gentle child-centered pastoral care"
    ],
    sampleSubjects: ["Early Literacy (Hindi & English)", "Basic Numeracy", "Art & Craft", "Nature Discovery", "Rhymes & Music"],
    icon: "Sparkles"
  },
  {
    id: "primary",
    title: "Primary Wing",
    grades: "Classes I to V",
    ageGroup: "Ages 6 to 11 Years",
    description: "Building strong foundational literacy, scientific curiosity, computational thinking, and artistic self-expression with interactive classroom modules.",
    features: [
      "Activity-integrated NCERT aligned syllabus",
      "Bilingual proficiency (Hindi & English fluency)",
      "Hands-on mental arithmetic & problem solving",
      "Introduction to environmental studies & values"
    ],
    sampleSubjects: ["English Language & Literature", "Hindi", "Mathematics", "Environmental Studies (EVS)", "Computer Basics", "Visual & Performing Arts"],
    icon: "BookOpen"
  },
  {
    id: "middle",
    title: "Middle School Wing",
    grades: "Classes VI to VIII",
    ageGroup: "Ages 11 to 14 Years",
    description: "Transitioning to analytical reasoning, scientific experimentation, collaborative group research, and enhanced linguistic mastery.",
    features: [
      "Dedicated laboratory visits for physics, chemistry & biology",
      "Digital literacy & fundamental block coding",
      "Regular public speaking & debate platforms",
      "Mandatory sports & health education"
    ],
    sampleSubjects: ["English", "Hindi", "Sanskrit (Third Language)", "Mathematics", "Integrated Science", "Social Sciences (History, Civics, Geography)", "Information Technology"],
    icon: "GraduationCap"
  },
  {
    id: "secondary",
    title: "Secondary & Senior Secondary Wing",
    grades: "Classes IX to XII",
    ageGroup: "Ages 14 to 18 Years",
    description: "Rigorous academic preparation, career guidance, conceptual clarity for board examinations, and holistic leadership training.",
    features: [
      "Specialized Science, Commerce & Humanities streams",
      "Continuous formative assessment & mock board drills",
      "Career counseling & entrance guidance seminars",
      "Inter-school symposiums & science exhibitions"
    ],
    sampleSubjects: ["Physics, Chemistry, Biology / Mathematics", "Accountancy, Business Studies, Economics", "History, Political Science, Psychology", "Applied Mathematics & Computer Science (Python)"],
    icon: "Award"
  }
];

export const sampleFacilities: Facility[] = [
  {
    id: "science-labs",
    title: "Advanced Composite Science Labs",
    category: "academic",
    shortDesc: "Equipped physics, chemistry, and biology setups encouraging hands-on discovery and safety.",
    fullDesc: "Spacious, well-ventilated laboratory spaces equipped with precision balances, microscopes, specimen collections, and chemical apparatus adhering to strict institutional safety norms.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    highlights: ["Individual student workstations", "Safety showers & first-aid kits", "Digital microscopes & models", "Teacher-supervised sessions"],
    sampleBadge: "Sample Lab Setup"
  },
  {
    id: "computer-lab",
    title: "Modern Computer & Coding Center",
    category: "technology",
    shortDesc: "High-speed networked computer workstations fostering digital literacy and programming skills.",
    fullDesc: "Air-conditioned digital laboratory with high-speed broadband, modern LCD workstations, ergonomic seating, and licensed educational suites for coding and digital art.",
    imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    highlights: ["1:1 Student to computer ratio", "High-speed fiber connectivity", "Interactive projector screens", "Cyber safety filtering"],
    sampleBadge: "Sample Tech Center"
  },
  {
    id: "library",
    title: "Knowledge Resource & Reading Library",
    category: "academic",
    shortDesc: "Over 8,000 titles including encyclopedias, children's classics, journals, and quiet reading nooks.",
    fullDesc: "A peaceful sanctuary for readers of all age groups, housing reference volumes, periodicals, newspapers in Hindi and English, and an electronic cataloging station.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    highlights: ["Dedicated primary reading corner", "National periodicals & magazines", "Quiet individual study pods", "Automated book issue desk"],
    sampleBadge: "Sample Library"
  },
  {
    id: "sports-complex",
    title: "Outdoor Sports Field & Athletic Track",
    category: "sports",
    shortDesc: "Expansive green grounds for cricket, football, volleyball, badminton, and yoga sessions.",
    fullDesc: "Comprehensive athletic spaces promoting teamwork and fitness, guided by qualified physical education instructors with specialized coaching after school hours.",
    imageUrl: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80",
    highlights: ["Standard volleyball & basketball courts", "Cricket practice nets & turf pitch", "Annual sports day arena", "Certified physical educators"],
    sampleBadge: "Sample Sports Wing"
  },
  {
    id: "smart-classes",
    title: "Interactive Smart Classrooms",
    category: "technology",
    shortDesc: "Audio-visual interactive whiteboards and digital content bringing complex concepts to life.",
    fullDesc: "Ergonomically planned classrooms equipped with digital interactive panels, high-definition audio, natural cross ventilation, and custom modular student desks.",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    highlights: ["Interactive touch display panels", "Animated curriculum modules", "Comfortable dual-desk seating", "Power backup support"],
    sampleBadge: "Sample Classroom"
  },
  {
    id: "school-transport",
    title: "GPS-Enabled School Transport Fleet",
    category: "infrastructure",
    shortDesc: "Safe, speed-regulated school buses covering major routes in Dholpur town and adjoining localities.",
    fullDesc: "A dedicated fleet of well-maintained school buses driven by verified, experienced drivers, accompanied by female bus attendants and equipped with first-aid kits and emergency speed governors.",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    highlights: ["Real-time GPS tracking (Concept)", "Experienced verified drivers", "Attendant on every vehicle", "Coverage across Dholpur & suburbs"],
    sampleBadge: "Sample Transport Fleet"
  }
];

export const sampleNotices: Notice[] = [
  {
    id: "n-1",
    title: "Admissions Open for Academic Session 2026-27 (Nursery to Class IX)",
    category: "Admissions",
    date: "March 15, 2026",
    isUrgent: true,
    content: "Registration forms for new admissions in Nursery to Class IX for the upcoming academic session are now available online and at the school administrative counter between 9:00 AM and 2:00 PM.",
    fileLabel: "Download Prospectus (Sample PDF)"
  },
  {
    id: "n-2",
    title: "Parent-Teacher Meeting (PTM) for Term Assessment Review",
    category: "Academic",
    date: "April 04, 2026",
    content: "All respected parents and guardians are cordially invited to attend the PTM to discuss student academic progress and co-curricular feedback. Slot timings have been shared via the school diary.",
    fileLabel: "PTM Schedule Sheet (Demo)"
  },
  {
    id: "n-3",
    title: "Summer Vacation Announcement & Holiday Homework Notice",
    category: "Holidays",
    date: "May 18, 2026",
    content: "The academy shall remain closed for summer vacation from May 20th onwards. Students are advised to complete their experiential learning holiday scrapbooks before reopening in July.",
    fileLabel: "Holiday Learning Kit (Demo)"
  },
  {
    id: "n-4",
    title: "Annual Inter-House Science & Robotics Exhibition 2026",
    category: "Events",
    date: "April 22, 2026",
    content: "Students from Classes VI to XII are invited to submit working prototype proposals for the upcoming Inter-House Innovation Fair. Theme: 'Green Energy & Water Conservation'.",
    fileLabel: "Exhibition Guidelines (Demo)"
  },
  {
    id: "n-5",
    title: "School Uniform & Textbook Distribution Window Details",
    category: "Admissions",
    date: "March 28, 2026",
    content: "Prescribed NCERT textbooks and authorized summer uniform sets will be distributed from the school bookstore as per class-wise allotment schedules.",
    fileLabel: "Booklist Catalog (Demo)"
  }
];

export const sampleGallery: GalleryItem[] = [
  {
    id: "g-1",
    title: "Lush Green Academy Campus Entrance",
    category: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80",
    description: "Serene, landscaped academic grounds with ample natural light and open courtyards."
  },
  {
    id: "g-2",
    title: "Interactive Classroom Group Learning",
    category: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    description: "Students collaborating on hands-on academic activities under teacher guidance."
  },
  {
    id: "g-3",
    title: "Hands-on Chemistry Experimentation",
    category: "Laboratories",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    description: "Safety-first practical lab demonstration introducing fundamental chemical reactions."
  },
  {
    id: "g-4",
    title: "Annual Sports Day Relay Championship",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
    description: "Fostering athletic stamina, sportsmanship, and team spirit during sports week."
  },
  {
    id: "g-5",
    title: "Student Coding & Digital Literacy Lab",
    category: "Laboratories",
    imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80",
    description: "Young learners exploring algorithmic logic and digital design tools."
  },
  {
    id: "g-6",
    title: "Traditional Dance & Cultural Celebration",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
    description: "Vibrant stage performances celebrating India's rich cultural heritage and folk traditions."
  },
  {
    id: "g-7",
    title: "Visual Arts & Creative Painting Studio",
    category: "Arts",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80",
    description: "Encouraging original expression through watercolor, clay pottery, and origami."
  },
  {
    id: "g-8",
    title: "Central Library Silent Reading Hours",
    category: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
    description: "Developing lifelong reading habits among students through our curated library collection."
  }
];

export const sampleAchievements: Achievement[] = [
  {
    id: "a-1",
    title: "Regional Inter-School Debate Trophy (Sample)",
    category: "Academic & Literary",
    year: "2025",
    description: "Honored with 1st Prize in English extempore debate among 24 participating institutions.",
    award: "First Position Gold Trophy",
    icon: "Trophy"
  },
  {
    id: "a-2",
    title: "District U-17 Volleyball Championship Finalist (Sample)",
    category: "Sports Excellence",
    year: "2025",
    description: "Academy boys team secured Silver medal in the prestigious district athletic meet.",
    award: "District Silver Medalists",
    icon: "Medal"
  },
  {
    id: "a-3",
    title: "State Level Children's Science Fair Recognition (Sample)",
    category: "Science & Innovation",
    year: "2024",
    description: "Student prototype on solar-assisted drip irrigation selected for state exhibition display.",
    award: "Special Innovation Citation",
    icon: "Lightbulb"
  },
  {
    id: "a-4",
    title: "Exemplary Academic Result Benchmark (Sample)",
    category: "Academic Merit",
    year: "Continuous Concept",
    description: "Consistently inspiring students towards 100% first-division performance in board curriculums.",
    award: "Academic Excellence Benchmark",
    icon: "Award"
  }
];

export const sampleFAQs: FAQItem[] = [
  {
    question: "What is the admission procedure for new students?",
    answer: "Admissions begin with submitting the online enquiry form or visiting the campus for the registration kit. Following an age-appropriate informal interaction and verification of basic documents, seat allotment is confirmed subject to availability.",
    category: "Admissions"
  },
  {
    question: "What are the age criteria for Nursery and Kindergarten admissions?",
    answer: "As per National Education Policy (NEP) guidelines, a child seeking admission to Nursery should ideally have attained 3+ years of age as of 31st March of the academic year.",
    category: "Admissions"
  },
  {
    question: "Are school bus transport facilities available for distant localities?",
    answer: "Yes, our fleet covers designated pickup points across Dholpur town, Bari Road, Mania, and nearby areas with GPS-equipped buses and trained attendants (Sample Route Information).",
    category: "Transport"
  },
  {
    question: "What documents are required at the time of admission?",
    answer: "Standard documents include: Student's original Birth Certificate, Transfer Certificate (TC) from the previous recognized school (Class II onwards), previous class marksheet/report card, 4 passport photos, and Parent/Guardian Aadhaar copies.",
    category: "Documents"
  },
  {
    question: "Is this website an official school portal?",
    answer: "No. This is a demonstration website developed by Pankaj (Freelance Web Developer) to exhibit a modern, responsive website concept for schools in Dholpur and nearby regions. All content is for illustration purposes.",
    category: "General"
  }
];

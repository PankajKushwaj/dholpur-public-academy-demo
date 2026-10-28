import React, { useState, useEffect } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PrincipalWelcome } from './components/PrincipalWelcome';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { GallerySection } from './components/GallerySection';
import { NoticesSection } from './components/NoticesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { DeveloperModal } from './components/DeveloperModal';
import { ArrowUpRight } from 'lucide-react';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenEnquiry = () => {
    handleNavigate('admissions');
  };

  // Intersection Observer to highlight active navigation link as user scrolls
  useEffect(() => {
    const sections = ['home', 'about', 'academics', 'facilities', 'admissions', 'gallery', 'notices', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const secId = sections[i];
        if (secId === 'home') {
          if (window.scrollY < 400) {
            setActiveSection('home');
            break;
          }
        } else {
          const el = document.getElementById(secId);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans antialiased text-navy-950">
      {/* 1. Discreet top notice banner */}
      <DemoBanner onOpenDeveloperModal={() => setIsDeveloperModalOpen(true)} />

      {/* 2. Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 3. Main Content Container */}
      <main className="flex-1">
        <section id="home">
          <HeroSection
            onExploreClick={() => handleNavigate('about')}
            onEnquireClick={handleOpenEnquiry}
          />
        </section>

        {/* Principal's Welcome Card */}
        <PrincipalWelcome />

        {/* About Section */}
        <AboutSection />

        {/* Academics Section */}
        <AcademicsSection onEnquireClick={handleOpenEnquiry} />

        {/* Facilities Section */}
        <FacilitiesSection />

        {/* Admissions Section with Working Form & FAQs */}
        <AdmissionsSection />

        {/* Gallery Section with Lightbox */}
        <GallerySection />

        {/* Notices Section with Category Filter */}
        <NoticesSection />

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Contact Section with Interactive Map */}
        <ContactSection />
      </main>

      {/* 4. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDeveloperModal={() => setIsDeveloperModalOpen(true)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 5. Floating WhatsApp Button (Configurable via siteConfig) */}
      <WhatsAppButton />

      {/* 6. Discreet Fixed Developer Sales Banner in bottom left corner */}
      <div className="fixed bottom-6 left-6 z-30 hidden sm:block">
        <button
          onClick={() => setIsDeveloperModalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-900/95 hover:bg-navy-900 text-slate-200 hover:text-white border border-navy-700/80 shadow-soft-md backdrop-blur-md transition-all duration-200 group text-xs font-semibold"
          title="Designed by Pankaj | Click to discuss website design for your school"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 group-hover:scale-125 transition-transform"></span>
          <span>Website Concept by Pankaj</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* 7. Developer Contact & Sales Proposal Modal */}
      <DeveloperModal
        isOpen={isDeveloperModalOpen}
        onClose={() => setIsDeveloperModalOpen(false)}
      />
    </div>
  );
};

export default App;

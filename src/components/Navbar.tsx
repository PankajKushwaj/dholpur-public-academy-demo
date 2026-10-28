import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Shield, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'notices', label: 'Notices' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro bar for telephone & sample accreditation info */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 hidden sm:block border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Admissions Helpline: {siteConfig.contact.phoneSecondary}</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 hidden md:inline">
              Campus: {siteConfig.location.city}, {siteConfig.location.state}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gold-400/90 font-medium text-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-gold-400" />
              Session 2026-27 Registrations Open (Sample)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-navy-900/95 backdrop-blur-md border-navy-700/80 shadow-soft-md py-2.5'
            : 'bg-navy-800 border-navy-700/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg p-1"
          >
            {/* Monogram Crest */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-navy-900 via-royal-700 to-navy-900 p-0.5 shadow-md flex-shrink-0 group-hover:shadow-gold-glow transition-all duration-300">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center border border-gold-400/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/20 via-transparent to-transparent"></div>
                <div className="flex flex-col items-center justify-center leading-none">
                  <Shield className="w-3.5 h-3.5 text-gold-400 mb-0.5" />
                  <span className="font-serif font-black text-xs sm:text-sm tracking-wider text-gold-300">
                    {siteConfig.monogram}
                  </span>
                </div>
              </div>
            </div>

            {/* School Name & Subtitle */}
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight leading-tight group-hover:text-gold-300 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide flex items-center gap-1.5">
                <span>Dholpur, Rajasthan</span>
                <span className="w-1 h-1 rounded-full bg-gold-400 inline-block"></span>
                <span className="text-gold-400/90 hidden sm:inline">CBSE Pattern (Demo)</span>
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                    isActive
                      ? 'text-gold-300 bg-navy-950/60 font-semibold shadow-inner'
                      : 'text-slate-200 hover:text-white hover:bg-navy-700/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Enquire Now CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-bold text-sm shadow-md hover:shadow-gold-glow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold-300"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-navy-900" />
            </button>

            {/* Hamburger Button for Mobile */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-t border-navy-800 px-4 pt-3 pb-6 shadow-xl animate-fade-in">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-navy-800 text-gold-300 font-semibold border-l-4 border-gold-400'
                        : 'text-slate-200 hover:bg-navy-800 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="text-gold-400 text-xs">Active</span>}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-navy-800 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 px-4 rounded-lg bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Admission Enquiry 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="p-3 rounded-lg bg-navy-900/80 text-xs text-slate-300 text-center">
                <span className="block font-medium text-gold-400">Helpline for Parents (Sample)</span>
                <span>{siteConfig.contact.phoneSecondary}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

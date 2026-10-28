import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Shield, Calendar } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 30);
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
    <header className="sticky top-0 z-40 w-full bg-navy-800 border-b border-navy-700/80 shadow-card transition-all duration-200">
      {/* Top Utility Tier (Desktop & Tablet) */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 hidden sm:block border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Admissions Desk: <strong className="text-white">{siteConfig.contact.phoneSecondary}</strong></span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 hidden md:inline">
              Campus: {siteConfig.location.city}, {siteConfig.location.state}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gold-400 font-semibold text-xs flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Admissions Open for Session 2026-27 (Sample Demo)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Tier */}
      <nav
        aria-label="Main Navigation"
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-200 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        {/* Brand Crest & School Title */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3.5 text-left group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg p-0.5"
        >
          {/* Architectural Crest Shield */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-navy-950 rounded-lg border border-gold-400/50 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400 transition-colors shadow-sm">
            <div className="flex flex-col items-center justify-center leading-none">
              <Shield className="w-3.5 h-3.5 text-gold-400 mb-0.5" />
              <span className="font-serif font-black text-xs sm:text-sm tracking-wider text-gold-300">
                {siteConfig.monogram}
              </span>
            </div>
          </div>

          {/* School Name & Affiliation Metadata */}
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight leading-snug group-hover:text-gold-300 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[11px] text-slate-300 font-medium tracking-agency uppercase">
              Dholpur, Rajasthan • Estd. 2014
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
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors relative focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                  isActive
                    ? 'text-gold-300 font-semibold'
                    : 'text-slate-200 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-3 h-0.5 bg-gold-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Action: Enquire Now & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenEnquiry}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-400 focus:ring-offset-navy-800"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-navy-950" />
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded text-slate-200 hover:text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-gold-400"
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
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-navy-800 px-4 pt-3 pb-6 animate-fade-in shadow-dropdown">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-navy-900 text-gold-300 font-bold border-l-2 border-gold-400'
                      : 'text-slate-200 hover:bg-navy-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-gold-400 text-xs">Active</span>}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-navy-800 space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 px-4 rounded bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Admission Enquiry (2026-27)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="p-3 rounded bg-navy-900 text-xs text-slate-300 text-center border border-navy-800">
              <span className="block font-semibold text-gold-400">Admissions Helpline (Sample)</span>
              <span>{siteConfig.contact.phoneSecondary}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Shield, Sparkles, MapPin, Phone, Mail, ArrowUp, Code2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenDeveloperModal: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDeveloperModal,
  onOpenEnquiry,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          {/* Col 1: School Identity & Monogram */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-gold-400/40 p-1 flex items-center justify-center text-gold-400 shadow-md">
                <Shield className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white block leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-gold-400/90 font-medium">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Dedicated to academic vigor, grounded cultural values, and creative exploration. Empowering students in Dholpur to excel with confidence and humility.
            </p>

            <div className="p-3 rounded-xl bg-navy-900/80 border border-navy-800 text-xs text-slate-400 space-y-1">
              <span className="text-gold-400 font-semibold block flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-gold-400" />
                Demonstration Site Notice
              </span>
              <p className="text-[11px] text-slate-400">
                This is a live sales demo developed for Rajasthan schools. Not an affiliated school entity.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['home', 'about', 'academics', 'facilities', 'admissions'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="hover:text-gold-300 transition-colors capitalize text-left"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Student & Parent Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Academy Sections
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['gallery', 'notices', 'achievements', 'contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="hover:text-gold-300 transition-colors capitalize text-left"
                  >
                    {sec}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenEnquiry}
                  className="text-gold-400 hover:text-gold-300 font-semibold transition-colors"
                >
                  Admission Enquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Sample Verification */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              Sample Campus Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{siteConfig.contact.phoneSecondary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>

            {/* Discreet Call to action for principals/visitors to contact Pankaj */}
            <div className="mt-4 pt-4 border-t border-navy-800">
              <button
                onClick={onOpenDeveloperModal}
                className="w-full p-3 rounded-xl bg-royal-900/60 hover:bg-royal-900 border border-royal-700/60 text-left transition flex items-center justify-between group"
              >
                <div>
                  <span className="text-xs font-bold text-royal-200 block group-hover:text-white transition">
                    Want a website like this for your school?
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Contact freelance developer Pankaj
                  </span>
                </div>
                <Code2 className="w-4 h-4 text-gold-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left">
            <span>© {new Date().getFullYear()} {siteConfig.name}. Sample educational portfolio concept.</span>
            <span className="block sm:inline sm:ml-2 text-slate-500">
              (DEMO WEBSITE — Sample school information)
            </span>
          </div>

          {/* Developer Credit Requirement */}
          <div className="flex items-center gap-2 font-medium">
            <span className="text-slate-300">
              Website concept by{' '}
              <button
                onClick={onOpenDeveloperModal}
                className="text-gold-400 hover:text-gold-300 font-bold underline underline-offset-2 transition"
              >
                {siteConfig.developer.name} | Web Development
              </button>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white transition shadow-sm"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

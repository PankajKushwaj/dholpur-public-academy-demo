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

  const cleanPhone = siteConfig.contact.phoneSecondary.replace(/[^0-9+]/g, '');

  return (
    <footer className="bg-navy-950 text-slate-300 pt-14 sm:pt-20 pb-12 sm:pb-10 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 pb-10 sm:pb-14 border-b border-navy-800">
          {/* Col 1: School Identity & Monogram */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-lg bg-navy-900 border border-gold-400/50 flex items-center justify-center text-gold-400 shadow-sm flex-shrink-0">
                <Shield className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <span className="font-serif font-bold text-base sm:text-xl text-white block leading-snug">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] sm:text-xs text-gold-400 font-semibold tracking-agency uppercase">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Dedicated to academic vigor, grounded cultural values, and creative exploration. Empowering students in Dholpur to excel with confidence, dignity, and humility.
            </p>

            <div className="p-3.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-slate-400 space-y-1">
              <span className="text-gold-400 font-bold tracking-agency uppercase block flex items-center gap-1.5 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                Demonstration Site Notice
              </span>
              <p className="text-slate-400 leading-normal text-[11px]">
                This is a live sales demo developed by freelance developer Pankaj to showcase modern school web portals. Not an official school entity.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-agency border-b border-navy-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              {['home', 'about', 'academics', 'facilities', 'admissions'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="hover:text-gold-300 transition-colors capitalize text-left font-medium py-1.5 block min-h-[36px]"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Student & Parent Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-agency border-b border-navy-800 pb-2">
              Academy Desk
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              {['gallery', 'notices', 'achievements', 'contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="hover:text-gold-300 transition-colors capitalize text-left font-medium py-1.5 block min-h-[36px]"
                  >
                    {sec}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={onOpenEnquiry}
                  className="text-gold-400 hover:text-gold-300 font-bold uppercase tracking-agency text-xs transition-colors py-1.5 block min-h-[36px]"
                >
                  Admission Enquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Sample Verification */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-agency border-b border-navy-800 pb-2">
              Campus Contact (Sample)
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{siteConfig.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:${cleanPhone}`}
                  className="font-semibold text-slate-200 hover:text-white hover:underline py-1"
                >
                  {siteConfig.contact.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white hover:underline py-1"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Developer Contact CTA with thumb friendly height */}
            <div className="mt-4 pt-3 border-t border-navy-800">
              <button
                onClick={onOpenDeveloperModal}
                className="w-full p-3.5 rounded-lg bg-navy-900 hover:bg-navy-800 active:bg-navy-950 border border-navy-700 text-left transition flex items-center justify-between group min-h-[48px]"
              >
                <div>
                  <span className="text-xs font-bold text-white block">
                    Want a website like this for your school?
                  </span>
                  <span className="text-[11px] text-gold-400 font-medium">
                    Discuss custom packages with Pankaj
                  </span>
                </div>
                <Code2 className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            <span>© {new Date().getFullYear()} {siteConfig.name}. Sample educational portfolio concept.</span>
            <span className="block sm:inline sm:ml-2 text-slate-500">
              (DEMO WEBSITE — Sample school information)
            </span>
          </div>

          {/* Required Developer Credit */}
          <div className="flex items-center gap-2 font-medium">
            <span className="text-slate-300">
              Website concept by{' '}
              <button
                onClick={onOpenDeveloperModal}
                className="text-gold-400 hover:text-gold-300 font-bold underline underline-offset-4 transition py-1"
              >
                {siteConfig.developer.name} | Web Development
              </button>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-11 h-11 flex items-center justify-center rounded bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition shadow-sm border border-navy-800 self-center"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

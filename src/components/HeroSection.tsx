import React from 'react';
import { ArrowRight, BookOpen, Compass, Award, Users, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroSectionProps {
  onExploreClick: () => void;
  onEnquireClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onEnquireClick,
}) => {
  return (
    <div className="relative bg-navy-950 text-white overflow-hidden">
      {/* Background Campus Image with Deep Solid Navy Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=85"
          alt="Dholpur Public Academy Main Academic Campus"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          {/* Institutional Badge - Wraps cleanly on 320px+ */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-navy-900/90 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-semibold tracking-agency uppercase mb-5 sm:mb-6 max-w-full">
            <span className="truncate">Co-Ed English Medium • CBSE Pattern (Demo)</span>
          </div>

          {/* Majestic Editorial Headline with responsive sizing */}
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-5 sm:mb-6 break-words">
            Building Bright Futures,{' '}
            <span className="italic font-normal text-gold-400 block sm:inline">
              Inspiring Excellence.
            </span>
          </h1>

          {/* Measured supporting copy */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl text-balance">
            At {siteConfig.name}, we believe true education extends far beyond textbooks. Through disciplined inquiry, moral fortitude, creative exploration, and compassionate mentorship, we empower every young mind to flourish with enduring confidence.
          </p>

          {/* CTA Action Buttons with full width on mobile & minimum 48px touch targets */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-14">
            <button
              onClick={onEnquireClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-agency transition-all duration-150 shadow-sm min-h-[48px] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              <span>Admission Enquiry (2026-27)</span>
              <ArrowRight className="w-4 h-4 text-navy-950 flex-shrink-0" />
            </button>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-navy-900/90 hover:bg-navy-800 border border-slate-600 text-slate-100 font-semibold text-xs uppercase tracking-agency transition-all duration-150 min-h-[48px] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <Compass className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Explore Our School</span>
            </button>
          </div>

          {/* Key Institutional Pillars Ribbon (No overflow on mobile) */}
          <div className="pt-6 sm:pt-8 border-t border-navy-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-agency text-slate-400 font-semibold">
                Institutional Foundations (Sample Preview)
              </span>
              <span className="text-[10px] text-gold-400 font-medium bg-navy-900 px-2 py-0.5 rounded border border-navy-700 self-start sm:self-auto">
                Non-quantified placeholders
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
              <div className="p-3 sm:p-4 rounded-lg bg-navy-900 border border-navy-800">
                <Users className="w-4 sm:w-5 h-4 sm:h-5 text-gold-400 mb-1.5 sm:mb-2" />
                <div className="text-xs sm:text-sm font-bold text-white font-serif">Student-Centric</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-tight">Optimal classroom focus</div>
              </div>

              <div className="p-3 sm:p-4 rounded-lg bg-navy-900 border border-navy-800">
                <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 text-royal-400 mb-1.5 sm:mb-2" />
                <div className="text-xs sm:text-sm font-bold text-white font-serif">Holistic Pedagogy</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-tight">Experiential model</div>
              </div>

              <div className="p-3 sm:p-4 rounded-lg bg-navy-900 border border-navy-800">
                <Award className="w-4 sm:w-5 h-4 sm:h-5 text-gold-400 mb-1.5 sm:mb-2" />
                <div className="text-xs sm:text-sm font-bold text-white font-serif">All-Round Growth</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-tight">Sports & robotics</div>
              </div>

              <div className="p-3 sm:p-4 rounded-lg bg-navy-900 border border-navy-800">
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mb-1.5 sm:mb-2" />
                <div className="text-xs sm:text-sm font-bold text-white font-serif">Safe & Secure</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-tight">CCTV & GPS fleet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

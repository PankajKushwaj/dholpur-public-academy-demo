import React from 'react';
import { ArrowRight, BookOpen, Compass, Award, Users, ShieldCheck, Sparkles } from 'lucide-react';
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
      {/* Background Hero Image with Deep Navy Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=85"
          alt="Dholpur Public Academy Modern School Campus Grounds"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-royal-600/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-3xl">
          {/* Subtle Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-medium mb-6 shadow-soft-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Nurturing Lifelong Learners in Dholpur, Rajasthan</span>
            <span className="hidden sm:inline text-gold-400/60">•</span>
            <span className="hidden sm:inline text-xs text-slate-300">Sample School Demo</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Building Bright Futures,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-300">
              Inspiring Excellence.
            </span>
          </h1>

          {/* Short warm supporting copy */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl text-balance">
            At {siteConfig.name}, we believe true education extends far beyond textbooks. Through joyful discovery, strong moral character, analytical thinking, and inclusive encouragement, we empower every young mind to flourish with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onEnquireClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-bold text-base shadow-gold-glow hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold-300"
            >
              <span>Admission Enquiry (2026-27)</span>
              <ArrowRight className="w-5 h-5 text-navy-950" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-800/80 hover:bg-navy-700/80 border border-slate-600/60 hover:border-slate-400 text-slate-100 font-semibold text-base backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-royal-400"
            >
              <Compass className="w-5 h-5 text-gold-400" />
              <span>Explore Our School</span>
            </button>
          </div>

          {/* Non-quantified sample highlights (avoiding false fabricated statistics) */}
          <div className="pt-6 border-t border-slate-700/60">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Institutional Highlights (Sample Demonstration)
              </span>
              <span className="text-[11px] text-gold-400/90 font-medium bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">
                Non-quantified placeholders
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-navy-900/70 border border-navy-700/60 backdrop-blur-sm">
                <Users className="w-5 h-5 text-gold-400 mb-1.5" />
                <div className="text-sm font-bold text-white">Student-Centric</div>
                <div className="text-xs text-slate-300">Optimal classroom focus</div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-900/70 border border-navy-700/60 backdrop-blur-sm">
                <BookOpen className="w-5 h-5 text-royal-400 mb-1.5" />
                <div className="text-sm font-bold text-white">Holistic Pedagogy</div>
                <div className="text-xs text-slate-300">Experiential NCERT model</div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-900/70 border border-navy-700/60 backdrop-blur-sm">
                <Award className="w-5 h-5 text-gold-400 mb-1.5" />
                <div className="text-sm font-bold text-white">All-Round Growth</div>
                <div className="text-xs text-slate-300">Sports, arts & robotics</div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-900/70 border border-navy-700/60 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1.5" />
                <div className="text-sm font-bold text-white">Safe & Secure</div>
                <div className="text-xs text-slate-300">CCTV & GPS fleet concept</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

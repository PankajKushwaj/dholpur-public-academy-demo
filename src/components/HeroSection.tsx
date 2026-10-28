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
          className="w-full h-full object-cover object-center filter brightness-[0.34] contrast-[1.05]"
        />
        {/* Solid architectural scrim without aggressive multicolor gradients */}
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-navy-900 border border-gold-400/40 text-gold-300 text-xs font-semibold tracking-agency uppercase mb-6">
            <span>Co-Educational English Medium • CBSE Pattern (Demo)</span>
          </div>

          {/* Majestic Editorial Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            Building Bright Futures,{' '}
            <span className="italic font-normal text-gold-400 font-serif">
              Inspiring Excellence.
            </span>
          </h1>

          {/* Warm, measured supporting copy */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl text-balance">
            At {siteConfig.name}, we believe true education extends far beyond textbooks. Through disciplined inquiry, moral fortitude, creative exploration, and compassionate mentorship, we empower every young mind to flourish with enduring confidence.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              onClick={onEnquireClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-agency transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              <span>Admission Enquiry (2026-27)</span>
              <ArrowRight className="w-4 h-4 text-navy-950" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-navy-900/90 hover:bg-navy-800 border border-slate-600 text-slate-100 font-semibold text-xs uppercase tracking-agency transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <Compass className="w-4 h-4 text-gold-400" />
              <span>Explore Our School</span>
            </button>
          </div>

          {/* Key Institutional Pillars Ribbon (Sample highlights without falsified stats) */}
          <div className="pt-8 border-t border-navy-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-agency text-slate-400 font-semibold">
                Institutional Foundations (Sample Preview)
              </span>
              <span className="text-[11px] text-gold-400 font-medium bg-navy-900 px-2.5 py-0.5 rounded border border-navy-700">
                Non-quantified placeholders
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-lg bg-navy-900 border border-navy-800">
                <Users className="w-5 h-5 text-gold-400 mb-2" />
                <div className="text-sm font-bold text-white font-serif">Student-Centric</div>
                <div className="text-xs text-slate-400 mt-0.5">Optimal classroom attention</div>
              </div>

              <div className="p-4 rounded-lg bg-navy-900 border border-navy-800">
                <BookOpen className="w-5 h-5 text-royal-400 mb-2" />
                <div className="text-sm font-bold text-white font-serif">Holistic Pedagogy</div>
                <div className="text-xs text-slate-400 mt-0.5">Experiential learning model</div>
              </div>

              <div className="p-4 rounded-lg bg-navy-900 border border-navy-800">
                <Award className="w-5 h-5 text-gold-400 mb-2" />
                <div className="text-sm font-bold text-white font-serif">All-Round Growth</div>
                <div className="text-xs text-slate-400 mt-0.5">Sports, arts & robotics</div>
              </div>

              <div className="p-4 rounded-lg bg-navy-900 border border-navy-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-sm font-bold text-white font-serif">Safe & Secure</div>
                <div className="text-xs text-slate-400 mt-0.5">CCTV & GPS fleet concept</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { sampleFacilities } from '../config/siteConfig';
import type { Facility } from '../types';
import { Building2, Sparkles, CheckCircle2, X, ArrowUpRight } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalFacility, setActiveModalFacility] = useState<Facility | null>(null);

  const categories = [
    { id: 'all', label: 'All Facilities' },
    { id: 'academic', label: 'Academic & Labs' },
    { id: 'technology', label: 'Digital Technology' },
    { id: 'sports', label: 'Sports & Fitness' },
    { id: 'infrastructure', label: 'Campus & Transport' },
  ];

  const filteredFacilities = selectedCategory === 'all'
    ? sampleFacilities
    : sampleFacilities.filter((f) => f.category === selectedCategory);

  return (
    <section id="facilities" className="py-24 bg-surface scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-agency uppercase bg-navy-100 text-navy-900 border border-navy-200 mb-3">
            <Building2 className="w-3.5 h-3.5 text-royal-600" />
            <span>CAMPUS INFRASTRUCTURE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4 tracking-tight">
            Facilities Designed for Inspired Learning
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From modern science and digital laboratories to expansive athletic grounds, our campus is curated to stimulate intellectual curiosity, physical fitness, and creative talent.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold bg-navy-900 text-gold-400 border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Sample Facility Descriptions — Replaceable with your institution's verified setup</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? 'bg-navy-900 text-gold-300 shadow-sm font-bold'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col group cursor-pointer"
              onClick={() => setActiveModalFacility(facility)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-navy-950 text-gold-400 border border-gold-400/40">
                    {facility.sampleBadge || "Sample Facility"}
                  </span>
                </div>
                <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-bold tracking-agency uppercase flex items-center gap-1.5">
                    Click to view specifications <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-900 mb-2 group-hover:text-royal-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {facility.shortDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {facility.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="text-[11px] text-royal-600 font-bold pt-1">
                    + {facility.highlights.length - 2} more institutional standards
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Facility Details */}
        {activeModalFacility && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveModalFacility(null)}
          >
            <div
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-dropdown relative border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalFacility(null)}
                className="absolute top-5 right-5 p-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-lg overflow-hidden mb-6 max-h-72 border border-slate-200">
                <img
                  src={activeModalFacility.imageUrl}
                  alt={activeModalFacility.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-navy-950 text-gold-400">
                  {activeModalFacility.sampleBadge}
                </span>
                <span className="text-xs text-slate-500 capitalize font-medium">
                  Category: {activeModalFacility.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3">
                {activeModalFacility.title}
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {activeModalFacility.fullDesc}
              </p>

              <div className="bg-surface p-5 rounded-lg border border-slate-200 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-agency text-navy-900 mb-3">
                  Infrastructure Highlights & Safety Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalFacility.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-200">
                <span>Demo Concept Preview</span>
                <button
                  onClick={() => setActiveModalFacility(null)}
                  className="px-5 py-2 rounded bg-navy-900 text-white font-medium hover:bg-navy-800 transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

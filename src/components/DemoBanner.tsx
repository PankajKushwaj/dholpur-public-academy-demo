import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface DemoBannerProps {
  onOpenDeveloperModal: () => void;
}

export const DemoBanner: React.FC<DemoBannerProps> = ({ onOpenDeveloperModal }) => {
  return (
    <aside aria-label="Demo notice" className="bg-navy-950 border-b border-navy-800 text-slate-300 text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        {/* Left: Clear Demo Website indicator */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-gold-400 text-navy-950">
            <Sparkles className="w-3 h-3 text-navy-950" />
            DEMO WEBSITE
          </span>
          <span className="text-slate-300 font-medium">
            Sample school information for presentation purposes.
          </span>
        </div>

        {/* Right: Agency Developer Call-to-Action */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-slate-400 text-xs">
            Concept created for Indian Schools
          </span>
          <button
            onClick={onOpenDeveloperModal}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-800 hover:bg-navy-700 text-gold-400 hover:text-gold-300 border border-navy-700 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold-400"
            title="Learn how Pankaj can create a website for your school"
          >
            <span>Developer Proposal (Pankaj)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

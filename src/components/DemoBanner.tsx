import { Code2, Sparkles } from 'lucide-react';

interface DemoBannerProps {
  onOpenDeveloperModal: () => void;
}

export const DemoBanner: React.FC<DemoBannerProps> = ({ onOpenDeveloperModal }) => {
  return (
    <div className="bg-navy-900 border-b border-navy-700/60 text-slate-200 text-xs sm:text-sm py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-semibold bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs">
            <Sparkles className="w-3 h-3 text-gold-400" />
            DEMO WEBSITE
          </span>
          <span className="text-slate-300">
            Sample school information for presentation purposes.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-slate-400 text-xs">
            Created for Rajasthan & North India Schools
          </span>
          <button
            onClick={onOpenDeveloperModal}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-royal-600 hover:bg-royal-500 text-white font-medium text-xs transition shadow-sm focus:ring-2 focus:ring-royal-400 focus:outline-none"
            title="Learn how Pankaj can create a website for your school"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Proposal (Pankaj)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

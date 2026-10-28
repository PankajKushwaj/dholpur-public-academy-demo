import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Code2,
  CheckCircle2,
  X,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperModal: React.FC<DeveloperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const featuresOffered = [
    {
      title: "100% Custom School Branding",
      desc: "Tailored to your school's official colors, crest, uniform themes, and motto. No cookie-cutter templates."
    },
    {
      title: "Online Admission Enquiry System",
      desc: "Receive instant notifications for every admission form submission on email or WhatsApp."
    },
    {
      title: "Self-Managed Notice & Circular Board",
      desc: "Easily publish exam dates, holiday notices, and downloadable PDF circulars in seconds."
    },
    {
      title: "High-Speed Mobile First Design",
      desc: "Over 80% of parents view websites on smartphones. Your site loads in under 1 second on mobile networks."
    },
    {
      title: "Google Maps & Local Search SEO",
      desc: "Ensure your school ranks prominently when parents search for 'best school in Dholpur' or nearby towns."
    },
    {
      title: "Domain, Hosting & Complete Setup",
      desc: "Complete end-to-end launch: domain registration (.edu.in / .com / .in), high-speed hosting, and SSL certificate."
    }
  ];

  const handleWhatsAppDeveloper = () => {
    const msg = encodeURIComponent(
      `Hello Pankaj! I reviewed your school website sales demo for ${siteConfig.name}. I would like to discuss building a website for our school/institution. Please share pricing and packages.`
    );
    window.open(`https://wa.me/${siteConfig.developer.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Developer Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-royal-100 text-royal-800 border border-royal-200 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-royal-700" />
            <span>WEBSITE PROPOSAL BY {siteConfig.developer.name.toUpperCase()}</span>
          </span>
          <span className="text-xs text-slate-400">• Freelance Web Developer</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mb-3">
          Want a Modern Website for Your School?
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          This demo was crafted by <strong>{siteConfig.developer.name}</strong> to showcase how a modern, premium web presence establishes parent trust, increases admission enquiries, and elevates your institution's prestige in Dholpur and across Rajasthan.
        </p>

        {/* Feature Highlights Grid */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-bold tracking-wider text-navy-900 mb-3">
            What's Included in Your Custom School Website Package:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featuresOffered.map((feat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-surface border border-slate-200 flex items-start gap-2.5"
              >
                <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="font-semibold text-xs sm:text-sm text-navy-950 mb-0.5">
                    {feat.title}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Direct Contact Box */}
        <div className="p-5 rounded-2xl bg-navy-900 text-white border border-navy-800 mb-6 shadow-soft-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-gold-400">
                Direct Contact — Developer Pankaj
              </span>
              <p className="text-xs text-slate-300 mt-1">
                Available for in-person demonstration in Dholpur & nearby districts or remote setup.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>{siteConfig.developer.phone}</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <span>{siteConfig.developer.email}</span>
                </span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppDeveloper}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-md transition flex-shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Pankaj</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-3 border-t border-slate-200">
          <span>Configurable in <code>src/config/siteConfig.ts</code></span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition"
          >
            Back to School Demo
          </button>
        </div>
      </div>
    </div>
  );
};

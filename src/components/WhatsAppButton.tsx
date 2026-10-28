import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { X, Settings } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showConfigModal, setShowConfigModal] = useState(false);

  const isConfigured = Boolean(
    siteConfig.whatsapp.isConfigured &&
    siteConfig.whatsapp.number &&
    siteConfig.whatsapp.number.trim().length >= 10
  );

  const handleClick = () => {
    if (isConfigured) {
      const encodedMsg = encodeURIComponent(siteConfig.whatsapp.defaultMessage);
      const url = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodedMsg}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setShowConfigModal(true);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
        {/* Subtle tooltip on hover */}
        <div className="hidden sm:block mb-2 px-3 py-1 bg-navy-950/90 text-white text-xs rounded-full shadow-lg border border-navy-700/60 opacity-90 hover:opacity-100 transition pointer-events-none">
          <span className="text-emerald-400 font-semibold">● Online:</span> Chat on WhatsApp (Demo)
        </div>

        <button
          onClick={handleClick}
          aria-label="Contact School Admissions on WhatsApp"
          className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          {/* Ping indicator */}
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
          </span>

          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.88-2.057-.98-.276-.1-.476-.15-.676.15-.2.301-.776.98-.952 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.451-.525.151-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.244-.588-.492-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.275.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.11.15.2 2.12 3.238 5.136 4.542.717.311 1.277.497 1.714.636.721.229 1.377.197 1.895.12.578-.087 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.431-.075-.125-.276-.2-.577-.35z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.892.527 3.662 1.447 5.176L2 22l4.982-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.143c-1.603 0-3.1-.476-4.364-1.298l-.313-.203-2.955.836.84-2.88-.204-.325A8.136 8.136 0 013.857 12C3.857 7.51 7.51 3.857 12 3.857c4.49 0 8.143 3.647 8.143 8.143 0 4.49-3.653 8.143-8.143 8.143z" />
          </svg>
        </button>
      </div>

      {/* Demo Modal when WhatsApp button is clicked in unconfigured/demo mode */}
      {showConfigModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowConfigModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowConfigModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Settings className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-bold text-navy-950 mb-2">
              WhatsApp Integration Configuration
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              This demo is configured to open WhatsApp with a prefilled admission inquiry. To connect your school's actual WhatsApp business number, simply set it in:
            </p>

            <div className="p-3 rounded-lg bg-navy-950 text-gold-300 font-mono text-xs mb-4 select-all">
              src/config/siteConfig.ts → siteConfig.whatsapp.number
            </div>

            <p className="text-xs text-slate-500 mb-6">
              When a prospective parent clicks the button, WhatsApp immediately opens on mobile or desktop with your school's custom prefilled message.
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 rounded-xl bg-navy-900 text-white font-medium text-xs hover:bg-navy-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const PrincipalWelcome: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-xl border border-slate-200 p-6 sm:p-10 lg:p-14 relative shadow-card">
          {/* Sample Label Badge - static on mobile to prevent overlapping */}
          <div className="mb-6 sm:mb-0 sm:absolute sm:top-6 sm:right-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded text-[10px] sm:text-[11px] font-bold tracking-agency uppercase bg-navy-950 text-gold-400 border border-gold-400/40">
              SAMPLE PRINCIPAL'S WELCOME (DEMO)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Principal Photo Column */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-lg overflow-hidden border-2 border-slate-200 shadow-sm mb-4 sm:mb-5 p-1 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
                  alt="Principal Dr. R. K. Sharma (Sample)"
                  className="w-full h-full object-cover object-top rounded"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-900 tracking-tight">
                  Dr. R. K. Sharma, Ph.D.
                </h3>
                <p className="text-[11px] sm:text-xs uppercase tracking-agency font-bold text-royal-600">
                  Principal & Academic Director (Sample)
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  M.Sc. (Physics), B.Ed., 22+ Years Educational Leadership
                </p>
              </div>

              <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-200 w-full text-center">
                <span className="text-xs italic text-slate-500 font-serif">
                  "Leading with empathy, teaching with passion."
                </span>
              </div>
            </div>

            {/* Principal's Message Text Column */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Quote className="w-5 sm:w-6 h-5 sm:h-6 text-gold-500 -scale-x-100 flex-shrink-0" />
                <span className="text-xs uppercase tracking-agency font-bold text-navy-800">
                  Welcome from the Principal's Desk
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950 mb-4 sm:mb-5 leading-snug">
                "Every child carries unique potential waiting to be ignited."
              </h2>

              <div className="space-y-3.5 sm:space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Dear Parents, Guardians, and Valued Visitors,
                </p>
                <p>
                  It gives me profound pleasure to welcome you to <strong>{siteConfig.name}</strong>, a learning community anchored in the heart of Dholpur, dedicated to nurturing intellectually grounded, morally courageous, and socially responsible young citizens.
                </p>
                <p>
                  In an era defined by rapid technological and social transformation, rote memorization no longer suffices. Our academic framework integrates conceptual clarity with creative exploration, sportsmanship, and cultural reverence. Here, questions are celebrated, mistakes are treated as learning milestones, and each student is recognized as an individual.
                </p>
                <p className="hidden sm:block">
                  We look forward to partnering with parents to build a supportive ecosystem where your child discovers their strengths and graduates prepared to make meaningful contributions to the world.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Open Parent Communication & Consultation Hours</span>
                </div>
                <div className="font-serif italic font-semibold text-navy-900 text-xs sm:text-sm">
                  — Office of the Principal, DPA Dholpur
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

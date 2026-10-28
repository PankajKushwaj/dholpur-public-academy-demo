import React, { useState } from 'react';
import { samplePrograms } from '../config/siteConfig';
import { BookOpen, GraduationCap, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface AcademicsSectionProps {
  onEnquireClick: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onEnquireClick }) => {
  const [selectedId, setSelectedId] = useState<string>(samplePrograms[0].id);

  const activeProgram = samplePrograms.find((p) => p.id === selectedId) || samplePrograms[0];

  return (
    <section id="academics" className="py-14 sm:py-20 lg:py-24 bg-white scroll-mt-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-agency uppercase bg-navy-100 text-navy-900 border border-navy-200 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-royal-600" />
            <span>ACADEMIC FRAMEWORK</span>
          </div>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-3 sm:mb-4 tracking-tight">
            Progressive Academic Stages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Our educational path is thoughtfully designed to align with each developmental phase of childhood, progressing from experiential play to structured conceptual mastery.
          </p>

          {/* Affiliation Notice */}
          <div className="mt-4 sm:mt-5 p-3.5 rounded-lg bg-surface border border-slate-200 text-xs text-slate-700 flex items-start sm:items-center justify-center gap-2.5 max-w-2xl mx-auto text-left sm:text-center">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Curriculum Notice:</strong> Educational structures shown represent sample frameworks based on NCERT guidelines. No formal board affiliation is claimed or implied on this demonstration site.
            </span>
          </div>
        </div>

        {/* Tab Selection: 2-col on small screens, flex on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-2 mb-10 sm:mb-12 border-b border-slate-200 pb-4">
          {samplePrograms.map((program) => {
            const isSelected = program.id === selectedId;
            return (
              <button
                key={program.id}
                onClick={() => setSelectedId(program.id)}
                className={`w-full sm:w-auto px-4 sm:px-5 py-3 rounded text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center justify-between sm:justify-start gap-2 min-h-[44px] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                  isSelected
                    ? 'bg-navy-900 text-gold-300 font-bold shadow-sm'
                    : 'bg-surface hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{program.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded flex-shrink-0 ${isSelected ? 'bg-gold-400 text-navy-950 font-bold' : 'bg-slate-200 text-slate-600'}`}>
                  {program.grades}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Program Detail Display */}
        <div className="bg-surface rounded-xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-card animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Details */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-2.5 py-1 rounded bg-royal-600 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  {activeProgram.grades}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-200 text-slate-700 text-[11px] sm:text-xs font-semibold">
                  {activeProgram.ageGroup}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950 mb-3 sm:mb-4 tracking-tight">
                {activeProgram.title}
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {activeProgram.description}
              </p>

              {/* Key Features */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-xs uppercase font-bold tracking-agency text-navy-900 mb-3.5 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Key Pedagogical Cornerstones
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {activeProgram.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 shadow-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Link with mobile friendly stacking */}
              <div className="pt-4 sm:pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onEnquireClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-navy-900 hover:bg-navy-800 text-gold-300 font-bold text-xs uppercase tracking-agency transition shadow-sm min-h-[44px] active:scale-[0.99]"
                >
                  <span>Enquire for {activeProgram.grades}</span>
                  <ArrowRight className="w-4 h-4 text-gold-400 flex-shrink-0" />
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  Controlled student-teacher ratio per class section
                </span>
              </div>
            </div>

            {/* Right Side: Sample Subjects Spectrum */}
            <div className="lg:col-span-5 bg-white p-5 sm:p-8 rounded-xl border border-slate-200 shadow-card">
              <div className="flex items-center justify-between mb-4 sm:mb-5 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 text-royal-600" />
                  <h4 className="font-serif font-bold text-navy-900 text-sm sm:text-base">
                    Core Subject Spectrum (Sample)
                  </h4>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  NCERT Framework
                </span>
              </div>

              <div className="space-y-2 mb-5 sm:mb-6">
                {activeProgram.sampleSubjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <span>{sub}</span>
                    <span className="text-[10px] text-royal-700 font-bold px-2 py-0.5 rounded bg-royal-100 flex-shrink-0 ml-2">
                      Standard
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-surface border border-slate-200 text-xs text-slate-700 space-y-1">
                <p className="font-bold text-navy-900">
                  Continuous Comprehensive Evaluation (CCE)
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Regular project work, oral viva, laboratory experiments, and portfolio assessments ensure multidimensional student appraisal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

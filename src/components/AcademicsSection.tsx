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
    <section id="academics" className="py-24 bg-white scroll-mt-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-agency uppercase bg-navy-100 text-navy-900 border border-navy-200 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-royal-600" />
            <span>ACADEMIC FRAMEWORK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4 tracking-tight">
            Progressive Academic Stages
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our educational path is thoughtfully designed to align with each developmental phase of childhood, progressing from experiential play to structured conceptual mastery.
          </p>

          {/* Affiliation Notice */}
          <div className="mt-5 p-3.5 rounded-lg bg-surface border border-slate-200 text-xs text-slate-700 flex items-center justify-center gap-2.5 max-w-2xl mx-auto">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>
              <strong>Curriculum Notice:</strong> Educational structures shown represent sample frameworks based on NCERT guidelines. No formal board affiliation is claimed or implied on this demonstration site.
            </span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-200 pb-4">
          {samplePrograms.map((program) => {
            const isSelected = program.id === selectedId;
            return (
              <button
                key={program.id}
                onClick={() => setSelectedId(program.id)}
                className={`px-5 py-3 rounded text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold-400 ${
                  isSelected
                    ? 'bg-navy-900 text-gold-300 font-bold shadow-sm'
                    : 'bg-surface hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{program.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded ${isSelected ? 'bg-gold-400 text-navy-950 font-bold' : 'bg-slate-200 text-slate-600'}`}>
                  {program.grades}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Program Detail Display */}
        <div className="bg-surface rounded-xl p-8 sm:p-12 border border-slate-200 shadow-card animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Details */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded bg-royal-600 text-white text-xs font-bold uppercase tracking-wider">
                  {activeProgram.grades}
                </span>
                <span className="px-3 py-1 rounded bg-slate-200 text-slate-700 text-xs font-semibold">
                  {activeProgram.ageGroup}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mb-4 tracking-tight">
                {activeProgram.title}
              </h3>

              <p className="text-slate-700 text-base leading-relaxed mb-8">
                {activeProgram.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-xs uppercase font-bold tracking-agency text-navy-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Key Pedagogical Cornerstones
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProgram.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 shadow-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center gap-4">
                <button
                  onClick={onEnquireClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-navy-900 hover:bg-navy-800 text-gold-300 font-bold text-xs uppercase tracking-agency transition shadow-sm"
                >
                  <span>Enquire for {activeProgram.grades}</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  Controlled student-teacher ratio per class section
                </span>
              </div>
            </div>

            {/* Right Side: Sample Subjects Spectrum */}
            <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-xl border border-slate-200 shadow-card">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-royal-600" />
                  <h4 className="font-serif font-bold text-navy-900 text-base">
                    Core Subject Spectrum (Sample)
                  </h4>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  NCERT Framework
                </span>
              </div>

              <div className="space-y-2.5 mb-6">
                {activeProgram.sampleSubjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <span>{sub}</span>
                    <span className="text-[10px] text-royal-700 font-bold px-2 py-0.5 rounded bg-royal-100">
                      Standard
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-surface border border-slate-200 text-xs text-slate-700 space-y-1">
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

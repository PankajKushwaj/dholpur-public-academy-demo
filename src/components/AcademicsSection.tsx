import React, { useState } from 'react';
import { samplePrograms } from '../config/siteConfig';
import { BookOpen, GraduationCap, Sparkles, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface AcademicsSectionProps {
  onEnquireClick: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onEnquireClick }) => {
  const [selectedId, setSelectedId] = useState<string>(samplePrograms[0].id);

  const activeProgram = samplePrograms.find((p) => p.id === selectedId) || samplePrograms[0];

  return (
    <section id="academics" className="py-20 bg-white scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-100 text-amber-900 border border-gold-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
            <span>ACADEMIC FRAMEWORK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Progressive Academic Stages
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our educational path is thoughtfully designed to align with each developmental phase of childhood, progressing from experiential play to structured conceptual mastery.
          </p>

          {/* Prominent Affiliation Disclaimer */}
          <div className="mt-4 p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-center justify-center gap-2 max-w-2xl mx-auto">
            <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>
              <strong>Sample Demo Notice:</strong> Curriculum structures illustrated here represent educational concepts aligned with NCERT guidelines. No formal board affiliation is claimed or implied.
            </span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {samplePrograms.map((program) => {
            const isSelected = program.id === selectedId;
            return (
              <button
                key={program.id}
                onClick={() => setSelectedId(program.id)}
                className={`px-4 sm:px-6 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-royal-400 ${
                  isSelected
                    ? 'bg-navy-900 text-gold-300 font-bold shadow-soft-md scale-[1.02] border border-navy-700'
                    : 'bg-surface hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{program.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-gold-400/20 text-gold-300' : 'bg-slate-200 text-slate-600'}`}>
                  {program.grades}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Program Detail Display */}
        <div className="bg-surface rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-soft-sm animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Wing Details */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-md bg-royal-100 text-royal-800 text-xs font-bold uppercase tracking-wider">
                  {activeProgram.grades}
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-200 text-slate-700 text-xs font-medium">
                  {activeProgram.ageGroup}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mb-4">
                {activeProgram.title}
              </h3>

              <p className="text-slate-700 text-base leading-relaxed mb-8">
                {activeProgram.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-xs uppercase font-bold tracking-widest text-navy-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Key Pedagogical Cornerstones
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProgram.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 shadow-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA link */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
                <button
                  onClick={onEnquireClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-gold-300 font-bold text-xs sm:text-sm transition shadow-sm"
                >
                  <span>Enquire for {activeProgram.grades}</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </button>
                <span className="text-xs text-slate-500">
                  Limited seats per batch to preserve student focus
                </span>
              </div>
            </div>

            {/* Right Side: Sample Subjects & Curriculum Overview */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-royal-600" />
                  <h4 className="font-serif font-bold text-navy-900 text-base">
                    Core Subject Spectrum (Sample)
                  </h4>
                </div>
                <span className="text-[11px] font-medium text-slate-400 uppercase">
                  NCERT Framework
                </span>
              </div>

              <div className="space-y-2.5 mb-6">
                {activeProgram.sampleSubjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 hover:bg-royal-50/50 border border-slate-100 transition-colors flex items-center justify-between text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <span>{sub}</span>
                    <span className="text-[10px] text-royal-600 font-semibold px-2 py-0.5 rounded bg-royal-100/50">
                      Standard
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-gold-50/60 border border-gold-200/60 text-xs text-amber-900 space-y-1">
                <p className="font-semibold text-amber-950 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Continuous Comprehensive Evaluation (CCE)
                </p>
                <p className="text-amber-800 leading-relaxed">
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

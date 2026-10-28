import React from 'react';
import { Target, Eye, Heart, ShieldCheck, Check, School, Lightbulb, Users2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      title: "Integrity & Truth",
      desc: "Instilling deep-rooted honesty, humility, and principled conduct across everyday actions and decisions.",
      icon: ShieldCheck,
      color: "text-navy-800 bg-navy-50 border-navy-200",
    },
    {
      title: "Inquisitive Curiosity",
      desc: "Inspiring children to ask thoughtful questions, experiment without fear, and embrace scientific inquiry.",
      icon: Lightbulb,
      color: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      title: "Empathy & Inclusivity",
      desc: "Cultivating mutual respect for diverse backgrounds, viewpoints, and collaborative community building.",
      icon: Heart,
      color: "text-rose-700 bg-rose-50 border-rose-200",
    },
    {
      title: "Collaborative Leadership",
      desc: "Encouraging teamwork, active responsibility, and poise in academics, athletics, and public speaking.",
      icon: Users2,
      color: "text-royal-700 bg-royal-50 border-royal-200",
    },
  ];

  const whyChooseUs = [
    "Holistic curriculum harmonizing foundational sciences, arts, and physical education",
    "Qualified and attentive faculty members with ongoing pedagogical development",
    "Safe, monitored green campus environment with comprehensive CCTV surveillance",
    "Emphasis on bilingual communication proficiency in both Hindi and English",
    "Balanced assessment methodology prioritizing conceptual understanding over rote exams",
    "Active co-curricular calendar comprising debates, athletics, cultural events, and clubs",
  ];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-surface scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-agency uppercase bg-navy-100 text-navy-900 border border-navy-200 mb-3">
            <School className="w-3.5 h-3.5 text-royal-600" />
            <span>DISCOVER OUR INSTITUTION</span>
          </div>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-3 sm:mb-4 tracking-tight">
            About {siteConfig.name}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Founded with a vision to deliver world-standard, values-based education in Dholpur, the Academy provides a vibrant learning ecosystem for children to achieve academic excellence and grounded character.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {/* Mission Card */}
          <div className="bg-white rounded-xl p-6 sm:p-10 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200">
            <div className="w-12 h-12 rounded-lg bg-royal-600 text-white flex items-center justify-center mb-5 sm:mb-6 shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 mb-2 sm:mb-3">
              Our Mission
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              To foster an engaging, inclusive, and academically challenging environment where every child discovers their intellectual strengths, develops ethical discernment, and builds resilience for the challenges of tomorrow.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-xl p-6 sm:p-10 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200">
            <div className="w-12 h-12 rounded-lg bg-gold-400 text-navy-950 flex items-center justify-center mb-5 sm:mb-6 shadow-sm">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 mb-2 sm:mb-3">
              Our Vision
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              To be recognized as a premier educational benchmark in eastern Rajasthan, admired for transformative pedagogy, student well-being, creative thinking, and dedication to national cultural ideals.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-agency text-royal-700 block mb-1">
              Guiding Principles
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950">
              The Four Pillars of Character & Mind
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-7 rounded-xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200"
                >
                  <div className={`w-10 sm:w-11 h-10 sm:h-11 rounded-lg border flex items-center justify-center mb-4 sm:mb-5 ${val.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-navy-900 mb-1.5 sm:mb-2">
                    {val.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us: Solid Navy Architectural Container */}
        <div className="bg-navy-900 rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-14 text-white border border-navy-800 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded text-[10px] sm:text-[11px] font-bold tracking-agency uppercase bg-navy-950 text-gold-400 border border-gold-400/40 mb-3 sm:mb-4">
                SAMPLE INSTITUTIONAL ADVANTAGES
              </span>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                Why Parents Entrust Their Children to Us
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 sm:mb-6">
                We believe that every school must earn a parent's trust through transparency, compassionate teaching, and continuous dedication to safety and growth.
              </p>
              <div className="p-3.5 sm:p-4 rounded-lg bg-navy-950 text-xs text-slate-400 border border-navy-800">
                <strong className="text-gold-400 block mb-1">Demonstration Notice:</strong>
                All listed advantages are sample institutional offerings designed to illustrate how your actual school strengths can be showcased.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {whyChooseUs.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-3.5 sm:p-4 rounded-lg bg-navy-800 border border-navy-700/80 flex items-start gap-3"
                  >
                    <div className="p-1 rounded bg-gold-400 text-navy-950 flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <span className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

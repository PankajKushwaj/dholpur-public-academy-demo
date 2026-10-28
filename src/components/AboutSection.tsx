import { Target, Eye, Heart, ShieldCheck, Sparkles, Check, School, Lightbulb, Users2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      title: "Integrity & Moral Courage",
      desc: "Instilling deep-rooted truthfulness, humility, and principled conduct across everyday actions.",
      icon: ShieldCheck,
      color: "text-navy-800 bg-navy-50 border-navy-200",
    },
    {
      title: "Inquisitive Curiosity",
      desc: "Inspiring children to ask thoughtful questions, experiment without fear, and embrace scientific temperament.",
      icon: Lightbulb,
      color: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      title: "Empathy & Inclusivity",
      desc: "Cultivating mutual respect for diverse backgrounds, languages, and perspectives within the campus community.",
      icon: Heart,
      color: "text-rose-700 bg-rose-50 border-rose-200",
    },
    {
      title: "Collaborative Leadership",
      desc: "Encouraging teamwork, sportsmanship, and proactive initiative in classroom projects and stage events.",
      icon: Users2,
      color: "text-royal-700 bg-royal-50 border-royal-200",
    },
  ];

  const whyChooseUs = [
    "Holistic curriculum harmonizing foundational sciences, arts, and physical education",
    "Qualified and attentive faculty members with ongoing pedagogical workshops",
    "Safe, monitored green campus environment with CCTV surveillance and fire safety",
    "Emphasis on bilingual communication skills in both Hindi and English",
    "Balanced assessment methodology prioritizing conceptual understanding over rote exams",
    "Active co-curricular calendar comprising debates, athletics, cultural fests, and clubs",
  ];

  return (
    <section id="about" className="py-20 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-royal-100 text-royal-800 border border-royal-200 mb-3">
            <School className="w-3.5 h-3.5 text-royal-700" />
            <span>DISCOVER OUR INSTITUTION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            About {siteConfig.name}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Founded with a vision to deliver world-standard, values-based education in Dholpur, the Academy provides a vibrant learning ecosystem for children to achieve academic excellence and grounded character.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft-sm hover:shadow-soft-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-royal-600 text-white flex items-center justify-center mb-6 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3">
                Our Mission
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                To foster an engaging, inclusive, and academically challenging environment where every child discovers their intellectual strengths, develops ethical discernment, and builds resilience for the challenges of tomorrow.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft-sm hover:shadow-soft-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3">
                Our Vision
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                To be recognized as a premier educational benchmark in eastern Rajasthan, admired for transformative pedagogy, student well-being, creative thinking, and dedication to national cultural ideals.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-navy-800">
              Guiding Principles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
              The Four Pillars of Our Academy
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm hover:shadow-soft-md transition-all duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${val.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-navy-900 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us & Non-Quantified Sample Benefits */}
        <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-soft-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-400/20 text-gold-300 border border-gold-400/30 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                SAMPLE INSTITUTIONAL ADVANTAGES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Why Parents Entrust Their Children to Us
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                We believe that every school must earn a parent's trust through transparency, compassionate teaching, and continuous dedication to safety and growth.
              </p>
              <div className="p-4 rounded-xl bg-navy-950/60 border border-navy-700 text-xs text-slate-400">
                <strong className="text-gold-400 block mb-1">Demonstration Notice:</strong>
                All listed advantages are sample institutional offerings designed to illustrate how your actual school strengths can be showcased.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-navy-800/80 border border-navy-700/80 flex items-start gap-3 backdrop-blur-sm"
                  >
                    <div className="p-1 rounded-full bg-gold-400/20 text-gold-400 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
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

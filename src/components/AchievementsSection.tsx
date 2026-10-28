import React from 'react';
import { sampleAchievements } from '../config/siteConfig';
import { Trophy, Medal, Lightbulb, Award, Sparkles, Star } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-gold-500" />;
      case 'Medal':
        return <Medal className="w-6 h-6 text-royal-500" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-500" />;
      default:
        return <Award className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-100 text-amber-900 border border-gold-300 mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>HONORS & MILESTONES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Celebrating Student Achievements
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every accomplishment reflects the dedication of our students, the guidance of our mentors, and the encouragement of our parents.
          </p>

          <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>
              <strong>Demonstration Highlights:</strong> These represent placeholder achievement layouts to show how your school's actual board toppers, sports trophies, and science prizes will be showcased.
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-royal-600">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-navy-950 mt-1 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-gold-600">
                <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-500" />
                <span>{item.award}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

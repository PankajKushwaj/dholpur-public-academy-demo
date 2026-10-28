import React from 'react';
import { sampleAchievements } from '../config/siteConfig';
import { Trophy, Medal, Lightbulb, Award, Sparkles, Star } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-gold-500" />;
      case 'Medal':
        return <Medal className="w-5 h-5 text-royal-600" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-amber-500" />;
      default:
        return <Award className="w-5 h-5 text-gold-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-surface scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-agency uppercase bg-navy-100 text-navy-900 border border-navy-200 mb-3">
            <Trophy className="w-3.5 h-3.5 text-royal-600" />
            <span>HONORS & MILESTONES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4 tracking-tight">
            Celebrating Student Achievements
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every accomplishment reflects the dedication of our students, the guidance of our faculty, and the enduring support of our parent community.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1 rounded text-xs font-semibold bg-navy-900 text-gold-400 border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>
              <strong>Demonstration Highlights:</strong> Placeholder achievement layouts for presentation
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-7 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-surface border border-slate-200 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded font-mono">
                    {item.year}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-agency text-royal-600 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-navy-950 mt-1 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-navy-950">
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

import React, { useState } from 'react';
import { sampleNotices } from '../config/siteConfig';
import type { Notice } from '../types';
import { Bell, Search, Calendar, ArrowUpRight, Sparkles, AlertCircle, X, Download } from 'lucide-react';

export const NoticesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNoticeModal, setActiveNoticeModal] = useState<Notice | null>(null);
  const [downloadFeedback, setDownloadFeedback] = useState<string | null>(null);

  const categories = ['All', 'Admissions', 'Academic', 'Holidays', 'Events'];

  const filteredNotices = sampleNotices.filter((n) => {
    const matchesCategory = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDemoDownload = (fileLabel: string) => {
    setDownloadFeedback(`Demo file preview for: "${fileLabel}". In a live website, this links to your school's actual circular or PDF document.`);
    setTimeout(() => {
      setDownloadFeedback(null);
    }, 4500);
  };

  return (
    <section id="notices" className="py-24 bg-white scroll-mt-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-agency uppercase bg-navy-100 text-navy-900 border border-navy-200 mb-3">
            <Bell className="w-3.5 h-3.5 text-royal-600" />
            <span>CIRCULARS & ANNOUNCEMENTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4 tracking-tight">
            Notice Board & Academy Updates
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Stay informed with the latest school circulars, academic schedules, admissions notifications, and event announcements.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold bg-navy-900 text-gold-400 border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>All notices below are SAMPLE placeholders with demonstration dates</span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-surface p-4 sm:p-5 rounded-xl border border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded text-xs font-semibold transition ${
                    isActive
                      ? 'bg-navy-900 text-gold-300 font-bold shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-900"
            />
          </div>
        </div>

        {downloadFeedback && (
          <div className="mb-6 p-4 rounded-lg bg-navy-900 text-gold-300 text-xs flex items-center gap-2.5 animate-fade-in border border-navy-800">
            <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>{downloadFeedback}</span>
          </div>
        )}

        {/* Notices Cards List */}
        {filteredNotices.length === 0 ? (
          <div className="text-center py-14 bg-surface rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No circulars matched your search criteria.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-surface hover:bg-white p-6 rounded-xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5 group"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-royal-600" />
                      {notice.date}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-royal-100 text-royal-800">
                      {notice.category}
                    </span>
                    {notice.isUrgent && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-rose-600" />
                        Urgent Circular
                      </span>
                    )}
                    <span className="text-[10px] font-semibold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                      DEMO NOTICE
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-950 group-hover:text-royal-600 transition-colors">
                    {notice.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {notice.content}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2.5 flex-shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                  <button
                    onClick={() => setActiveNoticeModal(notice)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-navy-900 hover:bg-navy-800 text-gold-300 font-bold text-xs uppercase tracking-agency transition"
                  >
                    <span>Read Circular</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {notice.fileLabel && (
                    <button
                      onClick={() => handleDemoDownload(notice.fileLabel!)}
                      className="inline-flex items-center gap-1 text-[11px] text-royal-600 hover:text-royal-800 font-bold tracking-agency uppercase transition"
                    >
                      <Download className="w-3 h-3" />
                      <span>Sample PDF</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Notice Detail Modal */}
        {activeNoticeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveNoticeModal(null)}
          >
            <div
              className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-dropdown relative border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveNoticeModal(null)}
                className="absolute top-5 right-5 p-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-royal-100 text-royal-800">
                  {activeNoticeModal.category}
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {activeNoticeModal.date}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-4 tracking-tight">
                {activeNoticeModal.title}
              </h3>

              <div className="p-5 rounded-lg bg-surface border border-slate-200 text-slate-700 text-sm leading-relaxed mb-6">
                {activeNoticeModal.content}
              </div>

              <div className="p-4 rounded-lg bg-navy-900 text-white text-xs mb-6 flex items-start gap-2.5 border border-navy-800">
                <AlertCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gold-400 block mb-0.5">Demonstration Notice Only:</strong>
                  <p className="text-slate-300">
                    When you launch this website for your school, your administrative staff will easily publish real dates, PDF circulars, and notifications through the simple admin control.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-200">
                {activeNoticeModal.fileLabel ? (
                  <button
                    onClick={() => {
                      handleDemoDownload(activeNoticeModal.fileLabel!);
                      setActiveNoticeModal(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-royal-600 hover:bg-royal-700 text-white font-semibold text-xs uppercase tracking-agency shadow-sm transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{activeNoticeModal.fileLabel}</span>
                  </button>
                ) : <div />}

                <button
                  onClick={() => setActiveNoticeModal(null)}
                  className="px-5 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

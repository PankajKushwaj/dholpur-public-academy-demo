import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, Sparkles, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedFeedback, setSubmittedFeedback] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.phone.trim()) errors.phone = 'Please provide a contact phone number.';
    if (!formData.message.trim()) errors.message = 'Please provide your enquiry message.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmittedFeedback(
      'Demo only: no information has been sent. Connect a real form service (such as Formspree, EmailJS, Google Sheets, or custom backend) to receive enquiries.'
    );
  };

  const cleanPhone = siteConfig.contact.phoneSecondary.replace(/[^0-9+]/g, '');

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-white scroll-mt-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-agency uppercase bg-navy-100 text-navy-900 border border-navy-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-royal-600" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-3 sm:mb-4 tracking-tight">
            Campus Location & Contact Details
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            We are always delighted to assist prospective parents and visitors. Schedule a campus tour or drop your enquiry below.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] sm:text-xs font-semibold bg-navy-900 text-gold-400 border border-gold-400/30 text-left sm:text-center">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>All address & telephone details below are SAMPLE placeholders</span>
          </div>
        </div>

        {/* Contact Information & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mb-14 sm:mb-16">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 sm:p-7 rounded-xl bg-surface border border-slate-200 shadow-card">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-3 rounded-lg bg-navy-900 text-gold-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-agency text-slate-400">
                    Campus Address (Sample)
                  </span>
                  <h3 className="font-serif font-bold text-navy-950 text-base sm:text-lg mt-0.5 mb-1">
                    {siteConfig.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {siteConfig.location.fullAddress}
                  </p>
                  <span className="inline-block mt-2 text-[10px] sm:text-[11px] font-bold text-royal-700 tracking-wide uppercase">
                    Near Chambal Riverfront Highway • Dholpur (Raj.)
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7 rounded-xl bg-surface border border-slate-200 shadow-card">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-3 rounded-lg bg-navy-900 text-gold-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-agency text-slate-400">
                    Telephone Numbers (Sample)
                  </span>
                  <a
                    href={`tel:${cleanPhone}`}
                    className="font-bold text-navy-950 text-base mt-0.5 block hover:underline"
                  >
                    {siteConfig.contact.phoneSecondary}
                  </a>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                    Office Landline: {siteConfig.contact.phonePrimary}
                  </p>
                  <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
                    Available during administrative working hours
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7 rounded-xl bg-surface border border-slate-200 shadow-card">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-3 rounded-lg bg-navy-900 text-gold-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-agency text-slate-400">
                    Email Correspondence (Sample)
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-bold text-navy-950 text-sm sm:text-base mt-0.5 block hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-slate-500 text-xs mt-0.5">
                    General queries answered within 24 operational hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7 rounded-xl bg-surface border border-slate-200 shadow-card">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-3 rounded-lg bg-navy-900 text-gold-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-agency text-slate-400">
                    Office Visiting Hours (Sample)
                  </span>
                  <p className="font-bold text-navy-950 text-sm sm:text-base mt-0.5">
                    {siteConfig.contact.officeHours}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Sundays & Gazetted Holidays: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Dholpur Campus Map Mockup */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-surface rounded-xl border border-slate-200 overflow-hidden shadow-card flex-1 flex flex-col">
              {/* Map Canvas Mockup */}
              <div className="relative h-60 sm:h-80 bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-[#E8ECEF] flex items-center justify-center">
                  <svg className="w-full h-full opacity-60" viewBox="0 0 600 350" preserveAspectRatio="none">
                    <path
                      d="M 0,280 Q 200,320 400,240 T 600,290"
                      fill="none"
                      stroke="#93C5FD"
                      strokeWidth="24"
                    />
                    <path d="M 100,0 L 120,350" stroke="#CBD5E1" strokeWidth="8" />
                    <path d="M 0,140 L 600,160" stroke="#CBD5E1" strokeWidth="12" />
                    <path d="M 280,0 L 310,350" stroke="#FBBF24" strokeWidth="10" />
                    <path d="M 120,150 L 450,80" stroke="#CBD5E1" strokeWidth="6" />
                  </svg>

                  {/* Campus Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-navy-900 border-2 border-gold-400 shadow-md flex items-center justify-center text-gold-400">
                      <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <div className="mt-1 bg-white px-2.5 py-1 rounded shadow-sm border border-slate-200 text-center">
                      <p className="font-serif font-bold text-[11px] sm:text-xs text-navy-950">{siteConfig.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium">Campus Plot (Sample)</p>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-white/95 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold text-slate-700 border border-slate-200">
                    NH-44 / Chambal Ravines Corridor (Dholpur, RJ)
                  </div>
                </div>

                <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider text-navy-950 border border-slate-200 flex items-center gap-1 shadow-sm">
                  <Navigation className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-royal-600" />
                  <span>Map Preview</span>
                </div>
              </div>

              {/* Map Footer Information */}
              <div className="p-5 sm:p-7 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-navy-950 text-base sm:text-lg mb-1">
                    Central Campus Location & Accessibility
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Centrally located along peaceful educational green belts with dedicated car parking for parents and secure multi-bus bays.
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-slate-500 font-medium">
                  <span>Google Maps integration ready for your real location</span>
                  <button
                    onClick={() => {
                      window.open('https://maps.google.com/?q=Dholpur+Rajasthan', '_blank');
                    }}
                    className="text-royal-600 font-bold uppercase tracking-agency hover:underline flex items-center gap-1 py-1"
                  >
                    <span>View Dholpur on Google Maps</span>
                    <Navigation className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Message Form with 16px mobile input size */}
        <div className="bg-surface rounded-xl p-5 sm:p-10 lg:p-12 border border-slate-200 shadow-card max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-1.5 sm:mb-2">
              Send a General Query
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Have specific questions regarding transport routes, fees, or curriculum? Send us a quick note.
            </p>
          </div>

          {submittedFeedback ? (
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-sm text-center animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center mx-auto mb-3 border border-gold-400/40">
                <AlertCircle className="w-6 h-6 text-gold-400" />
              </div>
              <h4 className="font-serif text-lg font-bold text-navy-950 mb-2">
                Sample Query Received!
              </h4>
              <p className="p-3.5 sm:p-4 rounded-lg bg-surface border border-slate-200 text-navy-950 text-xs sm:text-sm font-medium max-w-lg mx-auto mb-4 text-left sm:text-center">
                {submittedFeedback}
              </p>
              <button
                onClick={() => {
                  setSubmittedFeedback(null);
                  setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded bg-navy-900 text-white text-xs font-bold uppercase tracking-agency hover:bg-navy-800 transition min-h-[44px]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy-900 mb-1.5">
                    Your Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Meenakshi Singh"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 min-h-[44px]"
                  />
                  {formErrors.name && (
                    <p className="text-xs text-rose-600 mt-1 font-medium">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-900 mb-1.5">
                    Contact Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 min-h-[44px]"
                  />
                  {formErrors.phone && (
                    <p className="text-xs text-rose-600 mt-1 font-medium">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1.5">
                  Message / Question <span className="text-rose-600">*</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we assist you?"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
                ></textarea>
                {formErrors.message && (
                  <p className="text-xs text-rose-600 mt-1 font-medium">{formErrors.message}</p>
                )}
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-agency shadow-sm transition min-h-[48px] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-navy-950 flex-shrink-0" />
                  <span>Send Sample Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

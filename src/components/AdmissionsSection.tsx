import React, { useState } from 'react';
import { sampleFAQs, siteConfig } from '../config/siteConfig';
import {
  FileText,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Send,
  MessageSquare,
  ShieldCheck,
  ClipboardCheck,
  Clock,
  PhoneCall
} from 'lucide-react';

interface AdmissionsSectionProps {
  formSuccessMessage?: string;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = () => {
  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    classApplying: '',
    phone: '',
    email: '',
    consent: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const admissionSteps = [
    {
      step: "01",
      title: "Online Enquiry or Campus Visit",
      desc: "Fill the enquiry form online or visit the school reception to collect the comprehensive prospectus."
    },
    {
      step: "02",
      title: "Informal Interaction",
      desc: "An age-appropriate, friendly dialogue with student and parents to understand learning inclinations."
    },
    {
      step: "03",
      title: "Document Verification",
      desc: "Submission of birth certificate, previous school records (if applicable), and medical fitness verification."
    },
    {
      step: "04",
      title: "Seat Allotment & Welcome Kit",
      desc: "Confirmation of admission, student ID generation, uniform allotment, and orientation schedule."
    }
  ];

  const documentChecklist = [
    "Original Birth Certificate issued by Municipal Authority / Gram Panchayat (for Pre-Primary & Class I)",
    "Original Transfer Certificate (TC) counter-signed by Education Authority (for Class II onwards)",
    "Photocopy of previous class Report Card / Progress Marksheet",
    "4 recent passport-size colored photographs of the student",
    "2 passport-size photographs of parents / legal guardian",
    "Photocopy of Aadhaar Card of student and parents (for identity & address verification)",
  ];

  const classOptions = [
    "Playgroup / Nursery",
    "LKG (Lower Kindergarten)",
    "UKG (Upper Kindergarten)",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class XI - Science (Non-Medical)",
    "Class XI - Science (Medical)",
    "Class XI - Commerce",
    "Class XI - Humanities",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.studentName.trim()) {
      errors.studentName = "Please enter the student's full name.";
    }

    if (!formData.parentName.trim()) {
      errors.parentName = "Please enter the parent/guardian's name.";
    }

    if (!formData.classApplying) {
      errors.classApplying = "Please select the class applying for.";
    }

    // Phone validation (10 digits Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '').slice(-10);
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required for communication.";
    } else if (!phoneRegex.test(cleanPhone)) {
      errors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (!formData.consent) {
      errors.consent = "You must confirm this is a demo enquiry submission.";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Explicit user safety requirement:
    // "On valid submission, if no backend is connected, show: Demo only: no information has been sent. Connect a real form service to receive enquiries."
    // "Never store or transmit personal data silently."
    setSubmissionFeedback(
      "Demo only: no information has been sent. Connect a real form service (such as Formspree, EmailJS, Web3Forms, or custom backend) to receive enquiries."
    );
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      parentName: '',
      classApplying: '',
      phone: '',
      email: '',
      consent: false,
    });
    setFormErrors({});
    setFormSubmitted(false);
    setSubmissionFeedback(null);
  };

  const handleWhatsAppEnquiry = () => {
    const msg = encodeURIComponent(
      `Hello ${siteConfig.name}, I am submitting an admission enquiry via the website for Student: ${formData.studentName || '[Name]'}, Class: ${formData.classApplying || '[Class]'}, Parent: ${formData.parentName || '[Parent]'}. Please guide me.`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp.number}?text=${msg}`, '_blank');
  };

  return (
    <section id="admissions" className="py-20 bg-white scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-royal-100 text-royal-800 border border-royal-200 mb-3">
            <ClipboardCheck className="w-3.5 h-3.5 text-royal-700" />
            <span>ENROLLMENT 2026-27</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Admissions & Enrollment Process
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We welcome applications from motivated learners eager to be part of our dynamic school community. Explore our streamlined admission pathway below.
          </p>
        </div>

        {/* 4-Step Process Cards */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl font-bold text-navy-950 mb-8 text-center sm:text-left">
            Four Steps to Join Our Academy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-surface p-6 rounded-2xl border border-slate-200 shadow-soft-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-serif font-black text-gold-500/40 mb-3">
                    {s.step}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-navy-900 mb-2">
                    {s.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-royal-600">
                  <Clock className="w-3 h-3" />
                  <span>Session 2026-27 Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid: Admission Form & Document Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Admission Enquiry Form Column */}
          <div className="lg:col-span-7 bg-surface rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-soft-md relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
              <div>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  Online Admission Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Submit details for priority counseling and callback (Sample Form).
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                SAMPLE FORM
              </span>
            </div>

            {formSubmitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-amber-300 shadow-soft-sm text-center animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4 border border-amber-300">
                  <AlertCircle className="w-8 h-8 text-amber-700" />
                </div>
                <h4 className="font-serif text-xl font-bold text-navy-950 mb-2">
                  Form Validation Successful!
                </h4>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-sm leading-relaxed mb-6 font-medium">
                  {submissionFeedback}
                </div>

                <div className="bg-slate-50 p-4 rounded-xl text-left text-xs text-slate-600 space-y-1 mb-6 border border-slate-200">
                  <p className="font-semibold text-navy-900">Information entered for testing:</p>
                  <p>• Student Name: <strong className="text-slate-800">{formData.studentName}</strong></p>
                  <p>• Parent / Guardian: <strong className="text-slate-800">{formData.parentName}</strong></p>
                  <p>• Class Applying For: <strong className="text-slate-800">{formData.classApplying}</strong></p>
                  <p>• Mobile Number: <strong className="text-slate-800">{formData.phone}</strong></p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppEnquiry}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Try Real WhatsApp Enquiry</span>
                  </button>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-sm transition"
                  >
                    Submit Another Test Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                {/* Student Name */}
                <div>
                  <label
                    htmlFor="studentName"
                    className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1"
                  >
                    Student's Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="e.g. Aarav Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      formErrors.studentName
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-slate-300 focus:ring-royal-500'
                    }`}
                  />
                  {formErrors.studentName && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.studentName}
                    </p>
                  )}
                </div>

                {/* Parent Name */}
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1"
                  >
                    Parent / Guardian Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Kumar Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      formErrors.parentName
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-slate-300 focus:ring-royal-500'
                    }`}
                  />
                  {formErrors.parentName && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.parentName}
                    </p>
                  )}
                </div>

                {/* Class Applying For & Parent Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="classApplying"
                      className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1"
                    >
                      Class Applying For <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="classApplying"
                      name="classApplying"
                      value={formData.classApplying}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-800 focus:outline-none focus:ring-2 ${
                        formErrors.classApplying
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-slate-300 focus:ring-royal-500'
                      }`}
                    >
                      <option value="">-- Select Class --</option>
                      {classOptions.map((cls, i) => (
                        <option key={i} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                    {formErrors.classApplying && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.classApplying}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1"
                    >
                      Parent's Mobile Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      maxLength={15}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                        formErrors.phone
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-slate-300 focus:ring-royal-500'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email (Optional) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1"
                  >
                    Parent Email Address <span className="text-slate-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-500"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 rounded text-royal-600 border-slate-300 focus:ring-royal-500"
                    />
                    <span className="text-xs text-slate-600 leading-normal">
                      I understand that this is a <strong>sample demo website</strong> made for presentation purposes by developer Pankaj. No real personal data will be recorded or transmitted.
                    </span>
                  </label>
                  {formErrors.consent && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.consent}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-bold text-sm shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-gold-300"
                  >
                    <Send className="w-4 h-4 text-navy-950" />
                    <span>Submit Sample Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppEnquiry}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs sm:text-sm transition"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Instant WhatsApp Query</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Document Checklist Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft-sm">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-200">
                <FileText className="w-5 h-5 text-royal-600" />
                <h4 className="font-serif text-lg font-bold text-navy-950">
                  Required Admission Documents (Sample Checklist)
                </h4>
              </div>

              <div className="space-y-3">
                {documentChecklist.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-700 shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-royal-50 border border-royal-200 text-xs text-royal-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-royal-700 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Originals for Verification:</strong>
                  <p className="mt-0.5 text-royal-800">
                    Original birth certificate and transfer certificates will be returned immediately following scrutiny at the school desk.
                  </p>
                </div>
              </div>
            </div>

            {/* Helpline Box */}
            <div className="p-5 rounded-2xl bg-navy-900 text-white border border-navy-800 shadow-soft-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gold-400 text-navy-950">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-semibold text-gold-400">
                    Need Help With Admissions?
                  </div>
                  <div className="font-serif font-bold text-base sm:text-lg">
                    {siteConfig.contact.phoneSecondary}
                  </div>
                  <div className="text-xs text-slate-300">
                    Visiting Hours: 9:00 AM – 2:00 PM (Monday to Saturday)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admission FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              Admissions & School Policies FAQ
            </h3>
          </div>

          <div className="space-y-3">
            {sampleFAQs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-surface overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-navy-950 hover:bg-slate-50 transition"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-lg bg-white border border-slate-200 text-slate-600 flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-royal-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

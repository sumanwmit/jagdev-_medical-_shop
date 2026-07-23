import React, { useState } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  Clock, 
  Send, 
  Mail, 
  User, 
  CheckCircle2, 
  Building2,
  Navigation
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_ADDRESS, DISPLAY_PHONE, WHATSAPP_PHONE, createQuickInquiryUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.subject) {
      alert('Please fill in your Name, Phone Number, and Subject.');
      return;
    }

    const url = createQuickInquiryUrl(form.subject, `From: ${form.name} (${form.phone})\nEmail: ${form.email}\nMessage: ${form.message}`);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full space-y-12 pb-16">
      <SEO
        title="Contact Us & Directions - Jagdev Medical Shop Shakurabad"
        description="Contact Jagdev Medical Shop at 05, Shakurabad, Bihar 804425. Call or WhatsApp +91 6200828784 for genuine medicine orders, store timings, and Google Map directions."
        canonicalPath="/contact"
      />

      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 sm:p-12 shadow-sm space-y-4 relative overflow-hidden">
          <span className="bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Reach Store Directly
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Contact <span className="text-[#0A8F6A]">Jagdev Medical Shop</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
            Have questions about medicine availability, doctor prescriptions, or home delivery in Shakurabad? Reach us via call, WhatsApp, or visit our store counter.
          </p>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-50 dark:bg-emerald-950/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
        </div>
      </section>

      {/* Main Info Cards & Contact Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Store Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
              Store Details & Address
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-slate-400">Business Address</h3>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{BUSINESS_ADDRESS}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Near Main Market Area, Jehanabad District</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-slate-400">Call & WhatsApp Helpline</h3>
                  <a href={`tel:${WHATSAPP_PHONE}`} className="font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline mt-0.5 block text-base">
                    {DISPLAY_PHONE}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Instant prescription verification & orders</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-slate-400">Working Hours</h3>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">Monday - Saturday: 07:00 AM - 10:00 PM</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Sunday: 08:00 AM - 08:00 PM</p>
                  <p className="text-xs text-[#0A8F6A] dark:text-emerald-400 font-bold mt-1">24/7 Emergency Phone Helpline</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href={`tel:${WHATSAPP_PHONE}`}
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call Store ({DISPLAY_PHONE})
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#0A8F6A] hover:bg-emerald-700 text-white font-bold text-xs rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Open WhatsApp Chat
              </a>
              <a
                href="https://maps.google.com/?q=05+Shakurabad+Bihar+804425"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#0A8F6A]" /> Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Contact & Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Send Us a Direct Message</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out this quick form to send your medicine inquiry directly to our WhatsApp support team.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#0A8F6A] dark:text-emerald-400 mx-auto" />
                <h3 className="font-bold text-base">Inquiry Sent via WhatsApp!</h3>
                <p className="text-xs">Our team at Jagdev Medical Shop will respond to your query shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. 6200828784"
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject / Medicine Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. Insulin stock check, BP monitor price, general inquiry"
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Detailed Query
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Provide any specific dosage requirements, brand preferences, or questions..."
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0A8F6A] hover:bg-emerald-700 text-white font-extrabold text-sm rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Inquiry via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>

      </section>

      {/* Google Maps Embed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Map Location</span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Visit Jagdev Medical Shop in Shakurabad</h2>
            </div>
            <a
              href="https://maps.google.com/?q=05+Shakurabad+Bihar+804425"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-all shadow"
            >
              <Navigation className="w-3.5 h-3.5" /> Launch Google Maps Navigation
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-80 bg-slate-100 dark:bg-slate-800 relative">
            <iframe
              title="Jagdev Medical Shop Location Map"
              src="https://maps.google.com/maps?q=05+Shakurabad+Bihar+804425&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

    </div>
  );
};

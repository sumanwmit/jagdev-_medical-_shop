import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  ShoppingBag, 
  MapPin, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Pill, 
  HeartHandshake, 
  Activity, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Search, 
  Stethoscope,
  Send,
  HelpCircle,
  Truck,
  Clock,
  Award,
  BookOpen
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SERVICES_DATA } from '../data/servicesData';
import { FAQ_DATA } from '../data/faqData';
import { REVIEWS_DATA } from '../data/reviewsData';
import { BUSINESS_ADDRESS, DISPLAY_PHONE, WHATSAPP_PHONE } from '../utils/whatsapp';

interface HomeProps {
  onOpenWhatsAppOrder: (medName?: string) => void;
  onOpenQuickSearch: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppOrder, onOpenQuickSearch }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const featuredProducts = [
    {
      name: 'Baby Care Essentials',
      desc: 'Nestle Cerelac, Lactogen & Hypoallergenic Wipes',
      price: 'From ₹145',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80',
      badge: 'Popular'
    },
    {
      name: 'Digital BP & Glucometers',
      desc: 'Omron Automatic BP Monitor & Accu-Chek Strips',
      price: 'From ₹1,025',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
      badge: 'Genuine Sourced'
    },
    {
      name: 'Daily Multivitamins & Immunity',
      desc: 'Revital H, Vitamin D3 & Herbal Immunity Oils',
      price: 'From ₹160',
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80',
      badge: 'Best Value'
    },
    {
      name: 'First Aid & Surgical Dressings',
      desc: 'Sterile Gauze, Antiseptics, Syringes & Crepe',
      price: 'From ₹25',
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80',
      badge: 'Essential'
    }
  ];

  const healthTips = [
    {
      title: 'How to Store Insulin and Temperature-Sensitive Drugs at Home',
      date: 'July 2026',
      desc: 'Insulin requires strict 2°C to 8°C cold chain storage to maintain efficacy. Never freeze insulin vials.',
      category: 'Medicine Care'
    },
    {
      title: 'Essential Home Health Monitoring Tools Every Family Needs',
      date: 'July 2026',
      desc: 'Having a digital thermometer, pulse oximeter, and blood pressure monitor at home allows early symptom tracking.',
      category: 'Health Awareness'
    },
    {
      title: 'Why Doctor Prescription Verification Matters for Antibiotics',
      date: 'June 2026',
      desc: 'Completing the full prescribed antibiotic course prevents bacterial drug resistance.',
      category: 'Pharmacist Guide'
    }
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="w-full space-y-12 pb-16">
      <SEO
        title="Your Trusted Pharmacy in Shakurabad - Jagdev Medical Shop"
        description="Jagdev Medical Shop in Shakurabad, Bihar provides 100% genuine medicines, surgical supplies, baby care products, and health devices with fast WhatsApp order and local pickup."
        canonicalPath="/"
      />

      {/* Main Hero & Right Column Grid in Geometric Balance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (7 cols): Hero Banner + Geometric Stats */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Main Hero Geometric Container */}
            <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="relative z-10 space-y-6">
                <span className="bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
                  Trusted Since 2015
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                  Your Trusted Pharmacy for <span className="text-[#0A8F6A]">Genuine Medicines</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed max-w-xl">
                  Providing 100% genuine medicines, surgical supplies, baby care essentials, and daily healthcare products at affordable prices in Shakurabad.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => onOpenWhatsAppOrder()}
                    className="bg-slate-900 dark:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4" /> WhatsApp Order
                  </button>
                  <a
                    href="https://maps.google.com/?q=05+Shakurabad+Bihar+804425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center text-sm flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-[#0A8F6A]" /> Get Directions
                  </a>
                </div>
              </div>

              {/* Geometric Decorative Accent */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-50 dark:bg-emerald-950/40 rounded-full blur-3xl opacity-60 pointer-events-none" />
            </div>

            {/* 3 Geometric Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-[#0A8F6A] rounded-3xl p-6 text-white shadow-md space-y-1">
                <h3 className="text-3xl font-extrabold tracking-tight">10k+</h3>
                <p className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Happy Clients</p>
              </div>

              <div className="bg-[#1E40AF] rounded-3xl p-6 text-white shadow-md space-y-1">
                <h3 className="text-3xl font-extrabold tracking-tight">100%</h3>
                <p className="text-blue-100 text-xs font-bold uppercase tracking-wider">Genuine Meds</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm space-y-1">
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">24/7</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Support Available</p>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Live Medicine Stock Checker & Store Location */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Medicine Stock Checker Panel */}
            <div className="bg-slate-900 rounded-[32px] p-7 sm:p-8 text-white flex-1 relative overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-extrabold tracking-tight flex items-center gap-2">
                    <Search className="w-5 h-5 text-[#0A8F6A]" /> Medicine Stock Checker
                  </h2>
                  <span className="text-[11px] text-slate-400 font-medium">Updated Today</span>
                </div>

                <div className="relative mb-5">
                  <input
                    type="text"
                    onClick={onOpenQuickSearch}
                    readOnly
                    placeholder="Search medicine name..."
                    className="w-full bg-slate-800 border-none rounded-2xl px-5 py-3.5 text-xs focus:ring-2 focus:ring-[#0A8F6A] text-white cursor-pointer shadow-inner placeholder-slate-400"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
                </div>

                {/* Quick Stock Preview Items */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 bg-slate-800/60 rounded-2xl border border-slate-800">
                    <div>
                      <p className="font-bold text-sm text-white">Paracetamol 500mg</p>
                      <p className="text-[11px] text-slate-400 uppercase font-semibold">Dolo / Micro Labs</p>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-lg font-extrabold">
                      AVAILABLE
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-slate-800/60 rounded-2xl border border-slate-800">
                    <div>
                      <p className="font-bold text-sm text-white">Amoxicillin Syrup</p>
                      <p className="text-[11px] text-slate-400 uppercase font-semibold">GSK Pharmaceuticals</p>
                    </div>
                    <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-lg font-extrabold">
                      LIMITED STOCK
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-slate-800/60 rounded-2xl border border-slate-800">
                    <div>
                      <p className="font-bold text-sm text-white">Azithromycin 250mg</p>
                      <p className="text-[11px] text-slate-400 uppercase font-semibold">Pfizer / Cipla</p>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-lg font-extrabold">
                      AVAILABLE
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenQuickSearch}
                className="w-full mt-6 text-slate-400 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 py-2"
              >
                <span>View Full Inventory & Live Search</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Store Location & Timings Card */}
            <div className="bg-white dark:bg-slate-900 rounded-[32px] p-7 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Our Location</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-700">
                  <MapPin className="w-6 h-6 text-[#0A8F6A]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{BUSINESS_ADDRESS}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Near Main Market Area, Shakurabad, Jehanabad</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/40">
                  <p className="text-[10px] text-[#0A8F6A] font-extrabold uppercase mb-1">Open Hours</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">7:00 AM - 10:00 PM</p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/40">
                  <p className="text-[10px] text-blue-600 dark:text-blue-400 font-extrabold uppercase mb-1">WhatsApp Order</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">+91 {DISPLAY_PHONE}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Short About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
              About Jagdev Medical Shop
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Serving Shakurabad with Authentic Healthcare & Genuine Medicines
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Jagdev Medical Shop is a licensed healthcare pharmacy located at 05, Shakurabad, Bihar 804425. We take pride in dispensing 100% genuine pharmaceutical formulations, specialized surgical goods, baby care products, and clinical diagnostic devices.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A8F6A] hover:bg-emerald-700 text-white font-bold text-xs rounded-2xl transition-all shadow-md"
              >
                <span>Read Full Story & About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img
              src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
              alt="Jagdev Medical Shop Counter"
              className="rounded-3xl shadow-lg object-cover w-full h-64 sm:h-72 border border-slate-100 dark:border-slate-800"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#0A8F6A] dark:text-emerald-400 uppercase tracking-widest">What We Provide</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Featured Pharmacy Services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0A8F6A] hover:underline transition-all"
          >
            <span>View All Services & Stock</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Pill className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0A8F6A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenWhatsAppOrder(service.title)}
                  className="w-full py-2.5 px-3 bg-slate-50 hover:bg-[#0A8F6A] hover:text-white dark:bg-slate-800 dark:hover:bg-[#0A8F6A] text-slate-800 dark:text-slate-200 text-xs font-bold rounded-2xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Order This Category
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Geometric Cards */}
      <section className="bg-slate-100/80 dark:bg-slate-900/60 py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-[#0A8F6A] dark:text-emerald-400 uppercase tracking-widest">Our Trust Promise</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Why Local Residents Choose Jagdev Medical Shop
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#0A8F6A]" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">Directly sourced from government-authorized pharmaceutical stockists.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
              <Truck className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Fast WhatsApp Ordering</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">Send your prescription image to +91 6200828784 for immediate order packaging.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
              <Activity className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Cold Chain Storage</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">Refrigerated preservation for insulin, vaccines, and biological serums.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
              <HeartHandshake className="w-8 h-8 text-[#0A8F6A]" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Experienced Pharmacist</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">Friendly consultation regarding dosage schedules, precautions, and usage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-[#0A8F6A] dark:text-emerald-400 uppercase tracking-widest">Top Healthcare Essentials</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Popular Product Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all space-y-3 flex flex-col justify-between">
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-[#0A8F6A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    {prod.badge}
                  </span>
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">{prod.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{prod.desc}</p>
                  <p className="text-sm font-extrabold text-[#0A8F6A] dark:text-emerald-400 pt-1">{prod.price}</p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenWhatsAppOrder(prod.name)}
                  className="w-full py-2.5 bg-[#0A8F6A] hover:bg-emerald-700 text-white text-xs font-bold rounded-2xl transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> WhatsApp Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#0A8F6A] dark:text-emerald-400 uppercase tracking-widest">Local Feedback</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Customer Reviews
              </h2>
            </div>
            <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 px-3.5 py-1.5 rounded-2xl text-amber-800 dark:text-amber-300 font-bold text-xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 / 5.0 Rating in Shakurabad Region</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS_DATA.map((rev) => (
              <div key={rev.id} className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs">
                  <p className="font-bold text-slate-900 dark:text-white">{rev.author}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">{rev.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-[#0A8F6A] dark:text-emerald-400 uppercase tracking-widest">Helpful Answers</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.slice(0, 4).map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                className="w-full text-left p-5 flex items-center justify-between font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-[#0A8F6A] transition-colors"
              >
                <span>{faq.question}</span>
                {openFaqId === faq.id ? <ChevronUp className="w-5 h-5 shrink-0 text-[#0A8F6A]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-slate-400" />}
              </button>

              {openFaqId === faq.id && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Need Medicines Delivered or Kept Ready for Pickup?</h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Send us your doctor's prescription or list on WhatsApp (+91 6200828784). We verify and keep your medicines ready at Jagdev Medical Shop, Shakurabad.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => onOpenWhatsAppOrder()}
              className="py-3.5 px-6 bg-[#0A8F6A] text-white font-extrabold text-xs rounded-2xl shadow hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> WhatsApp Order
            </button>
            <a
              href={`tel:${WHATSAPP_PHONE}`}
              className="py-3.5 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-2xl border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" /> Call Store ({DISPLAY_PHONE})
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[32px] shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Subscribe to Health Alerts & Refill Reminders</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Stay informed on seasonal health advisories and medicine stock updates in Shakurabad.
          </p>

          {newsletterSubscribed ? (
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-2xl text-xs font-bold">
              Thank you for subscribing to Jagdev Medical Shop updates!
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] dark:text-white"
              />
              <button
                type="submit"
                className="py-3 px-6 bg-[#0A8F6A] hover:bg-emerald-700 text-white text-xs font-bold rounded-2xl transition-all shadow"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

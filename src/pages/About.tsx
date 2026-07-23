import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  MapPin, 
  PhoneCall, 
  ShoppingBag, 
  Cross, 
  History, 
  Target, 
  Eye, 
  UserCheck 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_ADDRESS, DISPLAY_PHONE, WHATSAPP_PHONE } from '../utils/whatsapp';

interface AboutProps {
  onOpenWhatsAppOrder: (medName?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppOrder }) => {
  const timelineEvents = [
    {
      year: '2016',
      title: 'Established in Shakurabad',
      description: 'Opened Jagdev Medical Shop at 05, Shakurabad with a commitment to providing authentic pharmaceuticals to local families.'
    },
    {
      year: '2019',
      title: 'Cold Chain Infrastructure Expansion',
      description: 'Installed medical-grade refrigeration units to store temperature-sensitive insulin, vaccines, and bio-therapeutics safely.'
    },
    {
      year: '2022',
      title: 'Digital & WhatsApp Order Integration',
      description: 'Launched quick prescription upload and WhatsApp ordering service (+91 6200828784) for faster local counter pick-up.'
    },
    {
      year: 'Present',
      title: 'Trusted Community Healthcare Hub',
      description: 'Serving over 5,000+ local families across Shakurabad and Jehanabad district with 100% licensed medicines.'
    }
  ];

  return (
    <div className="w-full space-y-12 pb-16">
      <SEO
        title="About Us - Licensed Pharmacy in Shakurabad"
        description="Learn about Jagdev Medical Shop's journey, mission, values, and pharmacist standards in Shakurabad, Bihar. Providing 100% genuine medicines and medical supplies."
        canonicalPath="/about"
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Hero / Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
              Licensed & Registered Retail Pharmacy
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              About <span className="text-[#0A8F6A]">Jagdev Medical Shop</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Established with a singular mission: to protect community health in Shakurabad, Bihar by ensuring 100% authentic medicines, surgical supplies, and compassionate pharmacist guidance.
            </p>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-50 dark:bg-emerald-950/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
        </div>
      </section>

      {/* Business Story & Pharmacist Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-extrabold text-[#0A8F6A] dark:text-emerald-400 uppercase tracking-widest">Our Heritage</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Dedicated to Genuine Healthcare in Shakurabad
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Jagdev Medical Shop was founded at 05, Shakurabad, Bihar 804425 to solve a critical rural and semi-urban healthcare challenge: ensuring consistent access to genuine, unadulterated pharmaceutical formulations.
            </p>
            <p>
              Under strict regulatory oversight, every batch of medicine stocked at Jagdev Medical Shop is sourced directly from government-authorized pharmaceutical distributors. From chronic cardiovascular medications to emergency antibiotics and infant nutritional feeds, we enforce rigorous batch verification and expiry checking.
            </p>
          </div>

          <div className="p-6 bg-emerald-50 dark:bg-emerald-950/50 rounded-3xl border border-emerald-100 dark:border-emerald-800/60 space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-200 text-sm">
              <UserCheck className="w-4 h-4 text-[#0A8F6A] dark:text-emerald-400" />
              <span>Message from Our Registered Pharmacist</span>
            </div>
            <p className="text-xs text-emerald-800 dark:text-emerald-300 italic leading-relaxed">
              "Your health and peace of mind are our highest priorities. When you buy medicines from Jagdev Medical Shop, you can rest assured that every tablet and syrup is 100% authentic, stored at proper temperature, and dispensed with accurate dosage instructions."
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
              alt="Pharmacist Consulting Patient"
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5 text-white">
              <p className="text-xs font-bold">Store Location:</p>
              <p className="text-xs text-slate-300">05, Shakurabad, Bihar 804425</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="bg-slate-100/80 dark:bg-slate-900/60 py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              To render genuine medicines, health monitoring devices, and surgical items accessible and affordable to every family in Shakurabad and surrounding Bihar regions.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              To be the most trusted local medical repository known for zero-compromise product authenticity, patient care ethics, and modern WhatsApp convenience.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Values</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Integrity, product authenticity, transparent pricing, patient confidentiality, and empathetic pharmacist support.
            </p>
          </div>
        </div>
      </section>

      {/* Business Timeline / Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Milestones</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Growth & Service Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative space-y-2">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{evt.year}</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">{evt.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{evt.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" /> Quality & Regulatory Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
              <p className="font-bold text-slate-900 dark:text-white">Drug License Compliant</p>
              <p className="text-slate-500 dark:text-slate-400">Fully registered and licensed under State Drug Licensing Authority regulations.</p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
              <p className="font-bold text-slate-900 dark:text-white">Cold Chain Management</p>
              <p className="text-slate-500 dark:text-slate-400">24/7 power backup supported medical refrigeration for insulins and vaccines.</p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
              <p className="font-bold text-slate-900 dark:text-white">Expiry Monitoring</p>
              <p className="text-slate-500 dark:text-slate-400">Automated stock rotation ensuring zero near-expiry drugs reach patients.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-200 dark:border-slate-800">
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">Have Questions for Our Pharmacist?</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Reach us on WhatsApp or call our store counter directly.</p>
            </div>
            <button
              onClick={() => onOpenWhatsAppOrder()}
              className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow"
            >
              <ShoppingBag className="w-4 h-4 inline mr-1.5" /> Order via WhatsApp
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  Pill, 
  Stethoscope, 
  Activity, 
  HeartHandshake, 
  ShieldPlus, 
  Sparkles, 
  ShoppingBag, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesProps {
  onOpenWhatsAppOrder: (medName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppOrder }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categoriesFilter = [
    { id: 'all', label: 'All Services' },
    { id: 'prescription-medicines', label: 'Prescription Drugs' },
    { id: 'otc-medicines', label: 'OTC & First Aid' },
    { id: 'health-devices', label: 'Health Devices' },
    { id: 'baby-maternal-care', label: 'Baby Care' },
    { id: 'surgical-supplies', label: 'Surgical Equipment' },
    { id: 'supplements-personal-care', label: 'Supplements' }
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.id === activeTab);

  return (
    <div className="w-full space-y-12 pb-16">
      <SEO
        title="Services & Medicine Categories - Jagdev Medical Shop"
        description="Browse complete medicine categories, OTC drugs, healthcare equipment, baby care, surgical items, and live inventory stock checker at Jagdev Medical Shop Shakurabad."
        canonicalPath="/services"
      />

      <Breadcrumbs items={[{ label: 'Services & Stock' }]} />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 sm:p-12 shadow-sm space-y-4 relative overflow-hidden">
          <span className="bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block">
            Comprehensive Retail Healthcare
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Our Healthcare <span className="text-[#0A8F6A]">Services & Categories</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
            Discover our complete inventory of prescription pharmaceuticals, over-the-counter remedies, diagnostic devices, baby care essentials, and surgical equipment in Shakurabad.
          </p>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-50 dark:bg-emerald-950/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Live Medicine Stock Checker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker onOrderMedicine={(medName) => onOpenWhatsAppOrder(medName)} />
      </section>

      {/* Service Category Filters & Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#0A8F6A] dark:text-emerald-400 uppercase tracking-widest">Product Offerings</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Category-Wise Healthcare Services
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categoriesFilter.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#0A8F6A] text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-extrabold text-lg flex items-center gap-2">
                    <Pill className="w-5 h-5 text-emerald-400" />
                    {service.title}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Featured Items:</p>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A] dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenWhatsAppOrder(service.title)}
                  className="w-full py-3 bg-[#0A8F6A] hover:bg-emerald-700 text-white font-bold text-xs rounded-2xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Order {service.title} via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Request Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Looking for a Specific Medicine Not Listed?</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            We procure specialized oncological, neurological, or rare diabetic medications upon custom patient request within 24 hours through authorized channels.
          </p>
          <button
            onClick={() => onOpenWhatsAppOrder('Custom Specialized Medicine Procurement')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow"
          >
            <ShoppingBag className="w-4 h-4" /> Request Custom Medicine Sourcing
          </button>
        </div>
      </section>

    </div>
  );
};

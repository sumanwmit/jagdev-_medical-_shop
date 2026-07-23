import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  PhoneCall, 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  MapPin, 
  Clock, 
  Cross, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { DISPLAY_PHONE, WHATSAPP_PHONE } from '../utils/whatsapp';

interface HeaderProps {
  onOpenWhatsAppOrder: (medName?: string) => void;
  onOpenQuickSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsAppOrder, onOpenQuickSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Stock', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm transition-colors duration-300">
      {/* Top Emergency & Info Banner */}
      <div className="bg-gradient-to-r from-sky-900 via-teal-900 to-emerald-900 text-white py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>05, Shakurabad, Bihar 804425</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 font-medium border-l border-emerald-700/60 pl-4">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mon - Sat: 7 AM - 10 PM | Sun: 8 AM - 8 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-300" /> 100% Genuine Medicines
            </span>
            <a
              href={`tel:${WHATSAPP_PHONE}`}
              className="flex items-center gap-1 font-bold text-emerald-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo / Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              <span>J</span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Jagdev Medical <span className="text-[#0A8F6A]">Shop</span>
              </span>
              <span className="block text-[10px] font-bold text-slate-400 dark:text-slate-400 tracking-wider uppercase">
                Shakurabad Pharmacy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors py-1 ${
                  isActive(link.path)
                    ? 'text-[#0A8F6A] border-b-2 border-[#0A8F6A] font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Stock Search Trigger */}
            <button
              onClick={onOpenQuickSearch}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-[#0A8F6A] transition-colors"
              title="Search Medicine Stock"
              aria-label="Search Medicine Stock"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Toggle Dark/Light Mode"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* Call / WhatsApp CTA Button */}
            <button
              onClick={() => onOpenWhatsAppOrder()}
              className="hidden sm:inline-flex bg-[#0A8F6A] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transition-all"
            >
              Call {DISPLAY_PHONE}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppOrder();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              WhatsApp Medicine Order
            </button>
            <a
              href={`tel:${WHATSAPP_PHONE}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              Call Pharmacy ({DISPLAY_PHONE})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

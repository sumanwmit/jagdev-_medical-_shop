import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, ArrowUp, ShoppingBag } from 'lucide-react';
import { createGeneralWhatsAppUrl, DISPLAY_PHONE, WHATSAPP_PHONE } from '../utils/whatsapp';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95 text-xs font-bold"
          title="Back to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${WHATSAPP_PHONE}`}
        className="pointer-events-auto flex items-center gap-2 py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 group text-sm font-bold"
        aria-label="Call Store"
      >
        <PhoneCall className="w-5 h-5 animate-pulse" />
        <span className="hidden group-hover:inline sm:inline">Call Store</span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppModal}
        className="pointer-events-auto flex items-center gap-2 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 font-bold text-sm"
        aria-label="WhatsApp Order"
      >
        <MessageCircle className="w-6 h-6" />
        <span>WhatsApp Order</span>
      </button>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 p-2.5 flex items-center justify-between gap-2 z-50 pointer-events-auto shadow-2xl backdrop-blur-md">
        <a
          href={`tel:${WHATSAPP_PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl text-xs font-bold"
        >
          <PhoneCall className="w-4 h-4 text-sky-600" />
          Call ({DISPLAY_PHONE})
        </a>

        <button
          onClick={onOpenWhatsAppModal}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
          Order via WhatsApp
        </button>
      </div>

    </div>
  );
};

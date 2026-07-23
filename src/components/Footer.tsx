import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Cross, 
  ExternalLink, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_ADDRESS, DISPLAY_PHONE, WHATSAPP_PHONE } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Global Tracking Integration mandated by prompt
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };
    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center font-bold text-xl shadow-md">
                <span>J</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Jagdev <span className="text-[#0A8F6A]">Medical Shop</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted licensed retail pharmacy in Shakurabad, Bihar. Providing 100% genuine medicines, surgical supplies, baby care essentials, and diagnostic equipment at affordable prices.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 p-3 rounded-2xl border border-emerald-800/60">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#0A8F6A]" />
              <span>Registered & Licensed Medical Retailer</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> About Our Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> Services & Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">›</span> Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours & Location */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Store Hours & Address</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_ADDRESS}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-200">Monday - Saturday:</p>
                  <p className="text-xs">07:00 AM - 10:00 PM</p>
                  <p className="font-medium text-slate-200 mt-1">Sunday:</p>
                  <p className="text-xs">08:00 AM - 08:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${WHATSAPP_PHONE}`} className="hover:text-emerald-400 font-semibold text-white">
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Location Map Preview */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Find Us in Shakurabad</h3>
            <div className="bg-slate-800 rounded-xl overflow-hidden p-3 border border-slate-700/80 space-y-2">
              <p className="text-xs text-slate-300">Located conveniently at Shakurabad main market area, Jehanabad district, Bihar 804425.</p>
              <a
                href="https://maps.google.com/?q=05+Shakurabad+Bihar+804425"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-all shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5" /> Open Google Maps
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Legal & Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>&copy; {new Date().getFullYear()} Jagdev Medical Shop. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Providing genuine healthcare services to Shakurabad & surrounding Bihar areas.</p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button onClick={() => setModalType('privacy')} className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setModalType('terms')} className="hover:text-emerald-400 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => setModalType('disclaimer')} className="hover:text-emerald-400 transition-colors">
              Medical Disclaimer
            </button>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
            <span>Developed by</span>
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-400 hover:text-emerald-300 underline inline-flex items-center gap-1"
            >
              WMIT <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Legal Content Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-lg w-full text-slate-800 dark:text-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white capitalize">
              {modalType === 'privacy' && 'Privacy Policy'}
              {modalType === 'terms' && 'Terms & Conditions'}
              {modalType === 'disclaimer' && 'Medical Disclaimer'}
            </h3>

            <div className="text-xs leading-relaxed space-y-2 max-h-60 overflow-y-auto pr-2">
              {modalType === 'privacy' && (
                <p>
                  Jagdev Medical Shop is committed to safeguarding patient privacy. Any customer details, phone numbers, or doctor prescription uploads provided for WhatsApp ordering are strictly used for order fulfillment and customer service. We never sell or share patient data with third-party advertisers.
                </p>
              )}
              {modalType === 'terms' && (
                <p>
                  All medicines are sold subject to prescription requirements mandated by Indian Drug Authorities. Schedule H and Schedule H1 drugs will only be dispensed upon presentation of a valid doctor prescription. Product prices and stock levels are subject to real-time market changes.
                </p>
              )}
              {modalType === 'disclaimer' && (
                <p>
                  The information provided on this website is for informational purposes only and does not substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified physician or healthcare provider regarding any medical condition or prescription questions.
                </p>
              )}
            </div>

            <button
              onClick={() => setModalType(null)}
              className="w-full py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

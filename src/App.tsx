import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppModal } from './components/WhatsAppModal';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { useTracker } from './hooks/useTracker';

// Lazy loading the 5 mandated separate React Router pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Loading Spinner Component for Suspense
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
    <div className="w-12 h-12 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Loading Jagdev Medical Shop...</p>
  </div>
);

// Inner Layout Shell with Router Hooks
const AppContent: React.FC = () => {
  // Global page switch tracking hook
  useTracker();

  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedMedicineName, setSelectedMedicineName] = useState('');
  const [isQuickInquiryOpen, setIsQuickInquiryOpen] = useState(false);

  const handleOpenWhatsAppOrder = (medName?: string) => {
    setSelectedMedicineName(medName || '');
    setIsWhatsAppModalOpen(true);
  };

  const handleOpenQuickSearch = () => {
    setIsQuickInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
      <Header
        onOpenWhatsAppOrder={handleOpenWhatsAppOrder}
        onOpenQuickSearch={handleOpenQuickSearch}
      />

      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenWhatsAppOrder={handleOpenWhatsAppOrder}
                  onOpenQuickSearch={handleOpenQuickSearch}
                />
              }
            />
            <Route
              path="/about"
              element={<About onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route
              path="/services"
              element={<Services onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route
              path="/gallery"
              element={<Gallery onOpenWhatsAppOrder={handleOpenWhatsAppOrder} />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <Home
                  onOpenWhatsAppOrder={handleOpenWhatsAppOrder}
                  onOpenQuickSearch={handleOpenQuickSearch}
                />
              }
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppOrder()} />

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        initialMedicineName={selectedMedicineName}
      />

      <QuickInquiryModal
        isOpen={isQuickInquiryOpen}
        onClose={() => setIsQuickInquiryOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

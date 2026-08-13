import { useState, useEffect } from 'react';
import { Droplets } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import EmergencySection from '@/components/EmergencySection';
import WhyUs from '@/components/WhyUs';
import About from '@/components/About';
import RotAvdrag from '@/components/RotAvdrag';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import MobileCallBar from '@/components/MobileCallBar';
import QuoteRequestPage from '@/components/QuoteRequestPage';
import HeatPumpPage from '@/components/HeatPumpPage';

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash;
}

function App() {
  const hash = useHashRoute();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const isQuotePage = hash.startsWith('#offertforfragan');
  const isHeatPumpPage = hash === '#varmepumpar';

  if (isQuotePage) {
    return <QuoteRequestPage />;
  }

  if (isHeatPumpPage) {
    return <HeatPumpPage />;
  }

  return (
    <div className="min-h-screen bg-canvas-50">
      {/* Preloader */}
      <div className={`preloader ${loading ? '' : 'done'}`}>
        <div className="preloader-logo">
          <div className="preloader-icon">
            <Droplets className="h-8 w-8 text-white" strokeWidth={2.5} />
          </div>
          <div className="preloader-bar">
            <div className="preloader-bar-fill" />
          </div>
          <span className="preloader-text">Stockholms Rör & VVS</span>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <EmergencySection />
        <WhyUs />
        <About />
        <RotAvdrag />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <MobileCallBar />
    </div>
  );
}

export default App;

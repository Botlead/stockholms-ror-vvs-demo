import { ShieldCheck, Clock, FileText, MapPin } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { PARTNERS } from '@/data/company';

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: 'Auktoriserade montörer' },
  { icon: Clock, label: 'Akutjour dygnet runt' },
  { icon: FileText, label: 'Kostnadsfri offert' },
  { icon: MapPin, label: 'Stockholm & Lidingö' },
];

export default function TrustBar() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-16 lg:py-20 bg-white border-b border-canvas-100 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Trust items — elegant horizontal row */}
        <div className={`reveal ${visible ? 'is-visible' : ''} flex flex-wrap items-center justify-center gap-x-10 gap-y-5 mb-10`}>
          {TRUST_ITEMS.map((item, i) => (
            <div key={item.label}
              className="flex items-center gap-2.5"
              style={{ transitionDelay: `${i * 80}ms` }}>
              <item.icon className="h-4 w-4 text-accent-600" strokeWidth={2} />
              <span className="text-sm font-semibold text-navy-800 tracking-tight">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Partner logos — very minimal */}
        <div className={`reveal ${visible ? 'is-visible' : ''} pt-8 border-t border-canvas-100`}>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-xs text-ink-300 font-medium uppercase tracking-wider">Samarbeten:</span>
            {PARTNERS.map((partner) => (
              <span key={partner} className="text-sm font-medium text-steel-400 hover:text-navy-800 transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

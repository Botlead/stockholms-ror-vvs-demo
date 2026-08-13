import { Phone, Siren } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden">
      <div className="glass border-t border-canvas-200 px-3 py-2.5">
        <div className="flex gap-2.5">
          <a href={COMPANY.phoneHref}
            className="shimmer flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent-600 px-4 py-3.5 text-sm font-semibold text-white shadow-accent">
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Ring nu
          </a>
          <a href={COMPANY.emergencyPhoneHref}
            className="shimmer flex flex-1 items-center justify-center gap-2 rounded-xl bg-emergency-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emergency-500/20">
            <Siren className="h-4 w-4" strokeWidth={2.5} />
            Akutjour
          </a>
        </div>
      </div>
    </div>
  );
}

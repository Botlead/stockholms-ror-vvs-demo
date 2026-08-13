import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { useReveal } from '@/hooks/useReveal';

export default function EmergencySection() {
  const { ref, visible } = useReveal();

  return (
    <section id="akutjour" className="py-20 lg:py-28 dark-gradient relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pd opacity-30" />
      {/* Subtle blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent-600/8 blur-[120px]" />

      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center`}>
        {/* Pulsing dot — premium, minimal */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 border border-accent-400/20">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" style={{ animationDuration: '2s' }} />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-400" />
              </span>
            </div>
          </div>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white text-balance leading-tight">
          Problem som inte kan vänta.
        </h2>
        <p className="mt-5 text-lg text-navy-200 leading-relaxed max-w-xl mx-auto text-pretty">
          Vid akuta VVS-problem finns hjälp när du behöver den. Vi är på plats inom en timme – dygnet runt.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={COMPANY.emergencyPhoneHref}
            className="shimmer group flex items-center gap-3 rounded-xl bg-accent-600 px-8 py-4 text-base font-semibold text-white shadow-accent transition-all duration-300 hover:bg-accent-700 hover:-translate-y-0.5">
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Ring jouren
            <span className="text-accent-100 font-medium tabular-nums tracking-tight">{COMPANY.emergencyPhoneDisplay}</span>
            <ArrowRight className="h-4 w-4 ml-0.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-navy-200 hover:text-white transition-colors">
            Icke-akut? Ring <span className="tabular-nums tracking-tight">{COMPANY.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

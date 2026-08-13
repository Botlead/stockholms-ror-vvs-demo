import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { useReveal } from '@/hooks/useReveal';

export default function EmergencySection() {
  const { ref, visible } = useReveal();

  return (
    <section id="akutjour" className="py-20 lg:py-28 dark-gradient relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pd opacity-40" />
      {/* Subtle blue glow */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent-600/5 blur-[100px]" />

      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center`}>
        {/* Pulsing dot — AI-inspired signal */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emergency-500/15 border border-emergency-400/20">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emergency-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emergency-500" />
              </span>
            </div>
          </div>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white text-balance leading-tight">
          Problem som inte kan vänta.
        </h2>
        <p className="mt-5 text-lg text-navy-200 leading-relaxed max-w-xl mx-auto text-pretty">
          Akut VVS-jour dygnet runt. Vi är på plats inom en timme vid vattenläckor, stopp i avlopp och andra akuta problem.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={COMPANY.emergencyPhoneHref}
            className="shimmer group flex items-center gap-3 rounded-xl bg-emergency-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emergency-500/20 transition-all hover:bg-emergency-600 hover:-translate-y-0.5">
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Ring akutjouren
            <span className="text-emergency-100 font-normal">{COMPANY.emergencyPhone}</span>
            <ArrowRight className="h-4 w-4 ml-0.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-navy-200 hover:text-white transition-colors">
            Icke-akut? Ring {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

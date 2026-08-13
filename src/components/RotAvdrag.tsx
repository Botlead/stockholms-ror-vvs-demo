import { Percent, CheckCircle2, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { ROT_BENEFITS } from '@/data/company';

export default function RotAvdrag() {
  const { ref, visible } = useReveal();

  return (
    <section id="rot-avdrag" className="py-20 lg:py-28 bg-blue-tint relative overflow-hidden">
      <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-accent-50/40 blur-3xl" />

      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-wider mb-5">
              <span className="h-px w-8 bg-accent-300" />
              ROT-avdrag
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-800 text-balance leading-tight">
              Få hjälp med <span className="gradient-text">ROT-avdraget</span>.
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed text-pretty">
              Använd ROT-avdrag och få 30% rabatt på arbetskostnaden. Vi hjälper dig att utnyttja avdraget på ett enkelt och smidigt sätt.
            </p>

            {/* Benefits — minimal list */}
            <div className="mt-8 space-y-3">
              {ROT_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-accent-600 flex-shrink-0" strokeWidth={2} />
                  <span className="text-sm text-ink-700">{benefit}</span>
                </div>
              ))}
            </div>

            <a href="#kontakt"
              className="shimmer mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-accent transition-all hover:bg-accent-700 hover:-translate-y-0.5">
              Få offert med ROT-avdrag
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: 30% visual — minimal */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute inset-0 rounded-full bg-accent-100/30 blur-3xl scale-110" />

              <div className="relative flex h-48 w-48 lg:h-56 lg:w-56 items-center justify-center rounded-full bg-white border border-canvas-200 shadow-soft-h">
                <div className="text-center">
                  <Percent className="h-6 w-6 text-accent-600 mx-auto mb-2" strokeWidth={2} />
                  <span className="block font-display font-extrabold text-6xl gradient-text leading-none">30%</span>
                  <span className="block mt-2 text-accent-700 font-medium text-xs uppercase tracking-wide">rabatt på</span>
                  <span className="block text-navy-800 font-semibold text-sm">arbetskostnaden</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Wrench, Siren, Bath, Flame, Droplets, Layers, ArrowRight, Award } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { PARTNERS } from '@/data/company';

const QUICK_SERVICES = [
  { icon: Siren, label: 'Akut VVS' },
  { icon: Wrench, label: 'Installation' },
  { icon: Bath, label: 'Badrum' },
  { icon: Droplets, label: 'Avlopp' },
  { icon: Flame, label: 'Värmesystem' },
  { icon: Layers, label: 'Stambyten' },
];

export default function TrustBar() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-blue-mist border-t border-canvas-200 overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-accent-50/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Strong headline */}
        <div className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14`}>
          {/* Recommendation badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 border border-accent-100 px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-accent-600" strokeWidth={2} />
            <span className="text-sm font-semibold text-accent-700">Rekommenderat företag 7 år i rad</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-800 text-balance leading-tight">
            Problem som behöver lösas.
            <br />
            <span className="text-ink-500">VVS som behöver fungera.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed text-pretty">
            Vattenläcka mitt i natten? Ett badrum som ska byggas om? Ett stambyte som behöver planeras? Vi löser det.
          </p>
        </div>

        {/* Quick service tags — elegant, interactive */}
        <div className={`reveal ${visible ? 'is-visible' : ''} flex flex-wrap items-center justify-center gap-2.5 mb-14`}>
          {QUICK_SERVICES.map((s, i) => (
            <a key={s.label} href="#tjanster"
              className="group flex items-center gap-2 rounded-xl border border-canvas-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 shadow-soft transition-all hover:shadow-soft-h hover:-translate-y-0.5 hover:border-accent-200"
              style={{ transitionDelay: `${i * 40}ms` }}>
              <s.icon className="h-4 w-4 text-accent-600 transition-transform group-hover:scale-110" strokeWidth={2} />
              {s.label}
            </a>
          ))}
        </div>

        {/* Partner logos — minimal */}
        <div className={`reveal ${visible ? 'is-visible' : ''} pt-10 border-t border-canvas-200`}>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-xs text-ink-300 font-medium uppercase tracking-wider">Samarbeten:</span>
            {PARTNERS.map((partner) => (
              <span key={partner} className="text-sm font-medium text-steel-400 hover:text-navy-800 transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint to services */}
        <div className={`reveal ${visible ? 'is-visible' : ''} mt-10 text-center`}>
          <a href="#offertforfragan" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors">
            Se alla tjänster
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

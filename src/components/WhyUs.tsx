import { useReveal } from '@/hooks/useReveal';
import { WHY_US } from '@/data/company';

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Award: () => null, BadgeCheck: () => null, Sparkles: () => null,
  Zap: () => null, Siren: () => null, Layers: () => null,
};

export default function WhyUs() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 lg:py-28 bg-blue-mist relative overflow-hidden">
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-50/30 blur-3xl" />

      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8`}>
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-wider mb-5">
            <span className="h-px w-8 bg-accent-300" />
            Varför oss
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-800 text-balance leading-tight">
            Fyra anledningar att välja oss.
          </h2>
        </div>

        {/* Horizontal numbered layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-canvas-200 rounded-2xl overflow-hidden border border-canvas-200">
          {WHY_US.slice(0, 4).map((item, i) => (
            <div key={item.title}
              className={`reveal ${visible ? 'is-visible' : ''} group relative bg-white p-8 lg:p-10 transition-all duration-500 hover:bg-canvas-50/50`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              {/* Number */}
              <span className="font-display font-extrabold text-4xl text-accent-100 transition-colors duration-500 group-hover:text-accent-300 block mb-4">
                0{i + 1}
              </span>
              {/* Title */}
              <h3 className="font-display font-bold text-navy-800 text-lg mb-2 leading-tight">{item.title}</h3>
              {/* Description */}
              <p className="text-sm text-ink-500 leading-relaxed">{item.description}</p>

              {/* Bottom accent line — animates on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent-600 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Process — minimal inline */}
        <div className="mt-20">
          <h3 className="font-display font-bold text-xl text-navy-800 mb-8 text-center">Så fungerar det</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { num: '01', text: 'Du kontaktar oss' },
              { num: '02', text: 'Vi bedömer problemet' },
              { num: '03', text: 'Vi hjälper dig' },
              { num: '04', text: 'Problemet är löst' },
            ].map((step, i) => (
              <div key={step.num}
                className={`reveal ${visible ? 'is-visible' : ''} text-center`}
                style={{ transitionDelay: `${i * 120}ms` }}>
                <span className="font-display font-extrabold text-2xl gradient-text block mb-2">{step.num}</span>
                <span className="text-sm text-ink-500 font-medium">{step.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

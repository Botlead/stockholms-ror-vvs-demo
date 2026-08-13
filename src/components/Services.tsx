import {
  Wrench, GitBranch, Layers, Utensils, Bath, Flame,
  ThermometerSun, Settings, Siren, Droplets, ArrowRight, Phone,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { COMPANY, SERVICES } from '@/data/company';

const ICONS: Record<string, typeof Wrench> = {
  Wrench, GitBranch, Layers, Utensils, Bath, Flame,
  ThermometerSun, Settings, Siren, Droplets,
};

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="tjanster" className="py-20 lg:py-28 bg-blue-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-accent-50/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl mb-16`}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-wider mb-5">
            <span className="h-px w-8 bg-accent-300" />
            Tjänster
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-800 text-balance leading-tight">
            Vad behöver du hjälp med?
          </h2>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed text-pretty">
            Från installationer och stambyten till akut hjälp och värmepumpar – vi tar oss an alla typer av VVS-projekt.
          </p>
        </div>

        {/* Services — editorial list layout */}
        <div className="border-t border-canvas-200">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Wrench;
            const isEmergency = service.icon === 'Siren';
            const isHeatPump = service.title === 'Värmepumpar';

            const href = isHeatPump
              ? '#varmepumpar'
              : isEmergency
                ? COMPANY.emergencyPhoneHref
                : `#offertforfragan?service=${encodeURIComponent(service.title)}`;

            const ctaText = isHeatPump ? 'Läs mer' : isEmergency ? 'Ring akutjour' : 'Få offert';

            return (
              <a key={service.title} href={href}
                className={`reveal ${visible ? 'is-visible' : ''} group relative flex items-center gap-5 border-b border-canvas-200 py-6 lg:py-7 px-2 transition-all duration-500 hover:bg-blue-tint/50`}
                style={{ transitionDelay: `${i * 40}ms` }}>
                {/* Icon */}
                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                  isEmergency
                    ? 'bg-emergency-50 text-emergency-600 group-hover:bg-emergency-500 group-hover:text-white'
                    : 'bg-accent-50 text-accent-600 group-hover:bg-accent-600 group-hover:text-white'
                }`}>
                  <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" strokeWidth={2} />
                </div>

                {/* Title + description */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-navy-800 text-base lg:text-lg leading-tight mb-0.5 transition-colors duration-300 group-hover:text-accent-700">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed line-clamp-1 lg:line-clamp-none">{service.description}</p>
                </div>

                {/* Arrow CTA */}
                <div className={`flex items-center gap-1.5 text-sm font-semibold flex-shrink-0 transition-all duration-300 ${
                  isEmergency ? 'text-emergency-600' : 'text-accent-600'
                }`}>
                  <span className="hidden sm:inline">{ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>

                {/* Bottom accent line — animates on hover */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full ${
                  isEmergency ? 'bg-emergency-500' : 'bg-accent-600'
                }`} />
              </a>
            );
          })}
        </div>

        {/* Minimal CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a href="#offertforfragan"
            className="shimmer flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-accent transition-all hover:bg-accent-700 hover:-translate-y-0.5">
            Få kostnadsfri offert
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-accent-600 transition-colors">
            <Phone className="h-4 w-4 text-accent-600" />
            <span className="tabular-nums tracking-tight">{COMPANY.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

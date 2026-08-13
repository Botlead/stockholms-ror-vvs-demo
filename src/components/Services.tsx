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
            Allt inom VVS.
          </h2>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed text-pretty">
            Från installationer och stambyten till akut hjälp och värmepumpar – vi tar oss an alla typer av VVS-projekt.
          </p>
        </div>

        {/* Services grid — image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Wrench;
            const isEmergency = service.icon === 'Siren';
            const isHeatPump = service.title === 'Värmepumpar';

            const card = (
              <>
                {/* Image with overlaid content — merged */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay extending into text area */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/45 to-navy-900/20" />
                  {/* Icon badge */}
                  <div className={`absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl shadow-soft transition-all duration-500 ${
                    isEmergency
                      ? 'bg-emergency-500 text-white'
                      : 'bg-white/90 text-accent-600 group-hover:bg-accent-600 group-hover:text-white'
                  }`}>
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  {/* Title + description overlaid on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display font-bold text-white text-lg leading-tight mb-1.5 drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed line-clamp-2 drop-shadow">
                      {service.description}
                    </p>
                    <div className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      isEmergency ? 'text-emergency-300' : 'text-accent-300'
                    }`}>
                      {isHeatPump ? 'Läs mer' : isEmergency ? 'Ring akutjour' : 'Få offert'}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </>
            );

            const wrapperClass = `reveal ${visible ? 'is-visible' : ''} group relative flex flex-col overflow-hidden rounded-2xl border border-canvas-200 shadow-soft transition-all duration-500 hover:shadow-soft-h hover:-translate-y-1`;

            if (isHeatPump) {
              return (
                <a key={service.title} href="#varmepumpar" className={wrapperClass} style={{ transitionDelay: `${i * 50}ms` }}>
                  {card}
                </a>
              );
            }

            if (isEmergency) {
              return (
                <a key={service.title} href={COMPANY.emergencyPhoneHref} className={wrapperClass} style={{ transitionDelay: `${i * 50}ms` }}>
                  {card}
                </a>
              );
            }

            return (
              <a key={service.title} href={`#offertforfragan?service=${encodeURIComponent(service.title)}`} className={wrapperClass} style={{ transitionDelay: `${i * 50}ms` }}>
                {card}
              </a>
            );
          })}
        </div>

        {/* Minimal CTA */}
        <div className="mt-12 flex items-center gap-4">
          <a href="#offertforfragan"
            className="shimmer flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-accent transition-all hover:bg-accent-700 hover:-translate-y-0.5">
            Få offert
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-accent-600 transition-colors">
            <Phone className="h-4 w-4 text-accent-600" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

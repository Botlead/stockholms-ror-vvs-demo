import { Phone, FileText, ArrowRight, ChevronDown, Siren, Award } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function Hero() {
  return (
    <section id="hem" className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28 pb-20">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professionell rörmokare installerar rör i Stockholm"
          className="h-full w-full object-cover"
        />
        {/* Multi-layer gradient overlay for smooth, readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Emergency badge */}
          <div className="enter d-1 inline-flex items-center gap-2.5 rounded-full bg-emergency-500/15 px-3.5 py-1.5 mb-8 border border-emergency-400/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emergency-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emergency-500" />
            </span>
            <span className="text-xs font-semibold text-white tracking-wide uppercase">
              Akut VVS-jour — Dygnet runt
            </span>
          </div>

          {/* Headline */}
          <h1 className="enter d-2 font-display font-extrabold text-[2.75rem] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-white leading-[1.02] text-balance drop-shadow-lg">
            VVS som fungerar.
            <br />
            När du behöver det som mest.
          </h1>

          {/* Subtext */}
          <p className="enter d-3 mt-7 text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl text-pretty drop-shadow">
            Från akuta vattenläckor till kompletta VVS-installationer. Vi hjälper privatpersoner och företag i Stockholm och på Lidingö — på plats inom en timme.
          </p>

          {/* CTAs */}
          <div className="enter d-4 mt-9 flex flex-col sm:flex-row gap-3.5">
            <a href="#offertforfragan"
              className="shimmer group flex items-center justify-center gap-2.5 rounded-xl bg-accent-600 px-7 py-3.5 text-base font-semibold text-white shadow-accent transition-all hover:bg-accent-700 hover:-translate-y-0.5">
              <FileText className="h-5 w-5" strokeWidth={2} />
              Få offert
              <ArrowRight className="h-4 w-4 ml-0.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={COMPANY.phoneHref}
              className="group flex items-center justify-center gap-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-white/20 hover:-translate-y-0.5">
              <Phone className="h-5 w-5 text-white" strokeWidth={2} />
              Ring oss
              <span className="hidden sm:inline text-white/70 font-normal ml-0.5">· {COMPANY.phone}</span>
            </a>
          </div>

          {/* Trust line */}
          <div className="enter d-5 mt-10 flex flex-wrap items-center gap-3 text-sm text-white/70 font-medium">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 px-3 py-1 text-accent-200 backdrop-blur-sm">
              <Award className="h-3.5 w-3.5" strokeWidth={2} />
              Rekommenderat företag 7 år i rad
            </span>
            <span className="text-white/30">•</span>
            <span>VVS-service</span>
            <span className="text-white/30">•</span>
            <span>Installation</span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <Siren className="h-3.5 w-3.5 text-emergency-400" strokeWidth={2} />
              Akut hjälp
            </span>
            <span className="text-white/30">•</span>
            <span>Stockholm & Lidingö</span>
          </div>
        </div>
      </div>

      {/* Floating stat card — bottom right */}
      <div className="enter d-6 absolute bottom-24 right-6 lg:right-12 z-10 hidden sm:block">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-soft-h animate-float">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/20">
              <span className="font-display font-extrabold text-accent-300 text-base">1h</span>
            </div>
            <div>
              <span className="block font-display font-bold text-white text-sm leading-none">Snabb på plats</span>
              <span className="text-xs text-white/60 font-medium">Inom en timme</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="enter d-8 absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-white/60 font-medium tracking-wide">Utforska våra tjänster</span>
        <ChevronDown className="h-4 w-4 text-white/60 scroll-bounce" />
      </div>

      {/* Smooth bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-mist to-transparent pointer-events-none z-10" />
    </section>
  );
}

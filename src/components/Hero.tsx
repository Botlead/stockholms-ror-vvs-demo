import { Phone, FileText, ArrowRight, ChevronDown, Siren } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/92 via-navy-900/75 to-navy-900/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-transparent to-navy-900/25" />
      </div>

      {/* Subtle animated particles — AI-inspired, barely visible */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 h-1 w-1 rounded-full bg-accent-300/40 animate-particle-drift" style={{ animationDelay: '0s', animationDuration: '18s' }} />
        <div className="absolute top-1/2 left-2/3 h-1 w-1 rounded-full bg-accent-300/30 animate-particle-drift" style={{ animationDelay: '3s', animationDuration: '22s' }} />
        <div className="absolute top-2/3 left-1/4 h-1.5 w-1.5 rounded-full bg-accent-300/20 animate-particle-drift" style={{ animationDelay: '6s', animationDuration: '25s' }} />
        <div className="absolute top-1/3 left-3/4 h-1 w-1 rounded-full bg-accent-300/30 animate-particle-drift" style={{ animationDelay: '9s', animationDuration: '20s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Emergency badge — premium pulsing dot */}
          <div className="enter d-1 inline-flex items-center gap-2.5 rounded-full bg-white/8 backdrop-blur-md px-4 py-2 mb-8 border border-white/15">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" style={{ animationDuration: '2s' }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
              Akut VVS-jour — Dygnet runt
            </span>
          </div>

          {/* Headline — bold, confident, with subtle blue gradient accent */}
          <h1 className="enter d-2 font-display font-extrabold text-[2.75rem] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-white leading-[1.02] text-balance drop-shadow-lg">
            VVS som fungerar.
            <br />
            <span className="gradient-text-light">När du behöver det som mest.</span>
          </h1>

          {/* Subtext — short, clear, confident */}
          <p className="enter d-3 mt-7 text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl text-pretty drop-shadow">
            Från akuta vattenläckor till kompletta VVS-installationer. Vi hjälper privatpersoner och företag i Stockholm och på Lidingö.
          </p>

          {/* CTAs — three clear buttons, equal width, centered content */}
          <div className="enter d-4 mt-9 flex flex-col sm:flex-row gap-4 sm:items-stretch">
            <a href="#offertforfragan"
              className="shimmer cta-float group flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-accent-600 px-10 py-6 text-sm font-semibold text-white shadow-accent transition-all duration-500 ease-out hover:bg-accent-700 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/50 active:scale-95">
              <FileText className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
              <span className="whitespace-nowrap">Få kostnadsfri offert</span>
              <ArrowRight className="h-4 w-4 ml-0.5 flex-shrink-0 transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
            <a href={COMPANY.emergencyPhoneHref}
              className="cta-float cta-float-delay-1 group flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-emergency-500 px-10 py-5 text-sm font-semibold text-white shadow-soft transition-all duration-500 ease-out hover:bg-emergency-600 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-lg hover:shadow-emergency-500/50 active:scale-95">
              <span className="flex items-center gap-2">
                <Siren className="h-5 w-5 flex-shrink-0 text-white" strokeWidth={2} />
                <span className="whitespace-nowrap">Akutjour</span>
              </span>
              <span className="text-xs font-medium tabular-nums tracking-tight text-white/85 whitespace-nowrap">{COMPANY.emergencyPhoneDisplay}</span>
            </a>
            <a href={COMPANY.phoneHref}
              className="cta-float cta-float-delay-2 group flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 text-sm font-semibold text-white shadow-soft transition-all duration-500 ease-out hover:bg-white/20 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-lg hover:shadow-white/20 active:scale-95">
              <span className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-white" strokeWidth={2} />
                <span className="whitespace-nowrap">Ring oss</span>
              </span>
              <span className="text-xs font-medium tabular-nums tracking-tight text-white/75 whitespace-nowrap">{COMPANY.phoneDisplay}</span>
            </a>
          </div>

          {/* Trust line — minimal */}
          <div className="enter d-5 mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60 font-medium">
            <span className="flex items-center gap-1.5">
              <Siren className="h-3.5 w-3.5 text-accent-400" strokeWidth={2} />
              Akut hjälp
            </span>
            <span className="text-white/20">•</span>
            <span>VVS-service</span>
            <span className="text-white/20">•</span>
            <span>Installation</span>
            <span className="text-white/20">•</span>
            <span>Stockholm & Lidingö</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="enter d-8 absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-white/50 font-medium tracking-wide">Utforska</span>
        <ChevronDown className="h-4 w-4 text-white/50 scroll-bounce" />
      </div>

      {/* Smooth bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-mist to-transparent pointer-events-none z-10" />
    </section>
  );
}

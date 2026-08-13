import { ShieldCheck, Users, Heart, ThumbsUp, Award } from 'lucide-react';
import { useReveal, useParallax } from '@/hooks/useReveal';
import { PILLARS } from '@/data/company';

const ICONS: Record<string, typeof ShieldCheck> = {
  ShieldCheck, Users, Heart, ThumbsUp,
};

export default function About() {
  const { ref, visible } = useReveal();
  const { ref: imgRef, offset } = useParallax(0.08);

  return (
    <section id="om-oss" className="py-20 lg:py-28 bg-blue-soft relative overflow-hidden">
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-soft-h h-[420px] lg:h-[520px]">
              <div ref={imgRef} className="absolute inset-0" style={{ transform: `translateY(${offset}px) scale(1.08)` }}>
                <img
                  src="https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Professionell rörmokare från Stockholms Rör & VVS"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/40 via-transparent to-transparent" />
            </div>

            {/* Soft glow */}
            <div className="absolute -inset-3 rounded-[2rem] bg-accent-50/30 blur-2xl -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-wider mb-5">
              <span className="h-px w-8 bg-accent-300" />
              Om oss
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-800 text-balance leading-tight">
              Din VVS-auktoriserade rörmokare i Stockholm.
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed text-pretty">
              Hos Stockholms Rör & VVS hittar du certifierade VVS-experter med bred kunskap och expertis. Vi tar oss an varje projekt med noggrannhet och ett starkt fokus på säkerhet.
            </p>

            {/* Pillars — minimal list */}
            <div className="mt-10 space-y-5">
              {PILLARS.map((pillar, i) => {
                const Icon = ICONS[pillar.icon] ?? ShieldCheck;
                return (
                  <div key={pillar.title}
                    className={`reveal ${visible ? 'is-visible' : ''} group flex gap-4`}
                    style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-all duration-500 group-hover:bg-accent-600 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-navy-800 text-base mb-1">{pillar.title}</h3>
                      <p className="text-sm text-ink-500 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

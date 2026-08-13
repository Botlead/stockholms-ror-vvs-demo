import { Phone, Siren, Mail, MapPin, Send, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { useState } from 'react';
import { COMPANY } from '@/data/company';
import { useReveal } from '@/hooks/useReveal';

const INTENT_OPTIONS = [
  { value: 'Akut hjälp', label: 'Jag behöver akut hjälp' },
  { value: 'Offert', label: 'Jag vill ha en offert' },
  { value: 'Fråga', label: 'Jag har en fråga' },
  { value: 'Annat', label: 'Annat' },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-blue-mist relative overflow-hidden">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-accent-50/30 blur-3xl" />

      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8`}>
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 uppercase tracking-wider mb-5">
            <span className="h-px w-8 bg-accent-300" />
            Kontakt
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-800 text-balance leading-tight">
            Behöver du hjälp?
          </h2>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed text-pretty">
            Ring oss eller fyll i formuläret så återkommer vi med en kostnadsfri offert. Vill du gå direkt till vår offertförfrågan?{' '}
            <a href="#offertforfragan" className="text-accent-600 font-semibold hover:text-accent-700 transition-colors underline underline-offset-2">
              Klicka här
            </a>
            .
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Contact info — minimal */}
          <div className="lg:col-span-2 space-y-3">
            <a href={COMPANY.phoneHref}
              className="group flex items-center gap-3.5 rounded-xl px-4 py-4 transition-all hover:bg-canvas-50 -mx-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-all group-hover:bg-accent-600 group-hover:text-white">
                <Phone className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <span className="block text-xs text-ink-300 font-medium">Telefon</span>
                <span className="block font-display font-bold text-navy-800 tabular-nums tracking-tight">{COMPANY.phoneDisplay}</span>
              </div>
            </a>

            <a href={COMPANY.emergencyPhoneHref}
              className="group flex items-center gap-3.5 rounded-xl px-4 py-4 transition-all hover:bg-emergency-50/50 -mx-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emergency-50 text-emergency-600 transition-all group-hover:bg-emergency-500 group-hover:text-white">
                <Siren className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <span className="block text-xs text-emergency-400 font-medium">Akutjour</span>
                <span className="block font-display font-bold text-navy-800 tabular-nums tracking-tight">{COMPANY.emergencyPhoneDisplay}</span>
                <span className="block text-xs text-ink-300">Dygnet runt</span>
              </div>
            </a>

            <a href={COMPANY.emailHref}
              className="group flex items-center gap-3.5 rounded-xl px-4 py-4 transition-all hover:bg-canvas-50 -mx-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-all group-hover:bg-accent-600 group-hover:text-white">
                <Mail className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <span className="block text-xs text-ink-300 font-medium">E-post</span>
                <span className="block font-display font-bold text-navy-800 break-all">{COMPANY.email}</span>
              </div>
            </a>

            <div className="flex items-center gap-3.5 rounded-xl px-4 py-4 -mx-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <span className="block text-xs text-ink-300 font-medium">Adress</span>
                <span className="block font-display font-bold text-navy-800">{COMPANY.address}</span>
                <span className="block text-xs text-ink-300">{COMPANY.postalCode}</span>
              </div>
            </div>

            {/* Hours — minimal */}
            <div className="flex items-center gap-2.5 px-4 pt-4 -mx-4">
              <Clock className="h-4 w-4 text-accent-600" strokeWidth={2} />
              <span className="text-sm text-ink-500">Akutjour tillgänglig 24/7 – på plats inom en timme</span>
            </div>
          </div>

          {/* Right: Form — intelligent assistant feel */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-canvas-50 border border-canvas-200 p-6 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 mb-5">
                    <CheckCircle2 className="h-8 w-8 text-accent-600" strokeWidth={2} />
                    <span className="absolute inset-0 rounded-full animate-ping bg-accent-200/40" style={{ animationDuration: '1.5s' }} />
                  </div>
                  <h3 className="font-display font-bold text-navy-800 text-lg mb-2">Tack för din förfrågan!</h3>
                  <p className="text-ink-500 text-sm max-w-xs">Vi har mottagit ditt meddelande och återkommer så fort vi kan.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Intent selection — AI assistant feel */}
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-3">Vad behöver du hjälp med?</label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {INTENT_OPTIONS.map((opt) => (
                        <button key={opt.value} type="button" onClick={() => setSelectedIntent(selectedIntent === opt.value ? null : opt.value)}
                          className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${
                            selectedIntent === opt.value
                              ? 'border-accent-400 bg-accent-50 text-accent-700 shadow-accent'
                              : 'border-canvas-200 bg-white text-ink-700 hover:border-accent-200 hover:bg-accent-50/30'
                          }`}>
                          <span className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                            selectedIntent === opt.value ? 'border-accent-600 bg-accent-600' : 'border-canvas-200'
                          }`}>
                            {selectedIntent === opt.value && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </span>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-700 mb-1.5">Namn</label>
                      <input type="text" required placeholder="Ditt namn"
                        className="w-full rounded-xl border border-canvas-200 bg-white px-4 py-3 text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-700 mb-1.5">Telefon</label>
                      <input type="tel" required placeholder="Ditt telefonnummer"
                        className="w-full rounded-xl border border-canvas-200 bg-white px-4 py-3 text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">E-post</label>
                    <input type="email" required placeholder="din@email.se"
                      className="w-full rounded-xl border border-canvas-200 bg-white px-4 py-3 text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">Meddelande</label>
                    <textarea required rows={3}
                      placeholder="Beskriv ditt ärende..."
                      className="w-full rounded-xl border border-canvas-200 bg-white px-4 py-3 text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all outline-none resize-none" />
                  </div>

                  <button type="submit"
                    className="shimmer w-full flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-6 py-4 text-base font-semibold text-white shadow-accent transition-all hover:-translate-y-0.5 hover:bg-accent-700">
                    <Send className="h-5 w-5" strokeWidth={2} />
                    Skicka förfrågan
                    <ArrowRight className="h-4 w-4 ml-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

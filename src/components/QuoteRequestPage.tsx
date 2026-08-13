import { useState } from 'react';
import {
  ArrowLeft, ArrowRight, Send, CheckCircle2, Phone, Siren, Mail, MapPin,
  Clock, Award, Wrench, Bath, Flame, Droplets, Layers, Siren as SirenIcon,
  ShieldCheck, User, Mail as MailIcon, Phone as PhoneIcon, Home, MessageSquare,
  ThermometerSun, Settings, Zap,
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import { safeInsert } from '@/lib/supabase';

const SERVICE_OPTIONS = [
  { value: 'Akut VVS', label: 'Akut problem', icon: SirenIcon },
  { value: 'VVS-installationer', label: 'VVS-service', icon: Wrench },
  { value: 'Stopp i avlopp', label: 'Avlopp', icon: Droplets },
  { value: 'VVS-installationer', label: 'Installation', icon: Settings },
  { value: 'Badrumsrenovering', label: 'Badrum', icon: Bath },
  { value: 'Kök', label: 'Kök', icon: ShieldCheck },
  { value: 'Värmepumpar', label: 'Värmepump', icon: ThermometerSun },
  { value: 'Annat', label: 'Annat', icon: Flame },
];

const URGENCY_OPTIONS = [
  { value: 'Så snart som möjligt', label: 'Så snart som möjligt', icon: Zap },
  { value: 'Inom några dagar', label: 'Inom några dagar', icon: Clock },
  { value: 'Jag planerar ett projekt', label: 'Jag planerar ett projekt', icon: Layers },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function QuoteRequestPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    return params.get('service');
  });
  const [selectedUrgency, setSelectedUrgency] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', message: '',
  });

  const canProceed = step === 1 ? !!selectedService : step === 2 ? !!selectedUrgency : step === 3 ? form.message.trim().length > 0 : true;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !form.name || !form.phone || !form.email) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    const fullMessage = `${form.message}\n\nBrådska: ${selectedUrgency || 'Ej angivet'}`;
    const { error } = await safeInsert('quote_requests', {
      name: form.name,
      phone: form.phone,
      email: form.email,
      service_type: selectedService,
      address: form.address || null,
      message: fullMessage,
    });
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setStep(1);
    setSelectedService(null);
    setSelectedUrgency(null);
    setForm({ name: '', phone: '', email: '', address: '', message: '' });
  };

  const nextStep = () => { if (canProceed && step < 4) setStep(step + 1); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };

  return (
    <div className="min-h-screen bg-blue-mist">
      {/* Subtle background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-accent-100/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent-50/30 blur-[90px]" />
      </div>

      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 glass border-b border-canvas-200/60 shadow-soft">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a href="#hem" className="flex items-center gap-2.5 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 transition-transform group-hover:scale-105">
                <Droplets className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-sm text-navy-800 tracking-tight hidden sm:inline">
                Stockholms Rör & VVS
              </span>
            </a>
            <a href="#hem" className="inline-flex items-center gap-2 rounded-lg border border-canvas-200 bg-white px-3.5 py-2 text-sm font-semibold text-navy-800 transition-all hover:border-accent-300 hover:text-accent-600 hover:-translate-y-0.5">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Tillbaka till startsidan</span>
              <span className="sm:hidden">Startsidan</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        {/* Header */}
        <div className="enter d-2 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 border border-accent-100 px-4 py-2 mb-5">
            <Award className="h-4 w-4 text-accent-600" strokeWidth={2} />
            <span className="text-sm font-semibold text-accent-700">Kostnadsfri offert</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-navy-800 text-balance leading-tight">
            Offertförfrågan
          </h1>
          <p className="mt-4 text-lg text-ink-500 leading-relaxed text-pretty max-w-xl">
            Berätta vad du behöver hjälp med – vi återkommer oftast inom 24 timmar.
          </p>
        </div>

        {status === 'success' ? (
          <div className="enter d-3 rounded-2xl bg-white border border-canvas-200 shadow-soft-h p-10 lg:p-14 text-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent-50 mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-accent-600" strokeWidth={2} />
              <span className="absolute inset-0 rounded-full animate-ping bg-accent-200/40" style={{ animationDuration: '1.5s' }} />
            </div>
            <h2 className="font-display font-bold text-navy-800 text-2xl mb-3">Tack för din förfrågan!</h2>
            <p className="text-ink-500 text-base max-w-md mx-auto leading-relaxed">
              Vi har mottagit din offertförfrågan och återkommer så snart vi kan, oftast inom 24 timmar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#hem" className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-accent transition-all hover:bg-accent-700 hover:-translate-y-0.5">
                Tillbaka till startsidan
                <ArrowRight className="h-4 w-4" />
              </a>
              <button onClick={resetForm} className="inline-flex items-center gap-2 rounded-xl border border-canvas-200 bg-white px-6 py-3 text-sm font-semibold text-navy-800 transition-all hover:border-accent-200 hover:-translate-y-0.5">
                Skicka en till
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Progress bar */}
            <div className="enter d-3 mb-8 flex items-center gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex-1">
                  <div className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? 'bg-accent-600' : 'bg-canvas-200'}`} />
                </div>
              ))}
            </div>

            {/* Form card */}
            <form onSubmit={handleSubmit} className="enter d-3 rounded-2xl bg-white border border-canvas-200 shadow-soft-h p-6 lg:p-10">
              {/* Step 1: Service selection */}
              {step === 1 && (
                <div className="animate-step-in">
                  <h2 className="font-display font-bold text-navy-800 text-xl mb-2">Vad behöver du hjälp med?</h2>
                  <p className="text-sm text-ink-500 mb-6">Välj det som passar bäst.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button key={opt.value + opt.label} type="button" onClick={() => setSelectedService(selectedService === opt.value ? null : opt.value)}
                        className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-5 text-xs font-medium transition-all duration-300 ${
                          selectedService === opt.value
                            ? 'border-accent-400 bg-accent-50 text-accent-700 shadow-accent'
                            : 'border-canvas-200 bg-white text-ink-700 hover:border-accent-200 hover:bg-accent-50/30'
                        }`}>
                        <opt.icon className={`h-5 w-5 transition-colors duration-300 ${selectedService === opt.value ? 'text-accent-600' : 'text-ink-400'}`} strokeWidth={2} />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Urgency */}
              {step === 2 && (
                <div className="animate-step-in">
                  <h2 className="font-display font-bold text-navy-800 text-xl mb-2">När behöver du hjälp?</h2>
                  <p className="text-sm text-ink-500 mb-6">Vi anpassar oss efter din situation.</p>
                  <div className="space-y-3">
                    {URGENCY_OPTIONS.map((opt) => (
                      <button key={opt.value} type="button" onClick={() => setSelectedUrgency(selectedUrgency === opt.value ? null : opt.value)}
                        className={`flex items-center gap-3.5 rounded-xl border px-5 py-4 text-sm font-medium transition-all duration-300 w-full text-left ${
                          selectedUrgency === opt.value
                            ? 'border-accent-400 bg-accent-50 text-accent-700 shadow-accent'
                            : 'border-canvas-200 bg-white text-ink-700 hover:border-accent-200 hover:bg-accent-50/30'
                        }`}>
                        <opt.icon className={`h-5 w-5 transition-colors duration-300 ${selectedUrgency === opt.value ? 'text-accent-600' : 'text-ink-400'}`} strokeWidth={2} />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Description */}
              {step === 3 && (
                <div className="animate-step-in">
                  <h2 className="font-display font-bold text-navy-800 text-xl mb-2">Berätta lite mer</h2>
                  <p className="text-sm text-ink-500 mb-6">Ju mer du beskriver, desto bättre kan vi hjälpa dig.</p>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-ink-300" strokeWidth={2} />
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Beskriv vad du behöver hjälp med, t.ex. nyinstallation, byte eller service..."
                      className="w-full rounded-xl border border-canvas-200 bg-white pl-11 pr-4 py-3 text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all outline-none resize-none" />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">Adress (valfritt)</label>
                    <div className="relative">
                      <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-300" strokeWidth={2} />
                      <input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="Gatuadress"
                        className="w-full rounded-xl border border-canvas-200 bg-white pl-11 pr-4 py-3 text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact info */}
              {step === 4 && (
                <div className="animate-step-in">
                  <h2 className="font-display font-bold text-navy-800 text-xl mb-2">Kontaktuppgifter</h2>
                  <p className="text-sm text-ink-500 mb-6">Hur kan vi nå dig?</p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-700 mb-1.5">Namn</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-300" strokeWidth={2} />
                        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Ditt namn"
                          className="w-full rounded-xl border border-canvas-200 bg-white pl-11 pr-4 py-3 text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all outline-none" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ink-700 mb-1.5">Telefon</label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-300" strokeWidth={2} />
                          <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="Ditt telefonnummer"
                            className="w-full rounded-xl border border-canvas-200 bg-white pl-11 pr-4 py-3 text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ink-700 mb-1.5">E-post</label>
                        <div className="relative">
                          <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-300" strokeWidth={2} />
                          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="din@email.se"
                            className="w-full rounded-xl border border-canvas-200 bg-white pl-11 pr-4 py-3 text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all outline-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Error message */}
              {status === 'error' && (
                <p className="mt-4 text-sm text-emergency-600">Något gick fel. Försök igen eller ring oss direkt.</p>
              )}

              {/* Navigation buttons */}
              <div className="mt-8 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <button type="button" onClick={prevStep}
                    className="inline-flex items-center gap-2 rounded-xl border border-canvas-200 bg-white px-5 py-3 text-sm font-semibold text-navy-800 transition-all hover:border-accent-200 hover:-translate-y-0.5">
                    <ArrowLeft className="h-4 w-4" />
                    Tillbaka
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button type="button" onClick={nextStep} disabled={!canProceed}
                    className="shimmer inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-accent transition-all hover:bg-accent-700 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    Fortsätt
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button type="submit" disabled={status === 'submitting'}
                    className="shimmer inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-accent transition-all hover:bg-accent-700 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'submitting' ? (
                      <>Skickar...</>
                    ) : (
                      <>
                        <Send className="h-5 w-5" strokeWidth={2} />
                        Skicka offertförfrågan
                        <ArrowRight className="h-4 w-4 ml-0.5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>

            {/* Contact info below form */}
            <div className="enter d-4 mt-8 grid sm:grid-cols-3 gap-4">
              <a href={COMPANY.phoneHref} className="group flex items-center gap-3 rounded-xl bg-white border border-canvas-200 px-4 py-4 transition-all hover:shadow-soft-h hover:-translate-y-0.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-all group-hover:bg-accent-600 group-hover:text-white">
                  <Phone className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <span className="block text-xs text-ink-300 font-medium">Telefon</span>
                  <span className="block font-display font-bold text-navy-800 text-sm tabular-nums tracking-tight">{COMPANY.phoneDisplay}</span>
                </div>
              </a>
              <a href={COMPANY.emergencyPhoneHref} className="group flex items-center gap-3 rounded-xl bg-white border border-canvas-200 px-4 py-4 transition-all hover:shadow-soft-h hover:-translate-y-0.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emergency-50 text-emergency-600 transition-all group-hover:bg-emergency-500 group-hover:text-white">
                  <Siren className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <span className="block text-xs text-emergency-400 font-medium">Akutjour</span>
                  <span className="block font-display font-bold text-navy-800 text-sm tabular-nums tracking-tight">{COMPANY.emergencyPhoneDisplay}</span>
                </div>
              </a>
              <a href={COMPANY.emailHref} className="group flex items-center gap-3 rounded-xl bg-white border border-canvas-200 px-4 py-4 transition-all hover:shadow-soft-h hover:-translate-y-0.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-all group-hover:bg-accent-600 group-hover:text-white">
                  <Mail className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <span className="block text-xs text-ink-300 font-medium">E-post</span>
                  <span className="block font-display font-bold text-navy-800 text-sm break-all">{COMPANY.email}</span>
                </div>
              </a>
            </div>

            {/* Trust line */}
            <div className="enter d-5 mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-ink-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-accent-600" strokeWidth={2} />
                Svar inom 24h
              </span>
              <span className="text-canvas-200">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent-600" strokeWidth={2} />
                Certifierade tekniker
              </span>
              <span className="text-canvas-200">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent-600" strokeWidth={2} />
                Stockholm & Lidingö
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

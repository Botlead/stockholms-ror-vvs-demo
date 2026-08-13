import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Siren, FileText, HelpCircle, Wrench, Phone } from 'lucide-react';
import { COMPANY } from '@/data/company';

type Message = { role: 'bot' | 'user'; text: string };

const QUICK_OPTIONS = [
  { label: 'Akut hjälp', icon: Siren, response: 'Vid akuta VVS-problem, ring oss direkt på 076-054 01 61 – vi finns tillgängliga dygnet runt och är på plats inom en timme.' },
  { label: 'Få offert', icon: FileText, response: `Gå till offertförfrågan så återkommer vi med en kostnadsfri offert. Du kan också ringa ${COMPANY.phoneDisplay} eller maila ${COMPANY.email}.` },
  { label: 'Våra tjänster', icon: Wrench, response: 'Vi erbjuder VVS-installationer, rördragning, stambyten, kök, badrumsrenovering, värmesystem, värmepumpar, service, reparationer, akut VVS och stopp i avlopp.' },
  { label: 'Kontakta oss', icon: HelpCircle, response: `Ring ${COMPANY.phoneDisplay}, akutjour ${COMPANY.emergencyPhoneDisplay} eller maila ${COMPANY.email}.` },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'bot', text: 'Hej! Hur kan vi hjälpa dig?' }]);
  const [input, setInput] = useState('');
  const [showNotification, setShowNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleQuickOption = (option: typeof QUICK_OPTIONS[number]) => {
    setMessages((prev) => [...prev, { role: 'user', text: option.label }]);
    setShowNotification(false);
    setTimeout(() => { setMessages((prev) => [...prev, { role: 'bot', text: option.response }]); }, 500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setShowNotification(false);
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        role: 'bot',
        text: `Tack! För bästa hjälp, ring ${COMPANY.phoneDisplay} eller gå till offertförfrågan. Vid akuta ärenden, ring ${COMPANY.emergencyPhoneDisplay}.`,
      }]);
    }, 700);
  };

  return (
    <>
      {/* Notification bubble */}
      {showNotification && !open && (
        <div className="fixed bottom-36 lg:bottom-24 right-4 lg:right-6 z-40 max-w-[240px] animate-fade-up">
          <div className="relative rounded-2xl bg-white shadow-soft-h border border-canvas-200 p-3.5 pr-8">
            <button onClick={() => setShowNotification(false)}
              className="absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-ink-300 hover:bg-canvas-50" aria-label="Stäng">
              <X className="h-3 w-3" />
            </button>
            <div className="flex items-start gap-2.5">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-accent-600">
                <MessageCircle className="h-3.5 w-3.5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-navy-800">Behöver du hjälp?</p>
                <p className="text-xs text-ink-500 leading-relaxed">Chatta med oss eller ring!</p>
              </div>
            </div>
            <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white border-r border-b border-canvas-200" />
          </div>
        </div>
      )}

      {/* Chat button */}
      <button onClick={() => { setOpen(!open); setShowNotification(false); }}
        className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-40 flex items-center justify-center rounded-full bg-accent-600 text-white shadow-accent transition-all duration-300 hover:scale-110"
        style={{ height: '3.25rem', width: '3.25rem' }}
        aria-label="Öppna chat">
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-300 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white" />
          </span>
        )}
      </button>

      {/* Chat window */}
      <div className={`fixed bottom-36 lg:bottom-24 right-4 lg:right-6 z-40 w-[calc(100vw-2rem)] max-w-sm origin-bottom-right transition-all duration-300 ${open ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
        <div className="rounded-2xl bg-white shadow-soft-h border border-canvas-200 overflow-hidden flex flex-col max-h-[480px]">
          {/* Header — integrated with site design */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-canvas-200 bg-canvas-50">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-600">
              <MessageCircle className="h-4.5 w-4.5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-display font-bold text-navy-800 text-sm">Stockholms Rör & VVS</h4>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                </span>
                <span className="text-xs text-ink-300">Online nu</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-ink-300 hover:bg-canvas-100" aria-label="Stäng">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-canvas-50 min-h-[180px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm ${
                  msg.role === 'user'
                    ? 'bg-accent-600 text-white rounded-br-md'
                    : 'bg-white border border-canvas-200 text-navy-800 rounded-bl-md shadow-soft'
                }`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick options */}
          {messages.length <= 1 && (
            <div className="px-4 pb-3 space-y-2 bg-white">
              <div className="grid grid-cols-2 gap-2">
                {QUICK_OPTIONS.map((option) => (
                  <button key={option.label} onClick={() => handleQuickOption(option)}
                    className="group flex items-center gap-2 rounded-lg border border-canvas-200 bg-white px-3 py-2 text-xs font-medium text-navy-800 hover:border-accent-200 hover:bg-accent-50/30 transition-all text-left">
                    <option.icon className="h-3.5 w-3.5 text-accent-600 flex-shrink-0 transition-transform group-hover:scale-110" />
                    <span className="leading-tight">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-canvas-200 p-3 bg-white">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Skriv ett meddelande..."
              className="flex-1 rounded-xl border border-canvas-200 bg-canvas-50 px-3.5 py-2.5 text-sm text-navy-800 placeholder-ink-300 focus:border-accent-400 focus:bg-white focus:ring-2 focus:ring-accent-100 transition-all outline-none" />
            <button type="submit"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-600 text-white shadow-accent transition-all hover:scale-105" aria-label="Skicka">
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Emergency link */}
          <a href={COMPANY.emergencyPhoneHref}
            className="group flex items-center justify-center gap-2 bg-emergency-50 border-t border-emergency-100 px-4 py-2.5 text-xs font-semibold text-emergency-600 hover:bg-emergency-100 transition-colors">
            <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
            Akut? Ring jour – <span className="tabular-nums tracking-tight">{COMPANY.emergencyPhoneDisplay}</span>
          </a>
        </div>
      </div>
    </>
  );
}

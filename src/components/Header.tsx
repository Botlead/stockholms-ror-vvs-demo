import { useState } from 'react';
import { Phone, Menu, X, Droplets } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/data/company';
import { useScrolled, useActiveSection } from '@/hooks/useReveal';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(10);
  const active = useActiveSection(['hem', 'tjanster', 'akutjour', 'om-oss', 'rot-avdrag', 'kontakt']);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-soft' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16 lg:h-18'}`}>
            {/* Logo */}
            <a href="#hem" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-600 transition-transform group-hover:scale-105">
                <Droplets className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className={`font-display font-bold text-base lg:text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-navy-800' : 'text-white'}`}>
                Stockholms Rör & VVS
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active === link.href.slice(1)
                      ? 'text-accent-600'
                      : scrolled ? 'text-ink-500 hover:text-navy-800' : 'text-white/90 hover:text-white'
                  }`}>
                  {link.label}
                  {active === link.href.slice(1) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-accent-600" />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2.5">
              <a href={COMPANY.phoneHref}
                className="shimmer flex items-center gap-2 rounded-xl bg-accent-600 px-4 lg:px-5 py-2.5 text-sm font-semibold text-white shadow-accent transition-all hover:bg-accent-700 hover:-translate-y-0.5">
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                <span className="hidden sm:inline">Ring oss</span>
                <span className="sm:hidden">{COMPANY.phone}</span>
              </a>
              <button onClick={() => setMobileOpen(true)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-navy-800"
                aria-label="Öppna meny">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu — clean slide-in */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-navy-800/30 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-canvas-200">
            <span className="font-display font-bold text-navy-800 text-sm">Meny</span>
            <button onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 hover:bg-canvas-50"
              aria-label="Stäng meny">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col p-3">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  active === link.href.slice(1) ? 'text-accent-600 bg-accent-50' : 'text-ink-700 hover:bg-canvas-50'
                }`}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto p-6 border-t border-canvas-200">
            <a href={COMPANY.phoneHref}
              className="shimmer flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-5 py-3.5 text-sm font-semibold text-white shadow-accent">
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Ring oss – {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

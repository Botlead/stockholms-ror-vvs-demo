import { Droplets, Phone, Siren, Mail, MapPin, Instagram, ArrowRight, Clock } from 'lucide-react';
import { COMPANY, NAV_LINKS, PARTNERS } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-navy-100 pt-16 pb-24 lg:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-pd opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-600">
                <Droplets className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-white">Stockholms Rör & VVS</span>
            </div>
            <p className="text-sm text-navy-200 leading-relaxed max-w-sm">
              Din VVS-auktoriserade rörmokare i Stockholm och på Lidingö. Professionella VVS-tjänster, installationer och akut hjälp dygnet runt.
            </p>
            <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="group mt-5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-navy-200 hover:bg-accent-600 hover:text-white hover:border-transparent transition-all duration-300">
              <Instagram className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white text-sm mb-4">Meny</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center gap-1.5 text-sm text-navy-200 hover:text-accent-400 transition-colors">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-sm mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href={COMPANY.phoneHref} className="flex items-center gap-2.5 text-sm text-navy-200 hover:text-accent-400 transition-colors tabular-nums tracking-tight">
                  <Phone className="h-4 w-4 text-accent-400" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={COMPANY.emergencyPhoneHref} className="flex items-center gap-2.5 text-sm text-navy-200 hover:text-emergency-400 transition-colors tabular-nums tracking-tight">
                  <Siren className="h-4 w-4 text-emergency-400" />
                  {COMPANY.emergencyPhoneDisplay}
                </a>
              </li>
              <li>
                <a href={COMPANY.emailHref} className="flex items-center gap-2.5 text-sm text-navy-200 hover:text-accent-400 transition-colors break-all">
                  <Mail className="h-4 w-4 text-accent-400 flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-navy-200">
                <MapPin className="h-4 w-4 text-accent-400" />
                {COMPANY.address}, {COMPANY.postalCode}
              </li>
            </ul>
          </div>

          {/* Emergency + Partners */}
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-accent-500/10 border border-accent-400/20 p-4 mb-5">
              <div className="flex items-center gap-2 mb-2">
                <Siren className="h-4 w-4 text-accent-400" />
                <span className="text-sm font-semibold text-accent-300">Akut VVS-jour</span>
              </div>
              <p className="text-xs text-navy-200 mb-2 flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                Dygnet runt – inom en timme
              </p>
              <a href={COMPANY.emergencyPhoneHref} className="block font-display font-bold text-white hover:text-accent-300 transition-colors tabular-nums tracking-tight">
                {COMPANY.emergencyPhoneDisplay}
              </a>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PARTNERS.map((p) => (
                <span key={p} className="rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[10px] text-navy-200 font-medium">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-300">&copy; {new Date().getFullYear()} {COMPANY.name}. Alla rättigheter förbehållna.</p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-navy-300 hover:text-accent-400 transition-colors">Integritetspolicy</a>
            <a href="#" className="text-xs text-navy-300 hover:text-accent-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

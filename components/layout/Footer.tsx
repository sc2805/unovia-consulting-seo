import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { COMPANY, SERVICES } from "@/lib/constants";

// =============================================================================
// Footer — Structured SEO footer with service links, resources, and legal links
// =============================================================================

const RESOURCE_LINKS = [
  { label: "Insights & Articles", href: "/insights", external: false },
  { label: "Daily Market Brief", href: "/daily-brief", external: false },
  { label: "SIP & Lumpsum Calculator", href: "/calculators/sip-lumpsum", external: false },
  { label: "Start Your Investment Journey", href: "https://partners.creso.in/mfd/unovia", external: true },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-gray-400" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Column 1 — Logo + Socials + Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md mb-5">
              <Logo variant="dark" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-sm">
              Chartered Accountant-led financial advisory — wealth management, tax planning, GST advisory, and business consulting from Kolkata.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm mb-5">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2.5 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                {COMPANY.email}
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                {COMPANY.address}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gold-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company & Legal */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Company & Legal</h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-xs text-gray-500 hover:text-gold-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

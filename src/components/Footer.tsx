import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

const serviceLinks = [
  { href: "/services/kitchen", label: "Kitchen Remodeling" },
  { href: "/services/bath", label: "Bath Remodeling" },
  { href: "/services/basement", label: "Basement & General" },
  { href: "/services/exterior", label: "Outdoor Living" },
  { href: "/services/roofing", label: "Roofing & Siding" },
  { href: "/services/additions", label: "Building Additions" },
  { href: "/services/insurance", label: "Insurance Claims" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-header text-2xl font-black text-white mb-4">
              RJE Home Remodeling
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Design & Build General Contractor serving Bucks, Montgomery, Chester, and Delaware
              Counties since 1997.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Houzz", "Yelp"].map((platform) => (
                <span
                  key={platform}
                  className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-xs font-bold text-white/60 hover:bg-accent hover:text-white transition-colors cursor-pointer"
                >
                  {platform[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-header text-sm font-black uppercase tracking-wider text-accent mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-header text-sm font-black uppercase tracking-wider text-accent mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  665 Catherine Street
                  <br />
                  Warminster, PA 18974
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a
                  href="tel:2672825948"
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  267.282.5948
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a
                  href="mailto:info@rjehomeremodeling.com"
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  info@rjehomeremodeling.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-header text-sm font-black uppercase tracking-wider text-accent mb-6">
              Licenses & Service Area
            </h4>
            <div className="space-y-4 text-sm text-white/60">
              <div>
                <p className="font-semibold text-white/80 mb-1">Pennsylvania</p>
                <p>License #PA015029</p>
              </div>
              <div>
                <p className="font-semibold text-white/80 mb-1">New Jersey</p>
                <p>License #13VH08652400</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="font-semibold text-white/80 mb-1">Service Areas</p>
                <p>Bucks, Montgomery, Chester & Delaware Counties, PA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} RJE Home Remodeling Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | RJE Home Remodeling",
  description:
    "Contact RJE Home Remodeling for a free estimate. Serving Bucks, Montgomery, Chester & Delaware Counties, PA.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-header text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">
            Get In Touch
          </p>
          <h1 className="font-header text-4xl md:text-6xl font-black text-white">Contact Us</h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">
            Ready to start your project? Reach out for a free consultation and estimate.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <h2 className="font-header text-2xl font-black text-primary mb-8">
                Request an Estimate
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm text-text-main focus:border-accent focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm text-text-main focus:border-accent focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm text-text-main focus:border-accent focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm text-text-main focus:border-accent focus:outline-none transition-colors"
                    placeholder="(215) 555-0100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm text-text-main focus:border-accent focus:outline-none transition-colors">
                    <option value="">Select a service...</option>
                    <option>Kitchen Remodeling</option>
                    <option>Bath Remodeling</option>
                    <option>Basement & General Contracting</option>
                    <option>Outdoor Living / Exterior</option>
                    <option>Roofing & Siding</option>
                    <option>Building Additions</option>
                    <option>Insurance Claim Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-sm border border-primary/20 bg-white px-4 py-3 text-sm text-text-main focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-sm bg-accent px-10 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-accent/80 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact info sidebar */}
            <div>
              <h2 className="font-header text-2xl font-black text-primary mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-header text-sm font-black uppercase text-primary mb-1">
                      Office Address
                    </h3>
                    <p className="text-text-main/60 text-sm">
                      665 Catherine Street
                      <br />
                      Warminster, PA 18974
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-header text-sm font-black uppercase text-primary mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:2672825948"
                      className="text-text-main/60 text-sm hover:text-accent transition-colors"
                    >
                      267.282.5948
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-header text-sm font-black uppercase text-primary mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@rjehomeremodeling.com"
                      className="text-text-main/60 text-sm hover:text-accent transition-colors"
                    >
                      info@rjehomeremodeling.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-header text-sm font-black uppercase text-primary mb-1">
                      Service Areas
                    </h3>
                    <p className="text-text-main/60 text-sm">
                      Bucks County, Montgomery County,
                      <br />
                      Chester County & Delaware County, PA
                    </p>
                  </div>
                </div>
              </div>

              {/* License info */}
              <div className="mt-12 p-8 bg-surface rounded-sm border border-primary/5">
                <h3 className="font-header text-sm font-black uppercase text-primary mb-4">
                  Licensed & Insured
                </h3>
                <div className="space-y-2 text-sm text-text-main/60">
                  <p>Pennsylvania License: #PA015029</p>
                  <p>New Jersey License: #13VH08652400</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

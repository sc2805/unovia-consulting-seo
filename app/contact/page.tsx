import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { COMPANY } from "@/lib/constants";

// =============================================================================
// Contact Page — Contact form + company info
// =============================================================================

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Unovia Consulting. Book a consultation for wealth management, tax planning, GST advisory, or business consulting.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: COMPANY.address,
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM IST",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 to-white" />
        <div className="absolute inset-0 bg-mesh-light" />
        <div className="relative container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
              Let&apos;s Start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Conversation
              </span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
              Whether you have a specific question or want to explore how we can help — we&apos;re
              here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white pt-0">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="p-6 md:p-8 bg-white border border-gray-100/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                <h2 className="text-xl font-bold text-navy-800 mb-1">Send Us a Message</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="space-y-4 mb-8">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 bg-gray-50/80 border border-gray-100/80 rounded-xl hover:bg-navy-50 hover:border-gold-200/60 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-gold-400" />
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                          {detail.label}
                        </span>
                        {detail.href !== "#" ? (
                          <a
                            href={detail.href}
                            className="text-sm text-navy-800 font-medium hover:text-gold-600 transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-sm text-navy-800 font-medium">
                            {detail.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200/80 overflow-hidden">
                <div className="text-center p-6">
                  <MapPin className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-400 font-medium">
                    Interactive Map
                  </p>
                  <p className="text-xs text-gray-300 mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { Mail, Phone, MapPin, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Unovia Consulting",
  description:
    "Read Unovia Consulting's Privacy Policy to understand how we collect, use, protect and manage personal information on our website.",
  alternates: {
    canonical: "https://unovia.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Unovia Consulting",
    description:
      "Read Unovia Consulting's Privacy Policy to understand how we collect, use, protect and manage personal information on our website.",
    url: "https://unovia.in/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/10 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl" />
        
        <div className="relative container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-6 opacity-90">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ]}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gold-400 text-xs font-bold uppercase tracking-wider mb-6 border border-gold-400/30 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            Legal & Data Protection
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm font-semibold text-gold-400">
            Last Updated: 31 August 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 md:py-20 bg-white text-slate-700">
        <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 leading-relaxed text-base md:text-lg">
          
          {/* Introduction */}
          <div className="p-6 md:p-8 bg-slate-50 border border-slate-200/80 rounded-2xl">
            <p className="text-slate-800 font-medium leading-relaxed">
              Unovia Consulting (&quot;Unovia&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you provide when using our website,{" "}
              <a href="https://www.unovia.in/" className="text-navy-800 font-bold underline decoration-gold-400 underline-offset-4 hover:text-gold-600">
                www.unovia.in
              </a>{" "}
              (&quot;Website&quot;).
            </p>
            <p className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed">
              This Privacy Policy explains how we collect, use, store, protect and disclose personal information when you visit our Website, contact us, request our services, use our calculators or tools, subscribe to our content, or otherwise interact with Unovia.
            </p>
            <p className="mt-4 text-slate-700 text-sm md:text-base font-semibold">
              By using this Website, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              1. ABOUT UNOVIA
            </h2>
            <p>
              Unovia Consulting is a professional advisory firm based in Kolkata, West Bengal, India.
            </p>
            <p>
              Our services and information may cover areas including taxation, GST, accounting, business consulting, startup advisory, financial planning, investment and wealth management, business valuation, virtual CFO services and related professional services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              2. INFORMATION WE COLLECT
            </h2>
            <p>
              We may collect information that you voluntarily provide, information automatically collected when you use the Website, and information received from third parties where legally permitted.
            </p>
            
            <div className="space-y-3 pl-2">
              <h3 className="text-xl font-bold text-navy-800">Information You Provide</h3>
              <p>Depending on how you interact with us, we may collect:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
                {[
                  "Name",
                  "Email address",
                  "Mobile number",
                  "City or location",
                  "Company or business name",
                  "Professional information",
                  "Information submitted through contact forms",
                  "Consultation requests",
                  "Service enquiries",
                  "Information submitted through calculators and tools",
                  "Newsletter subscriptions",
                  "Documents or information voluntarily provided for professional services",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-xs md:text-sm rounded-r-xl font-medium mt-3">
                Please do not submit highly confidential or sensitive information through general website forms unless specifically requested through an appropriate secure channel.
              </div>
            </div>

            <div className="space-y-3 pl-2 pt-2">
              <h3 className="text-xl font-bold text-navy-800">Automatically Collected Information</h3>
              <p>When you visit the Website, technical information may be collected automatically, including:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
                {[
                  "IP address",
                  "Browser type",
                  "Device type",
                  "Operating system",
                  "Pages visited",
                  "Referring website",
                  "Approximate location",
                  "Date and time of access",
                  "Time spent on pages",
                  "Website interaction information",
                  "Technical and diagnostic information",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-800 flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <p>We may use collected information to:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Respond to enquiries",
                "Contact you regarding requested services",
                "Schedule consultations",
                "Provide professional services",
                "Process service requests",
                "Communicate with you",
                "Send requested information",
                "Provide educational resources",
                "Improve our Website",
                "Improve our services",
                "Understand website usage",
                "Maintain website security",
                "Prevent fraud and abuse",
                "Maintain business records",
                "Comply with legal and regulatory obligations",
                "Protect our legal rights and interests",
                "Send marketing communications where permitted and appropriate",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              4. LEGAL BASIS FOR PROCESSING
            </h2>
            <p>Where applicable, personal data may be processed based on:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Your consent",
                "A lawful purpose under applicable law",
                "Compliance with a legal obligation",
                "Performance of a requested service",
                "Legitimate operational requirements where legally permitted",
                "Other lawful grounds available under applicable law",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 font-medium">
              Processing of personal data will be carried out in accordance with applicable Indian data-protection laws.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              5. COOKIES
            </h2>
            <p>The Website may use cookies and similar technologies to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
              {[
                "Operate the Website",
                "Remember preferences",
                "Understand website traffic",
                "Measure performance",
                "Improve user experience",
                "Support security",
                "Understand how users interact with content",
                "Support marketing activities where applicable",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">Some cookies may be necessary for Website functionality.</p>
            <p>Where required by applicable law, non-essential cookies will be used subject to appropriate consent or user choices.</p>
            <p>You may control cookies through your browser settings. Disabling cookies may affect certain Website functionality.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              6. ANALYTICS AND THIRD-PARTY SERVICES
            </h2>
            <p>
              Depending on the Website&apos;s configuration, we may use third-party services for website analytics (such as Vercel Analytics), search performance, security, email communications, form submissions, and hosting infrastructure.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              7. PROFESSIONAL SERVICE INFORMATION
            </h2>
            <p>
              When you engage Unovia for taxation, GST, accounting, business advisory, startup advisory, financial planning, investment-related or other professional services, you may provide additional information or documents.
            </p>
            <p>Depending on the service, this may include:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
              {[
                "Tax information",
                "Financial information",
                "Accounting information",
                "Business information",
                "Transaction information",
                "Identity information",
                "Regulatory information",
                "Supporting documents",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">Such information will be used for legitimate professional, contractual, legal, compliance and operational purposes.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              8. SHARING OF INFORMATION
            </h2>
            <p className="font-semibold text-navy-900">Unovia does not sell personal information as a business practice.</p>
            <p>We may share information where reasonably necessary with:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Authorised employees",
                "Professional advisers",
                "Technology providers",
                "Hosting providers",
                "Cloud-storage providers",
                "CRM providers",
                "Communication providers",
                "Payment processors",
                "Analytics providers",
                "Security providers",
                "Professional service providers",
                "Government authorities",
                "Regulatory authorities",
                "Courts or law-enforcement agencies",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">
              We may also disclose information where required by law or where necessary to protect the rights, safety, security or property of Unovia, our users or others.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              9. DATA SECURITY
            </h2>
            <p>
              We take reasonable technical and organisational measures designed to protect personal information against unauthorised access, disclosure, loss, destruction, misuse or alteration.
            </p>
            <p>However, no electronic transmission or storage system can be guaranteed to be completely secure.</p>
            <p className="font-medium text-navy-800">Users should avoid transmitting highly confidential information through unsecured channels.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              10. DATA RETENTION
            </h2>
            <p>We retain personal information for as long as reasonably necessary for:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Providing services",
                "Maintaining business records",
                "Complying with legal obligations",
                "Regulatory compliance",
                "Resolving disputes",
                "Preventing fraud",
                "Enforcing agreements",
                "Protecting legal rights",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">
              When information is no longer required, we may delete, anonymise or securely dispose of it, subject to applicable legal and regulatory requirements.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              11. YOUR RIGHTS
            </h2>
            <p>Subject to applicable law, you may have rights relating to your personal data, including rights to:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Request information regarding processing",
                "Request access to personal information",
                "Request correction of inaccurate information",
                "Request deletion where legally applicable",
                "Withdraw consent where processing is based on consent",
                "Raise a grievance or complaint",
                "Exercise other rights available under applicable law",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">We may request reasonable information to verify your identity before processing certain requests.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              12. WITHDRAWAL OF CONSENT
            </h2>
            <p>Where processing is based on consent, you may withdraw your consent in accordance with applicable law.</p>
            <p>Withdrawal of consent does not affect the lawfulness of processing conducted before withdrawal.</p>
            <p>Withdrawal may affect our ability to provide certain services or communications where the information is necessary for that purpose.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              13. MARKETING COMMUNICATIONS
            </h2>
            <p>Where permitted and appropriate, we may send educational, promotional or informational communications.</p>
            <p>You may unsubscribe from marketing communications at any time using the unsubscribe mechanism provided or by contacting us.</p>
            <p>Service-related, transactional or legally required communications may continue where permitted or required by law.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              14. CHILDREN&apos;S DATA
            </h2>
            <p>The Website is primarily intended for adults, professionals and businesses.</p>
            <p>We do not knowingly seek to collect personal data from children except where permitted by applicable law and subject to appropriate safeguards.</p>
            <p>If you believe that a child has provided personal information to us improperly, please contact us.</p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              15. THIRD-PARTY LINKS
            </h2>
            <p>Our Website may contain links to third-party websites.</p>
            <p>Unovia is not responsible for the privacy practices, security, content or policies of third-party websites.</p>
            <p>Users should review the privacy policies of third-party websites before providing personal information.</p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              16. INTERNATIONAL DATA PROCESSING
            </h2>
            <p>Some technology or service providers used by the Website may process or store information outside India.</p>
            <p>Where applicable, such processing will be conducted in accordance with applicable law and appropriate safeguards.</p>
          </section>

          {/* Section 17 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              17. DATA BREACHES
            </h2>
            <p>If a personal data breach occurs, Unovia will take appropriate steps required under applicable law, including investigation, containment, remediation and notification where legally required.</p>
          </section>

          {/* Section 18 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              18. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p>We may update this Privacy Policy from time to time.</p>
            <p>Any updated version will be published on this page with a revised &quot;Last Updated&quot; date.</p>
          </section>

          {/* Section 19 — Contact Card */}
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              19. CONTACT US
            </h2>
            <p>For questions, privacy requests or complaints relating to this Privacy Policy, contact:</p>
            
            <div className="p-6 md:p-8 bg-navy-900 text-white rounded-3xl shadow-xl border border-navy-800 space-y-4">
              <h3 className="text-xl font-bold text-gold-400">Unovia Consulting</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Address:</p>
                    <p>359 Beni Master Lane</p>
                    <p>Kolkata – 700061, West Bengal, India</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Email: </span>
                      <a href="mailto:connect@unovia.in" className="hover:text-gold-400 underline">
                        connect@unovia.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Phone: </span>
                      <a href="tel:+917278671467" className="hover:text-gold-400 underline">
                        +91 72786 71467
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">Website: </span>
                      <a href="https://www.unovia.in/" className="hover:text-gold-400 underline">
                        www.unovia.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gold-300 font-medium">
                For privacy-related requests, please use the subject: <span className="font-bold text-white">&quot;Privacy Request – Unovia&quot;</span>
              </div>
            </div>
          </section>

          {/* Section 20 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              20. GOVERNING LAW
            </h2>
            <p>This Privacy Policy shall be governed by the applicable laws of India.</p>
            <p>Subject to applicable law, disputes relating to this Privacy Policy shall be subject to the jurisdiction of the appropriate courts in India.</p>
          </section>

          {/* Footer Rights */}
          <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
            © Unovia Consulting. All Rights Reserved.
          </div>

        </div>
      </main>

      <CTABanner
        heading="Have Questions About Our Privacy Practices?"
        subtext="Our team is available to assist you with any legal, privacy or compliance inquiries."
      />
    </>
  );
}

import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { Mail, Phone, MapPin, Globe, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Unovia Consulting",
  description:
    "Read the Terms of Use governing access to and use of the Unovia Consulting website, services, content, calculators and resources.",
  alternates: {
    canonical: "https://unovia.in/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use | Unovia Consulting",
    description:
      "Read the Terms of Use governing access to and use of the Unovia Consulting website, services, content, calculators and resources.",
    url: "https://unovia.in/terms-of-use",
    type: "website",
  },
};

export default function TermsOfUsePage() {
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
                { label: "Terms of Use", href: "/terms-of-use" },
              ]}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-gold-400 text-xs font-bold uppercase tracking-wider mb-6 border border-gold-400/30 backdrop-blur-sm">
            <FileText className="w-4 h-4" />
            Legal Terms & Conditions
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Terms of Use
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
              Welcome to Unovia.in, operated by Unovia Consulting (&quot;Unovia&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed">
              These Terms of Use govern your access to and use of{" "}
              <a href="https://www.unovia.in/" className="text-navy-800 font-bold underline decoration-gold-400 underline-offset-4 hover:text-gold-600">
                www.unovia.in
              </a>{" "}
              (&quot;Website&quot;).
            </p>
            <p className="mt-4 text-slate-700 text-sm md:text-base font-semibold">
              By accessing or using the Website, you acknowledge that you have read, understood and agreed to these Terms. If you do not agree with these Terms, please discontinue use of the Website.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              1. ABOUT UNOVIA
            </h2>
            <p>Unovia Consulting is a professional advisory firm based in Kolkata, West Bengal, India.</p>
            <p>The Website provides information and may facilitate enquiries relating to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
              {[
                "Taxation",
                "Income Tax",
                "GST",
                "Accounting",
                "Business Consulting",
                "Startup Advisory",
                "Business Valuation",
                "Financial Planning",
                "Investment and Wealth Management",
                "Virtual CFO services",
                "Other professional services offered by Unovia",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">The Website may also provide articles, guides, calculators, FAQs and educational resources.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              2. INFORMATIONAL PURPOSE
            </h2>
            <p>Information available on the Website is provided primarily for general educational and informational purposes.</p>
            <p>Website content should not automatically be considered personalised:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
              {[
                "Tax advice",
                "Legal advice",
                "Accounting advice",
                "Investment advice",
                "Financial advice",
                "Business advice",
                "Professional opinion",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">Tax laws, GST rules, financial regulations, investment markets and business conditions may change.</p>
            <p className="font-semibold text-navy-900">
              You should obtain appropriate professional advice before taking action based on information obtained from the Website.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              3. TAX AND GST INFORMATION
            </h2>
            <p>Tax and GST information may depend upon:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
              {[
                "Applicable law",
                "Notifications",
                "Circulars",
                "Rules",
                "Financial year",
                "Taxpayer status",
                "Business structure",
                "Transaction characteristics",
                "Individual circumstances",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">Information that is accurate at the time of publication may subsequently change.</p>
            <p>You should verify the current legal position and obtain professional advice before relying on Website information for a specific filing, transaction or compliance decision.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              4. INVESTMENT INFORMATION
            </h2>
            <p>Investment-related content is provided for general educational purposes.</p>
            <p>Nothing on the Website constitutes a guarantee of investment returns or a recommendation to purchase or sell a particular investment.</p>
            <p className="font-semibold text-navy-900">Investment decisions involve risk. Past performance does not guarantee future performance.</p>
            <p>Users should evaluate their own circumstances and obtain appropriate professional advice before making investment decisions.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              5. CALCULATORS AND ONLINE TOOLS
            </h2>
            <p>The Website may contain tax, investment, financial or business calculators and tools.</p>
            <p>These tools are provided for general estimation and educational purposes.</p>
            <p>Results may depend on:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
              {[
                "User inputs",
                "Assumptions",
                "Tax rules",
                "Applicable rates",
                "Rounding",
                "Data accuracy",
                "Changes in law",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 font-medium">
              Calculator results should not be treated as an official tax calculation, investment statement or final professional determination.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              6. PROFESSIONAL RELATIONSHIP
            </h2>
            <p>Browsing or using the Website does not create a professional-client relationship between you and Unovia.</p>
            <p>A professional relationship is created only when you formally engage Unovia and the applicable engagement terms are accepted.</p>
            <p>A separate engagement letter, proposal, service agreement or other written terms may apply to specific services.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              7. NO GUARANTEE OF RESULTS
            </h2>
            <p>Unovia does not guarantee:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
              {[
                "Tax savings",
                "Tax refunds",
                "Investment returns",
                "Business profits",
                "Funding approval",
                "Loan approval",
                "Regulatory approval",
                "GST registration approval",
                "Trademark registration",
                "Successful tax proceedings",
                "Successful litigation",
                "Successful business outcomes",
                "Any specific financial result",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">
              Outcomes depend on individual circumstances, applicable law, third-party decisions and factors beyond our control.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              8. WEBSITE CONTENT ACCURACY
            </h2>
            <p>We make reasonable efforts to maintain accurate and useful information.</p>
            <p>However, we do not guarantee that:</p>
            <ul className="space-y-2 pl-4">
              {[
                "All information is error-free",
                "All information is continuously updated",
                "Information is suitable for your circumstances",
                "Third-party information is accurate",
                "Laws and regulations remain unchanged",
                "Calculators always produce exact results",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">If you identify an apparent error, please contact us.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              9. INTELLECTUAL PROPERTY
            </h2>
            <p>
              Unless otherwise stated, the Website and its original content, including text, articles, guides, graphics, logos, images, designs, layout, software, calculators, branding, and original materials are owned by or licensed to Unovia Consulting.
            </p>
            <p>You may access and use the Website for lawful personal or business purposes.</p>
            <p className="font-semibold text-navy-900">Without prior written permission, you must not:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
              {[
                "Reproduce substantial Website content",
                "Republish articles",
                "Sell Website content",
                "Copy proprietary tools",
                "Scrape Website content",
                "Copy branding or logos",
                "Reverse engineer Website functionality",
                "Create commercial derivative works from Website content",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              10. USER-SUBMITTED INFORMATION
            </h2>
            <p>If you submit information through the Website, you represent that:</p>
            <ul className="space-y-2 pl-4">
              {[
                "The information is accurate to the best of your knowledge",
                "You have the right to provide it",
                "It does not knowingly violate another person's rights",
                "It is not unlawful",
                "It does not contain malicious software",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 font-medium">Do not submit highly confidential information through a general enquiry form unless specifically requested.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              11. PROHIBITED ACTIVITIES
            </h2>
            <p>You must not use the Website to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 text-sm md:text-base">
              {[
                "Violate applicable law",
                "Commit fraud",
                "Attempt unauthorised access",
                "Introduce malware",
                "Attack or disrupt the Website",
                "Scrape information unlawfully",
                "Circumvent security measures",
                "Impersonate another person",
                "Submit false information",
                "Infringe intellectual-property rights",
                "Send spam",
                "Abuse Website forms",
                "Interfere with Website operation",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 font-medium">Unovia may restrict or terminate access where misuse is suspected.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              12. THIRD-PARTY WEBSITES
            </h2>
            <p>The Website may contain links to third-party websites and services.</p>
            <p>Such links are provided for convenience or informational purposes.</p>
            <p>Unovia does not necessarily endorse or control third-party websites and is not responsible for their content, accuracy, availability, security, privacy practices, products, services, or terms.</p>
            <p className="font-semibold text-navy-900">You access third-party websites at your own risk.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              13. WEBSITE AVAILABILITY
            </h2>
            <p>We aim to keep the Website available and functional but do not guarantee uninterrupted access.</p>
            <p>The Website may temporarily be unavailable because of maintenance, updates, technical failures, hosting problems, security incidents, network problems, third-party service failures, or events beyond our reasonable control.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              14. WEBSITE SECURITY
            </h2>
            <p>Users must not attempt to compromise the security, availability or functionality of the Website.</p>
            <p>Unovia may take appropriate technical and legal measures against unauthorised access, malicious activity or abuse.</p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              15. LIMITATION OF LIABILITY
            </h2>
            <p>To the maximum extent permitted by applicable law, Unovia shall not be liable for losses arising solely from reliance on general information published on the Website.</p>
            <p>This may include, where legally permissible: financial loss, investment loss, business loss, tax-related loss, GST-related loss, loss of profits, loss of opportunity, loss of data, or business interruption.</p>
            <p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law.</p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              16. INDEMNITY
            </h2>
            <p>To the extent permitted by applicable law, you agree to indemnify and hold harmless Unovia Consulting and its authorised personnel against claims, losses, liabilities, damages and expenses arising from:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Your unlawful use of the Website",
                "Your violation of these Terms",
                "Your infringement of third-party rights",
                "Information submitted by you",
                "Misuse of Website functionality",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2">This clause operates only to the extent permitted by applicable law.</p>
          </section>

          {/* Section 17 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              17. PROFESSIONAL ENGAGEMENT TERMS
            </h2>
            <p>Where you formally engage Unovia for professional services, the applicable engagement letter, proposal, service agreement or terms of engagement will govern the professional relationship.</p>
            <p>If there is a conflict between these Terms and a specific signed engagement agreement, the specific engagement agreement will prevail to the extent of the conflict.</p>
          </section>

          {/* Section 18 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              18. CHANGES TO THE WEBSITE
            </h2>
            <p>Unovia may modify, suspend, remove or discontinue any part of the Website or its content at any time.</p>
            <p>We may also update these Terms from time to time.</p>
            <p>The latest version will be published on the Website with the updated &quot;Last Updated&quot; date.</p>
          </section>

          {/* Section 19 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              19. SEVERABILITY
            </h2>
            <p>If any provision of these Terms is determined to be invalid, unlawful or unenforceable, the remaining provisions shall continue to apply to the extent permitted by applicable law.</p>
          </section>

          {/* Section 20 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              20. WAIVER
            </h2>
            <p>Failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision.</p>
          </section>

          {/* Section 21 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              21. ENTIRE AGREEMENT
            </h2>
            <p>These Terms, together with the Privacy Policy and applicable service-specific agreements, constitute the terms governing your use of the Website, subject to applicable law.</p>
          </section>

          {/* Section 22 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              22. GOVERNING LAW
            </h2>
            <p>These Terms shall be governed by the laws of India.</p>
            <p>Subject to applicable law, disputes relating to these Terms or use of the Website shall be subject to the jurisdiction of the appropriate courts in India.</p>
          </section>

          {/* Section 23 — Contact Card */}
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              23. CONTACT US
            </h2>
            <p>For questions or inquiries regarding these Terms of Use, contact:</p>
            
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
            </div>
          </section>

          {/* Section 24 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-navy-900 pb-2 border-b-2 border-gold-200 flex items-center gap-3">
              <span className="w-2.5 h-6 rounded-full bg-gold-500 inline-block" />
              24. ACCEPTANCE
            </h2>
            <p className="font-semibold text-navy-900">
              By accessing or using www.unovia.in, you acknowledge that you have read, understood and agreed to these Terms of Use.
            </p>
            <p>If you do not agree with these Terms, please discontinue use of the Website.</p>
          </section>

          {/* Footer Rights */}
          <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
            © Unovia Consulting. All Rights Reserved.
          </div>

        </div>
      </main>

      <CTABanner
        heading="Questions About Our Terms of Use?"
        subtext="Our team is available to assist you with any legal, terms or professional engagement questions."
      />
    </>
  );
}

import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TrustIndicators from "@/components/sections/TrustIndicators";
import Testimonials from "@/components/sections/Testimonials";
import InsightsPreview from "@/components/sections/InsightsPreview";
import CTABanner from "@/components/sections/CTABanner";
import JsonLd, { organizationSchema, localBusinessSchema, webSiteSchema } from "@/components/seo/JsonLd";

// =============================================================================
// Home Page — Landing page assembling all major sections
// =============================================================================

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={webSiteSchema()} />
      <Hero />
      <ServicesGrid />
      <TrustIndicators />
      <Testimonials />
      <InsightsPreview />
      <CTABanner />
    </>
  );
}

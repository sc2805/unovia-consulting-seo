// =============================================================================
// JsonLd — Reusable component for injecting JSON-LD structured data
// =============================================================================

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// =============================================================================
// Pre-built schema generators
// =============================================================================

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UNoviA Consulting",
    url: "https://unovia.in",
    logo: "https://unovia.in/logo.png",
    description:
      "Premium financial consultancy powered by expert CAs and MBAs, offering wealth management, tax planning, GST advisory, and business consulting from Kolkata, India.",
    foundingDate: "2025",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-72786-71467",
      contactType: "customer service",
      email: "connect@unovia.in",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Bengali"],
    },
    sameAs: [
      "https://www.linkedin.com/in/unovia-consulting/",
      "https://www.instagram.com/unoviaconsulting",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "UNoviA Consulting",
    url: "https://unovia.in",
    image: "https://unovia.in/logo.png",
    telephone: "+91-72786-71467",
    email: "connect@unovia.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.5726",
      longitude: "88.3639",
    },
    priceRange: "$$",
    openingHours: "Mo-Sa 09:00-18:00",
    description:
      "Chartered Accountant-led financial advisory firm offering wealth management, tax planning, GST advisory, business consulting, virtual CFO services, and trademark registration in Kolkata.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Financial & Business Advisory Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wealth Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tax Consultancy" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Advisory & Compliance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Consulting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Virtual CFO Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trademark & Copyright Registration" } },
      ],
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UNoviA Consulting",
    url: "https://unovia.in",
    description:
      "Strategic financial and business advisory by qualified CAs and MBAs.",
  };
}

export function serviceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `https://unovia.in/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "UNoviA Consulting",
      url: "https://unovia.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function articleSchema(article: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    url: `https://unovia.in/insights/${article.slug}`,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author || "UNoviA Consulting",
      url: "https://unovia.in",
    },
    publisher: {
      "@type": "Organization",
      name: "UNoviA Consulting",
      url: "https://unovia.in",
      logo: {
        "@type": "ImageObject",
        url: "https://unovia.in/logo.png",
      },
    },
  };
}

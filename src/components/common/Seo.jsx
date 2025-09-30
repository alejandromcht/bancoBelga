import React from "react";
import { Helmet } from "react-helmet-async";

export default function Seo() {
  const title = "Financiamiento Corporativo (USD 2.5M–40M) | Comisionador — Moisés Chiroque Julca";
  const description =
    "Intermediación con banco belga para préstamos corporativos (USD 2.5M–40M). Enfoque en empresas de consumo masivo y productoras con activos de alto valor en garantía.";
  const url = "https://alejandromcht.github.io/bancoBelga/"; // URL canónica
  const image = "/og-cover.jpg";

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Moisés Chiroque Julca",
    jobTitle: "Comisionador corporativo",
    worksFor: {
      "@type": "Organization",
      name: "MCJ Intermediación"
    },
    description:
      "11 años en BBVA (ex Gerente Agencia Chiclayo) y ~5 años en Riesgos. Especialista en evaluación crediticia corporativa y garantías reales.",
    url,
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Intermediación de préstamos corporativos",
    areaServed: "Latin America",
    url,
    logo: url + "og-cover.jpg",
    provider: personLd,
    offers: {
      "@type": "Offer",
      name: "Préstamos corporativos USD 2.5M–40M",
      description:
        "Fondeo mayorista vía banco belga para empresas con activos de alto valor como garantía.",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <Helmet prioritizeSeoTags>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph / Twitter */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(personLd)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
    </Helmet>
  );
}

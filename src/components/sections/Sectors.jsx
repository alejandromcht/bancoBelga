import React from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import SectorCard from "./_parts/SectorCard.jsx";

export default function Sectors() {
  return (
    <section id="sectores" className="container py-6" aria-labelledby="sectores-title">
      <SectionTitle
        eyebrow="Sectores objetivo"
        title="¿Qué tipo de empresa buscamos?"
        subtitle="Operaciones con flujos estables y activos aptos para garantía real."
      />
      <div className="row g-4">
        <SectorCard
          title="Consumo masivo"
          desc="Empresas que comercializan productos de alta rotación a gran escala."
          bullets={[
            "Cobertura regional o nacional",
            "Contratos con retailers / canales modernos",
            "Capacidad de reportar KPIs de venta y cobranza",
          ]}
        />
        <SectorCard
          title="Productoras / fábricas"
          desc="Compañías manufactureras con plantas, líneas de producción y activos industriales."
          bullets={[
            "Maquinaria y equipos con valor de realización",
            "Inventarios asegurados y auditables",
            "Buenas prácticas ambientales y de seguridad",
          ]}
        />
        <SectorCard
          title="Activos de alto valor"
          desc="Estructuras garantizadas con inmuebles, terrenos industriales, flota pesada u otros activos reales."
          bullets={[
            "Propiedad libre de gravámenes o con margen de aforo",
            "Tasaciones actualizadas por peritos",
            "Pólizas de seguro endosables",
          ]}
        />
      </div>
    </section>
  );
}

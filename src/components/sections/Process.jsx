import React from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import Step from "./_parts/Step.jsx";

export default function Process() {
  return (
    <section id="proceso" className="container py-6" aria-labelledby="proceso-title">
      <SectionTitle
        eyebrow="Proceso"
        title="Cómo trabajamos"
        subtitle="Estructuración transparente, con due diligence y compliance europeos."
      />
      <div className="row g-4">
        <Step n={1} title="Diagnóstico inicial" desc="Reunión exploratoria y revisión de elegibilidad del caso (ticket, sector, garantías)." />
        <Step n={2} title="Data room" desc="Recepción de información financiera, legal y técnica. Inicio de due diligence." />
        <Step n={3} title="Términos indicativos" desc="Presentación de term sheet referencial sujeto a aprobaciones y valorizaciones." />
        <Step n={4} title="Cierre" desc="Aprobaciones finales, formalización de garantías y desembolso." />
      </div>
    </section>
  );
}

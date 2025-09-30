import React from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import CheckItem from "../common/CheckItem.jsx";

export default function Requirements() {
  return (
    <section id="requisitos" className="bg-white border-top border-bottom" aria-labelledby="req-title">
      <div className="container py-6">
        <SectionTitle
          eyebrow="Requisitos y garantías"
          title="Criterios mínimos para evaluar"
          subtitle="La evaluación es caso por caso; estos son lineamientos generales."
        />
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="p-4 border rounded-4 h-100">
              <h3 className="h5 fw-bold mb-3">Información financiera</h3>
              <ul className="list-unstyled mb-0">
                <CheckItem>Estados financieros auditados de los últimos 2–3 años</CheckItem>
                <CheckItem>Estructura societaria y gobierno corporativo</CheckItem>
                <CheckItem>Detalle de endeudamiento y cronograma de pagos</CheckItem>
                <CheckItem>Flujo de caja proyectado del uso del préstamo</CheckItem>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 border rounded-4 h-100">
              <h3 className="h5 fw-bold mb-3">Garantías reales</h3>
              <ul className="list-unstyled mb-0">
                <CheckItem>Hipoteca/Prenda sobre activos de alto valor</CheckItem>
                <CheckItem>Tasación vigente por perito independiente</CheckItem>
                <CheckItem>Seguro todo riesgo con endoso a favor del acreedor</CheckItem>
                <CheckItem>Covenants de desempeño y cobertura</CheckItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="alert alert-warning rounded-4 mt-4" role="note">
          <strong>Importante:</strong> No se gestionan préstamos personales ni para microempresas.
          Enfoque exclusivo en empresas medianas y grandes con activos aptos como garantía.
        </div>
      </div>
    </section>
  );
}

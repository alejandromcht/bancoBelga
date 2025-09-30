import React from "react";
import SectionTitle from "../common/SectionTitle.jsx";

const FAQ = [
  {
    q: "¿Cuál es la tasa de interés?",
    a: "Depende del riesgo del proyecto, el perfil financiero, la calidad de las garantías y el plazo. Se cotiza caso por caso tras el análisis del data room."
  },
  {
    q: "¿Financian capital de trabajo o solo activos?",
    a: "Se pueden estructurar soluciones para CAPEX, refinanciaciones o capital de trabajo, siempre que existan garantías reales suficientes y un flujo consistente."
  },
  {
    q: "¿Qué países cubren?",
    a: "El fondeo proviene de un banco belga; la elegibilidad territorial queda sujeta a políticas de riesgo, regulaciones locales y compliance (KYC/AML)."
  },
  {
    q: "¿Qué empresas no califican?",
    a: "Microempresas, actividades prohibidas por políticas de riesgo, compañías sin estados financieros auditados o sin garantías reales adecuadas."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="container py-6" aria-labelledby="faq-title">
      <SectionTitle eyebrow="Preguntas frecuentes" title="FAQ" />
      <div className="accordion" id="faqAcc">
        {FAQ.map((item, idx) => (
          <div className="accordion-item" key={idx}>
            <h3 className="accordion-header" id={`h${idx}`}>
              <button
                className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target={`#c${idx}`}
                aria-expanded="false" aria-controls={`c${idx}`}
              >
                {item.q}
              </button>
            </h3>
            <div
              id={`c${idx}`} className="accordion-collapse collapse"
              aria-labelledby={`h${idx}`} data-bs-parent="#faqAcc"
            >
              <div className="accordion-body text-secondary">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

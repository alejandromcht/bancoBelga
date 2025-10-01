import React from "react";
import SectionTitle from "../common/SectionTitle.jsx";

const FAQ = [
  {
    q: "¿Cuál es la tasa de interés - Ejemplo pregunta?",
    a: "Respuesta"
  },
  {
    q: "¿Pregunta?",
    a: "Respuesta"
  },
  {
    q: "¿Qué países cubren?",
    a: "Perú"
  },
  {
    q: "¿Pregunta?",
    a: "Respueta"
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

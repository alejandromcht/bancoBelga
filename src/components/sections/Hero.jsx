import React from "react";
import Pill from "../common/Pill.jsx";
import CheckItem from "../common/CheckItem.jsx";

export default function Hero() {
  return (
    <header className="position-relative overflow-hidden" role="banner">
      <div className="container py-5 py-lg-6">
        <div className="row align-items-center g-4 py-4">
          <div className="col-lg-7">
            <div className="mb-3" aria-label="Etiquetas del servicio">
              <span className="badge text-bg-primary rounded-3 me-2">Préstamos corporativos</span>
              <span className="badge text-bg-light border rounded-3">USD 2.5M – 40M</span>
            </div>
            <h1 className="display-5 fw-bold lh-tight">
              Financiamiento mayorista para empresas con activos de alto valor
            </h1>
            <p className="lead text-secondary mt-3">
              Intermediación con banco belga para compañías de consumo masivo y productoras con
              fábricas/activos significativos. Evaluación técnica y estructuración de garantías reales.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
              <a href="#contacto" className="btn btn-primary btn-lg rounded-3 px-4">Iniciar evaluación</a>
              <div className="d-flex align-items-center small text-secondary" aria-label="Cumplimiento">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="me-2 text-success" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Banco europeo — compliance y KYC completos
              </div>
            </div>
            <div className="mt-4">
              <Pill>Ticket: 2.5M–40M USD</Pill>
              <Pill>Plazos flexibles</Pill>
              <Pill>Garantías reales exigidas</Pill>
              <Pill>Enfoque B2B</Pill>
            </div>
          </div>
          <div className="col-lg-5">
            <aside className="p-4 p-lg-5 bg-white border rounded-4 shadow-sm" aria-label="Ficha de contacto">
              <div className="small text-uppercase fw-semibold text-primary mb-2">Contacto directo</div>
              <h2 className="h4 fw-bold mb-1">Moisés Chiroque Julca</h2>
              <p className="text-secondary mb-3">
                Licenciado en Economía • 11 años en BBVA (ex Gerente Agencia Chiclayo, Área de Riesgos ~5 años)
              </p>
              <ul className="list-unstyled mb-3">
                <CheckItem>Evaluación crediticia corporativa</CheckItem>
                <CheckItem>Estructuración de garantías y mitigación de riesgo</CheckItem>
                <CheckItem>Acceso a banco belga para fondeo mayorista</CheckItem>
              </ul>
              <a href="#contacto" className="btn btn-outline-primary w-100 rounded-3">Agendar una llamada</a>
            </aside>
          </div>
        </div>
      </div>
      <style>{`header { background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%); }`}</style>
    </header>
  );
}

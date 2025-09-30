import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top" aria-label="Barra de navegación principal">
      <div className="container py-2">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#top">
          <span className="rounded-3 bg-primary-subtle text-primary fw-bold px-2 py-1">MCJ</span>
          <span className="fw-semibold">Comisionador Corporativo</span>
        </a>

        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
          aria-controls="nav" aria-expanded="false" aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#sectores">Sectores</a></li>
            <li className="nav-item"><a className="nav-link" href="#requisitos">Requisitos</a></li>
            <li className="nav-item"><a className="nav-link" href="#proceso">Proceso</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
          </ul>
          <a href="#contacto" className="btn btn-primary ms-lg-3 rounded-3">Solicitar evaluación</a>
        </div>
      </div>
    </nav>
  );
}

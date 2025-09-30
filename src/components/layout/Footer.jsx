import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white pt-5 pb-4" aria-label="Pie de página">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <h5 className="fw-bold">Moisés Chiroque Julca</h5>
            <p className="text-white-50 mb-2">Comisionador corporativo</p>
            <ul className="list-unstyled text-white-50">
              <li>11 años en BBVA — ex Gerente Agencia Chiclayo</li>
              <li>Área de Riesgos (~5 años)</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-semibold">Navegación</h6>
            <ul className="list-unstyled text-white-50">
              <li><a className="link-light link-underline-opacity-0" href="#sectores">Sectores</a></li>
              <li><a className="link-light link-underline-opacity-0" href="#requisitos">Requisitos</a></li>
              <li><a className="link-light link-underline-opacity-0" href="#proceso">Proceso</a></li>
              <li><a className="link-light link-underline-opacity-0" href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-semibold">Contacto</h6>
            <ul className="list-unstyled text-white-50">
              <li>Email: contacto@empresa.com</li>
              <li>Horario: Lun–Vie 9:00–18:00</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <div className="d-flex flex-wrap justify-content-between small text-white-50">
          <span>© {year} MCJ Intermediación. Todos los derechos reservados.</span>
          <a href="#" className="link-light">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
}

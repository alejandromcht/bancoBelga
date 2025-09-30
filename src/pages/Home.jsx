import React from "react";
import Hero from "../components/sections/Hero.jsx";
import Sectors from "../components/sections/Sectors.jsx";
import Requirements from "../components/sections/Requirements.jsx";
import Process from "../components/sections/Process.jsx";
import Faq from "../components/sections/Faq.jsx";
import Contact from "../components/sections/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-top border-bottom bg-white" aria-label="Indicadores">
        <div className="container py-4">
          <div className="row g-4 justify-content-center text-center">
            <div className="col-6 col-md-3">
              <div className="fs-2 fw-bold">$2.5M–$40M</div>
              <div className="text-secondary small">Ticket de financiamiento</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fs-2 fw-bold">24–84m</div>
              <div className="text-secondary small">Plazos referenciales</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fs-2 fw-bold">Garantías</div>
              <div className="text-secondary small">Activos de alto valor</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fs-2 fw-bold">KYC/AML</div>
              <div className="text-secondary small">Cumplimiento internacional</div>
            </div>
          </div>
        </div>
      </section>
      <Sectors />
      <Requirements />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}

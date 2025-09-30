import React, { useRef, useState } from "react";
import SectionTitle from "../common/SectionTitle.jsx";
import CheckItem from "../common/CheckItem.jsx";

export default function Contact() {
  const [showThanks, setShowThanks] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    setShowThanks(true);
    form.reset();
    form.classList.remove("was-validated");
  };

  return (
    <section id="contacto" className="bg-white border-top" aria-labelledby="contact-title">
      <div className="container py-6">
        <SectionTitle
          eyebrow="Contacto"
          title="Solicitar evaluación de crédito"
          subtitle="Completa el formulario y te contactaré para una llamada inicial."
        />
        <div className="row g-4">
          <div className="col-lg-7">
            <form ref={formRef} noValidate onSubmit={handleSubmit} className="needs-validation" aria-describedby="contact-help">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nombre y apellido</label>
                  <input type="text" className="form-control" name="name" required />
                  <div className="invalid-feedback">Ingresa tu nombre completo.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email corporativo</label>
                  <input type="email" className="form-control" name="email" required />
                  <div className="invalid-feedback">Ingresa un email válido.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Empresa</label>
                  <input type="text" className="form-control" name="company" required />
                  <div className="invalid-feedback">Ingresa el nombre de tu empresa.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">País</label>
                  <input type="text" className="form-control" name="country" required />
                  <div className="invalid-feedback">Indica tu país.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Monto requerido (USD)</label>
                  <input type="number" min="2500000" max="40000000" step="50000" className="form-control" name="amount" required />
                  <div id="contact-help" className="form-text">Rango objetivo: 2,500,000 – 40,000,000</div>
                  <div className="invalid-feedback">Ingresa un monto dentro del rango.</div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Tipo de garantía</label>
                  <select className="form-select" name="collateral" required>
                    <option value="">Selecciona una opción</option>
                    <option>Inmueble industrial</option>
                    <option>Maquinaria / flota pesada</option>
                    <option>Terreno / activo inmobiliario</option>
                    <option>Mixto</option>
                  </select>
                  <div className="invalid-feedback">Selecciona el tipo de garantía.</div>
                </div>
                <div className="col-12">
                  <label className="form-label">Descripción del proyecto</label>
                  <textarea className="form-control" rows={4} name="desc" placeholder="Uso del préstamo, activos en garantía, flujos esperados..." required />
                  <div className="invalid-feedback">Describe brevemente tu caso.</div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="legal" required />
                    <label className="form-check-label" htmlFor="legal">
                      Acepto el tratamiento de datos para fines de evaluación (KYC/AML)
                    </label>
                    <div className="invalid-feedback">Debes aceptar para continuar.</div>
                  </div>
                </div>
                <div className="col-12 d-grid d-sm-block">
                  <button className="btn btn-primary rounded-3 px-4" type="submit">Enviar</button>
                </div>
              </div>
            </form>
            {showThanks && (
              <div className="alert alert-success rounded-4 mt-4" role="status">
                ¡Gracias! Hemos recibido tu información. Me pondré en contacto pronto para agendar la llamada.
              </div>
            )}
          </div>
          <div className="col-lg-5">
            <aside className="p-4 border rounded-4 h-100 bg-body-tertiary" aria-label="Checklist">
              <h3 className="h6 fw-bold mb-3">Checklist rápido</h3>
              <ul className="list-unstyled mb-4">
                <CheckItem>RUC / Registro mercantil</CheckItem>
                <CheckItem>Estados financieros auditados</CheckItem>
                <CheckItem>Tasaciones y pólizas de activos</CheckItem>
                <CheckItem>Resumen de endeudamiento vigente</CheckItem>
              </ul>
              <div className="small text-secondary">
                *Servicio de intermediación de crédito corporativo. Condiciones finales sujetas al análisis del banco belga y cumplimiento normativo aplicable.
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

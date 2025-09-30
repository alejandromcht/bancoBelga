import React from "react";

export default function Step({ n, title, desc }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="h-100 p-4 border rounded-4 bg-white shadow-sm" role="listitem">
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle border fw-bold mb-3"
          style={{ width: 44, height: 44 }}
          aria-label={`Paso ${n}`}
        >
          {n}
        </div>
        <h3 className="h5 fw-semibold mb-2">{title}</h3>
        <p className="text-secondary mb-0">{desc}</p>
      </div>
    </div>
  );
}

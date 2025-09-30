import React from "react";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-5">
      {eyebrow && (
        <div className="text-uppercase small fw-semibold text-primary mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="fw-bold display-6">{title}</h2>
      {subtitle && <p className="text-secondary mt-2 lead">{subtitle}</p>}
    </div>
  );
}

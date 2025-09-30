import React from "react";
import CheckItem from "../../common/CheckItem.jsx";

export default function SectorCard({ title, desc, bullets }) {
  return (
    <div className="col-md-6 col-lg-4">
      <article className="card h-100 shadow-sm border-0" itemScope itemType="https://schema.org/Service">
        <div className="card-body p-4">
          <h3 className="card-title h5 fw-bold mb-2" itemProp="name">{title}</h3>
          <p className="card-text text-secondary" itemProp="description">{desc}</p>
          <ul className="list-unstyled mb-0">
            {bullets.map((b, i) => <CheckItem key={i}>{b}</CheckItem>)}
          </ul>
        </div>
      </article>
    </div>
  );
}

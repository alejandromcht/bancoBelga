import React from "react";
export default function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="fs-2 fw-bold">{value}</div>
      <div className="text-secondary small">{label}</div>
    </div>
  );
}

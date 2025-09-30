import React from "react";
export default function Pill({ children }) {
  return (
    <span className="badge rounded-pill text-bg-light border me-2 mb-2">
      {children}
    </span>
  );
}

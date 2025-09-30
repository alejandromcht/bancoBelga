import React from "react";
export default function CheckItem({ children }) {
  return (
    <li className="d-flex align-items-start gap-2 mb-2">
      <svg
        width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
        className="text-success mt-1" aria-hidden="true"
      >
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

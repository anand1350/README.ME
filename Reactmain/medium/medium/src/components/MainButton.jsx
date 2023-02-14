import React from "react";

export default function MainButton({ href, children }) {
  return (
    <a href={href} className="btn main-btn">
      {children}
    </a>
  );
}

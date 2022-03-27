import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
        <span>Coded By Sanjra</span>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <a
          type="button"
          className="btn btn-outline-primary"
          href="https://github.com/sanjra/dictionary-reactproject"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          type="button"
          className="btn btn-outline-primary"
          href="https://app.netlify.com/sites/jade-taiyaki-fd4ba3/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  );
}

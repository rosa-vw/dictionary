import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a href="https://github.com/rosa-vw" target="_blank" rel="noopener">
          Rosavw
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/rosa-vw/dictionary"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>{" "}
        , hosted on{" "}
        <a
          href="https://dictionary-rosavw.netlify.app/"
          target="_blank"
          rel="noopener"
        >
          Netlify
        </a>{" "}
        and uses the SheCodes Dictionary API
      </p>
    </div>
  );
}

export default Footer;

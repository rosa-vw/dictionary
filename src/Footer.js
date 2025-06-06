import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a href="https://github.com/rosa-vw" target="_blank">
          Rosavw
        </a>
        , is open-sourced on{" "}
        <a href="https://github.com/rosa-vw/dictionary" target="_blank">
          GitHub
        </a>{" "}
        , hosted on{" "}
        <a href="https://dictionary-rosavw.netlify.app/" target="_blank">
          Netlify
        </a>{" "}
        and uses the SheCodes Dictionary API
      </p>
    </div>
  );
}

export default Footer;

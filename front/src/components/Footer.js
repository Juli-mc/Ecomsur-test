import React from "react";
import App from "../App.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-icon-container">
        <a className="footer-icon" href="https://instagram.com/juli.marinc/">
          <i class="fa-brands fa-instagram" style={{ cursor: "pointer" }}></i>
        </a>
        <a className="footer-icon" href="https://github.com/Juli-mc">
          <i class="fa-brands fa-github" style={{ cursor: "pointer" }}></i>
        </a>
        <a className="footer-icon" href="mailto:julianmarincordoba19@gmail.com">
          <i class="fa-solid fa-envelope" style={{ cursor: "pointer" }}></i>
        </a>
      </div>
      <h5 className="copyright">
        &copy;2022, Julián Marin. Todos los derechos reservados.
      </h5>
    </footer>
  );
};

export default Footer;

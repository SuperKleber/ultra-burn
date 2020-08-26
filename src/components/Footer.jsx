import React from "react";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="testimonios">
        <h1>Testimonios</h1>
        <div className="testimonio">
          <div className="fotoContainer antes">
            <img className="foto antes" src="/img/antes1.png" alt="" />
          </div>
          <div className="fotoContainer despues">
            <img className="foto despues" src="/img/despues1.png" alt="" />
          </div>
          <div className="texto">
            El gel quema grasa me ayudó mucho a moldear mi físico durante mis
            entrenamientos.
          </div>
        </div>
        <div id="testimonios" className="testimonio">
          <div className="fotoContainer antes">
            <img className="foto antes" src="/img/antes2.png" alt="" />
          </div>
          <div className="fotoContainer despues">
            <img className="foto despues" src="/img/despues2.png" alt="" />
          </div>
          <div className="texto">
            Estoy muy agradecido con Ultra Burn por este gran Gel, hay partes
            del cuerpo donde es difícil eliminar la grasa, el gel quema grasa me
            ayudó a quitar grasa de lugares específicos
          </div>
        </div>
        <br />
        <a
          className="facebook opiniones"
          href="https://www.facebook.com/pg/ultraburnbolivia/reviews/?ref=page_internal"
        >
          <FaFacebookF /> Ver más opiniones
        </a>
        <br />
        <br />
      </div>
    </footer>
  );
};

export default Footer;

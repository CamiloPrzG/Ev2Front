import React from 'react';
import { MapPin, Mail, Info } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-item">
  <MapPin size={20} />
  <div>
    <p>José Joaquín Pérez 449<br />Cholchol, Araucanía</p>
  </div>
</div>

<div className="footer-item">
  <Mail size={20} />
  <div>
    <p>oficinadepartes@municholchol.cl</p>
  </div>
</div>

<div className="footer-item">
  <Info size={20} />
  <div>
    <p><strong>Cholchol Atiende</strong><br />Central Telefónica<br />452 734200</p>
    <p>Horario de atención:<br />lunes a jueves 8:30 a 17:30<br />y viernes hasta las 16:30 hrs</p>
  </div>
</div>


        <div className="footer-logo-container">
          <div className="footer-logo">
            <img src="/images/LogoBlanco.png" alt="Logo Municipalidad Cholchol" />
            <p>Municipalidad de<br />Cholchol</p>
          </div>
          <p className="footer-copy">© 2025. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

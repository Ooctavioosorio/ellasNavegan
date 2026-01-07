import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/logo.png" alt="Ellas Navegan" className="footer-logo" />
          <p>Viajes en barco creados exclusivamente para mujeres en San Blas, Panamá.</p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre-nosotras">Sobre Nosotras</Link></li>
            <li><Link to="/la-experiencia">La Experiencia</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/ellasnavegan?igsh=MWhxN3E0MnpnMDN4bw==" target="_blank" rel="noopener noreferrer">
                @ellasnavegan
              </a>
            </li>
            <li>
              <a href="mailto:jessica.ellasnavegan@gmail.com">
                jessica.ellasnavegan@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-cta">
          <h4>¿Lista para navegar?</h4>
          <a
            href="https://calendly.com/jessica-ellasnavegan/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agenda tu llamada
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ellas Navegan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

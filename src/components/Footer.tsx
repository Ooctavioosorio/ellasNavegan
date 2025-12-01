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
              <a href="https://instagram.com/ellasnavegan" target="_blank" rel="noopener noreferrer">
                @ellasnavegan
              </a>
            </li>
            <li>
              <a href="mailto:contacto@ellasnavegan.com">
                contacto@ellasnavegan.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-cta">
          <h4>¿Lista para navegar?</h4>
          <Link to="/contacto" className="btn-primary">
            Agenda tu llamada
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ellas Navegan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoMobileImg from '../assets/images/doradoOscuro.png';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Ellas Navegan" className="logo-img logo-img-desktop" />
          <img src={logoMobileImg} alt="Ellas Navegan" className="logo-img logo-img-mobile" />
        </Link>

        <button
          type="button"
          className="navbar-burger"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          <span className="navbar-burger-line" />
          <span className="navbar-burger-line" />
          <span className="navbar-burger-line" />
        </button>

        <ul className="navbar-menu">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre-nosotras" className={isActive('/sobre-nosotras') ? 'active' : ''}>
              Sobre Nosotras
            </Link>
          </li>
          <li>
            <Link to="/la-experiencia" className={isActive('/la-experiencia') ? 'active' : ''}>
              La Experiencia
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={isActive('/contacto') ? 'active' : ''}>
              Contacto
            </Link>
          </li>
        </ul>

        <Link to="/contacto" className="navbar-cta u-bg-gradient-gold-135">
          Agenda llamada y reserva
        </Link>
      </div>

      <div className={isMobileMenuOpen ? 'navbar-mobile-overlay is-open' : 'navbar-mobile-overlay'}>
        <button
          type="button"
          className="navbar-mobile-backdrop"
          aria-label="Cerrar menú"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={isMobileMenuOpen ? 'navbar-mobile-panel is-open' : 'navbar-mobile-panel'}>
          <ul className="navbar-mobile-menu">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre-nosotras" className={isActive('/sobre-nosotras') ? 'active' : ''}>
                Sobre Nosotras
              </Link>
            </li>
            <li>
              <Link to="/la-experiencia" className={isActive('/la-experiencia') ? 'active' : ''}>
                La Experiencia
              </Link>
            </li>
            <li>
              <Link to="/contacto" className={isActive('/contacto') ? 'active' : ''}>
                Contacto
              </Link>
            </li>
          </ul>

          <Link to="/contacto" className="navbar-mobile-cta u-bg-gradient-gold-135">
            Agenda llamada y reserva
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

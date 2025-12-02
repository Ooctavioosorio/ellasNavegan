import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Ellas Navegan" className="logo-img" />
        </Link>

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

        <Link to="/contacto" className="navbar-cta">
          Agenda llamada y reserva
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

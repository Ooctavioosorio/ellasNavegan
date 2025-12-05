import './Contacto.css';
import heroContactoImg from '../assets/images/heroContacto.png';
import agendaLlamadaImg from '../assets/images/agendallamada.png';

const Contacto = () => {
  return (
    <div className="contacto">
      {/* HERO */}
      <section className="hero-contacto" style={{ backgroundImage: `url(${heroContactoImg})` }}>
        <div className="container">
          <h1>Hablemos sobre tu próximo viaje en el mar.</h1>
          <p className="subtitulo">
            Si quieres conocer más sobre nuestras rutas, disponibilidad, barcos o cómo funciona la experiencia, agenda una llamada directa con Jessica. Es el espacio ideal para resolver dudas y saber si este viaje es perfecto para ti.
          </p>
        </div>
      </section>

      {/* AGENDA LLAMADA */}
      <section className="agenda-llamada">
        <div className="agenda-llamada-card">
          <img src={agendaLlamadaImg} alt="Agenda tu llamada" className="agenda-llamada-img" />
          <div className="agenda-llamada-content">
            <h2>Agenda tu llamada<br />gratuita</h2>
            <a href="#" className="btn-agenda">Quiero ser una de ellas</a>
          </div>
        </div>
      </section>

      {/* OTRAS FORMAS DE CONTACTO */}
      <section className="otras-formas">
        <div className="container">
          <h2>Otras formas de contacto</h2>

          <div className="contactos-grid">
            {/* Instagram */}
            <div className="contacto-item">
              <div className="contacto-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3>Instagram</h3>
              <p>@ellasnavegan</p>
              <a href="https://instagram.com/ellasnavegan" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Ir a Instagram
              </a>
            </div>

            {/* WhatsApp */}
            <div className="contacto-item">
              <div className="contacto-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <p>Atención directa</p>
              <a href="#" className="btn-secondary">
                Escribir por WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="contacto-item">
              <div className="contacto-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Correo electrónico</h3>
              <p>contacto@ellasnavegan.com</p>
              <a href="mailto:contacto@ellasnavegan.com" className="btn-secondary">
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="cierre-contacto">
        <div className="container">
          <p>
            Si estás pensando en darte un espacio para ti, para respirar, para
            desconectar del ruido y reconectar con tu esencia, aquí tienes un lugar
            seguro para hacerlo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contacto;

import './LaExperiencia.css';
import escenarioPerfectoImg from '../assets/images/escenarioperfecto.png';
import queTeLlevasImg from '../assets/images/quetellevas.png';

const LaExperiencia = () => {
  return (
    <div className="la-experiencia">
      {/* HERO - DINÁMICAS */}
      <section className="hero-experiencia">
        <div className="container">
          <h1><em>Dinámicas</em> que<br />viven las viajeras</h1>
          <p className="intro">Durante la experiencia podrás encontrar:</p>

          <div className="dinamicas-grid">
            <div className="dinamica-card">
              <h3><em>Bienestar<br />y calma</em></h3>
              <ul>
                <li>Pausas guiadas</li>
                <li>Respiración consciente</li>
                <li>Meditaciones suaves</li>
                <li>Yoga ligero</li>
                <li>Momentos de silencio</li>
              </ul>
            </div>

            <div className="dinamica-card">
              <h3><em>Aventura y<br />naturaleza</em></h3>
              <ul>
                <li>Navegación entre islas remotas</li>
                <li>Snorkel en aguas cristalinas</li>
                <li>Caminatas en islas desiertas</li>
                <li>Atardeceres y amaneceres en el mar</li>
                <li>Fotografía natural</li>
              </ul>
            </div>

            <div className="dinamica-card">
              <h3><em>Conexión y<br />comunidad</em></h3>
              <ul>
                <li>Conversaciones auténticas entre mujeres</li>
                <li>Reflexión personal</li>
                <li>Espacios para compartir y liberar</li>
                <li>Risas, historias y vínculos genuinos</li>
              </ul>
            </div>
          </div>

          <p className="nota-dinamicas">
            <em>Nada es obligatorio. Todo acompaña tu propio proceso.</em>
          </p>
        </div>
      </section>

      {/* POR QUÉ SAN BLAS */}
      <section className="por-que-san-blas" style={{ backgroundImage: `url(${escenarioPerfectoImg})` }}>
        <div className="container">
          <h2>Por qué San Blas es el escenario perfecto para transformarte</h2>
          <p>
            San Blas es un paraíso natural que naturalmente inspira claridad, calma y presencia: aguas transparentes, islas vírgenes, cielos abiertos y días sin ruido que invitan a bajar el ritmo sin esfuerzo. Todo un paraíso.
          </p>
          <p>
            Sus trayectos cortos y la navegación suave lo hacen ideal para mujeres que buscan seguridad y tranquilidad, mientras que su entorno intacto potencia cada momento de bienestar—desde yoga al amanecer y respiración frente al mar, hasta caminatas en arena blanca y silencios que ordenan. La intimidad del archipiélago crea libertad emocional: un espacio donde las mujeres se abren, se sienten ellas mismas y conectan sin tensión. Entre snorkel, arrecifes vivos, playas remotas y la cultura Guna Yala, cada día sorprende y reconecta con lo esencial, ofreciendo un viaje suave, profundo y revitalizante.
          </p>
          <a href="/contacto" className="btn-san-blas">Hacer mi reserva</a>
        </div>
      </section>

      {/* QUÉ TE LLEVAS */}
      <section className="que-te-llevas">
        <div className="que-te-llevas-card">
          <div className="que-te-llevas-imagen">
            <img src={queTeLlevasImg} alt="Qué te llevas" />
          </div>
          <div className="que-te-llevas-contenido">
            <h2>Qué te llevas</h2>
            <ul className="lista-llevas">
              <li>Días de descanso real</li>
              <li>Fotos naturales que capturan momentos auténticos</li>
              <li>Conversaciones que transforman</li>
              <li>Aventura suave</li>
              <li>Comunidad femenina</li>
              <li>Memorias de un paraíso</li>
              <li>Sensación de haber vuelto a ti</li>
              <li>Regalos personalizados Ellas Navegan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="galeria">
        <div className="container">
          <h2>Galería — <em>Momentos Reales</em></h2>

          <div className="galeria-grid">
            {/* Placeholders para imágenes */}
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
            <div className="galeria-item"></div>
          </div>

          <p className="galeria-intro">
            Si quieres vivir esta experiencia y reconectar con tu esencia en el mar, agenda tu llamada gratuita.
          </p>
          <a href="/contacto" className="btn-galeria">Agendar aquí</a>
        </div>
      </section>
    </div>
  );
};

export default LaExperiencia;

import './Home.css';
import heroImage from '../assets/images/hero.png';

const Home = () => {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-light">Viajes exclusivos en</span>
              <br />
              <span className="hero-title-light">barco para </span>
              <span className="hero-title-bold">mujeres en</span>
              <br />
              <span className="hero-title-bold">San Blas, Panamá.</span>
            </h1>
            <p className="hero-subtitle">
              Experiencias pensadas por y para mujeres que buscan una pausa
              real, aventura, autenticidad y bienestar profundo en medio del
              Caribe. Rutas guiadas para soltar la autoexigencia, bajar el ritmo
              y reconectar contigo en un entorno seguro y femenino.
            </p>
            <a href="/contacto" className="hero-cta">Agendar llamada gratuita</a>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Mujer disfrutando en barco en San Blas" className="hero-img" />
          </div>
        </div>
      </section>

      {/* QUÉ ES ELLAS NAVEGAN */}
      <section className="que-es">
        <div className="container">
          <h2>Qué es Ellas Navegan</h2>
          <p>
            Ellas Navegan es una agencia especializada en rutas marítimas por San Blas,
            creada para mujeres que necesitan desconectar de la rutina, respirar lejos de
            la exigencia diaria y constante y vivir el mar desde un lugar auténtico,
            cuidado, seguro y profundamente humano.
          </p>
          <p className="destacado">No es un tour.</p>
          <p>
            Es una experiencia diseñada desde la perspectiva femenina: bienestar,
            aventura, desconexión, seguridad, calma, introspección y unidad con mujeres
            que viven ritmos similares a los tuyos o con visiones a compartir.
          </p>
          <p>
            Cada viaje está liderado por <strong>Jessica Milagro</strong>, marinera con más de 15 años
            navegando y recorriendo distintos países, junto a un equipo
            mayoritariamente femenino.
          </p>
          <p>
            Ellas entienden los detalles que realmente hacen que una mujer se sienta
            tranquila: higiene impecable, logística bien pensada, espacios cómodos,
            ritmos respetuosos y dinámicas que te acompañarán sin presionarte.
          </p>
        </div>
      </section>

      {/* LA EXPERIENCIA A BORDO */}
      <section className="experiencia-bordo">
        <div className="container">
          <h2>La experiencia a bordo</h2>
          <p>
            Nuestras rutas recorren distintas islas del archipiélago, combinando el paraíso
            de San Blas, Panamá, playas vírgenes, bienestar y dinámicas especiales.
          </p>
          <div className="incluye-lista">
            <h3>Incluye:</h3>
            <ul>
              <li>Navegación diseñada por capitanas expertas</li>
              <li>Tripulación femenina</li>
              <li>Actividades de bienestar</li>
              <li>Exploración natural (islas, snorkel, caminatas)</li>
              <li>Alojamiento a bordo</li>
              <li>Alimentación completa</li>
              <li>Convivencia íntima con un grupo femenino</li>
              <li>Regalos y detalles pensados para acompañar tu viaje</li>
            </ul>
          </div>
          <p className="objetivo">
            El objetivo es simple: <strong>vivir el mar desde la calma, la seguridad, la aventura y la posibilidad de
            reconectar contigo sin prisa.</strong>
          </p>
          <a href="/la-experiencia" className="btn-secondary">Saber más</a>
        </div>
      </section>

      {/* PARA QUIÉN ES ESTE VIAJE */}
      <section className="para-quien">
        <div className="container">
          <h2>Para quién es este viaje</h2>
          <p>Esta experiencia es para mujeres que:</p>
          <ul className="lista-para-quien">
            <li>Necesitan un descanso real del ritmo que siempre exige más.</li>
            <li>Buscan claridad, equilibrio y un espacio para respirar distinto.</li>
            <li>Quieren vivir el mar sin sentirse apuradas, expuestas o tensas.</li>
            <li>Valoran un entorno femenino, seguro y cuidadosamente pensado.</li>
            <li>Desean compartir con mujeres auténticas, profundas y sensibles.</li>
            <li>Quieren aventura, pero sin renunciar al bienestar.</li>
          </ul>
          <p className="cierre">Si te resuena viajar con propósito, este espacio es para ti.</p>
          <a href="/contacto" className="btn-primary">Agenda tu llamada</a>
        </div>
      </section>

      {/* SAN BLAS, PANAMÁ */}
      <section className="san-blas">
        <div className="container">
          <h2>San Blas, Panamá</h2>
          <p className="intro">San Blas no es solo un destino: es un paraíso de conexión.</p>
          <p>
            Más de 300 islas, aguas transparentes, arrecifes intactos, comunidades y
            culturas únicas y una calma que te baja el ritmo y te hace conectar apenas
            llegas.
          </p>
          <p>
            Aquí no vienes a "hacer turismo" únicamente. Vienes a un lugar donde la
            naturaleza te invita a soltar, contemplar y volver a ti. Es el escenario perfecto para mujeres
            que buscan una pausa profunda, auténtica y llena de sentido.
          </p>
          <div className="galeria-san-blas">
            {/* Galería visual - placeholder */}
          </div>
        </div>
      </section>

      {/* EL EQUIPO & LOS BARCOS */}
      <section className="equipo-barcos">
        <div className="container">
          <h2>El equipo & los barcos</h2>
          <p>
            Nuestros barcos —cada uno con su capitana, personalidad y nivel de
            experiencia— están diseñados para navegaciones suaves, descanso cómodo y
            días llenos de conexión.
          </p>
          <p>Contamos con <strong>dos opciones de experiencia</strong>, ambas seguras y hermosas,
          pero con niveles distintos:</p>

          <div className="barcos-grid">
            <div className="barco-card">
              <h3>Barco Esencial</h3>
              <p>
                Una experiencia íntima, cuidada y femenina con todo lo necesario para
                disfrutar San Blas con bienestar y tranquilidad.
              </p>
            </div>
            <div className="barco-card premium">
              <h3>Barco Premium</h3>
              <p>Para mujeres que buscan mayor comodidad:</p>
              <ul>
                <li>Espacios más amplios</li>
                <li>Gastronomía fresca (incluye mariscos y langostas en temporada)</li>
                <li>Detalles especiales</li>
                <li>Regalos únicos y artículos creados para acompañarte después del viaje</li>
              </ul>
            </div>
          </div>
          <p className="nota-tripulacion">
            <strong>En ambos:</strong> La tripulación femenina se encarga de todo: navegación,
            seguridad, logística, alimentación, limpieza y acompañamiento.
          </p>
          <a href="/sobre-nosotras" className="btn-secondary">Ver equipo</a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="container">
          <h2>El mar está listo. Nosotras también.</h2>
          <p>Este es un proceso simple y pensado para tu tranquilidad:</p>
          <ol className="proceso-lista">
            <li>Agenda una llamada gratuita con Jessica.</li>
            <li>Conversan sobre tu intención, ritmo y preguntas.</li>
            <li>Si la experiencia es para ti, eliges fechas y reservas tu lugar.</li>
          </ol>
          <p>Cada grupo se arma con cuidado para asegurar armonía y bienestar entre mujeres.</p>
          <a href="/contacto" className="btn-primary btn-large">Agenda tu llamada gratuita</a>
        </div>
      </section>
    </div>
  );
};

export default Home;

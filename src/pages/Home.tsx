import './Home.css';
import heroImage from '../assets/images/hero.png';
import hero2Image from '../assets/images/hero2.png';
import capitanasExpertasImg from '../assets/images/capitanasexpertas.png';
import actividadesBienestarImg from '../assets/images/actividadesdebienestar.png';
import exploracionNaturalImg from '../assets/images/exploracionnatural.png';
import alojamientoBordoImg from '../assets/images/alojamientoabordo.png';
import regalosEspecialesImg from '../assets/images/regalosespeciales.png';
import sanBlasPanamaImg from '../assets/images/sanblasPanama.png';

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

      {/* QUIÉNES SOMOS */}
      <section className="quienes-somos">
        <div className="quienes-somos-container">
          <div className="quienes-somos-image">
            <img src={hero2Image} alt="Mujeres disfrutando en el barco" className="quienes-somos-img" />
          </div>
          <div className="quienes-somos-content">
            <h2 className="quienes-somos-title">¿Quienes<br />somos?</h2>
            <p className="quienes-somos-text">
              Ellas Navegan es una agencia especializada en rutas marítimas por <strong>San Blas</strong>, creada para mujeres que necesitan desconectar de la rutina, respirar lejos de la exigencia diaria y constante y vivir el mar desde un lugar auténtico, cuidado, seguro y profundamente humano.
            </p>
            <h3 className="quienes-somos-subtitle">No es un tour</h3>
            <p className="quienes-somos-text">
              Una experiencia creada desde la mirada femenina: bienestar, aventura, desconexión y seguridad entre mujeres con ritmos y visiones afines. Cada viaje es liderado por <strong>Jessica Milagro</strong>, marinera con más de 6 años navegando, junto a un equipo mayoritariamente femenino que cuida cada detalle para que te sientas tranquila: higiene impecable, logística clara, espacios cómodos y dinámicas que acompañan sin presión.
            </p>
          </div>
        </div>
      </section>

      {/* LA EXPERIENCIA A BORDO */}
      <section className="experiencia-bordo">
        <div className="experiencia-bordo-container">
          <h2 className="experiencia-bordo-title">La experiencia <em>a bordo</em></h2>
          <p className="experiencia-bordo-subtitle">
            Nuestras rutas recorren distintas islas del archipiélago, combinando el paraíso
            de San Blas, Panama, playas vírgenes, bienestar y dinámicas especiales.
          </p>

          {/* Primera fila - 3 cards */}
          <div className="experiencia-cards-row">
            <div className="experiencia-card">
              <div className="experiencia-card-image">
                <img src={capitanasExpertasImg} alt="Capitanas expertas" />
                <div className="experiencia-card-overlay">
                  <span className="experiencia-card-label">Capitanas expertas</span>
                  <span className="experiencia-card-number">01.</span>
                </div>
              </div>
              <div className="experiencia-card-content">
                <p>Mujeres que navegan y te guían con total seguridad.</p>
                <span className="experiencia-card-arrow">→</span>
              </div>
            </div>

            <div className="experiencia-card">
              <div className="experiencia-card-image">
                <img src={actividadesBienestarImg} alt="Actividades de bienestar" />
                <div className="experiencia-card-overlay">
                  <span className="experiencia-card-label">Actividades de bienestar</span>
                  <span className="experiencia-card-number">02.</span>
                </div>
              </div>
              <div className="experiencia-card-content">
                <p>Espacios para reconectar y recargar energía.</p>
                <span className="experiencia-card-arrow">→</span>
              </div>
            </div>

            <div className="experiencia-card">
              <div className="experiencia-card-image">
                <img src={exploracionNaturalImg} alt="Exploración natural" />
                <div className="experiencia-card-overlay">
                  <span className="experiencia-card-label">Exploración natural</span>
                  <span className="experiencia-card-number">03.</span>
                </div>
              </div>
              <div className="experiencia-card-content">
                <p>Islas y todo un paraíso para que exploras sin prisa.</p>
                <span className="experiencia-card-arrow">→</span>
              </div>
            </div>
          </div>

          {/* Segunda fila - 2 cards centradas */}
          <div className="experiencia-cards-row experiencia-cards-row-center">
            <div className="experiencia-card">
              <div className="experiencia-card-image">
                <img src={alojamientoBordoImg} alt="Alojamiento a bordo" />
                <div className="experiencia-card-overlay">
                  <span className="experiencia-card-label">Alojamiento a bordo</span>
                  <span className="experiencia-card-number">01.</span>
                </div>
              </div>
              <div className="experiencia-card-content">
                <p>Descansas sobre el mar, en calma total.</p>
                <span className="experiencia-card-arrow">→</span>
              </div>
            </div>

            <div className="experiencia-card">
              <div className="experiencia-card-image">
                <img src={regalosEspecialesImg} alt="Regalos especiales" />
                <div className="experiencia-card-overlay">
                  <span className="experiencia-card-label">Regalos especiales</span>
                  <span className="experiencia-card-number">02.</span>
                </div>
              </div>
              <div className="experiencia-card-content">
                <p>Detalles exclusivos pensados solo para mujeres especiales.</p>
                <span className="experiencia-card-arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAN BLAS, PANAMÁ */}
      <section className="san-blas" style={{ backgroundImage: `url(${sanBlasPanamaImg})` }}>
        <div className="san-blas-container">
          <h2 className="san-blas-title">San Blas, Panamá</h2>
          <div className="san-blas-overlay">
            <p>
              San Blas no es solo un destino: es un paraíso de conexión. Más de 300 islas, aguas transparentes, arrecifes intactos, comunidades y culturas únicas y una calma que te baja el ritmo y te hace conectar apenas llegas. Aquí no vienes a "hacer turismo" únicamente. Vienes a un lugar donde la naturaleza te invita a soltar, contemplar y volver a ti. Es el escenario perfecto para mujeres que buscan una pausa profunda, auténtica y llena de sentido.
            </p>
            <p>
              Y lo más mágico es que todo sucede despacio, sin ruido y sin exigencias. La vida corre diferente: el mar marca el tiempo, la naturaleza te sostiene y la energía femenina que se crea entre nosotras transforma el viaje en algo más que un escape… se vuelve un recordatorio de quién eres cuando te das permiso de simplemente SER.
            </p>
          </div>
          <a href="/la-experiencia" className="san-blas-btn">Saber más</a>
        </div>
      </section>

      {/* PARA QUIÉN ES ESTE VIAJE */}
      <section className="para-quien">
        <div className="para-quien-container">
          <div className="para-quien-left">
            <h2 className="para-quien-title">¿Para quién es<br />este viaje?</h2>
          </div>
          <div className="para-quien-right">
            <div className="para-quien-card">
              <h3 className="para-quien-subtitle">Esta experiencia es para mujeres que:</h3>
              <ul className="para-quien-lista">
                <li>Necesitan un descanso real del ritmo que siempre exige más.</li>
                <li>Buscan claridad, equilibrio y un espacio para respirar distinto.</li>
                <li>Quieren vivir el mar sin sentirse apuradas, expuestas o tensas.</li>
                <li>Valoran un entorno femenino, seguro y cuidadosamente pensado.</li>
                <li>Desean compartir con mujeres auténticas, profundas y sensibles.</li>
                <li>Quieren aventura, pero sin renunciar al bienestar.</li>
              </ul>
              <p className="para-quien-cierre"><strong>Si te resuena viajar con propósito, este espacio es para ti.</strong></p>
              <a href="/contacto" className="para-quien-btn">Haz una reserva</a>
            </div>
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

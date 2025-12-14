import './SobreNosotras.css';
import heroSobreImg from '../assets/images/mujeresCreandoExperiencia.png';
import nuestraEsenciaImg from '../assets/images/nuestaEsencia.png';
import fundadoraImg from '../assets/images/doradoOscuro.png';

const SobreNosotras = () => {
  return (
    <div className="sobre-nosotras">
      {/* HERO */}
      <section className="hero-sobre" style={{ backgroundImage: `url(${heroSobreImg})` }}>
        <div className="hero-sobre-overlay">
          <div className="container">
            <h1 className="u-text-gradient-gold-135" data-aos="fade-down">Somos mujeres creando experiencias únicas en el mar para mujeres extraordinarias.</h1>
            <p className="subtitulo" data-aos="fade-up" data-aos-delay="200">
              Viajes seguros, conscientes y transformadores en uno de los lugares más
              hermosos del mundo.
            </p>
          </div>
        </div>
      </section>

      {/* NUESTRA ESENCIA */}
      <section className="nuestra-esencia u-bg-gradient-gold-135">
        <div className="nuestra-esencia-content">
          <div className="nuestra-esencia-imagen" data-aos="flip-up">
            <img src={nuestraEsenciaImg} alt="Nuestra esencia - Mujeres en barco" />
          </div>
          <div className="nuestra-esencia-texto" data-aos="fade-up" data-aos-delay="150">
            <h2 className="u-text-gradient-gold-90">Nuestra Esencia</h2>
            <p>
              Ellas Navegan nació para ofrecer algo que las mujeres pocas veces tenemos:
              un espacio seguro en el mar donde podamos viajar sin tensión, sin
              autoexigencia y sin las dinámicas que suelen acompañar a los viajes
              tradicionales.
            </p>
            <p>
              Somos una agencia creada por mujeres y para mujeres, con rutas marítimas
              diseñadas para conectar bienestar, aventura consciente y comunidad.
            </p>
            <p>
              Creemos en la claridad que aparece cuando bajamos el ritmo, en la fuerza de
              lo femenino y en la magia de compartir con mujeres que también necesitan
              una pausa.
            </p>
          </div>
        </div>
      </section>

      {/* POR QUÉ SOLO PARA MUJERES */}
      <section className="por-que-mujeres">
        <div className="container">
          <h2 className="u-text-gradient-gold-90">¿Por qué solo para <em>mujeres</em>?</h2>
          <p>
            Porque la energía cambia. Cuando el grupo es femenino, surge un nivel de libertad emocional, seguridad y autenticidad que permite que cada mujer viaje sin máscaras.
          </p>
          <p>
            La tripulación entiende lo que una mujer necesita para sentirse cuidada en el mar: higiene impecable, espacios tranquilos, contención emocional, ritmos suaves y cero presiones.
          </p>
          <p>
            Esto no es un detalle. Es el corazón de Ellas Navegan
          </p>
          <a href="#" className="btn-mujeres u-bg-gradient-gold-135">Quiero ser una de ellas</a>
        </div>
      </section>

      {/* LA FUNDADORA */}
      <section className="fundadora">
        <div className="fundadora-content">
          <div className="fundadora-imagen" data-aos="zoom-in">
            <img src={fundadoraImg} alt="Jessica Milagro - Fundadora" />
          </div>
          <div className="fundadora-card" data-aos="fade-left" data-aos-delay="200">
            <h2 className="u-text-gradient-gold-90">Fundadora — <em>Jessica Milagro</em></h2>
            <p>
              Con más de 6 años de experiencia navegando Mar Abierto en veleros y costeando en yates de lujo por el Caribe (Panamá, Colombia, Islas ABC, Bahamas, Martinica, República Dominicana, St. Marteen, St. Barth) y parte del Mediterráneo (Barcelona, Sur de Francia, Italia —Costa Siciliana— y Túnez).
            </p>
            <p>
              Después de años observando cómo viajaban las mujeres, entendió algo que marcó el nacimiento de esta marca: las mujeres vivimos el mar distinto. Tenemos ritmos, emociones y necesidades que pocas veces se contemplan en rutas mixtas o tradicionales.
            </p>
            <p>
              Por eso creó Ellas Navegan: un espacio donde el mar se vive desde la calma, el bienestar, la seguridad y la intención. Jessica es profesional, cálida, intuitiva y profundamente consciente del impacto que una experiencia en el mar puede tener en una mujer.
            </p>
          </div>
        </div>
      </section>

      {/* NUESTRO EQUIPO */}
      <section className="nuestro-equipo">
        <div className="nuestro-equipo-container">
          <h2><em>Nuestro equipo</em></h2>
          <p className="equipo-descripcion">
            Nuestro equipo está formado por mujeres que aman el mar y entienden a profundidad su responsabilidad: acompañarte, cuidarte y asegurarse de que vivas una experiencia tranquila y transformadora. Cada capitana y cada tripulante aporta sensibilidad, experiencia y una intención clara: <strong>hacer del mar un lugar seguro por y para nosotras</strong>.
          </p>
          <div className="equipo-grid">
            <div className="miembro-card">
              <div className="miembro-foto"></div>
              <h4><em>Nombre</em></h4>
              <p>Breve descripción de la capitana y sus preferencias personales en sus viajes.</p>
            </div>
            <div className="miembro-card">
              <div className="miembro-foto"></div>
              <h4><em>Nombre</em></h4>
              <p>Breve descripción de la capitana y sus preferencias personales en sus viajes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTROS CATAMARANES */}
      <section className="nuestros-barcos">
        <div className="container">
          <h2 className="u-text-gradient-gold-90">Nuestros catamaranes</h2>
          <p>Actualmente operamos con catamaranes equipados para rutas tranquilas y seguras, con dos experiencias disponibles:</p>

          <div className="barcos-detalle">
            <div className="barco-item">
              <div className="barco-info">
                <h3 className="u-text-gradient-gold-90">Catamarán<br />Esencial</h3>
                <p>Una experiencia íntima, cuidada y femenina con todo lo necesario para disfrutar San Blas con bienestar y tranquilidad.</p>
              </div>
            </div>

            <div className="barco-item">
              <div className="barco-info">
                <h3 className="u-text-gradient-gold-90">Catamarán<br />Premium</h3>
                <p>
                  Para quienes buscan mayor comodidad, gastronomía fresca (incluye mariscos y langostas según temporada), detalles especiales y regalos únicos que hacen del viaje un recuerdo para siempre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-sobre u-bg-gradient-gold-135">
        <div className="cta-sobre-container">
          <div className="cta-sobre-card" data-aos="fade-up">
            <p>
              Este proyecto existe por y para mujeres que quieren vivir el mar desde otra energía: más clara, más suave y más auténtica. Si ya sentiste ese "esto es para mí", es porque lo es. El siguiente paso es simple: elegir la experiencia que va con tu momento.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotras;

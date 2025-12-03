import './SobreNosotras.css';
import heroSobreImg from '../assets/images/mujeresCreandoExperiencia.png';

const SobreNosotras = () => {
  return (
    <div className="sobre-nosotras">
      {/* HERO */}
      <section className="hero-sobre" style={{ backgroundImage: `url(${heroSobreImg})` }}>
        <div className="hero-sobre-overlay">
          <div className="container">
            <h1>Somos mujeres creando experiencias únicas en el mar para mujeres extraordinarias.</h1>
            <p className="subtitulo">
              Viajes seguros, conscientes y transformadores en uno de los lugares más
              hermosos del mundo.
            </p>
          </div>
        </div>
      </section>

      {/* NUESTRA ESENCIA */}
      <section className="nuestra-esencia">
        <div className="container">
          <h2>Nuestra Esencia</h2>
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
      </section>

      {/* POR QUÉ SOLO PARA MUJERES */}
      <section className="por-que-mujeres">
        <div className="container">
          <h2>Por qué solo para mujeres</h2>
          <p className="destacado">Porque la energía cambia.</p>
          <p>
            Cuando el grupo es femenino, surge un nivel de libertad emocional,
            seguridad y autenticidad que permite que cada mujer viaje sin máscaras.
          </p>
          <p>
            La tripulación entiende lo que una mujer necesita para sentirse cuidada en el
            mar: higiene impecable, espacios tranquilos, contención emocional, ritmos
            suaves y cero presiones.
          </p>
          <p className="cierre-seccion">
            Esto no es un detalle.<br />
            <strong>Es el corazón de Ellas Navegan.</strong>
          </p>
        </div>
      </section>

      {/* LA FUNDADORA */}
      <section className="fundadora">
        <div className="container">
          <div className="fundadora-content">
            <div className="fundadora-imagen">
              {/* Placeholder para imagen de Jessica */}
              <div className="imagen-placeholder"></div>
            </div>
            <div className="fundadora-texto">
              <h2>La Fundadora — Jessica Milagro</h2>
              <p>
                Con más de 6 años de experiencia navegando Mar Abierto en veleros y costeando en yates de lujo por el Caribe (Panamá, Colombia, Islas ABC, Bahamas, Martinica, República Dominicana, St. Marteen, St. Barth) y parte del Mediterráneo (Barcelona, Sur de Francia, Italia —Costa Siciliana— y Túnez). 

                Después de años observando cómo viajaban las mujeres, entendió algo que marcó el nacimiento de esta marca: las mujeres vivimos el mar distinto. Tenemos ritmos, emociones y necesidades que pocas veces se contemplan en rutas mixtas o tradicionales. 

                Por eso creó Ellas Navegan: un espacio donde el mar se vive desde la calma, el bienestar, la seguridad y la intención. Jessica es profesional, cálida, intuitiva y profundamente consciente del impacto que una experiencia en el mar puede tener en una mujer. 
              </p>
              <a href="/contacto" className="btn-primary">Agenda llamada gratis conmigo</a>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTRO EQUIPO */}
      <section className="nuestro-equipo">
        <div className="container">
          <h2>Nuestro Equipo</h2>
          <p>
            Nuestro equipo está formado por mujeres que aman el mar y entienden a
            profundidad su responsabilidad: acompañarte, cuidarte y asegurarse de que
            vivas una experiencia tranquila y transformadora.
          </p>
          <p>
            Cada capitana y cada tripulante aporta sensibilidad, experiencia y una
            intención clara: <strong>hacer del mar un lugar seguro por y para nosotras.</strong>
          </p>
          <div className="equipo-grid">
            {/* Placeholder para fotos del equipo */}
            <div className="miembro-card">
              <div className="miembro-foto"></div>
              <h4>Nombre</h4>
              <p>Rol en el equipo</p>
            </div>
            <div className="miembro-card">
              <div className="miembro-foto"></div>
              <h4>Nombre</h4>
              <p>Rol en el equipo</p>
            </div>
            <div className="miembro-card">
              <div className="miembro-foto"></div>
              <h4>Nombre</h4>
              <p>Rol en el equipo</p>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTROS BARCOS */}
      <section className="nuestros-barcos">
        <div className="container">
          <h2>Nuestros Barcos</h2>
          <p>Contamos con dos barcos preparados para recorridos tranquilos y seguros:</p>

          <div className="barcos-detalle">
            <div className="barco-item">
              <div className="barco-imagen"></div>
              <div className="barco-info">
                <h3>Barco Esencial</h3>
                <p>Una experiencia íntima, femenina y accesible.</p>
              </div>
            </div>

            <div className="barco-item premium">
              <div className="barco-imagen"></div>
              <div className="barco-info">
                <h3>Barco Premium</h3>
                <p>
                  Para quienes buscan mayor comodidad, gastronomía fresca (incluye mariscos
                  y langostas según temporada), detalles especiales y regalos únicos que hacen
                  del viaje un recuerdo para siempre.
                </p>
              </div>
            </div>
          </div>

          <a href="/contacto" className="btn-primary">Agenda tu llamada gratuita</a>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotras;

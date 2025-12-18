import { useEffect, useState } from 'react';
import './SobreNosotras.css';
import heroSobreImg from '../assets/images/mujeresCreandoExperiencia.png';
import nuestraEsenciaImg from '../assets/images/nuestaEsencia.png';
import fundadoraImg from '../assets/images/doradoOscuro.png';
import capitana1Img from '../assets/images/capitana1.jpeg';
import capitana2Img from '../assets/images/capitana2.jpeg';

const SobreNosotras = () => {
  const equipo = [
    {
      id: 'elena-fischer',
      nombre: 'Capitana Elena Fischer',
      img: capitana1Img,
      modalTexto:
        'capitana originaria de Alemania, llegó a Panamá inicialmente por turismo, sin imaginar que ese viaje cambiaría para siempre el rumbo de su vida. Lo que comenzó como una visita terminó convirtiéndose en un encuentro profundo con el mar: su inmensidad, su libertad y su fuerza despertaron en ella una conexión tan auténtica que decidió quedarse y aprender a gobernar un barco, dejando que el océano marcara su nuevo camino.\n\nCon el paso del tiempo, y gracias a una sólida formación náutica, disciplina y un trabajo constante lleno de dedicación, Elena logró transformar esa pasión nacida del viaje en una verdadera profesión. Años después, hizo realidad su sueño de convertirse en capitana de su propia embarcación, el Flying Giny, desde donde hoy navega las aguas cristalinas de San Blas, Panamá.\n\nDesde allí, comparte con cada viajero no solo la belleza del archipiélago, sino también una forma de vivir el mar basada en el respeto, la aventura y el propósito, tal como ella misma lo descubrió cuando decidió seguir la llamada del océano.',
    },
    {
      id: 'alexia-prudhomme',
      nombre: 'Capitana Alexia Prud’homme',
      img: capitana2Img,
      modalTexto:
        'es la capitana y anfitriona a bordo, quien se encarga de que todo tu viaje con nosotros sea agradable, seguro y lo más fluido posible. Está siempre atenta a cada detalle, acompañándote y asegurándose de que la experiencia sea tranquila y bien cuidada de principio a fin. Como valor añadido, cuenta con formación en enfermería y una amplia experiencia trabajando en hospitales durante muchos años, lo que aporta un extra de seguridad y confianza a bordo. Así que relájate y disfruta: estás en muy buenas manos… al menos cuando ella está aquí.\n\nRaphaëlle Prud’homme\nChef\n\nLa chef —sí, LA chef— es también anfitriona, alma del barco, apoyo en cubierta y, básicamente, quien se asegura de que todo funcione y tú estés bien. Su alegría, energía y amor por lo que hace iluminan cada día a bordo. Te conquistará con su increíble cocina fresca y llena de sabor: pulpo, langosta, lasaña, mousse de chocolate y mucho más. Un consejo amistoso: mantente de su lado bueno… de lo contrario, ¡bienvenido a la guarida del león!',
    },
  ];

  const [equipoActivoId, setEquipoActivoId] = useState<string | null>(null);
  const miembroActivo = equipo.find((m) => m.id === equipoActivoId) ?? null;

  useEffect(() => {
    if (!miembroActivo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setEquipoActivoId(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [miembroActivo]);

  useEffect(() => {
    if (!miembroActivo) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [miembroActivo]);

  return (
    <div className="sobre-nosotras">
      {/* HERO */}
      <section className="hero-sobre" style={{ backgroundImage: `url(${heroSobreImg})` }}>
        <div className="hero-sobre-overlay">
          <div className="container">
            <h1 className="u-text-gradient-gold-135" data-aos="fade-down">
              Somos mujeres creando
              <br />
              experiencias únicas en el mar
              <br />
              para mujeres extraordinarias.
            </h1>
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
              <div className="miembro-foto">
                <button
                  type="button"
                  className="miembro-foto-btn"
                  onClick={() => setEquipoActivoId('elena-fischer')}
                  aria-label="Ver más sobre Capitana Elena Fischer"
                >
                  <img src={capitana1Img} alt="Capitana Elena Fischer" loading="lazy" />
                </button>
              </div>
              <h4><em>Capitana Elena Fischer</em></h4>
              <p>De Alemania, fue a navegar por motivos de turismo en Panama y se enamoro del mar, ahora trabaja como capitana de su propio barco, llamado Fliying Giny, en San Blas, Panama.</p>
            </div>
            <div className="miembro-card">
              <div className="miembro-foto">
                <button
                  type="button"
                  className="miembro-foto-btn"
                  onClick={() => setEquipoActivoId('alexia-prudhomme')}
                  aria-label="Ver más sobre Capitana Alexia Prud’homme"
                >
                  <img src={capitana2Img} alt="Capitana Alexia Prud’homme" loading="lazy" />
                </button>
              </div>
              <h4><em>Capitana Alexia Prud’homme</em></h4>
              <p>Tiene experiencia en enfermería y ha trabajado en hospitales durante muchos años. Así que relájate y quédate tranquilo, estás en buenas manos, ¡al menos cuando ella está aquí!</p>
            </div>
          </div>
        </div>
      </section>

      {miembroActivo && (
        <div
          className="equipo-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Más sobre ${miembroActivo.nombre}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setEquipoActivoId(null);
          }}
        >
          <div className="equipo-modal">
            <button
              type="button"
              className="equipo-modal-close"
              onClick={() => setEquipoActivoId(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="equipo-modal-text">
              <h3 className="equipo-modal-title"><em>{miembroActivo.nombre}</em></h3>
              <p>{miembroActivo.modalTexto}</p>
            </div>

            <div className="equipo-modal-image">
              <img src={miembroActivo.img} alt={miembroActivo.nombre} />
            </div>
          </div>
        </div>
      )}

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

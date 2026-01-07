import './LaExperiencia.css';
import { useEffect, useState } from 'react';
import escenarioPerfectoImg from '../assets/images/escenarioperfecto.png';
import queTeLlevasImg from '../assets/images/quetellevas.png';
import galeria8502 from '../assets/images/galeria/IMG_8502.jpg';
import galeria8503 from '../assets/images/galeria/IMG_8503.jpg';
import galeria8504 from '../assets/images/galeria/IMG_8504.jpg';
import galeria8505 from '../assets/images/galeria/IMG_8505.jpg';
import galeria8506 from '../assets/images/galeria/IMG_8506.jpg';
import galeria8507 from '../assets/images/galeria/IMG_8507.jpg';
import galeria8508 from '../assets/images/galeria/IMG_8508.jpg';
import galeria8509 from '../assets/images/galeria/IMG_8509.jpg';
import galeria8510 from '../assets/images/galeria/IMG_8510.jpg';
import galeria8511 from '../assets/images/galeria/IMG_8511.jpg';
import galeria8512 from '../assets/images/galeria/IMG_8512.jpg';
import galeria8513 from '../assets/images/galeria/IMG_8513.jpg';

const LaExperiencia = () => {
  const galeriaImagenes = [
    galeria8502,
    galeria8503,
    galeria8504,
    galeria8505,
    galeria8506,
    galeria8507,
    galeria8508,
    galeria8509,
    galeria8510,
    galeria8511,
    galeria8512,
    galeria8513,
  ];

  const [imagenActivaIdx, setImagenActivaIdx] = useState<number | null>(null);

  useEffect(() => {
    if (imagenActivaIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setImagenActivaIdx(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imagenActivaIdx]);

  useEffect(() => {
    if (imagenActivaIdx === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [imagenActivaIdx]);

  return (
    <div className="la-experiencia">
      {/* HERO - DINÁMICAS */}
      <section className="hero-experiencia">
        <div className="container">
          <h1 className="u-text-gradient-gold-90" data-aos="fade-down"><em>Dinámicas</em> que<br />viven las viajeras</h1>
          <p className="intro" data-aos="fade-up" data-aos-delay="100">Durante la experiencia podrás encontrar:</p>

          <div className="dinamicas-grid">
            <div className="dinamica-card u-bg-gradient-gold-135" data-aos="zoom-in" data-aos-delay="0">
              <h3 className="u-text-gradient-gold-90"><em>Bienestar<br />y calma</em></h3>
              <ul>
                <li>Pausas guiadas</li>
                <li>Respiración consciente</li>
                <li>Meditaciones suaves</li>
                <li>Yoga ligero</li>
                <li>Momentos de silencio</li>
              </ul>
            </div>

            <div className="dinamica-card u-bg-gradient-gold-135" data-aos="zoom-in" data-aos-delay="150">
              <h3 className="u-text-gradient-gold-90"><em>Aventura y<br />naturaleza</em></h3>
              <ul>
                <li>Navegación entre islas remotas</li>
                <li>Snorkel en aguas cristalinas</li>
                <li>Caminatas en islas desiertas</li>
                <li>Atardeceres y amaneceres en el mar</li>
                <li>Fotografía natural</li>
              </ul>
            </div>

            <div className="dinamica-card u-bg-gradient-gold-135" data-aos="zoom-in" data-aos-delay="300">
              <h3 className="u-text-gradient-gold-90"><em>Conexión y<br />comunidad</em></h3>
              <ul>
                <li>Conversaciones auténticas entre mujeres</li>
                <li>Reflexión personal</li>
                <li>Espacios para compartir y liberar</li>
                <li>Risas, historias y vínculos genuinos</li>
              </ul>
            </div>
          </div>

          <p className="nota-dinamicas" data-aos="fade-up">
            <em>Nada es obligatorio. Todo acompaña tu propio proceso.</em>
          </p>
        </div>
      </section>

      {/* POR QUÉ SAN BLAS */}
      <section className="por-que-san-blas" style={{ backgroundImage: `url(${escenarioPerfectoImg})` }}>
        <div className="container">
          <h2 data-aos="fade-right">Por qué San Blas es el escenario perfecto para transformarte</h2>
          <p data-aos="fade-right" data-aos-delay="100">
            San Blas es un paraíso natural que naturalmente inspira claridad, calma y presencia: aguas transparentes, islas vírgenes, cielos abiertos y días sin ruido que invitan a bajar el ritmo sin esfuerzo. Todo un paraíso.
          </p>
          <p data-aos="fade-right" data-aos-delay="200">
            Sus trayectos cortos y la navegación suave lo hacen ideal para mujeres que buscan seguridad y tranquilidad, mientras que su entorno intacto potencia cada momento de bienestar desde yoga al amanecer y respiración frente al mar, hasta caminatas en arena blanca y silencios que ordenan. La intimidad del archipiélago crea libertad emocional: un espacio donde las mujeres se abren, se sienten ellas mismas y conectan sin tensión. Entre snorkel, arrecifes vivos, playas remotas y la cultura Guna Yala, cada día sorprende y reconecta con lo esencial, ofreciendo un viaje suave, profundo y revitalizante.
          </p>
          <a
            href="https://calendly.com/jessica-ellasnavegan/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-san-blas u-bg-gradient-gold-135"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Hacer mi reserva
          </a>
        </div>
      </section>

      {/* QUÉ TE LLEVAS */}
      <section className="que-te-llevas">
        <div className="que-te-llevas-card u-bg-gradient-gold-135">
          <div className="que-te-llevas-imagen" data-aos="fade-right">
            <img src={queTeLlevasImg} alt="Qué te llevas" />
          </div>
          <div className="que-te-llevas-contenido" data-aos="fade-left" data-aos-delay="150">
            <h2 className="u-text-gradient-gold-90">Qué te llevas</h2>
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
          <h2 className="u-text-gradient-gold-90" data-aos="fade-down">Galería — <em>Momentos Reales</em></h2>

          <div className="galeria-grid">
            {galeriaImagenes.map((src, idx) => (
              <div
                key={src}
                className="galeria-item"
                data-aos="flip-up"
                data-aos-delay={idx * 100}
              >
                <button
                  type="button"
                  className="galeria-btn"
                  onClick={() => setImagenActivaIdx(idx)}
                  aria-label={`Ver imagen ${idx + 1} en grande`}
                >
                  <img src={src} alt={`Galería Ellas Navegan ${idx + 1}`} loading="lazy" />
                </button>
              </div>
            ))}
          </div>

          <p className="galeria-intro" data-aos="fade-up">
            Si quieres vivir esta experiencia y reconectar con tu esencia en el mar, agenda tu llamada gratuita.
          </p>
          <a
            href="https://calendly.com/jessica-ellasnavegan/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-galeria"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Agendar aquí
          </a>
        </div>
      </section>

      {imagenActivaIdx !== null && (
        <div
          className="galeria-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setImagenActivaIdx(null);
          }}
        >
          <button
            type="button"
            className="galeria-lightbox-close"
            onClick={() => setImagenActivaIdx(null)}
            aria-label="Cerrar"
          >
            ×
          </button>

          <div className="galeria-lightbox-content">
            <img
              src={galeriaImagenes[imagenActivaIdx]}
              alt={`Galería Ellas Navegan ${imagenActivaIdx + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LaExperiencia;

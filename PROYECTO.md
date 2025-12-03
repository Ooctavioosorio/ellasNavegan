# Ellas Navegan - Documentación del Proyecto

## Descripción General

**Ellas Navegan** es una página web para una agencia de viajes en barco exclusivamente para mujeres en San Blas, Panamá. El proyecto fue creado en colaboración con **Ama Studio** para el diseño visual.

---

## Stack Tecnológico

- **Framework:** React 18 con TypeScript
- **Bundler:** Vite 5
- **Routing:** React Router DOM 6
- **Estilos:** CSS puro (preparado para replicar diseños de Canva)

---

## Estructura del Proyecto

```
ellasNavegan/
├── public/
│   └── logo.png              # Logo de Ellas Navegan ✓
├── src/
│   ├── assets/
│   │   ├── fonts/            # Tipografía The Seasons (.otf)
│   │   └── images/           # Imágenes del sitio
│   │       └── hero.png      # Imagen hero ✓
│   ├── components/
│   │   ├── Navbar.tsx        # Navegación principal
│   │   ├── Navbar.css
│   │   ├── Footer.tsx        # Pie de página
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.tsx          # Página de inicio
│   │   ├── Home.css
│   │   ├── SobreNosotras.tsx # Página "Sobre Nosotras"
│   │   ├── SobreNosotras.css
│   │   ├── LaExperiencia.tsx # Página "La Experiencia"
│   │   ├── LaExperiencia.css
│   │   ├── Contacto.tsx      # Página de contacto
│   │   └── Contacto.css
│   ├── App.tsx               # Configuración de rutas
│   ├── App.css               # Estilos globales y variables CSS
│   ├── index.css             # Reset CSS base
│   └── main.tsx              # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── PROYECTO.md               # Este archivo
```

---

## Rutas Configuradas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | Home | Página principal con hero, servicios, etc. |
| `/sobre-nosotras` | SobreNosotras | Info del equipo, fundadora, barcos |
| `/la-experiencia` | LaExperiencia | Dinámicas, actividades, galería |
| `/contacto` | Contacto | Formulario y datos de contacto |

---

## Paleta de Colores Oficial

Ubicadas en `src/App.css`:

```css
:root {
  /* Dorados/Beige */
  --color-primary: #b78e51;        /* Dorado principal */
  --color-primary-light: #e6cfae;  /* Dorado claro (gradiente) */
  --color-primary-dark: #654e2b;   /* Marrón oscuro */

  /* Fondos */
  --color-bg: #f1efea;             /* Fondo principal página */
  --color-bg-light: #faf8f5;       /* Fondo claro/crema */

  /* Texto */
  --color-text: #0c3339;           /* Texto principal */
  --color-text-light: #654e2b;     /* Texto secundario */
  --color-menu-text: #96713e;      /* Texto menú navbar */
  --color-white: #fff;

  /* Gradientes */
  /* Botón CTA: linear-gradient(135deg, #b78e51, #e6cfae, #b78e51) */
  /* Texto título: linear-gradient(135deg, #b78e51, #654e2b) */
}
```

---

## Tipografías

- **Títulos (h1-h6):** The Seasons (archivos en `src/assets/fonts/`)
- **Cuerpo:** Open Sans (Google Fonts)

Variantes de The Seasons disponibles:
- Regular, Light, Bold
- Italic, Light Italic, Bold Italic

---

## Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# Abre en: http://localhost:5173

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

---

## Estado Actual del Proyecto

### ✅ Completado

- [x] Estructura base del proyecto React + Vite
- [x] Configuración de React Router
- [x] Componente Navbar con navegación funcional
- [x] Componente Footer
- [x] Página Home con todas las secciones del PDF
- [x] Página Sobre Nosotras con todas las secciones
- [x] Página La Experiencia con todas las secciones
- [x] Página Contacto con todas las secciones
- [x] Estilos base responsive
- [x] Variables CSS preparadas para personalización
- [x] Paleta de colores oficial implementada
- [x] Tipografía The Seasons integrada (títulos)
- [x] Tipografía Open Sans integrada (cuerpo)
- [x] Logo en `public/logo.png`
- [x] **Navbar estilizado según Canva** (menú 12px, gradiente en botón CTA)
- [x] **Hero section implementado según Canva** (título 50px con gradiente, subtítulo 16px)
- [x] **Sección ¿Quiénes somos?** - Grid 2 columnas, imagen + texto con gradiente
- [x] **Sección La experiencia a bordo** - 5 cards con imágenes (3+2 centradas)
- [x] **Sección San Blas, Panamá** - Fondo imagen, overlay semitransparente, título blanco itálica
- [x] **Sección ¿Para quién es este viaje?** - Grid 2 columnas, card con borde gradiente dorado
- [x] **Sección El equipo y los barcos** - Fondo imagen, 2 cards transparentes con borde beige
- [x] **Sección CTA Final** - Grid imagen + pasos, título sobre imagen, iconos circulares
- [x] **Sección Muy pronto 2026** - Fondo #00383a, card con borde beige, texto itálica

### Imágenes utilizadas en Home (`src/assets/images/`)

- `hero.png` - Hero principal
- `hero2.png` - Sección Quiénes somos
- `capitanasexpertas.png` - Card experiencia
- `actividadesdebienestar.png` - Card experiencia
- `exploracionnatural.png` - Card experiencia
- `alojamientoabordo.png` - Card experiencia
- `regalosespeciales.png` - Card experiencia
- `sanblasPanama.png` - Fondo sección San Blas
- `equiposybarcos.png` - Fondo sección Equipo y barcos
- `elmarestalisto.png` - Imagen CTA Final

### ⏳ Pendiente

- [ ] Estilizar páginas Sobre Nosotras, La Experiencia y Contacto según Canva
- [ ] Integrar widget de calendario (Calendly u otro)
- [ ] Agregar enlace real de WhatsApp
- [ ] Configurar enlaces de redes sociales
- [ ] Footer según diseño Canva

---

## Información del Negocio (del PDF)

### Datos Clave
- **Fundadora:** Jessica Milagro (15+ años navegando)
- **Ubicación:** San Blas, Panamá
- **Instagram:** @ellasnavegan
- **Email:** contacto@ellasnavegan.com

### Dos Tipos de Barco
1. **Barco Esencial** - Experiencia íntima y accesible
2. **Barco Premium** - Mayor comodidad, gastronomía con mariscos/langosta, regalos únicos

### Público Objetivo
Mujeres que buscan:
- Descanso real
- Espacio seguro y femenino
- Aventura con bienestar
- Conexión y comunidad

---

## Notas para Continuar el Desarrollo

### Para agregar imágenes:
1. Exportar imágenes de Canva como PNG/JPG
2. Colocar en `src/assets/images/`
3. Importar en componentes:
```tsx
import miImagen from '../assets/images/nombre.jpg';
// Usar: <img src={miImagen} alt="descripción" />
```

### Para cambiar colores:
1. Obtener códigos hex de Canva
2. Actualizar variables en `src/App.css`

### Para agregar tipografías:
1. Ir a Google Fonts
2. Agregar link en `index.html` (dentro de `<head>`)
3. Actualizar `font-family` en `src/index.css`

### Para el calendario de citas:
- Opción recomendada: Calendly (embed gratuito)
- Insertar iframe en `Contacto.tsx` donde dice "Widget de calendario"

---

## Contacto del Proyecto

- **Cliente:** Ellas Navegan
- **Diseño:** Ama Studio (entrega en Canva)
- **Desarrollo:** [oscar osorio]

---

*Última actualización: 2 Diciembre 2025*

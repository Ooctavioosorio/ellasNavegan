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
│   └── logo.png              # (PENDIENTE) Logo de Ellas Navegan
├── src/
│   ├── assets/
│   │   └── images/           # (PENDIENTE) Imágenes del sitio
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

## Variables CSS (Colores Actuales)

Ubicadas en `src/App.css`:

```css
:root {
  --color-primary: #b8956c;        /* Dorado/beige - color principal */
  --color-primary-dark: #a07d5a;   /* Dorado oscuro - hover */
  --color-text: #333;              /* Texto principal */
  --color-text-light: #666;        /* Texto secundario */
  --color-bg-light: #faf8f5;       /* Fondo claro/crema */
  --color-white: #fff;             /* Blanco */
}
```

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

### ⏳ Pendiente (Esperando diseños de Canva)

- [ ] Agregar logo en `public/logo.png`
- [ ] Agregar imágenes del sitio en `src/assets/images/`
- [ ] Actualizar colores según paleta de Canva
- [ ] Agregar tipografías de Google Fonts
- [ ] Reemplazar placeholders de imágenes por fotos reales
- [ ] Integrar widget de calendario (Calendly u otro)
- [ ] Agregar enlace real de WhatsApp
- [ ] Configurar enlaces de redes sociales

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
- **Desarrollo:** [Tu nombre/equipo]

---

*Última actualización: Diciembre 2024*

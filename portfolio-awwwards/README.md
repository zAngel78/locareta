# Portfolio Awwwards - UI/UX Designer

Un portfolio personal con animaciones estilo Awwwards creado con React, GSAP y Tailwind CSS.

## 🎨 Características

- ✨ **Animaciones GSAP avanzadas**: Parallax, clip-path, scroll trigger, text reveal
- 🎯 **Scroll Smoother**: Navegación fluida y suave
- 🎨 **Diseño colorido y creativo**: Gradientes vibrantes y paleta moderna
- 📱 **Totalmente responsive**: Funciona en todos los dispositivos
- ⚡ **Optimizado**: Built con Vite para máximo rendimiento

## 🚀 Secciones

1. **Hero Section** - Título animado con efectos de caracteres 3D y formas flotantes
2. **About Section** - Presentación personal con scroll effects y skills
3. **Projects Section** - Galería de proyectos con parallax y hover effects
4. **Services Section** - Servicios ofrecidos con animaciones de clip-path
5. **Testimonials Section** - Scroll horizontal con pinning de testimonios
6. **Contact Section** - Formulario de contacto con animaciones suaves
7. **Footer** - Links sociales y copyright

## 🛠️ Stack Tecnológico

- **React 18** - Framework de UI
- **GSAP 3** - Animaciones profesionales
  - ScrollTrigger
  - ScrollSmoother
  - SplitText
- **Tailwind CSS 4** - Estilos utility-first
- **Vite** - Build tool ultra rápido
- **React Responsive** - Media queries

## 📦 Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
\`\`\`

## 🎯 Uso

El proyecto está listo para personalizar. Puedes modificar:

- **Colores**: Edita `src/index.css` en la sección `@theme`
- **Contenido**: Modifica `src/constants/index.js` con tus proyectos y servicios
- **Animaciones**: Ajusta los efectos GSAP en cada componente de sección

## 📝 Personalización

### Cambiar colores

Edita las variables en `src/index.css`:

\`\`\`css
@theme {
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  --color-accent: #f59e0b;
  /* ... más colores */
}
\`\`\`

### Agregar proyectos

Edita `src/constants/index.js`:

\`\`\`javascript
export const projects = [
  {
    id: 1,
    title: "Tu Proyecto",
    category: "UI/UX Design",
    description: "Descripción del proyecto",
    color: "from-purple-500 to-pink-500",
    image: "ruta-imagen.jpg"
  },
  // ... más proyectos
];
\`\`\`

## 🎨 Animaciones Incluidas

- **Text Reveal**: Animación de caracteres con rotación 3D
- **Parallax**: Movimiento de elementos a diferentes velocidades
- **Clip-path**: Revelado de elementos con formas
- **Scroll Trigger**: Activación de animaciones al hacer scroll
- **Pinning**: Elementos fijos durante el scroll
- **Hover Effects**: Interacciones suaves con el mouse
- **Floating Shapes**: Formas flotantes animadas

## 📱 Responsive

El sitio está completamente optimizado para:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)
- 🖥️ Large Desktop (> 1536px)

## 🌟 Créditos

Inspirado en sitios ganadores de Awwwards y construido con las mejores prácticas de desarrollo web moderno.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¡Hecho con ❤️ usando GSAP + React + Tailwind!**

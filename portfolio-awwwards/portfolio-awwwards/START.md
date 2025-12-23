# 🚀 Guía de Inicio Rápido

## Para ejecutar el proyecto:

### Opción 1: Desde la carpeta del proyecto
\`\`\`bash
cd portfolio-awwwards
npm run dev
\`\`\`

### Opción 2: PowerShell (desde la raíz del workspace)
\`\`\`powershell
cd portfolio-awwwards; npm run dev
\`\`\`

El servidor se iniciará en: **http://localhost:5173**

---

## 🎨 Lo que incluye tu portfolio:

### ✅ Secciones completas:
- **Hero**: Animación de título con caracteres 3D y formas flotantes
- **About**: Tu historia con scroll effects y lista de skills
- **Projects**: 6 proyectos de ejemplo con parallax y hover effects
- **Services**: 6 servicios con animaciones de clip-path
- **Testimonials**: Scroll horizontal con 5 testimonios
- **Contact**: Formulario funcional con información de contacto
- **Footer**: Links sociales y copyright

### 🎯 Animaciones GSAP incluidas:
- ✨ Text reveal con SplitText
- 🎪 Parallax effects
- 📐 Clip-path animations
- 📌 ScrollTrigger pinning
- 🎭 Hover interactions
- 🌊 Smooth scrolling
- 🎨 Floating shapes

### 🎨 Sistema de colores colorido:
- Primary: Índigo (#6366f1)
- Secondary: Rosa (#ec4899)
- Accent: Ámbar (#f59e0b)
- Success: Verde (#10b981)
- Fondos oscuros con gradientes vibrantes

---

## 📝 Próximos pasos para personalizar:

1. **Edita tu información personal** en `src/sections/AboutSection.jsx`
2. **Agrega tus proyectos** en `src/constants/index.js`
3. **Cambia los servicios** en `src/constants/index.js`
4. **Actualiza testimonios** en `src/constants/index.js`
5. **Modifica datos de contacto** en `src/sections/ContactSection.jsx`
6. **Ajusta colores** en `src/index.css` (sección @theme)

---

## 🎨 Personalización rápida de colores:

Abre `src/index.css` y busca la sección `@theme`:

\`\`\`css
@theme {
  --color-primary: #6366f1;    /* Cambia este */
  --color-secondary: #ec4899;  /* Y este */
  --color-accent: #f59e0b;     /* Y este */
}
\`\`\`

---

## 🐛 Solución de problemas:

### Si el proyecto no inicia:
\`\`\`bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

### Si las animaciones no funcionan:
- Verifica que GSAP esté instalado: `npm list gsap`
- Revisa la consola del navegador para errores

---

## 📚 Recursos útiles:

- [GSAP Docs](https://greensock.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev/)

---

**¡Disfruta creando tu portfolio! 🎨✨**

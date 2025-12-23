# 🎨 Guía de Diseño - RealHome

## Paleta de Colores Única

### Colores Principales
- **Primary (Coral)**: `#FF6B6B` - Color principal para CTAs y acentos
- **Primary Dark**: `#EE5A52` - Variante más oscura
- **Secondary (Turquesa)**: `#4ECDC4` - Color secundario complementario
- **Accent (Amarillo)**: `#FFE66D` - Para destacar elementos
- **Accent Dark**: `#F4D35E` - Variante más oscura

### Colores de Texto
- **Text Primary**: `#2D3142` - Texto principal oscuro
- **Text Secondary**: `#656D78` - Texto secundario
- **Text Light**: `#95A3B3` - Texto claro

### Colores de Fondo
- **Background**: `#FAFBFC` - Fondo principal
- **Background Alt**: `#FFFFFF` - Fondo alternativo (blanco puro)
- **Background Dark**: `#F0F4F8` - Fondo oscuro para contraste

### Colores de Estado
- **Success**: `#06D6A0` - Verde para éxito
- **Warning**: `#F77F00` - Naranja para advertencias
- **Danger**: `#EF476F` - Rojo para peligro/error

### Bordes
- **Border Light**: `#E4E9F0` - Bordes claros
- **Border**: `#D1D8E0` - Bordes estándar

## Sombras

### Niveles de Sombra
```css
--shadow-sm: 0 2px 8px rgba(45, 49, 66, 0.08);
--shadow-md: 0 4px 16px rgba(45, 49, 66, 0.12);
--shadow-lg: 0 8px 32px rgba(45, 49, 66, 0.16);
--shadow-xl: 0 12px 48px rgba(45, 49, 66, 0.2);
```

## Radios de Borde

- **Small**: `8px`
- **Medium**: `12px`
- **Large**: `16px`
- **Extra Large**: `24px`

## Tipografía

### Fuente Principal
**Open Sans** (Google Fonts)

### Pesos de Fuente
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

### Tamaños Principales
- Títulos Hero: `42-56px`
- Títulos de Sección: `32-38px`
- Subtítulos: `24-28px`
- Texto Principal: `16-17px`
- Texto Secundario: `14-15px`
- Texto Pequeño: `12-13px`

## Animaciones y Transiciones

### Transición Principal
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Efectos Hover Comunes
- **Elevación**: `translateY(-4px)` a `translateY(-8px)`
- **Escala**: `scale(1.05)` a `scale(1.15)`
- **Sombra**: De `shadow-sm` a `shadow-lg`

### Animaciones Especiales
- **Gradiente Hero**: Animación de 15s con shift de posición
- **Popup**: Animación de aparición con fade y translateY

## Componentes Clave

### Botones

#### Botón Primario
- Gradiente coral a coral oscuro
- Padding: `16px 32px`
- Font-weight: 700-800
- Border-radius: `var(--radius-lg)`
- Hover: Elevación + sombra aumentada

#### Botón Secundario
- Borde coral con fondo transparente
- Animación de fill desde la izquierda
- Hover: Fondo se llena con color primario

### Tarjetas

#### Tarjeta de Propiedad
- Borde redondeado XL (`24px`)
- Borde de 2px en color claro
- Hover: Cambia a borde primario + elevación de 8px
- Imagen con zoom al hover (scale 1.1)
- Badge de estado con gradiente
- Precio con gradiente de texto

#### Tarjeta de Feature
- Barra superior animada (scaleX de 0 a 1)
- Icono con fondo de gradiente suave
- Hover: Icono rota 5° y aumenta escala

### Formularios

#### Inputs
- Padding: `14-16px`
- Borde: 2px solid
- Background: Color de fondo claro
- Focus: Borde primario + ring de 4px con opacidad

### Header
- Backdrop blur para efecto glass
- Navegación con underline animado
- Logo con hover scale

### Footer
- Fondo oscuro (`text-primary`)
- Enlaces con hover opacity
- Redes sociales con círculos hover

## Páginas Especiales

### Página de Búsqueda
- Sidebar sticky con filtros
- Botones de filtro tipo pill
- Grid responsive (1 → 2 → 3 columnas)

### Página de Mapa
- Marcadores con precios
- Popup animado al seleccionar
- Sidebar con lista de propiedades sincronizada

### Página de Detalle
- Galería de imágenes 2:1
- Stats en grid de 4 columnas
- Features con checkmarks circulares
- Sidebar sticky con formulario de contacto

## Principios de Diseño

1. **Gradientes**: Usados estratégicamente en CTAs, badges y fondos
2. **Elevación**: Jerarquía visual mediante sombras y hover states
3. **Micro-animaciones**: Feedback visual en todas las interacciones
4. **Espaciado Generoso**: Padding y margins amplios para respiración
5. **Bordes Redondeados**: Uso consistente de radius variables
6. **Contraste de Color**: Paleta vibrante pero profesional
7. **Tipografía Bold**: Pesos de fuente altos (800-900) para impacto

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: ≥ 1280px

## Tokens de Diseño

Todas las variables CSS están centralizadas en `:root` para fácil personalización y consistencia en todo el proyecto.

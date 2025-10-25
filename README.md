# 🌐 Desafío 3 - (RESTAURANTE DE COMIDA ITALIANA "LA TOSCANA")

## 📋 Descripción del Proyecto

Portfolio personal responsivo desarrollado como parte del **Desafío 3 - LME**, implementando las mejores prácticas de diseño web moderno y responsive design.

## ✅ Requisitos Cumplidos

### 1. Estructura Básica (HTML)

#### ✔️ HTML5 Semántico
- `<header>` - Encabezado con navegación
- `<nav>` - Menú de navegación responsivo
- `<main>` - Contenido principal
- `<section>` - Secciones de contenido (Inicio, Sobre Mí, Proyectos, Servicios, Contacto)
- `<footer>` - Pie de página

#### ✔️ Metaetiquetas
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Portfolio profesional...">
<meta name="keywords" content="portfolio, diseño web...">
```

#### ✔️ Menú Responsivo
- **Tipo:** Menú Toggle (Guía 12, Ejercicio 2)
- Implementado con componente `navbar` de Bootstrap
- Colapsa en dispositivos móviles
- Botón hamburguesa para activar/desactivar

### 2. Estilos (CSS)

#### ✔️ Media Queries - 3 Breakpoints (Guía 11)

**Móviles (max-width: 480px):**
```css
@media screen and (max-width: 480px) {
    /* Tipografía reducida */
    /* Cards en columna única */
    /* Padding reducido */
    /* Botones más pequeños */
}
```

**Tablets (min-width: 768px):**
```css
@media screen and (min-width: 768px) {
    /* Cards en grid 2 columnas */
    /* Navegación expandida */
    /* Mejor espaciado */
}
```

**Desktop (min-width: 1024px):**
```css
@media screen and (min-width: 1024px) {
    /* Cards en grid 3 columnas */
    /* Servicios en 4 columnas */
    /* Efectos hover avanzados */
    /* Hero full screen */
}
```

#### ✔️ Imágenes Responsivas
- Uso de `max-width: 100%` en CSS
- Clase `img-fluid` de Bootstrap
- `object-fit: cover` para cards

#### ✔️ Flexbox y Grid CSS
- Flexbox para layouts complejos
- CSS Grid combinado con Bootstrap
- Sistema de columnas responsivo

### 3. Bootstrap (Guía 13)

#### ✔️ Sistema de 12 Columnas
```html
<!-- Ejemplo de implementación -->
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <!-- Contenido -->
        </div>
    </div>
</div>
```

#### ✔️ Clases Utilizadas
- `container` y `container-fluid`
- `row` y `col-*`
- `col-sm-*`, `col-md-*`, `col-lg-*`
- `order-*` para reordenamiento
- `offset-*` para espaciado

#### ✔️ Componentes Bootstrap
- **Navbar:** Navegación responsiva
- **Cards:** Proyectos y servicios
- **Buttons:** Botones estilizados
- **Forms:** Formulario de contacto
- **Badges:** Etiquetas de categorías
- **Icons:** Bootstrap Icons

#### ✔️ Reordenamiento de Columnas
```html
<div class="col-12 col-md-6 order-2 order-md-1">
    <!-- Cambia orden en diferentes tamaños -->
</div>
```

### 4. Contenido Dinámico

#### ✔️ Sección con Cards
- **6 Cards de Proyectos** con:
  - Imágenes responsivas
  - Títulos y descripciones
  - Badges de categorías
  - Botones de acción
  - Efectos hover

#### ✔️ Formulario Validado
- Campos: Nombre, Email, Teléfono, Asunto, Mensaje
- Validación HTML5
- Validación JavaScript en tiempo real
- Clases Bootstrap: `form-control`, `form-select`
- Mensajes de error personalizados
- Feedback visual (is-valid, is-invalid)

## 🎨 Características Adicionales

### Diseño Visual
- ✨ Gradientes modernos
- 🎭 Animaciones suaves
- 💫 Efectos hover
- 🌈 Paleta de colores profesional
- 📱 100% Responsivo

### Funcionalidades JavaScript
- ✅ Validación de formulario
- 🔝 Botón Scroll to Top
- 🎯 Navegación smooth scroll
- 📍 Active navigation on scroll
- 🎬 Animaciones de entrada
- 💾 Prevención de envío múltiple

### Secciones del Sitio

1. **Hero/Inicio**
   - Presentación impactante
   - Imagen flotante animada
   - Call-to-action buttons

2. **Sobre Mí**
   - Descripción personal
   - Skills badges
   - Grid de habilidades

3. **Proyectos**
   - 6 cards de proyectos
   - Imágenes de alta calidad
   - Categorización con badges

4. **Servicios**
   - 4 servicios destacados
   - Iconos representativos
   - Efectos hover

5. **Contacto**
   - Formulario completo
   - Validación en tiempo real
   - Información de contacto
   - Iconos de redes sociales

## 🚀 Tecnologías Utilizadas

- **HTML5:** Estructura semántica
- **CSS3:** Estilos y animaciones
- **Bootstrap 5.3:** Framework responsive
- **JavaScript:** Interactividad
- **Bootstrap Icons:** Iconografía

## 📱 Compatibilidad

### Dispositivos
- ✅ Móviles (320px - 480px)
- ✅ Tablets (768px - 1024px)
- ✅ Desktop (1024px+)
- ✅ Extra Large (1400px+)

### Navegadores
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

## 📂 Estructura de Archivos

```
Desafio3-LME/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS con media queries
├── script.js           # JavaScript para interactividad
└── README.md           # Documentación del proyecto
```

## 🎯 Cumplimiento de Guías

### Guía 11 - Media Queries
- ✅ 3 breakpoints implementados
- ✅ Imágenes responsivas
- ✅ Tipografía adaptativa
- ✅ Layouts fluidos

### Guía 12 - Patrones de Navegación
- ✅ Menú Toggle implementado
- ✅ Navegación colapsable
- ✅ Smooth scroll
- ✅ Active states

### Guía 13 - Bootstrap
- ✅ Sistema de 12 columnas
- ✅ Componentes utilizados
- ✅ Clases responsivas
- ✅ Reordenamiento de columnas

## 💡 Comentarios en el Código

Todos los elementos importantes están comentados indicando:
- Uso de HTML5 semántico
- Media queries aplicados
- Sistema de grid de Bootstrap
- Componentes de Bootstrap
- Patrones de navegación

Ejemplo:
```html
<!-- ========== SECTION: Proyectos con Cards (Guía 13) ========== -->
<!-- Media queries aplicados en CSS (Guía 11) -->
<!-- Sistema de 12 columnas Bootstrap -->
```

## 🎨 Paleta de Colores

```css
--primary-color: #0d6efd;    /* Azul principal */
--secondary-color: #6c757d;   /* Gris */
--dark-color: #212529;        /* Negro oscuro */
--light-color: #f8f9fa;       /* Blanco suave */
```

## ⚡ Cómo Usar

1. Abrir `index.html` en un navegador
2. Navegar por las diferentes secciones
3. Probar el formulario de contacto
4. Redimensionar la ventana para ver la responsividad

## 📝 Notas de Desarrollo

- Todas las imágenes son de alta calidad desde Unsplash
- Los CDN de Bootstrap están vinculados externamente
- El código está optimizado y comentado
- Se incluyen animaciones CSS para mejor UX
- Validación completa del formulario

## 👨‍💻 Autor

Desarrollado por Katherine Alexandra Pinto Vila

---

**Fecha de Desarrollo:** Octubre 2025  
**Versión:** 1.0.0  
**Estado:** ✅ Completo


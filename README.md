# 🌐 Desafío 3 – Restaurante de Comida Italiana "La Toscana"

Proyecto responsivo desarrollado como parte del **Desafío 3 - LME**, aplicando buenas prácticas de diseño web moderno, responsive design y componentes dinámicos.

---

## 📋 Descripción del Proyecto

Sitio web tipo portfolio para el restaurante ficticio "La Toscana", con diseño responsivo, validación de formularios, navegación interactiva y estructura semántica. Implementado con HTML5, CSS3, Bootstrap 5.3 y JavaScript.

---

## ✅ Requisitos Cumplidos

### 1. Estructura HTML5 Semántica

- `<header>` – Encabezado con navegación
- `<nav>` – Menú responsivo tipo toggle
- `<main>` – Contenido principal
- `<section>` – Secciones: Inicio, Sobre Mí, Proyectos, Servicios, Contacto
- `<footer>` – Pie de página
- Metaetiquetas para responsividad y SEO

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Portfolio profesional...">
<meta name="keywords" content="portfolio, diseño web...">
```

---

### 2. Estilos CSS y Media Queries

- 3 breakpoints implementados (Guía 11):
  - Móviles: `max-width: 480px`
  - Tablets: `min-width: 768px`
  - Desktop: `min-width: 1024px`
- Imágenes responsivas (`max-width: 100%`, `img-fluid`)
- Uso de Flexbox y Grid CSS
- Efectos hover y animaciones suaves

---

### 3. Sistema Bootstrap (Guía 13)

- Sistema de 12 columnas (`col-12 col-md-6 col-lg-4`)
- Clases utilizadas: `container`, `row`, `col-*`, `order-*`, `offset-*`
- Componentes:
  - Navbar responsiva
  - Cards de proyectos y servicios
  - Botones estilizados
  - Formulario validado
  - Badges de categorías
  - Bootstrap Icons

---

### 4. Contenido Dinámico

- Sección de proyectos con 6 cards:
  - Imagen, título, descripción, badge, botón y hover
- Formulario de contacto:
  - Validación HTML5 + JavaScript en tiempo real
  - Feedback visual (`is-valid`, `is-invalid`)
  - Campos: Nombre, Email, Teléfono, Asunto, Mensaje

---

## 🎨 Características Adicionales

### Diseño Visual

- Gradientes modernos
- Animaciones suaves
- Paleta de colores profesional
- 100% responsivo

### Funcionalidades JavaScript

- Validación de formulario
- Botón "Scroll to Top"
- Navegación con smooth scroll
- Activación de secciones al hacer scroll
- Animaciones de entrada
- Prevención de envío múltiple

---

## 📁 Estructura del Proyecto

```
Desafio3-LME/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS con media queries
├── script.js           # JavaScript para interactividad
└── README.md           # Documentación del proyecto
```

---

## 🚀 Tecnologías Utilizadas

- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript
- Bootstrap Icons

---

## 📱 Compatibilidad

### Dispositivos

- Móviles (320px – 480px)
- Tablets (768px – 1024px)
- Desktop (1024px+)
- Extra Large (1400px+)

### Navegadores

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

---

## 🧪 Cómo Probar el Proyecto

1. Abrir `index.html` en cualquier navegador moderno
2. Navegar por las secciones del sitio
3. Probar el formulario de contacto con validaciones
4. Redimensionar la ventana para verificar responsividad

---

## 📘 Cumplimiento de Guías

| Guía | Tema                  | Implementación Destacada                      |
|------|-----------------------|-----------------------------------------------|
| 11   | Media Queries         | 3 breakpoints, imágenes responsivas, tipografía adaptativa |
| 12   | Patrones de Navegación| Menú toggle, navegación colapsable, smooth scroll |
| 13   | Bootstrap             | Sistema de 12 columnas, componentes, reordenamiento |

---

## 💬 Comentarios en el Código

El código incluye comentarios explicativos en HTML, CSS y JS para facilitar la comprensión:

```html
<!-- ========== SECTION: Proyectos con Cards (Guía 13) ========== -->
<!-- Media queries aplicados en CSS (Guía 11) -->
<!-- Sistema de 12 columnas Bootstrap -->
```

---

## 🎨 Paleta de Colores

```css
--primary-color: #0d6efd;    /* Azul principal */
--secondary-color: #6c757d;  /* Gris */
--dark-color: #212529;       /* Negro oscuro */
--light-color: #f8f9fa;      /* Blanco suave */
```

---

## 📝 Notas de Desarrollo

- Imágenes de alta calidad desde Unsplash
- Bootstrap vinculado vía CDN
- Código optimizado y comentado
- Animaciones CSS para mejorar experiencia de usuario
- Validación completa del formulario

---

## 👩‍💻 Autor

Desarrollado por **Katherine Alexandra Pinto Vila**  
📅 Octubre 2025 – Versión 1.0.0 – Estado: ✅ Completo

---

¿Quieres que te ayude a preparar la portada del repositorio o el texto para el commit inicial? También puedo ayudarte a redactar el mensaje para subirlo a GitHub.

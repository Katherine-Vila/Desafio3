// ========================================
// SCROLL TO TOP BUTTON
// ========================================

const scrollToTopBtn = document.getElementById('scrollToTop');

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Funcionalidad del botón
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validación de Bootstrap
    if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
    }
    
    // Si el formulario es válido
    contactForm.classList.add('was-validated');
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const tipoPedido = document.getElementById('tipoPedido').value;
    const horario = document.getElementById('horario').value;
    const pedido = document.getElementById('pedido').value;
    const comentarios = document.getElementById('comentarios').value;
    
    // Crear mensaje para WhatsApp
    const mensaje = crearMensajeWhatsApp(nombre, telefono, direccion, tipoPedido, horario, pedido, comentarios);
    
    // Número de WhatsApp del restaurante (cambiar por el número real)
    const numeroWhatsApp = '50372345678'; // Formato: código país + número
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Mostrar mensaje de éxito
    showSuccessMessage(nombre);
    
    // Limpiar formulario
    contactForm.reset();
    contactForm.classList.remove('was-validated');
    
    console.log('Pedido enviado a WhatsApp');
});

// Función para crear mensaje de WhatsApp
function crearMensajeWhatsApp(nombre, telefono, direccion, tipoPedido, horario, pedido, comentarios) {
    let mensaje = `🇸🇻 *PEDIDO - SABORES DE MI TIERRA* 🇸🇻\n\n`;
    mensaje += `👤 *Nombre:* ${nombre}\n`;
    mensaje += `📞 *Teléfono:* ${telefono}\n`;
    mensaje += `📍 *Dirección:* ${direccion}\n`;
    mensaje += `🛵 *Tipo:* ${obtenerTipoPedido(tipoPedido)}\n`;
    mensaje += `⏰ *Horario:* ${horario}\n\n`;
    mensaje += `🍽️ *PEDIDO:*\n${pedido}\n\n`;
    
    if (comentarios) {
        mensaje += `💬 *Comentarios:*\n${comentarios}\n\n`;
    }
    
    mensaje += `¡Gracias por tu preferencia! 😊`;
    
    return mensaje;
}

function obtenerTipoPedido(tipo) {
    const tipos = {
        'delivery': 'Entrega a Domicilio 🛵',
        'pickup': 'Recoger en Local 🏪',
        'comer': 'Comer en Restaurante 🍽️'
    };
    return tipos[tipo] || tipo;
}

// Función para mostrar mensaje de éxito
function showSuccessMessage(nombre) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show mt-4';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        <div class="d-flex align-items-start">
            <i class="bi bi-check-circle-fill fs-3 me-3 text-success"></i>
            <div class="flex-grow-1">
                <h4 class="alert-heading">¡Pedido Enviado! 🎉</h4>
                <p class="mb-2"><strong>${nombre}</strong>, tu pedido ha sido enviado por WhatsApp.</p>
                <hr>
                <p class="mb-0 small">
                    <i class="bi bi-whatsapp"></i> 
                    En breve te contactaremos para confirmar tu pedido y tiempo de entrega.
                    <br>
                    <strong>Tiempo estimado:</strong> 30-45 minutos
                </p>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const formWrapper = document.querySelector('.contact-form-wrapper');
    formWrapper.parentNode.insertBefore(alertDiv, formWrapper.nextSibling);
    
    // Scroll al mensaje
    setTimeout(() => {
        alertDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 10000);
}

// ========================================
// NAVEGACIÓN SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') {
            return;
        }
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// ========================================
// ACTIVE NAVIGATION ON SCROLL
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// ========================================
// ANIMACIÓN DE ENTRADA PARA ELEMENTOS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-card, .specialty-card, .feature-box, .contact-info-card');
    animatedElements.forEach(el => observer.observe(el));
});

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================

const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// ========================================
// VALIDACIÓN EN TIEMPO REAL
// ========================================

const formInputs = contactForm.querySelectorAll('input, textarea, select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() !== '') {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        }
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid') || input.classList.contains('is-valid')) {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        }
    });
});

// ========================================
// BOTONES DE ORDENAR
// ========================================

const orderButtons = document.querySelectorAll('.btn-order');

orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const card = this.closest('.menu-card');
        const title = card.querySelector('.menu-card-title').textContent;
        const price = card.querySelector('.menu-card-price').textContent;
        
        // Mostrar notificación
        showOrderNotification(title, price);
        
        // Agregar al pedido (opcional: guardar en localStorage)
        agregarAlPedido(title, price);
        
        // Animación del botón
        this.innerHTML = '<i class="bi bi-check2"></i> Agregado';
        this.style.background = '#28a745';
        
        setTimeout(() => {
            this.innerHTML = 'Ordenar';
            this.style.background = '';
        }, 2000);
    });
});

// Variable para guardar el pedido actual
let pedidoActual = [];

function agregarAlPedido(platillo, precio) {
    pedidoActual.push({ platillo, precio });
    console.log('Pedido actual:', pedidoActual);
    
    // Guardar en localStorage
    localStorage.setItem('pedido', JSON.stringify(pedidoActual));
}

function showOrderNotification(title, price) {
    const toast = document.createElement('div');
    toast.className = 'position-fixed bottom-0 end-0 p-3';
    toast.style.zIndex = '9999';
    toast.innerHTML = `
        <div class="toast show" role="alert">
            <div class="toast-header bg-success text-white">
                <i class="bi bi-cart-check-fill me-2"></i>
                <strong class="me-auto">Agregado al pedido</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
                <strong>${title}</strong><br>
                Precio: ${price}
                <hr class="my-2">
                <small>Total de items: ${pedidoActual.length}</small>
            </div>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ========================================
// CARGAR PEDIDO AL INICIAR
// ========================================

window.addEventListener('load', () => {
    // Cargar pedido guardado
    const pedidoGuardado = localStorage.getItem('pedido');
    if (pedidoGuardado) {
        pedidoActual = JSON.parse(pedidoGuardado);
        console.log('Pedido cargado:', pedidoActual);
    }
    
    // Animar el hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease-out';
            heroContent.style.opacity = '1';
        }, 100);
    }
});

// ========================================
// TOOLTIPS BOOTSTRAP
// ========================================

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// ========================================
// RESPONSIVE UTILITIES
// ========================================

function isMobile() {
    return window.innerWidth <= 768;
}

function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
}

function isDesktop() {
    return window.innerWidth > 1024;
}

// ========================================
// PARALLAX EFFECT (Solo Desktop)
// ========================================

if (isDesktop()) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero && scrolled < hero.offsetHeight) {
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });
}

// ========================================
// BOTÓN DE LLAMADA RÁPIDA
// ========================================

// Crear botón flotante de WhatsApp
const whatsappBtn = document.createElement('a');
whatsappBtn.href = 'https://wa.me/50372345678?text=Hola%2C%20quiero%20hacer%20un%20pedido';
whatsappBtn.target = '_blank';
whatsappBtn.className = 'whatsapp-float';
whatsappBtn.innerHTML = '<i class="bi bi-whatsapp"></i>';
whatsappBtn.title = 'Ordenar por WhatsApp';
document.body.appendChild(whatsappBtn);

// Agregar estilos para el botón flotante
const style = document.createElement('style');
style.textContent = `
    .whatsapp-float {
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: #25D366;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
        z-index: 998;
        transition: all 0.3s ease;
        animation: pulse-whatsapp 2s infinite;
    }
    
    .whatsapp-float:hover {
        background: #128C7E;
        transform: scale(1.1);
        box-shadow: 0 6px 30px rgba(37, 211, 102, 0.7);
    }
    
    @keyframes pulse-whatsapp {
        0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5); }
        50% { box-shadow: 0 4px 30px rgba(37, 211, 102, 0.8); }
    }
    
    @media (max-width: 480px) {
        .whatsapp-float {
            width: 50px;
            height: 50px;
            bottom: 80px;
            right: 20px;
            font-size: 1.5rem;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// CALCULAR TOTAL DEL PEDIDO
// ========================================

function calcularTotal() {
    let total = 0;
    pedidoActual.forEach(item => {
        // Extraer el número del precio (ej: "$4.50" -> 4.50)
        const precio = parseFloat(item.precio.replace('$', ''));
        total += precio;
    });
    return total.toFixed(2);
}

// ========================================
// LIMPIAR PEDIDO
// ========================================

function limpiarPedido() {
    pedidoActual = [];
    localStorage.removeItem('pedido');
    console.log('Pedido limpiado');
}

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c🇸🇻 ¡Bienvenido a Sabores de Mi Tierra! 🇸🇻', 'color: #0047AB; font-size: 24px; font-weight: bold;');
console.log('%c🍽️ El auténtico sabor de El Salvador', 'color: #FFB612; font-size: 18px; font-weight: bold;');
console.log('%cDesafío 3 - LME | HTML5 + CSS3 + Bootstrap 5 + JavaScript', 'color: #2C3E50; font-size: 12px;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #666;');
console.log('%cCaracterísticas Técnicas:', 'color: #0047AB; font-weight: bold;');
console.log('✓ HTML5 Semántico');
console.log('✓ 3 Media Queries (Móvil, Tablet, Desktop)');
console.log('✓ Sistema Grid Bootstrap 12 columnas');
console.log('✓ Formulario con validación + WhatsApp');
console.log('✓ 6 Cards de menú responsivas');
console.log('✓ Precios en dólares ($) - El Salvador');
console.log('✓ Integración con WhatsApp para pedidos');

// ========================================
// RESIZE HANDLER
// ========================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Ventana redimensionada:', window.innerWidth, 'x', window.innerHeight);
        
        if (isDesktop()) {
            console.log('Modo Desktop');
        } else if (isTablet()) {
            console.log('Modo Tablet');
        } else {
            console.log('Modo Móvil');
        }
    }, 250);
});

// ========================================
// PREVENIR ENVÍO MÚLTIPLE
// ========================================

let formSubmitting = false;

contactForm.addEventListener('submit', function() {
    if (formSubmitting) {
        return false;
    }
    formSubmitting = true;
    
    setTimeout(() => {
        formSubmitting = false;
    }, 3000);
});

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sabores de Mi Tierra - Sitio cargado correctamente');
    console.log('Modo actual:', isMobile() ? 'Móvil' : isTablet() ? 'Tablet' : 'Desktop');
    console.log('Pedido actual tiene', pedidoActual.length, 'items');
    
    if (typeof bootstrap !== 'undefined') {
        console.log('Bootstrap 5 cargado correctamente');
    }
});

// ========================================
// FUNCIONES DE AYUDA
// ========================================

// Función para formatear teléfono salvadoreño
function formatearTelefono(telefono) {
    // Formato: 7234-5678 o 2234-5678
    return telefono.replace(/(\d{4})(\d{4})/, '$1-$2');
}

// Función para validar teléfono salvadoreño
function validarTelefonoSV(telefono) {
    const regex = /^[27]\d{3}-?\d{4}$/;
    return regex.test(telefono);
}

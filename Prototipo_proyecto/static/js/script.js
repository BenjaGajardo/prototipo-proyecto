document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Funcionalidad Sticky Header ---
    const header = document.getElementById('header-sticky');
    if (header) {
        window.addEventListener('scroll', function() {
            // Si el scroll supera un cierto punto (ej: 100px), añade una clase "sticky"
            if (window.scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    // Nota: El CSS para la clase 'sticky' debería estar definido para cambiar el aspecto.

    
    // --- 2. Funcionalidad del Menú Móvil (Offcanvas) ---
    const sidebarToggle = document.querySelector('.sidebar__toggle');
    const offcanvasArea = document.querySelector('.fix-area');
    const offcanvasClose = document.querySelector('.offcanvas__close button');
    const offcanvasOverlay = document.querySelector('.offcanvas__overlay');

    // Abre el menú lateral
    if (sidebarToggle && offcanvasArea && offcanvasOverlay) {
        sidebarToggle.addEventListener('click', function() {
            // Se asume que la clase 'active' muestra el menú offcanvas
            offcanvasArea.classList.add('active');
            offcanvasOverlay.classList.add('active');
        });
    }

    // Cierra el menú lateral (botón de cerrar)
    if (offcanvasClose && offcanvasArea && offcanvasOverlay) {
        offcanvasClose.addEventListener('click', function() {
            offcanvasArea.classList.remove('active');
            offcanvasOverlay.classList.remove('active');
        });
    }
    
    // Cierra el menú lateral (haciendo clic en el overlay/fondo oscuro)
    if (offcanvasOverlay && offcanvasArea) {
        offcanvasOverlay.addEventListener('click', function() {
            offcanvasArea.classList.remove('active');
            offcanvasOverlay.classList.remove('active');
        });
    }

});
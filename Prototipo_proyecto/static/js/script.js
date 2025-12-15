document.addEventListener('DOMContentLoaded', function() {
    // Inicializar WOW.js
    new WOW().init();

    // --- Funcionalidad Sticky Header (lo que ya teníamos) ---
    const header = document.getElementById('header-sticky');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    // --- Funcionalidad del Menú Móvil (Offcanvas) ---
    const sidebarToggle = document.querySelector('.sidebar__toggle');
    const offcanvasArea = document.querySelector('.fix-area');
    const offcanvasClose = document.querySelector('.offcanvas__close button');
    const offcanvasOverlay = document.querySelector('.offcanvas__overlay');

    if (sidebarToggle && offcanvasArea && offcanvasOverlay) {
        sidebarToggle.addEventListener('click', function() {
            offcanvasArea.classList.add('active');
            offcanvasOverlay.classList.add('active');
        });
    }

    if (offcanvasClose && offcanvasArea && offcanvasOverlay) {
        offcanvasClose.addEventListener('click', function() {
            offcanvasArea.classList.remove('active');
            offcanvasOverlay.classList.remove('active');
        });
    }

    if (offcanvasOverlay && offcanvasArea) {
        offcanvasOverlay.addEventListener('click', function() {
            offcanvasArea.classList.remove('active');
            offcanvasOverlay.classList.remove('active');
        });
    }
});
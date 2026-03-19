// Funcionalidad para el menú hamburguesa en mobile
        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');
        const links = document.querySelectorAll('.nav-links li a');

        // Alternar menú al hacer clic en el botón
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú automáticamente al hacer clic en un enlace (en versión móvil)
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 1024) {
                    navLinks.classList.remove('active');
                }
            });
        });
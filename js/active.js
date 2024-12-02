// Obtén todos los enlaces de la barra de navegación
const links = document.querySelectorAll('.navbar a');

// Agrega un evento de clic a cada enlace
links.forEach(link => {
    link.addEventListener('click', function() {
        // Elimina la clase 'active' de todos los enlaces
        links.forEach(link => link.classList.remove('active'));

        // Agrega la clase 'active' al enlace clickeado
        this.classList.add('active');
    });
});

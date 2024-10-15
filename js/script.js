// Seleccionamos el botón de scroll
const scrollButton = document.getElementById('scrollButton');

// Inicializamos un contador para rastrear la sección actual
let currentSection = 0;

// Array de IDs de secciones en el orden para el scroll hacia abajo
const sections = ['intro', 'nosotros', 'socios', 'reprocann'];

// Añadimos un evento de clic al botón
scrollButton.addEventListener('click', function () {
    // Si hay más secciones para desplazarse
    if (currentSection < sections.length) {
        // Hacemos scroll suave hacia la sección actual
        document.getElementById(sections[currentSection]).scrollIntoView({ behavior: 'smooth' });
        // Aumentamos el contador para la próxima sección
        currentSection++;
    } else {
        // Si hemos llegado al final, volvemos a la sección de inicio y reiniciamos el contador
        document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
        currentSection = 0; // Reiniciamos el contador
    }
});
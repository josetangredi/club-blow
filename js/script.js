
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});

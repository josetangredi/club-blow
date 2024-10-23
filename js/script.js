const hamburger = document.getElementById('hamburger');
const menuList = document.getElementById('menu-list');

hamburger.addEventListener('click', () => {
    const isVisible = menuList.style.display === 'flex';
    menuList.style.display = isVisible ? 'none' : 'flex';
});

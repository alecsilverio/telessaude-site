// Menu mobile
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Fecha menu ao clicar em link
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
});

// Destaca link ativo ao rolar
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
        current = section.getAttribute('id');
    }
    });
    navLinks.forEach(link => {
    link.style.color =
        link.getAttribute('href') === '#' + current
        ? '#e07b2a'
        : 'rgba(255,255,255,0.85)';
    });
});

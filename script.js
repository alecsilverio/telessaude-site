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

// GIF jacaré: mostra só uma vez por carregamento da página
window.addEventListener('load', function() {
    const jacareGif = document.querySelector('img[src*="jacare.gif"]');
    if (jacareGif) {
        // Esconde o GIF após 6 segundos (ajuste pelo tempo do seu GIF)
        setTimeout(function() {
            jacareGif.style.display = 'none';
        }, 6000); // 6000ms = 6 segundos
    }
});

// Loader jacaré: aparece primeiro, depois some e revela o site
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    // Some após 2,5 segundos (rápido!)
    setTimeout(function() {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 5000);
});


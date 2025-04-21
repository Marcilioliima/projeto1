// Efeito de scroll suave para os links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Animação de digitação (opcional)
const tituloHero = document.querySelector('.hero-content h1');
const textos = ["Desenvolvedor Front-End", "UI/UX Enthusiast", "React Lover"];
let count = 0;
let index = 0;
let textoAtual = '';
let isDeleting = false;

function typeWriter() {
    const speed = 100;
    const fullText = textos[count];

    if (isDeleting) {
        textoAtual = fullText.substring(0, textoAtual.length - 1);
    } else {
        textoAtual = fullText.substring(0, textoAtual.length + 1);
    }

    tituloHero.innerHTML = `Olá, eu sou <span class="destaque">Seu Nome</span><br>${textoAtual}<span class="cursor">|</span>`;

    if (!isDeleting && textoAtual === fullText) {
        isDeleting = true;
        setTimeout(typeWriter, 1000);
    } else if (isDeleting && textoAtual === '') {
        isDeleting = false;
        count = (count + 1) % textos.length;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(typeWriter, speed);
    }
}

// Inicia a animação após 1s
setTimeout(typeWriter, 1000);
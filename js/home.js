
document.addEventListener('DOMContentLoaded', function() {
    // Set active menu item based on current page
    const currentLocation = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Mobile Menu Toggle
    const openMenu = document.getElementById('openmenu');
    const closeMenu = document.getElementById('close');
    const navMenu = document.querySelector('nav ul');

    openMenu.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    // Simple Carousel Function
    const carouselImages = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;

    function nextSlide() {
        carouselImages[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % carouselImages.length;
        carouselImages[currentSlide].classList.add('active');
    }

    // Automatic slide change every 5 seconds
    setInterval(nextSlide, 5000);
});

// Função para exibir a notícia publicada (apenas a mais recente)
document.addEventListener("DOMContentLoaded", () => {
    const secaoNoticias = document.getElementById("noticias-index");

    const carregarNoticiasIndex = () => {
        const noticiasSalvas = JSON.parse(localStorage.getItem("noticias")) || [];

        if (noticiasSalvas.length === 0) {
            secaoNoticias.innerHTML = `<p>Não há notícias publicadas.</p>`;
            return;
        }

        noticiasSalvas.forEach(({ titulo, conteudo }) => {
            const noticiaCard = document.createElement("div");
            noticiaCard.classList.add("noticia-card");

            noticiaCard.innerHTML = `
                <h3 class="noticia-header">${titulo}</h3>
                <p class="noticia-content">${conteudo}</p>
            `;

            secaoNoticias.appendChild(noticiaCard);
        });
    };

    carregarNoticiasIndex();
});


document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim(); 
    if (query) {
        console.log('Search query:', query);
    } else {
        console.log('Search query is empty');
    }
});

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('open');  
});

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

next.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Initialize the first slide
showSlide(currentSlide);

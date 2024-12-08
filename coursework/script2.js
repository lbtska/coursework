let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;

    slides.style.transform = `translateX(${offset}%)`;
}

const prevButton = document.getElementById('prev');
prevButton.addEventListener('click', () => {
    moveSlide(-1)
});
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
    moveSlide(1)
});
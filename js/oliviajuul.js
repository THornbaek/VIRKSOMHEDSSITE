let currentIndex = 0;

function changeSlide(n) {
    currentIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.querySelector('.carousel');
    if (currentIndex < 0) {
        currentIndex = slides.children.length - 1;
    } else if (currentIndex >= slides.children.length) {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;

    showSlides();
}
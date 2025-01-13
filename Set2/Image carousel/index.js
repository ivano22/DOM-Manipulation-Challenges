/***
 * Create an image carousel with "Next" and "Previous" buttons to
navigate through a series of images. 
 * 
 * 
 */
    document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to update carousel position
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listener for next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    // Event listener for previous button
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    //  keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }
    });
});
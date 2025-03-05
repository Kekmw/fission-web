// Image sliding
let currentIndex = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Function to update slide position
function updateSlidePosition() {
    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

// Event listeners for manual navigation
document.getElementById('next').onclick = nextSlide;
document.getElementById('prev').onclick = prevSlide;

// Automatic slide change every 5 seconds
const autoSlideInterval = setInterval(nextSlide, 5000);


// Dropdown
function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block"; // Show answer
    } else {
        answerElement.style.display = "none"; // Hide answer
    }
}


// Lightbox
function openLightbox(imageSrc) {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc; // Set the source of the lightbox image
    lightboxModal.style.display = 'flex'; // Show the lightbox modal
}

function closeLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    lightboxModal.style.display = 'none'; // Hide the lightbox modal
}
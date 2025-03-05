// Image sliding
let currentIndex = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.getElementById('next').onclick = function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
};

document.getElementById('prev').onclick = function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
};

function updateSlidePosition() {
    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}


// Dropdown
function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block"; // Show answer
    } else {
        answerElement.style.display = "none"; // Hide answer
    }
}
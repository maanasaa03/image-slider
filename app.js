let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Function to move to the next slide
function moveToNextSlide() {
    let items = document.querySelectorAll('.slide');
    document.querySelector('.slides').appendChild(items[0]);
}

// Function to move to the previous slide
function moveToPrevSlide() {
    let items = document.querySelectorAll('.slide');
    document.querySelector('.slides').prepend(items[items.length - 1]);
}

// Event listeners for manual navigation
next.addEventListener('click', moveToNextSlide);
prev.addEventListener('click', moveToPrevSlide);

// Auto-slide functionality
let autoSlideInterval = setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds

// Optional: Pause auto-slide when the user interacts with navigation buttons
next.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
prev.addEventListener('mouseover', () => clearInterval(autoSlideInterval));

// Optional: Resume auto-slide when the user stops interacting
next.addEventListener('mouseout', () => autoSlideInterval = setInterval(moveToNextSlide, 3000));
prev.addEventListener('mouseout', () => autoSlideInterval = setInterval(moveToNextSlide, 3000));


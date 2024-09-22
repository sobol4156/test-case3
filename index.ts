// We get all the slider elements
const images = document.querySelectorAll('.slider-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imageCounter = document.querySelector('.image-counter');

let currentIndex = 0;

// Function for displaying the current image
function showImage(index: number): void {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });

    // Updating the number of the current image
    if (imageCounter) {
        imageCounter.textContent = `Image ${index + 1} of ${images.length}`;
    }
}

// The handler of the "Forward" button
if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
}
// The handler of the "Back" button
if (prevButton) {
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
}
// Initialization: showing the first image
showImage(currentIndex);

// We get all the slider elements
var images = document.querySelectorAll('.slider-images img');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var imageCounter = document.querySelector('.image-counter');
var currentIndex = 0;
// Function for displaying the current image
function showImage(index) {
    images.forEach(function (img, i) {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
    // Updating the number of the current image
    if (imageCounter) {
        imageCounter.textContent = "Image ".concat(index + 1, " of ").concat(images.length);
    }
}
// The handler of the "Forward" button
if (nextButton) {
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
}
// The handler of the "Back" button
if (prevButton) {
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
}
// Initialization: showing the first image
showImage(currentIndex);

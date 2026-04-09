const imagesContainer = document.querySelector('.images-container');
const images = document.querySelectorAll('.images');
console.log(images);
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }   
});
}
document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    });
document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    });
showImage(currentIndex);
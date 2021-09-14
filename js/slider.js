const images = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg'
];
let imgIndex = 0;
const imageElement = document.getElementById('slider-image');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imageElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 2000)
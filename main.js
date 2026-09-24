let images = [
  './images/8f989565a26a815f2bd0599e13309008733d9c47.jpg',
  './images/63a08bcd716ef5bc3881223d931b9fdceef1c711.jpg',
  './images/2e3ad3bc8a2937e59a5cf69a413ef8bc2b2a3f12.jpg',
];

let btn0 = document.querySelector('.btn0');
let btn01 = document.querySelector('.btn01');
let zegna = document.querySelector('.zegna');

let i = 0;

let updateImage = () => {
  zegna.style.backgroundImage = `url('${images[i]}')`;
};

updateImage();

btn0.addEventListener('click', () => {
  i = (i - 1 + images.length) % images.length;
  updateImage();
});

btn01.addEventListener('click', () => {
  i = (i + 1) % images.length;
  updateImage();
});

let img = [
  './images/cdd018d0bf01e9a4c42990ce1ca97b4f094b541f.jpg',
  './images/19ac50cd0b057110348172f03d4006c27b681892.jpg',
  './images/8f989565a26a815f2bd0599e13309008733d9c47.jpg'
];

let tir1 = document.querySelector('.tir1');
let tir2 = document.querySelector('.tir2');
let img_top_0 = document.querySelector('.img_top_0');

let p = 0;

img_top_0.style.backgroundImage = `url('${img[p]}')`;

tir1.addEventListener('click', () => {
  p = (p - 1 + img.length) % img.length;
  img_top_0.style.backgroundImage = `url('${img[p]}')`;
});

tir2.addEventListener('click', () => {
  p = (p + 1) % img.length;
  img_top_0.style.backgroundImage = `url('${img[p]}')`;
});
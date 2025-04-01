
document.addEventListener('DOMContentLoaded', () => {
const elementoPreloader = document.querySelector('.preloader');
const elementoLoader = document.querySelector('.loader');

setTimeout(() => {
    elementoPreloader.style.display = 'none';
    elementoLoader.style.display = 'none';
}, 3000);


});
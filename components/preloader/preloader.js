setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.remove(), 500); // espera a animação terminar
    }
}, 1000);

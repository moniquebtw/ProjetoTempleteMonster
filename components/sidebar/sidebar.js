    function abrirSidebar() {
    const barIcon = document.getElementById('navbar_icon');
    const sidebar = document.querySelector('.sidebar');
    const closeIcon = sidebar ? sidebar.querySelector('.close_icon') : null;
    const overlay = document.querySelector('.transicao-azul');

 
    if (barIcon && sidebar && closeIcon && overlay) {
        barIcon.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });

        closeIcon.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
}
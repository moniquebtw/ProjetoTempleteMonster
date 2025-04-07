
const shortcutImagens = ['shortcut_blog-1.jpg', 'shortcut_blog-2.jpg', 'shortcut_blog-3.jpg', 'shortcut_blog-4.jpg'];
const shortcutTitulos = ['Faucibus interdum cras imperdiet fames. Ullamcorper.', 'Faucibus interdum cras imperdiet fames. Ullamcorper.', 'Faucibus interdum cras imperdiet fames. Ullamcorper.', 'Faucibus interdum cras imperdiet fames. Ullamcorper.'];


function criandoShortcutLinks() {
const criandoUmShortcut = document.querySelector('.shortcut-links')

for (let i = 0; i < 4; i++) {
    const novoShortcut = document.createElement('div');
    novoShortcut.className = ('novoShortcut');
    novoShortcut.innerHTML = `
        <div class="imagem-e-titulo">
            <img class="shortcut-image" src="/assets/${shortcutImagens[i]}" alt="${shortcutImagens[i]}">
            <h4>${shortcutTitulos[i]}</h4>
            <div class="d-flex align-items-center justify-content-end">
            <span>${dataBlog[i]}</span> <span>${tipoBlog[i]}</span>
        </div>
        </div>
        
        
    `;

    criandoUmShortcut.appendChild(novoShortcut);
}

}


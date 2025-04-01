
const imagemBlog = ['about_blog-1.jpg', 'about_blog_2.jpg', 'about_blog-3.jpg', 'blog-4.jpg'];
const tituloBlog = ['Porttitor pharetra, consectetur viverra est nisl a, vulputate id.', 'Diam amet non placerat risus magna non volutpat.', 'Volutpat volutpat turpis risus nunc in nisl habitasse leo. Duis.', 'Porttitor pharetra, consectetur viverra est nisl a, vulputate id.'];
const dataBlog = ['13 Sept, 2021', '13 Sept, 2021', '13 Sept, 2021', '13 Sept, 2021'];
const tipoBlog = ['Technology', 'Technology', 'Technology', 'Technology'];
const criandoUmBlog = document.querySelector('.card_blog')

const shortcutImagens = ['shortcut_blog-1.jpg', 'shortcut_blog-2.jpg', 'shortcut_blog-3.jpg', 'shortcut_blog-4.jpg'];
const shortcutTitulos = ['Faucibus interdum cras imperdiet fames. Ullamcorper.', 'Faucibus interdum cras imperdiet fames. Ullamcorper.', 'Faucibus interdum cras imperdiet fames. Ullamcorper.', 'Faucibus interdum cras imperdiet fames. Ullamcorper.'];
const criandoUmShortcut = document.querySelector('.card_blog_dois')

for (let i = 0; i < 4; i++) {
    const novoBlog = document.createElement('div');
    novoBlog.className = ('novoBlog');
    novoBlog.innerHTML = `
        <img class="novoBlog" src="/assets/${imagemBlog[i]}" alt="${imagemBlog[i]}">
        <h4>${tituloBlog[i]}</h4>
        <div class="d-flex align-items-center justify-content-between">
        <span>${dataBlog[i]}</span> <span>${tipoBlog[i]}</span>
        </div>

    `;

    criandoUmBlog.appendChild(novoBlog);
}

for (let i = 0; i < 4; i++) {
    const novoShortcut = document.createElement('div');
    novoShortcut.className = ('novoShortcut');
    novoShortcut.innerHTML = `
        <div class="imagem-e-titulo">
            <img class="shortcut-image" src="/assets/${shortcutImagens[i]}" alt="${shortcutImagens[i]}">
            <h4>${shortcutTitulos[i]}</h4>
        </div>
        <div class="d-flex align-items-center justify-content-end">
            <span>${dataBlog[i]}</span> <span>${tipoBlog[i]}</span>
        </div>
    `;

    criandoUmShortcut.appendChild(novoShortcut);
}



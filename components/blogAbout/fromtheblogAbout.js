const imagemBlog = ['about_blog-1.jpg', 'about_blog_2.jpg', 'about_blog-3.jpg'];
const tituloBlog = [
    'Porttitor pharetra, consectetur viverra est nisl a, vulputate id.',
    'Diam amet non placerat risus magna non volutpat.',
    'Volutpat volutpat turpis risus nunc in nisl habitasse leo. Duis.'
];
const dataBlog = ['13 Sept, 2021', '13 Sept, 2021', '13 Sept, 2021'];
const tipoBlog = ['Technology', 'Technology', 'Technology'];

function criandoCardDosBlogsAbout() {
    const criandoUmBlog = document.querySelector('.card_blog');

    for (let i = 0; i < 3; i++) {
        const novoBlog = document.createElement('div');
        novoBlog.className = 'novoBlog';

        novoBlog.innerHTML = `
            <img class="novoBlog" src="/assets/${imagemBlog[i]}" alt="${imagemBlog[i]}">
            <h4>${tituloBlog[i]}</h4>
            <div class="d-flex align-items-center justify-content-between">
                <span>${dataBlog[i]}</span> <span>${tipoBlog[i]}</span>
            </div>
        `;

        criandoUmBlog.appendChild(novoBlog);
    }
}

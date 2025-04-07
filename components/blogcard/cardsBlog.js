const imagemBlog = ['about_blog-1.jpg', 'about_blog_2.jpg', 'about_blog-3.jpg', 'blog-4.jpg'];
const tituloBlog = ['Porttitor pharetra, consectetur viverra est nisl a, vulputate id.', 'Diam amet non placerat risus magna non volutpat.', 'Volutpat volutpat turpis risus nunc in nisl habitasse leo. Duis.', 'Porttitor pharetra, consectetur viverra est nisl a, vulputate id.'];
const dataBlog = ['13 Sept, 2021', '13 Sept, 2021', '13 Sept, 2021', '13 Sept, 2021'];
const tipoBlog = ['Technology', 'Technology', 'Technology', 'Technology'];


function criandoCardDosBlogsPaginaBlog () {
const criandoUmBlog = document.querySelector('.card-blog-pagina-blog')

for (let i = 0; i < 4; i++) {
    const novoBlog = document.createElement('div');
    novoBlog.className = ('novo-blog-pagina-blog');
    novoBlog.innerHTML = `
        <img class="novoBlog" src="/assets/${imagemBlog[i]}" alt="${imagemBlog[i]}">
        <h4>${tituloBlog[i]}</h4>
        <div class=texto_do_blog>
        <span>${dataBlog[i]}</span> <span>${tipoBlog[i]}</span>
        </div>

    `;

    criandoUmBlog.appendChild(novoBlog);
}

}


const nossoTrabalho = ['blog_1.jpg', 'blog_2.jpg', 'blog_3.jpg'];


function seeOurWork() {
const conhecaNossoTrabalho = document.getElementById('see_our_work')

for(let i = 0; i < 3; i++) {
    const novoItem = document.createElement('div');
    novoItem.className = ('novoItem');
    novoItem.innerHTML = `

    <img src="/assets/${nossoTrabalho[i]}" alt="${nossoTrabalho[i]}">
    `;

    conhecaNossoTrabalho.appendChild(novoItem);
}

}
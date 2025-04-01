const iconesServices = ['mobile.jpg', 'website_designing.jpg', 'graphic.jpg', 'digital_marketing.jpg']
const titulosDosIconesServices = ['Mobile App Designing', 'Website Designing', 'Graphic Designing', 'Digital Marketing']
const textoDosIconesServices = ['Justo, amet nisl velit quam. Turpis nulla morbi vestibulum morbi cum et.', 'Eu aliquam libero vehicula posuere. Orci viverra id pharetra adipiscing. Convallis.', 'Aliquam ut sapien viverra blandit nisi. Nam fames suscipit erat sed id. Risus.', 'Pulvinar amet ac potenti quam feugiat praesent maecenas. Platea id egestas.']
const companhias = ['company-1.jpg', 'company-2.jpg', 'company-3.jpg', 'company-4.jpg', 'company-5.jpg', 'company-6.jpg', 'company-7.jpg', 'company-8.jpg', 'company-9.jpg', 'company-10.jpg', 'company-11.jpg']
const nossoTrabalho = ['blog_1.jpg', 'blog_2.jpg', 'blog_3.jpg'];

const variosIconesServices = document.querySelector('.card')
const variasCompanhias = document.querySelector('.empresas_lista')
const conhecaNossoTrabalho = document.getElementById('see_our_work')
const estrelas = document.getElementById('estrelas')


for (let i = 0; i < 4; i++) {
    const novoCard = document.createElement('div');
    novoCard.className = ('novoCard');
    novoCard.innerHTML = `
        <img class="iconesServices" src="/assets/${iconesServices[i]}" alt="${titulosDosIconesServices[i]}">
        <h5>${titulosDosIconesServices[i]}</h5>
        <p>${textoDosIconesServices[i]}</p>
    `;

    variosIconesServices.appendChild(novoCard);
}

for (let i = 0; i < 11; i++) {
    const novaCompanhia = document.createElement('div');
    novaCompanhia.className = ('novaCompanhia');
    novaCompanhia.innerHTML = `
        <img src="/assets/${companhias[i]}" alt="${companhias[i]}">
    `;

    variasCompanhias.appendChild(novaCompanhia);
}

for(let i = 0; i < 3; i++) {
    const novoItem = document.createElement('div');
    novoItem.className = ('novoItem');
    novoItem.innerHTML = `

                <img src="/assets/${nossoTrabalho[i]}" alt="${nossoTrabalho[i]}">
    `;

    conhecaNossoTrabalho.appendChild(novoItem);
}

for (let i = 0; i < 5; i++) {
    const novaEstrela = document.createElement('i');
    novaEstrela.className = ('estrela');
    novaEstrela.innerHTML = `
        <i class="fa fa-star" aria-hidden="true"></i>
    `;

    estrelas.appendChild(novaEstrela);
}






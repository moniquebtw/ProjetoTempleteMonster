const iconesServices = ['mobile.jpg', 'website_designing.jpg', 'graphic.jpg', 'digital_marketing.jpg']
const titulosDosIconesServices = ['Mobile App Designing', 'Website Designing', 'Graphic Designing', 'Digital Marketing']
const textoDosIconesServices = ['Justo, amet nisl velit quam. Turpis nulla morbi vestibulum morbi cum et.', 'Eu aliquam libero vehicula posuere. Orci viverra id pharetra adipiscing. Convallis.', 'Aliquam ut sapien viverra blandit nisi. Nam fames suscipit erat sed id. Risus.', 'Pulvinar amet ac potenti quam feugiat praesent maecenas. Platea id egestas.']
const companhias = ['company-1.jpg', 'company-2.jpg', 'company-3.jpg', 'company-4.jpg', 'company-5.jpg', 'company-6.jpg', 'company-7.jpg', 'company-8.jpg', 'company-9.jpg', 'company-10.jpg', 'company-11.jpg']
const variosIconesServices = document.querySelector('.card')
const variasCompanhias = document.querySelector('.companies_list')

for (let i = 0; i < 4; i++) {
    const novoCard = document.createElement('div');
    novoCard.className = ('novoCard');
    novoCard.innerHTML = `
        <img src="/assets/${iconesServices[i]}" alt="${titulosDosIconesServices[i]}">
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


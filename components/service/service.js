const iconesServices = ['mobile.jpg', 'website_designing.jpg', 'graphic.jpg', 'digital_marketing.jpg']
const titulosDosIconesServices = ['Mobile App Designing', 'Website Designing', 'Graphic Designing', 'Digital Marketing']
const textoDosIconesServices = ['Justo, amet nisl velit quam. Turpis nulla morbi vestibulum morbi cum et.', 'Eu aliquam libero vehicula posuere. Orci viverra id pharetra adipiscing. Convallis.', 'Aliquam ut sapien viverra blandit nisi. Nam fames suscipit erat sed id. Risus.', 'Pulvinar amet ac potenti quam feugiat praesent maecenas. Platea id egestas.']
const variosIconesServices = document.querySelector('.card')


function criarCards() {
    const variosIconesServices = document.querySelector('.card');

    for (let i = 0; i < 4; i++) {
        const novoCard = document.createElement('div');
        novoCard.classList.add('novoCard');
        novoCard.innerHTML = `
        <img class="iconesServices" src="/assets/${iconesServices[i]}" alt="${titulosDosIconesServices[i]}">
        <h5>${titulosDosIconesServices[i]}</h5>
        <p>${textoDosIconesServices[i]}</p>
        `;
        variosIconesServices.appendChild(novoCard);
    }
}


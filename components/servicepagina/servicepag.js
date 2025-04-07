const iconesServices = ['mobile.jpg', 'website_designing.jpg', 'graphic.jpg', 'digital_marketing.jpg']
const titulosDosIconesServices = ['Mobile App Designing', 'Website Designing', 'Graphic Designing', 'Digital Marketing']
const textoDosIconesServices = ['Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.', 'Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.', 'Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.', 'Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.'];


function criarCardsdaPaginaServices() {
const variosIconesServices = document.querySelector('.card')

for (let i = 0; i < 4; i++) {
    const novoCard = document.createElement('div');
    novoCard.classList.add('novoCard');
    novoCard.innerHTML = `
        <img class="iconesServices" src="/assets/${iconesServices[i]}" alt="${titulosDosIconesServices[i]}">
        <h5>${titulosDosIconesServices[i]}</h5>
        <p>${textoDosIconesServices[i]}</p>
         <div class="botoes_service">
                <a href="#" class="btn">Connect Now</a>
                <a href="#" class="btn btn-outline">Our Works</a>
            </div>
            
    `;
   

    variosIconesServices.appendChild(novoCard);
}

}
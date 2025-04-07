const fotoIntegrantesTime = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg' ];
const nomesDosIntegrantes = ['Jenny Wilson', 'Floyd Miles', 'Cameron Wiliams', 'Dianne Russell', 'Leslie Alexander', 'Esther Howard'];
const subtitulo = ['Viverra ut potenti', 'Viverra ut potenti', 'Viverra ut potenti', 'Viverra ut potenti', 'Viverra ut potenti', 'Viverra ut potenti'];

function inserindoIntegrantesDoTime() {
const integrantesDoTime = document.querySelector('.team')

for (let i = 0; i < 6; i++) {
    const novoIntegrante = document.createElement('div');
    novoIntegrante.className = ('novoIntegrante');
    novoIntegrante.innerHTML = `
        <img class="novoIntegrante" src="/assets/${fotoIntegrantesTime[i]}" alt="${fotoIntegrantesTime[i]}">
        <h4>${nomesDosIntegrantes[i]}</h4>
        <p>${subtitulo[i]}</p>
    `;

    integrantesDoTime.appendChild(novoIntegrante);
}
}
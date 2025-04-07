
function exibirEstrelas() {
const estrelas = document.getElementById('estrelas')


for (let i = 0; i < 5; i++) {
    const novaEstrela = document.createElement('i');
    novaEstrela.className = ('estrela');
    novaEstrela.innerHTML = `
        <i class="fa fa-star" aria-hidden="true"></i>
    `;

    estrelas.appendChild(novaEstrela);
}
}





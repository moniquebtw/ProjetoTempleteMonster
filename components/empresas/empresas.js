const companhias = ['company-1.jpg', 'company-2.jpg', 'company-3.jpg', 'company-4.jpg', 'company-5.jpg', 'company-6.jpg', 'company-7.jpg', 'company-8.jpg', 'company-9.jpg', 'company-10.jpg', 'company-11.jpg'];

function criandoCompanhias() {
    const variasCompanhias = document.querySelector('.empresas_lista');
    if (!variasCompanhias) {
        return;
    }

    for (let i = 0; i < companhias.length; i++) {
        const novaCompanhia = document.createElement('div');
        novaCompanhia.classList.add('novaCompanhia');
        novaCompanhia.innerHTML = `
            <img src="/assets/${companhias[i]}" alt="${companhias[i]}">
        `;

        variasCompanhias.appendChild(novaCompanhia);
    }
}


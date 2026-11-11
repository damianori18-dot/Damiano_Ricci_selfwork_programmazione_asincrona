import { get_data } from './api.js';

export const create_card = async (wrapper, loader) => {
    try {
        const data = await get_data();
        data.prodotti.forEach(prodotto => {
            let col = document.createElement('div')
            col.classList.add('col-12', 'col-md-4', 'text-center', 'my-5')
            col.innerHTML = `
                <h3>${prodotto.nome}</h3>
                <p>${prodotto.categoria}</p>
                <p>${prodotto.prezzo} €</p>
            `
            wrapper.appendChild(col);
        });
        wrapper.classList.toggle('d-none');
    } finally {
        loader.classList.add('d-none');
    }
}

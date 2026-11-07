//  Creare un file .json che rappresenti un array di prodotti. 
// Ciascun prodotto dovrà avere un nome, una categoria ed un prezzo. 
// Creare delle funzioni async-await che permettano di prendere i dati contenuti nel .json
//  e mostrare delle card sulla landing page con tutti i dettagli del prodotto. Implementare le seguenti features:
// Utilizzare i moduli per le funzioni asincrone
// Aggiungere un loader che scompare dopo qualche secondo
// EXTRA:
// Fare in modo che le card dei prodotti appaiano solo dopo il click su un bottone. 


let wrapper = document.querySelector('#row');
let btn = document.querySelector('#btn');
let loader = document.querySelector('#loader');

btn.addEventListener('click', () => {
    loader.classList.remove('d-none');
    wrapper.innerHTML = '';
    const get_data = async () => {
        const response = await fetch('prodotti.json');
        const json = await response.json();
        return json;
    }

    const create_card = async () => {
        try {
            const data = await get_data();
            data.prodotti.forEach(prodotto => {
                let col = document.createElement('div')
                col.classList.add('col-12', 'col-md-4', 'text-center', 'my-5')
                col.innerHTML = `
                <h3>${prodotto.nome}</h3>
                <p>${prodotto.categoria}</p>
                <p>${prodotto.prezzo} €</p> `

                wrapper.appendChild(col);
            });
            wrapper.classList.toggle('d-none');
        }
        finally {
            loader.classList.add('d-none');
        }
    }

    create_card();


});
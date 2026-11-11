import { create_card } from './ui.js';

let wrapper = document.querySelector('#row');
let btn = document.querySelector('#btn');
let loader = document.querySelector('#loader');

btn.addEventListener('click', () => {
    loader.classList.remove('d-none');
    wrapper.innerHTML = '';
    create_card(wrapper, loader);
});

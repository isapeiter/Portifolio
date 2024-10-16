import { buscarCartoes, excluirCartao } from "../../services/buscacartao.js";

export async function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');
    sectionCartoes.innerHTML = ''; 

    const cartoes = await buscarCartoes();

    console.log(cartoes);

    cartoes.forEach((cartao, i) => {
        let divCartao = document.createElement('div');
        divCartao.className = 'card';

        let img = document.createElement('img');
        img.src = cartao.imagem; 
        img.alt = `Imagem de ${cartao.nome}`; 
        img.className = 'imagem-cartao'; 
        divCartao.appendChild(img);

        let h1 = document.createElement('h1');
        h1.textContent = cartao.nome;
        divCartao.appendChild(h1);  

        let h3 = document.createElement('h3');
        h3.textContent = cartao.valor;
        divCartao.appendChild(h3);

        let button = document.createElement('button');
        button.className = 'button_card';
        button.textContent = 'EXCLUIR';
        button.addEventListener('click', () => {
            excluirCartao(cartao.id); 
        });
        divCartao.appendChild(button);

        sectionCartoes.appendChild(divCartao);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    criarCartoes();
});

export function showForm() {
    const form = document.getElementById('cadastro-form');
    if (form) {
        form.style.display = 'flex';
    }
    
    let cartaoAdd = document.createElement('button');
    cartaoAdd.className = 'cartao';
    cartaoAdd.textContent = '+';
    cartaoAdd.addEventListener('click', () => {
        mostrarTelaCad();
    });
    sectionCartoes.appendChild(cartaoAdd);
}


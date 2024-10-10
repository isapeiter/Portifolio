import {buscarCartoes} from "./criarCartoes.js";
export function criarCartoes(cartoes) {
    let sectionCartoes = document.getElementById('cartoes');

    sectionCartoes.innerHTML = ''; 

    cartoes.forEach(cartao => {
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

        let p = document.createElement('p');
        p.textContent = 'Sobre...';
        divCartao.appendChild(p);

        sectionCartoes.appendChild(divCartao);
    });
}

document.addEventListener('DOMContentLoaded', buscarCartoes); 

function showForm() {
    const form = document.getElementById('cadastro-form');
    if (form) {
        form.style.display = 'flex';
    }
}


function addNewCard() {
    const title = document.getElementById('card-title').value.trim();

    if (!title) {
      alert('Por favor, insira um título para o cartão.');
      return;
    }

    const newCard = { nome: title, valor: 'R$ 0,00', imagem: 'https://via.placeholder.com/100x100.png?text=Novo+Cartão' }; 


    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCard)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao adicionar cartão');
        }
        return response.json();
    })
    .then(data => {
        console.log('Novo cartão adicionado:', data);
        buscarCartoes(); 
    })
    .catch(error => {
        console.error('Erro:', error);
    });

    document.getElementById('card-title').value = '';
    const form = document.getElementById('cadastro-form');
    if (form) {
        form.style.display = 'none';
    }
}


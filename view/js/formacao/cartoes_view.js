import { buscarcartoes } from "./../../../services/cartoes_services.js";
import { excluircartoes } from "./../../../services/cartoes_services.js";
import { mostraTelaCad } from "./../../../controller/formacao/telacad.js";
import { mostraTelaAtt } from "./../../../controller/formacao/telaAtt.js";

export async function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');
    sectionCartoes.innerHTML = '';


    const cartoes = await buscarcartoes();
    console.log(cartoes);

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'card';

        let h1 = document.createElement('h1');
        h1.textContent = cartoes[i].nome;

        let h3 = document.createElement('h3');
        h3.textContent = cartoes[i].valor;

        let imgTag = document.createElement('img');
        imgTag.src = cartoes[i].imagem;

        let div = document.createElement('div');

        let button = document.createElement('button');
        button.className = 'button_cards';
        button.textContent = 'EXCLUIR';
        button.addEventListener('click', () => {
            excluircartoes(cartoes[i].id); 
        });

        let buttonAtt = document.createElement('button');
        buttonAtt.className = 'button_card';
        buttonAtt.textContent = 'ATT';
        buttonAtt.addEventListener('click', () => {
            mostraTelaAtt(cartoes[i].id); 
        });

        div.appendChild(h1);
        div.appendChild(h3);
        div.appendChild(imgTag);
        div.appendChild(button);
        div.appendChild(buttonAtt);

        cartao.appendChild(div);
        sectionCartoes.appendChild(cartao);
    }

    let cartaoAdd = document.createElement('button');
    cartaoAdd.className = 'cartao_add';
    cartaoAdd.textContent = '+';
    cartaoAdd.addEventListener('click', () => {
        mostraTelaCad();
    });
    sectionCartoes.appendChild(cartaoAdd);
}

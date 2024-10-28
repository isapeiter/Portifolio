import { criarCartoes } from "./../view/js/formacao/cartoes_view.js";

export async function buscarcartoes() {
    try {
        const response = await fetch('http://localhost:3000/cartoes');
        const data = await response.json();
        const cartoes = data;
        return cartoes;
    }
    catch (e) {
        console.log(e);
    }
}

export async function excluircartoes(index) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartao: index }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function cadastrarCartao(nome, valor, link) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                imagem: link,
            }),
        });
        criarCartoes();
    }
    catch (e) {
        console.log(e);
    }
}

export async function atualizarCartao(id, nome, valor, imagem) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor,
                imagem: imagem,
                id: id,
            }),
        });
        criarCartoes();
    } catch (e) {
        console.log(e);
    }
}
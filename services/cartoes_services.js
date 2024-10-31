import { criarCartoes } from "./../view/js/formacao/cartoes_view.js";

export async function buscarcartoes() {
    try {
        const response = await fetch('https://back-end-portifolio-g2xy.vercel.app/cartoes');
        const data = await response.json();
        const cartoes = data.cartoes;
        return cartoes;
    }
    catch (e) {
        console.log(e);
    }
}

export async function excluircartoes(index) {
    try {
        const response = await fetch('https://back-end-portifolio-g2xy.vercel.app/cartoes', {
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
        const response = await fetch('https://back-end-portifolio-g2xy.vercel.app/cartoes', {
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
        const response = await fetch('https://back-end-portifolio-g2xy.vercel.app/cartoes', {
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
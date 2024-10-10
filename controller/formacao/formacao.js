
import { criarCartoes } from './criarCartoes.js';
const baseUrl = 'http://localhost:3000/cartoes';

async function buscarCartoes(){
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`Erro ao buscar cartões`);
        }
        const data = await response.json(); 
        const cartoes = data.cartoes; 
        criarCartoes(cartoes);
    } catch (error) {
        console.error('Error:', error);
    }
}


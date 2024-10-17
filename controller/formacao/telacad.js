import { cadastrarCartao } from "../../services/cartoes_services.js";

let telaCad = document.getElementById('telaCadastro');
export function escodeTelaCad(){
    telaCad.style.left = '-100vw';
}
export function mostraTelaCad(){
    telaCad.style.left = '0';
}

export function recolheDados(){
       let nome = document.getElementById('nome'); 
       let valor = document.getElementById('valor'); 
       let link = document.getElementById('link'); 

       cadastrarCartao(nome.value, valor.value, link.value);
       escodeTelaCad();

       nome.value = '';
       valor.value = '';
       link.value = '';
}
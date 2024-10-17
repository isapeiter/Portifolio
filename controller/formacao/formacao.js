import { criarCartoes } from "./../../view/js/formacao/cartoes_view.js";
import { escodeTelaCad } from "./telacad.js";
import { recolheDados } from "./telacad.js";
import { escodeTelaAtt } from "./telaAtt.js";
import { recolheDadosAtt } from "./telaAtt.js";

window.escodeTelaCad = escodeTelaCad;
window.recolheDados = recolheDados;
window.escodeTelaAtt = escodeTelaAtt;
window.recolheDadosAtt = recolheDadosAtt;

document.addEventListener("DOMContentLoaded", ()=>{
    criarCartoes();
});
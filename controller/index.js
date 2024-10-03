let footer = document.createElement('footer');
footer.style.backgroundColor = 'red';

let h1 = document.createElement('h1');
h1.textContent = 'peiterisadora@gmail.com';

footer.appendChild(h1).textContent;

 // Seleciona os botões do footer
 const footer = document.querySelector('footer');
 const buttons = document.querySelectorAll('footer button');

 // Estiliza o footer
 footer.style.display = 'flex'; // Usa flexbox
 footer.style.justifyContent = 'flex-end'; // Alinha os botões à direita
 footer.style.padding = '10px'; // Adiciona espaçamento

 // Estiliza os botões
 buttons.forEach(button => {
     button.style.fontSize = '20px'; // Aumenta o tamanho da fonte
     button.style.padding = '15px 25px'; // Aumenta o padding
     button.style.marginLeft = '10px'; // Adiciona espaçamento entre os botões
 });


    document.getElementById('btn_formacao').addEventListener('click', function() {
        ;
    });


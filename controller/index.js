let footer = document.createElement('footer');
footer.style.backgroundColor = 'red';

let h1 = document.createElement('h1');
h1.textContent = 'peiterisadora@gmail.com';

footer.appendChild(h1).textContent;
 const buttons = document.querySelectorAll('footer button');

 footer.style.display = 'flex'; 
 footer.style.justifyContent = 'flex-end'; 
 footer.style.padding = '10px'; 

 buttons.forEach(button => {
     button.style.fontSize = '20px'; 
     button.style.padding = '15px 25px'; 
     button.style.marginLeft = '10px'; 
 });


let menu = document.getElementById('menu');
export function trocarMenu(){
if(menu.style.left == '0vw'){
    menu.style.left = '-100vw';
}else{

    menu.style.left = '0vw';
}
}
document.addEventListener("DOMContentLoaded", ()=>{
    let raq2 = document.getElementById("raquete2");
    let raq1 = document.getElementById("raquete1");
    let posicao2 = 37;
    let posicao1 = 37;
    let vel = 8;
  
      document.addEventListener("keydown", () => {
          if(event.repeat) return;
  
          switch(event.key){
              case 'ArrowUp':
                  posicao2 = posicao2 - vel;
              break;
              case 'ArrowDown':
                  posicao2 = posicao2 + vel;
                  break;
              case 'w' || 'w':
                  posicao1 = posicao1 - vel;
                  break;
              case 's' || 's':
                  posicao1 = posicao1 + vel;
                  break;
          }
          validarPosicao();
          attPosition();
          });
  
          function validarPosicao(){
              raquete2.style.top = posicao2 + 'vh';
              raquete1.style.top = posicao1 + 'vh';
          }
      });
    
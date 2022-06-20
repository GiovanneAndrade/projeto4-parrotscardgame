const memoriaj = document.querySelector('.jmemoria')
const img = ['bobrossparrot.gif', 'explodyparrot.gif','fiestaparrot.gif',
 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];            

//-----------------------------função do numero de cartas---------------------------------------------//
//mostra o numero de cartas que ira aparecer na tela de acordo com o valor capturado no prompt

let nCartas
let nPartidas
let nTempo 
let nContador = 0
function inicio(){
    const nInicio = [];
    nContador = 0;
    memoriaj.innerHTML = '';
    while(true){
        nCartas = prompt('Digite o número de cartas');
        
        if(nCartas % 2 === 0 && nCartas >= 4 && nCartas <= 14){
            break;
        } else {
            alert('Digite um número par entre 4 e 14!');
        }
    }
    nPartidas = nCartas / 2;
    for(let i = 0; i < nCartas / 2; i++){
        nInicio.push(img[i]);
        nInicio.push(img[i]);
    }

    nInicio.sort(mexer);
    mexer()
    
    for(let i = 0; i < nCartas; i++){
        memoriaj.innerHTML += `<div class="card">
        <img class="frente" src="front.png" alt="frente">
        <img class="costa" src="${nInicio[i]}" alt="costa">
        </div>`;
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', flipCard));
    nTempo = setInterval(cronometragem, 1000);
}

setTimeout(inicio, 500);
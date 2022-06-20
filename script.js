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
//------------------------função virada da carta----------------------------------// 
// vira e desvira as cartas de acordo com as escolhas do usuario 

let nVirar = false
let nParado = false
let nSeguir, nTemp
function flipCard(){
    if(nParado){
        return;
    }
    if(this === nSeguir){
        return;
    }
    this.classList.add('flip');
    if(!nVirar){
        nVirar = true;
        nSeguir = this;
        return;
    }
    nTemp = this;
    nVirar = false;
    verificar();
}
//------------------função cartas aleatorias -------------------------//
function mexer(){
    
    return img[Math.floor(Math.random()*img.length)]
}
//-------------função que verifica se as cartas viradas são iguais-----//
function verificar(){
    if(nSeguir.innerHTML === nTemp.innerHTML){
        movi();
        desabilitar();
        reiniciar();
        return;
    }
    movi();
    desvirar();
}
//-----------função que desabilita o click nas cartas enquanto viradas ou iguais ------/
function desabilitar(){
    nSeguir.removeEventListener('click', flipCard);
    nTemp.removeEventListener('click', flipCard);
    resetar();
}
//---------função do tempo que desvira as cartas em quaso de não serem iguais---------//
function desvirar(){
    nParado = true;
    setTimeout(() => {
        nSeguir.classList.remove('flip');
        nTemp.classList.remove('flip');
        resetar();
    }, 1000);
}
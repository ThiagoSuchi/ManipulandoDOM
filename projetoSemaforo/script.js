const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let coresIndice = 0;

function Semaforo(event) {
    semarofoLigado[event.target.id]();
}


function proximoIndx() {
    if(coresIndice < 2) {
        coresIndice++
    } else {
        coresIndice = 0
    }
}


const trocaDeCor = () => {
    const cores = ['red', 'yellow', 'green'];
    const arrayCor = cores[coresIndice];

    semarofoLigado[arrayCor]();
    proximoIndx();
}


const semarofoLigado = {
    'red': () => img.src = './imgs/vermelho.png',
    'yellow': () => img.src = './imgs/amarelo.png',
    'green': () => img.src = './imgs/verde.png',
    'automatic': () => setInterval(trocaDeCor, 3000)
}


buttons.addEventListener('click', Semaforo);

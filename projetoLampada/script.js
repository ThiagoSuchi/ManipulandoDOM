const on = document.getElementById('on');
const off = document.getElementById('off');
const p = document.querySelector('p');
const lampd = document.getElementById('lamp');
const lampQuebrada = document.getElementById('lampQuebrada');


function lampOn() {
    lampd.src = './imgs/ligada.jpg';
    on.style.display = 'none'
    off.style.display = 'block'
}

function lampOff() {
    lampd.src = './imgs/desligada.jpg'
    off.style.display = 'none'
    on.style.display = 'block'
}

function quebrar() {
    lampQuebrada.style.display = 'block';
    lampd.style.display = 'none';
    on.innerText = 'X'
    off.innerText = 'X'
    p.innerText = 'Você quebrou a lâmpada! Por favor troque por uma nova. \n Para colocar uma lâmapada nova recarregue a página.';
}


on.addEventListener('click', lampOn);
off.addEventListener('click', lampOff);






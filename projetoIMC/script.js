const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    let valorIMC;

    if (nome !== '' && altura !== '' && peso !== '') {
        valorIMC = (peso / ((altura / 100) ** 2)) 

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
    classificar(valorIMC, nome)
}

function classificar(valorIMC, nome) {
    let classificacao = ''
    
    if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso'
    } else if (valorIMC < 25) {
        classificacao = 'peso ideal'
    } else if (valorIMC < 30) {
        classificacao = 'acima do peso'
    } else if (valorIMC < 35) {
        classificacao = 'obesidade grau I'
    } else if (valorIMC < 40) {
        classificacao = 'obesidade grau II'
    } else {
        classificacao = 'obesidade grau III'
    }
    resultado.textContent = `${nome} seu IMC é: ${valorIMC.toFixed(1)} está classificado como: ${classificacao}`
}

calcular.addEventListener('click', imc);
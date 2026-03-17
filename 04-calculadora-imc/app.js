'use strict'

//- O usuário deve informar o nome(Vou criar uma variável no final), a altura (em metros) e o peso (em kg)
// const calcularIMC = (peso, altura) => peso / (altura * altura)

function calcularIMC (peso, altura){
    let imc = peso /(altura * altura)
    return imc.toFixed(2)
}

// const imc = calcularIMC(peso, altura)

const situacaoUsuario = (imc) => {

    let resposta
    if (imc < 18.5) {
        resposta = "Abaixo do peso"
    } else if (imc > 18.5 && imc < 25) {
        resposta = "Peso normal"
    } else if (imc > 25 && imc < 30) {
        resposta = "Sobrepeso"
    } else if (imc > 30 && imc < 35) {
        resposta = "Obesidade grau I"
    } else if (imc > 35 && imc < 40) {
        resposta = "Obesidade grau II"
    } else {
        resposta = "Obesidade grau III"
    }

    return resposta
}

const selecionarCor = (situacao) => {

    let respostaCor

    if (situacao == "Abaixo do peso") {
        respostaCor = 'peso1'
    } else if (situacao == "Peso normal") {
        respostaCor = 'peso2'
    } else if (situacao == "Sobrepeso") {
        respostaCor = 'peso3'
    } else if (situacao == "Obesidade grau I") {
        respostaCor = 'peso4'
    } else if (situacao == "Obesidade grau II") {
        respostaCor = 'peso5'
    } else if (situacao == "Obesidade grau III") {
        respostaCor = 'peso6'
    }
    return respostaCor
}


function limparClasses() {
    document.getElementById('resultado')
        .classList.remove('peso1', 'peso2', 'peso3', 'peso4', 'peso5', 'peso6')
}

const handleClick = () => {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')

    const imc = calcularIMC(peso, altura)
    const statusUsuario = situacaoUsuario(imc)
    const cor = selecionarCor(statusUsuario)
    limparClasses()
    resultado.classList.add(cor)
    resultado.textContent = `Olá senhor(a): ${nome} seu imc é: ${imc}, portanto você está com: ${statusUsuario}`

}


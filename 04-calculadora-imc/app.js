'use strict'

//- O usuário deve informar o nome(Vou criar uma variável no final), a altura (em metros) e o peso (em kg)
const calcularIMC = (peso, altura) => peso / (altura * altura)

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


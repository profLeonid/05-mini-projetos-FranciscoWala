'use strict'

function calcularDesconto() {
    const precoOriginal = document.getElementById('precoOriginal')
    const desconto = document.getElementById('desconto')

    if(desconto.value == 5){

        let resultado2 = (desconto.value * precoOriginal.value) / 100
        let valorDescontado = resultado2 - precoOriginal.value


        resultado.textContent = `O valor com desconto foi: ${resultado2} e o valor economizado foi:  ${valorDescontado}`
        resultado.classList.add('desconto5')
    }

}
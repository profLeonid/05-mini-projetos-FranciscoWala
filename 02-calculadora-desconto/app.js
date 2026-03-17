// 'use strict'

// function calcularDesconto() {
//     const precoOriginal = document.getElementById('precoOriginal')
//     const desconto = document.getElementById('desconto')

//     if(desconto.value == 5){

//         let resultado2 = (desconto.value * precoOriginal.value) / 100
//         let valorDescontado = resultado2 - precoOriginal.value

//         resultado.textContent = `O valor com desconto foi: ${resultado2} e o valor economizado foi:  ${valorDescontado}`
//         resultado.classList.add('desconto5')
//     }

// }
'use strict'

const calcularValorEconomizado = (preco, desconto) => preco * desconto / 100

const calcularPrecoFinal = (preco, valorDescontado) => preco - valorDescontado

function selecionarCor (desconto){
    if(desconto <= 5){
        return 'desconto1'
    }else if(desconto <= 10){
        return 'desconto2'
    }else{
        return 'desconto3'
    }
}

function limparClasses (){
    document.getElementById('resultado')
            .classList.remove('desconto1','desconto2','desconto3')
}

function handleClick (){
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')


    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularPrecoFinal(preco, valorEconomizado)
    const cor = selecionarCor(desconto)

    resultado.textContent = `${valorEconomizado} - ${precoFinal}`
    limparClasses()
    resultado.classList.add(cor)
}
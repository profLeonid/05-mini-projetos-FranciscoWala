'use strict'

function removerClasse (){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('apto', 'nao-apto')
}

function avaliar() {
    const tempo = document.getElementById('tempo')
    const resultado = document.getElementById('resultado')

    removerClasse()
    if(tempo.value < 14 ) {
        resultado.textContent = 'APTO'
        resultado.classList.add('apto')
    }else{
        resultado.textContent = 'NÃO APTO'
        resultado.classList.add('nao-apto')
    }

}
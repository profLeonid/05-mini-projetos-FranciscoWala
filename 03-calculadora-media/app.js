'use strict'

const calcularMedia = (nota1, nota2, nota3) =>(nota1 + nota2 + nota3) /3

const media = calcularMedia(nota1,nota2,nota3)

const situacaoAluno = (media) => {

    if(media > 7){
        return 'Aprovado'
    }else if(media >=5 && media <=6.9){
        return 'Recuperação'
    }else{
        return 'Reprovado'
    }
}

const corEscolhida = situacaoAluno(media)

const selecionarCor = (corEscolhida) => {

    if(corEscolhida == 'Aprovado'){
        return 'corAprovado'
    }else if(corEscolhida == 'Recuperação'){
        return 'corRecuperacao'
    }else if(corEscolhida == 'Reprovado'){
        return 'corReprovado'
    }
}


function limparClasses (){
    document.getElementById('resultado')
            .classList.remove('corAprovado','corRecuperacao','corReprovado')
}

function handleClick() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)

    const mediaAluno = calcularMedia(nota1, nota2,nota3)
    const situacao = situacaoAluno(mediaAluno)

    const resultado = document.getElementById('resultado')
    resultado.textContent = `${situacao}`

    const cor = selecionarCor(situacao)
    limparClasses()
    resultado.classList.add(cor)
    
    
    

}
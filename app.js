'use strict'
//deixando ele mais rigoroso as regras
//declarando uma variavel
const buttonTrocarCor = document.getElementById('trocar-cor')
//criacao de funcao
function trocarCor() {
    const cor = document.getElementById('cor').value
    console.log(cor)
   document.documentElement.style.setProperty('--bg-color', cor)
}

buttonTrocarCor.addEventListener('click', trocarCor)
/* Antes de programar, vamos adicionar os comandos basicos*/
let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = [] //será usado para receber e analizar os dados recebidos

function adicionar(){
    if(isNumero(num.value) && !inLista()){
        window.alert('[ERRO] - Digite um valor entre 1 e 100')
    } else{
        window.alert('Valor Invalido ou já digitado.')
    }
}


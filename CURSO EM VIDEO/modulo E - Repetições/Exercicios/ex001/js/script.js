function clicar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('resultado')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] - Valor Invalido')
    } else{
        res.innerHTML = `Contando: </br>`
        let i = Number(ini.value) /* É ASSIM QUE SE CONVERTE EM NUMERO, TEM QUE COLOCAR EM OUTRA VARIAVEL !*/
        let f = Number(fim.value)
        let p = Number(passo.value)
        //CONTAGEM CRESCENTE
        if(p<=0){
            window.alert('impossivel contar, considerando passo 1')
            p = 1
        }
        if(i < f){
            for( let c = i ; c <= f ; c += p){/*let c, tem que criar uma variavel vazia*/
                res.innerHTML += `\u{1F449} ${c} `
            }   res.innerHTML += `\u{1F3C1}`
        }else{// CONTAGEM DECRESCENTE
            for( let c = i ; c >= f ; c -= p){/*let c, tem que criar uma variavel vazia*/
                res.innerHTML += `\u{1F449} ${c} `
            }res.innerHTML += `...fim \u{1F3C1}`
        }
    }
}

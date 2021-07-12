function clicar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('resultado')
        if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            window.alert(`[ERRO] - Espaço em Branco`)
        }else{
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            
            if(p <= 0){
                window.alert(`Passo inválido, considerando passo 1`)
                p = 1
            }
            if(i < f){
                for(let c = i; c <= f; c += p){
                    res.innerHTML += ` ${ c } `
                }
            }else{
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += ` ${ c } `
                }
            }
        }
}
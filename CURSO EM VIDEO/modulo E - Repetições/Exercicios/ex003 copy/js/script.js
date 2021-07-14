function clicar(){
    var num = window.document.getElementById('txti')
    var tab = window.document.getElementById('seltab')
        if(num.value.length == 0){
            window.alert('[ERRO] Digite um Número')
        }else{
            let n = Number(num.value)
            let c = 1
            tab.innerHTML = ''
                for(let c = 1; c <=10 ; c++){
                    let item = document.createElement('option')
                    item.text = `${n} x ${c} = ${n*c}`
                    tab.appendChild(item)
                }
        }
} 
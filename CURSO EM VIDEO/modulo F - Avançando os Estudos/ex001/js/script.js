function clicar(){
    var num = window.document.getElementById('txti')
    var tab = window.document.getElementById('seltab')
        if(num.value.length == 0 || num.value > 100){
            window.alert('[ERRO] Digite um número Válido !')
        }else{
            let item = document.createElement('option')
            item.text = `${num}`
            tab.appendChild(item)
        }
} 